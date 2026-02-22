/* ============================================================
   Mojo Manor — AI Concierge Chat Widget
   Connects to /api/chat (local server or Cloudflare Worker)
   ============================================================ */

(function () {
  'use strict';

  const API_URL = '/api/chat';
  const PERSONA_NAME  = 'Mojo';
  const PERSONA_EMOJI = '🏡';

  const SUGGESTIONS = [
    'What amenities do you have?',
    'Is the hot tub available?',
    'Are pets allowed?',
    'What are your rates?',
    'How do I check in?',
    'What\'s nearby?',
  ];

  const GREETING = `Hi there! I'm Mojo, your Mojo Manor concierge. 🏡\n\nI know this home inside and out — ask me anything about amenities, rates, policies, local spots, or anything else. How can I help?`;

  let conversationHistory = [];
  let isLoading = false;

  // ── Build Widget HTML ─────────────────────────────────────
  function buildWidget() {
    // Trigger button
    const trigger = document.createElement('button');
    trigger.className = 'mojo-chat-trigger';
    trigger.setAttribute('aria-label', 'Chat with Mojo, your concierge');
    trigger.innerHTML = `
      <svg class="icon-open" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg class="icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6l12 12" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>
      </svg>
      <span class="mojo-chat-badge" id="chatBadge">1</span>
    `;

    // Panel
    const panel = document.createElement('div');
    panel.className = 'mojo-chat-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Mojo Manor concierge chat');
    panel.innerHTML = `
      <div class="chat-header">
        <div class="chat-header-avatar">${PERSONA_EMOJI}</div>
        <div class="chat-header-info">
          <div class="chat-header-name">${PERSONA_NAME} &mdash; Manor Concierge</div>
          <div class="chat-header-status">
            <span class="chat-status-dot"></span>Online &amp; ready to help
          </div>
        </div>
        <button class="chat-header-close" id="chatClose" aria-label="Close chat">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <div class="chat-messages" id="chatMessages"></div>
      <div class="chat-suggestions" id="chatSuggestions"></div>
      <div class="chat-input-area">
        <div class="chat-input-row">
          <textarea
            class="chat-input"
            id="chatInput"
            placeholder="Ask me anything about Mojo Manor…"
            rows="1"
            aria-label="Your message"
          ></textarea>
          <button class="chat-send" id="chatSend" aria-label="Send message" disabled>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="chat-input-footer">Powered by Claude AI &nbsp;·&nbsp; Mojo Manor</div>
      </div>
    `;

    document.body.appendChild(trigger);
    document.body.appendChild(panel);

    return { trigger, panel };
  }

  // ── Render a message ─────────────────────────────────────
  function appendMessage(role, text) {
    const container = document.getElementById('chatMessages');
    const isUser = role === 'user';

    const msg = document.createElement('div');
    msg.className = `chat-msg ${isUser ? 'user' : 'bot'}`;

    const avatarHtml = isUser
      ? ''
      : `<div class="chat-msg-avatar">${PERSONA_EMOJI}</div>`;

    // Convert newlines to <br> and basic markdown-ish bold
    const formatted = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');

    msg.innerHTML = `
      ${avatarHtml}
      <div class="chat-bubble">${formatted}</div>
    `;

    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
    return msg;
  }

  // ── Typing indicator ──────────────────────────────────────
  function showTyping() {
    const container = document.getElementById('chatMessages');
    const typing = document.createElement('div');
    typing.className = 'chat-msg bot';
    typing.id = 'chatTyping';
    typing.innerHTML = `
      <div class="chat-msg-avatar">${PERSONA_EMOJI}</div>
      <div class="chat-bubble chat-typing">
        <span></span><span></span><span></span>
      </div>
    `;
    container.appendChild(typing);
    container.scrollTop = container.scrollHeight;
  }

  function hideTyping() {
    const el = document.getElementById('chatTyping');
    if (el) el.remove();
  }

  // ── Send message ──────────────────────────────────────────
  async function sendMessage(text) {
    if (!text.trim() || isLoading) return;

    isLoading = true;
    hideSuggestions();

    const input    = document.getElementById('chatInput');
    const sendBtn  = document.getElementById('chatSend');
    input.value    = '';
    input.style.height = 'auto';
    sendBtn.disabled = true;

    conversationHistory.push({ role: 'user', content: text });
    appendMessage('user', text);
    showTyping();

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: conversationHistory }),
      });

      hideTyping();

      if (!res.ok) {
        const err = await res.text().catch(() => 'Unknown error');
        appendMessage('bot', `Sorry, I'm having trouble connecting right now. Please try again or email us at hello@mojomanor.com.`);
        conversationHistory.pop();
        return;
      }

      const data = await res.json();
      const reply = data.content || data.reply || data.message || '';

      conversationHistory.push({ role: 'assistant', content: reply });
      appendMessage('bot', reply);

    } catch (err) {
      hideTyping();
      appendMessage('bot', `Sorry, I couldn't reach the server. Please check your connection or email us at hello@mojomanor.com.`);
      conversationHistory.pop();
    } finally {
      isLoading = false;
      sendBtn.disabled = false;
      input.focus();
    }
  }

  // ── Suggestions ───────────────────────────────────────────
  function renderSuggestions() {
    const container = document.getElementById('chatSuggestions');
    container.innerHTML = '';
    SUGGESTIONS.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'chat-suggestion';
      btn.textContent = s;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        hideSuggestions();
        sendMessage(s);
      });
      container.appendChild(btn);
    });
  }

  function hideSuggestions() {
    const c = document.getElementById('chatSuggestions');
    if (c) c.innerHTML = '';
  }

  // ── Init ──────────────────────────────────────────────────
  function init() {
    const { trigger, panel } = buildWidget();

    let isOpen = false;

    function openChat() {
      isOpen = true;
      panel.classList.add('open');
      trigger.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
      // Hide unread badge
      const badge = document.getElementById('chatBadge');
      badge.classList.remove('show');
      // Focus input
      setTimeout(() => document.getElementById('chatInput')?.focus(), 250);
    }

    function closeChat() {
      isOpen = false;
      panel.classList.remove('open');
      trigger.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    }

    trigger.addEventListener('click', () => isOpen ? closeChat() : openChat());
    document.getElementById('chatClose').addEventListener('click', closeChat);

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (isOpen && !panel.contains(e.target) && !trigger.contains(e.target)) {
        closeChat();
      }
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) closeChat();
    });

    // Input auto-resize + enable send
    const input   = document.getElementById('chatInput');
    const sendBtn = document.getElementById('chatSend');

    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 100) + 'px';
      sendBtn.disabled = !input.value.trim() || isLoading;
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage(input.value);
      }
    });

    sendBtn.addEventListener('click', () => sendMessage(input.value));

    // Initial greeting + suggestions
    appendMessage('bot', GREETING);
    renderSuggestions();

    // Show badge after delay (draws attention)
    setTimeout(() => {
      const badge = document.getElementById('chatBadge');
      if (!isOpen) badge.classList.add('show');
    }, 3500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
