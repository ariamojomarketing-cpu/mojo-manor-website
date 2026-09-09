/* Exercise a release against isolated real templates; never modifies the site. */
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const assert = require('node:assert/strict');
const {execFileSync, spawnSync} = require('node:child_process');
const root = path.resolve(__dirname, '..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'mojo-journal-test-'));
function write(name, bytes) { const p = path.join(tmp, name); fs.mkdirSync(path.dirname(p), {recursive: true}); fs.writeFileSync(p, bytes); }
try {
  const data = JSON.parse(fs.readFileSync(path.join(root, 'content/journal.json')));
  for (const name of ['scripts/build-journal.cjs', 'blog/index.html', 'index.html', 'sitemap.xml']) write(name, fs.readFileSync(path.join(root, name)));
  for (const a of data.articles) {
    write('blog/' + a.slug + '.html', fs.readFileSync(path.join(root, 'blog', a.slug + '.html')));
    write(a.image.replace(/^\//, ''), 'fixture image; build only checks existence');
  }
  const previous = data.articles[0];
  const newArticle = {...previous, slug: 'release-test-only', url: '/blog/release-test-only',
    title: 'A new complete article title', cardTitle: 'New guide & useful plans', published: '2026-09-10',
    modified: '2026-09-10', homepageFeatured: true, homepageTitle: 'Your next good day'};
  data.articles.find(a => a.homepageFeatured).homepageFeatured = false;
  // Appending the new entry must still put it first in the public index.
  data.articles.push(newArticle);
  write('blog/release-test-only.html', fs.readFileSync(path.join(root, 'blog', previous.slug + '.html')));
  write('content/journal.json', JSON.stringify(data));
  const run = () => execFileSync(process.execPath, ['scripts/build-journal.cjs'], {cwd: tmp, stdio: 'pipe'});
  run();
  const index = fs.readFileSync(path.join(tmp, 'blog/index.html'), 'utf8');
  assert.match(index, /JOURNAL_CARDS_START -->\s*<a href="\/blog\/release-test-only"/);
  assert.match(index, /New guide &amp; useful plans<\/h2>/);
  assert.match(index, /"headline":"A new complete article title"/);
  assert.match(fs.readFileSync(path.join(tmp, 'index.html'), 'utf8'), /Your next good day/);
  assert.match(fs.readFileSync(path.join(tmp, 'feed.xml'), 'utf8'), /release-test-only/);
  assert.match(fs.readFileSync(path.join(tmp, 'sitemap.xml'), 'utf8'), /release-test-only<\/loc><lastmod>2026-09-10/);
  assert.equal(data.articles[0].published, previous.published);
  run(); assert.equal(fs.readFileSync(path.join(tmp, 'blog/index.html'), 'utf8'), index, 'Rebuilding should be stable');
  // A fourth feature must fail before any generated page is overwritten.
  data.articles.find(a => !a.homepageFeatured).homepageFeatured = true;
  write('content/journal.json', JSON.stringify(data));
  const failed = spawnSync(process.execPath, ['scripts/build-journal.cjs'], {cwd: tmp, encoding: 'utf8'});
  assert.notEqual(failed.status, 0); assert.match(failed.stderr, /at most three/);
  assert.equal(fs.readFileSync(path.join(tmp, 'blog/index.html'), 'utf8'), index);
  console.log('Journal release passed: newest-first, escaped card title, full schema title, homepage/RSS/sitemap integration, stable rebuild, fourth-feature hold.');
} finally { fs.rmSync(tmp, {recursive: true, force: true}); }
