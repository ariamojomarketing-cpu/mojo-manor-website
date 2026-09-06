/* One accessible photo viewer for the homepage and full gallery. */
(()=>{'use strict';
  const dialog=document.querySelector('#gallery-dialog'),data=document.querySelector('#gallery-data');
  if(!dialog||!data)return;
  const photos=JSON.parse(data.textContent),filters=dialog.querySelector('.photo-filters'),thumbs=dialog.querySelector('.photo-thumbs');
  let selection=photos,index=0,trigger=null;
  const image=dialog.querySelector('#gallery-photo'),caption=dialog.querySelector('#gallery-caption'),count=dialog.querySelector('#gallery-count');
  function render(){const photo=selection[index];if(!photo)return;image.src=photo.src;image.alt=photo.alt;caption.textContent=photo.caption;count.textContent=`${index+1} / ${selection.length}`;thumbs.querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-current',String(i===index)));thumbs.querySelector(`[data-index="${index}"]`)?.scrollIntoView({block:'nearest',inline:'nearest'});}
  function filter(category,id){selection=category==='All'?photos:photos.filter(p=>p.category===category);if(!selection.length)selection=photos;index=Math.max(0,selection.findIndex(p=>p.id===id));filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===category)));thumbs.replaceChildren();selection.forEach((photo,i)=>{const button=document.createElement('button');button.type='button';button.dataset.index=i;button.setAttribute('aria-label',`View ${photo.caption}`);const img=document.createElement('img');img.src=photo.thumb;img.alt='';img.width=100;img.height=70;img.loading='lazy';button.append(img);button.addEventListener('click',()=>{index=i;render()});thumbs.append(button)});render();}
  for(const category of ['All',...new Set(photos.map(p=>p.category))]){const button=document.createElement('button');button.type='button';button.dataset.category=category;button.textContent=category;button.setAttribute('aria-pressed',String(category==='All'));button.addEventListener('click',()=>filter(category));filters.append(button);}
  document.querySelectorAll('[data-photo]').forEach(button=>button.addEventListener('click',()=>{trigger=button;filter(button.dataset.photoCategory||'All',button.dataset.photo);dialog.showModal();document.body.classList.add('photo-open');}));
  function move(step){index=(index+step+selection.length)%selection.length;render();}
  dialog.querySelector('[data-photo-close]').addEventListener('click',()=>dialog.close());dialog.querySelector('[data-photo-prev]').addEventListener('click',()=>move(-1));dialog.querySelector('[data-photo-next]').addEventListener('click',()=>move(1));
  dialog.addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();move(event.key==='ArrowRight'?1:-1)}
    if(event.key==='Tab'){
      const controls=[...dialog.querySelectorAll('button:not([disabled]),a[href],[tabindex="0"]')].filter(e=>e.getClientRects().length);
      const first=controls[0],last=controls.at(-1);
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
    }
  });
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{document.body.classList.remove('photo-open');trigger?.focus({preventScroll:true})});
})();
