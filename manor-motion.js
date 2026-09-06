/* Native, finite animations. No scroll handler, animation library or hidden content. */
(()=>{'use strict';
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(preference.matches||!Element.prototype.animate||!('IntersectionObserver' in window))return;
  const active=new Set();let stopped=false;
  function play(element,frames,options){
    if(!element||stopped)return;
    const animation=element.animate(frames,options);active.add(animation);
    const release=()=>active.delete(animation);animation.addEventListener('finish',release,{once:true});animation.addEventListener('cancel',release,{once:true});
  }
  const ease='cubic-bezier(.22,.61,.36,1)';
  function ink(svg,delayStep=85){
    svg.querySelectorAll('[data-ink]').forEach((path,i)=>{const opacity=Number(getComputedStyle(path).opacity);play(path,[{strokeDasharray:'100 100',strokeDashoffset:100,opacity:opacity*.25},{strokeDasharray:'100 100',strokeDashoffset:0,opacity}],{duration:1150,delay:i*delayStep,easing:ease,fill:'backwards'})});
  }
  const signature=document.querySelector('.manor-signature');
  const once=new IntersectionObserver(entries=>{
    for(const entry of entries){
      if(!entry.isIntersecting)continue;
      const el=entry.target;once.unobserve(el);if(stopped)continue;
      if(el===signature){
        ink(el);
        play(el.querySelector('.signature-seal'),[{opacity:.35},{opacity:1}],{duration:650,delay:1100,easing:ease,fill:'backwards'});
        play(el.querySelector('.signature-seal-ring'),[{stroke:'#d4c3a2',strokeWidth:1},{stroke:'#a47b40',strokeWidth:2,offset:.5},{stroke:'#d4c3a2',strokeWidth:1}],{duration:850,delay:1600,easing:ease});
        play(document.querySelector('.site-header .mojo-rim'),[{transform:'rotate(0deg)'},{transform:'rotate(360deg)'}],{duration:1800,delay:550,easing:ease});
      }else if(el.classList.contains('location-ridgeline'))ink(el,180);
      else play(el,[{opacity:.8,transform:'translateY(14px)'},{opacity:1,transform:'translateY(0)'}],{duration:620,easing:ease});
    }
  },{threshold:.12});
  // Text and images stay fully rendered while waiting for their first appearance.
  const targets=document.querySelectorAll('.intro-grid h2,.film-feature,.section-heading>div,.image-frame,.feature-caption,.room-card,.bathroom-card,.guest-grid blockquote,.homepage-blog-card,.location-copy h2');
  targets.forEach(el=>once.observe(el));if(signature)once.observe(signature);
  const ridge=document.querySelector('.location-ridgeline');if(ridge)once.observe(ridge);
  const hero=document.querySelector('.hero-image');
  if(hero){const settle=()=>{if(!stopped)play(hero,[{transform:'scale(1.018)'},{transform:'scale(1)'}],{duration:1500,easing:ease})};
    if(hero.complete&&hero.naturalWidth)settle();else hero.addEventListener('load',settle,{once:true});}
  function stop(){stopped=true;once.disconnect();for(const animation of [...active])animation.cancel();active.clear();}
  preference.addEventListener('change',event=>{if(event.matches)stop()});
  window.addEventListener('pagehide',stop,{once:true});
})();
