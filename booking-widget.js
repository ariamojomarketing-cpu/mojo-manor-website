(()=>{'use strict';const root=document.querySelector('#lodgify-search-bar');let lastHeight=0,ready=false;
function update(){const mounted=!!root.querySelector('button');if(mounted&&!ready){ready=true;parent.postMessage({type:'manor-booking-ready'},location.origin)}let height=Math.max(150,Math.ceil(root.getBoundingClientRect().bottom+16));const popovers=[...document.querySelectorAll('[role="dialog"],[data-radix-popper-content-wrapper]')].filter(e=>e.getBoundingClientRect().height>0);if(popovers.length)height=Math.max(height,innerWidth<600?560:520);if(height!==lastHeight){lastHeight=height;parent.postMessage({type:'manor-booking-height',height},location.origin)}}
new MutationObserver(update).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['data-state','style']});new ResizeObserver(update).observe(root);update();
window.addEventListener('unhandledrejection',()=>parent.postMessage({type:'manor-booking-unavailable'},location.origin));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!document.querySelector('[role="dialog"]'))parent.postMessage({type:'manor-booking-close'},location.origin)});
})();
