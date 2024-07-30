import{S as l,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="45127620-5b07992107ac4e8771e67df86",f="https://pixabay.com/api";function m(i){const o=`${f}/?key=${u}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const d=document.querySelector(".gallery");function p(i){const o=i.map(t=>g(t)).join("");d.innerHTML=o}function g({webformatURL:i,largeImageURL:o,tags:t,likes:s,views:e,comments:r,downloads:n}){return`
    <a class="gallery__item" href="${o}">
      <div class="photo-card">
        <img src="${i}" alt="${t}" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${s}</p>
          <p class="info-item"><b>Views:</b> ${e}</p>
          <p class="info-item"><b>Comments:</b> ${r}</p>
          <p class="info-item"><b>Downloads:</b> ${n}</p>
        </div>
      </div>
    </a>
  `}const h=document.querySelector("#search-form"),y=document.querySelector(".gallery"),c=document.querySelector(".loading-indicator");let b=new l(".gallery a");h.addEventListener("submit",L);function L(i){i.preventDefault();const o=i.target.elements.searchQuery.value.trim();if(o===""){a.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}y.innerHTML="",c.style.display="block",m(o).then(t=>{if(c.style.display="none",t.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(t.hits),b.refresh()}).catch(t=>{c.style.display="none",a.error({title:"Error",message:"Failed to fetch images. Please try again later!",position:"topRight"}),console.error("Error in fetching images:",t)})}
//# sourceMappingURL=commonHelpers.js.map
