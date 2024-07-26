import{S as l,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const u="45127620-5b07992107ac4e8771e67df86",f="https://pixabay.com/api";function m(i){const o=`${f}/?key=${u}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0)throw new Error("No images found");return e}).catch(e=>{throw console.error("Error fetching images:",e),e})}const d=document.querySelector(".gallery");function g(i){const o=i.map(e=>h(e)).join("");d.innerHTML=o}function h({webformatURL:i,largeImageURL:o,tags:e,likes:s,views:t,comments:r,downloads:n}){return`
    <a class="gallery__item" href="${o}">
      <div class="photo-card">
        <img src="${i}" alt="${e}" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${s}</p>
          <p class="info-item"><b>Views:</b> ${t}</p>
          <p class="info-item"><b>Comments:</b> ${r}</p>
          <p class="info-item"><b>Downloads:</b> ${n}</p>
        </div>
      </div>
    </a>
  `}const p=document.querySelector("#search-form"),y=document.querySelector(".gallery"),c=document.querySelector(".loading-indicator");let b=new l(".gallery a");p.addEventListener("submit",L);function L(i){i.preventDefault();const o=i.target.elements.searchQuery.value.trim();if(o===""){a.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}y.innerHTML="",c.style.display="block",m(o).then(e=>{if(c.style.display="none",e.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits),b.refresh()}).catch(e=>{c.style.display="none",a.error({title:"Error",message:"Failed to fetch images. Please try again later!",position:"topRight"}),console.error("Error in fetching images:",e)})}
//# sourceMappingURL=commonHelpers.js.map
