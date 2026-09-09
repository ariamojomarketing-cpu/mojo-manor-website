const {chromium}=require('/Users/jakephillips/.openclaw/tools/canary/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('fs'),path=require('path');
const base='http://127.0.0.1:8756', out='release/polish-20260909';
(async()=>{const b=await chromium.launch({headless:true});const reports=[];
for(const width of [320,390,768,1440]){
 const p=await b.newPage({viewport:{width,height:1000},reducedMotion:'reduce'}),errors=[];
 p.on('pageerror',e=>errors.push(e.message));
 await p.route(/google-analytics|googletagmanager|facebook.net|youtube-nocookie.com/,r=>r.abort());
 await p.goto(base+'/',{waitUntil:'networkidle'});
 for(let y=0;y<await p.evaluate(()=>document.body.scrollHeight);y+=750){await p.evaluate(y=>scrollTo(0,y),y);await p.waitForTimeout(40);}
 const metrics=await p.evaluate(()=>({height:document.body.scrollHeight,overflow:document.documentElement.scrollWidth>innerWidth,proofTop:Math.round(document.querySelector('.guest-proof').getBoundingClientRect().top+scrollY),badImages:[...document.images].filter(x=>x.getAttribute('src')&&(!x.complete||!x.naturalWidth)).map(x=>x.src),bathrooms:document.querySelectorAll('.bathroom-card').length,bedrooms:document.querySelectorAll('.room-card').length,features:document.querySelectorAll('.homepage-blog-card').length,allUpstairs:document.querySelector('#rooms').textContent.includes('All four bedrooms are upstairs.'),h1:document.querySelectorAll('h1').length,canonical:document.querySelector('link[rel=canonical]').href,overlaps:[...document.querySelectorAll('.homepage-blog-card')].some(x=>x.querySelector('.homepage-blog-photo').getBoundingClientRect().right>x.querySelector('h3').getBoundingClientRect().left+2&&innerWidth<=700)}));
 assert.equal(metrics.overflow,false);assert.deepEqual(metrics.badImages,[]);assert.equal(metrics.bathrooms,3);assert.equal(metrics.bedrooms,4);assert.equal(metrics.features,3);assert.equal(metrics.h1,1);assert(metrics.allUpstairs);assert.equal(metrics.overlaps,false);
 await p.evaluate(()=>scrollTo(0,0));
 if(width<851){await p.locator('.menu-toggle').click();assert.equal(await p.locator('#mobile-menu').isVisible(),true);await p.locator('#mobile-menu a[href="#rooms"]').click();assert.equal(await p.locator('#mobile-menu').isVisible(),false);}
 for(const id of ['photo-4','photo-40','coffee','karaoke','court','bath','hallBath','powderRoom']){
  const trigger=p.locator('[data-photo="'+id+'"]').first();await trigger.click();assert(await p.locator('#gallery-dialog').evaluate(x=>x.open));
  const expected=await p.locator('#gallery-data').evaluate((x,id)=>JSON.parse(x.textContent).find(p=>p.id===id).src,id);
  assert.equal(decodeURIComponent(new URL(await p.locator('#gallery-photo').getAttribute('src'),base).pathname),expected);
  await p.locator('#gallery-photo').evaluate(x=>x.decode());await p.keyboard.press('Escape');assert.equal(await p.locator('#gallery-dialog').evaluate(x=>x.open),false);
  assert(await trigger.evaluate(x=>x===document.activeElement));
 }
 await p.locator('.amenity-groups summary').first().click();assert(await p.locator('.amenity-groups details').first().evaluate(x=>x.open));await p.locator('.amenity-groups summary').first().click();
 await p.locator('.more-guest-stories summary').click();assert.equal(await p.locator('#reviews blockquote:visible').count(),4);await p.locator('.more-guest-stories summary').click();
 await p.locator('[data-evening="firepit"]').click();assert.match(await p.locator('#evening-disclosure').textContent(),/Digitally edited/);await p.locator('[data-evening="hotTub"]').click();
 await p.locator('.hero-cta').click();assert(await p.locator('#booking-dialog').evaluate(x=>x.open));const provider=await p.locator('#booking-widget').getAttribute('src');assert(provider);assert(await p.locator('#booking-dialog a[href*="lodgify"]').count()>0);await p.keyboard.press('Escape');
 await p.locator('.hero-film-link').click();assert(await p.locator('#film-dialog').evaluate(x=>x.open));assert.match(await p.locator('#film-dialog iframe').getAttribute('src'),/8DX7RP8Gfgk/);await p.keyboard.press('Escape');await p.locator('#film-dialog iframe').waitFor({state:'detached'});assert.equal(await p.locator('#film-dialog iframe').count(),0);
 await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:out+'/home-final-'+width+'.png',fullPage:true});
 assert.deepEqual(errors,[]);reports.push({page:'home',width,...metrics,menu_gallery_booking_film_accordions:'passed',provider_entry:provider,errors});console.log(JSON.stringify({width,height:metrics.height,proofTop:metrics.proofTop,state:'passed'}));
 await p.goto(base+'/blog/index.html',{waitUntil:'networkidle'});
 assert.equal(await p.locator('h1').innerText(),'Waynesville\nTravel Journal');assert.equal(await p.locator('.blog-card[data-topic]').count(),12);
 for(const topic of ['seasonal','outdoors','staying','town','all']){await p.locator('[data-journal-filter="'+topic+'"]').click();const visible=await p.locator('.blog-card:visible').evaluateAll(xs=>xs.map(x=>x.dataset.topic));assert(visible.length);if(topic!=='all')assert(visible.every(x=>x===topic));}
 await p.screenshot({path:out+'/blog-final-'+width+'.png',fullPage:true});assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 reports.push({page:'journal',width,filters:'all five passed',cards:12,overflow:false});await p.close();
}
// Every homepage/journal local destination must resolve to a real file or anchor.
const p=await b.newPage();const broken=[];
for(const entry of ['/','/blog/index.html']){await p.goto(base+entry);const links=await p.locator('a[href]').evaluateAll(xs=>xs.map(x=>x.getAttribute('href')));for(const href of links){const url=new URL(href,base+entry);if(url.origin!==base)continue;const pathname=decodeURIComponent(url.pathname);const candidates=[path.join(process.cwd(),pathname),path.join(process.cwd(),pathname+'.html'),path.join(process.cwd(),pathname,'index.html')];if(!candidates.some(f=>fs.existsSync(f)&&fs.statSync(f).isFile()))broken.push({entry,href});if(pathname===(entry==='/'?'/':'/blog/index.html')&&url.hash&&!await p.locator('[id="'+url.hash.slice(1)+'"]').count())broken.push({entry,href,reason:'missing anchor'});}}
assert.deepEqual(broken,[]);await b.close();fs.writeFileSync(out+'/final-qa.json',JSON.stringify({checked_at:new Date().toISOString(),scope:'Local rendering and read-only entry controls; no booking, dates, payment, subscriber or chat submission',reports,broken_links:broken},null,2));console.log('All responsive, interaction and local-link checks passed.');})();
