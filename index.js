import{S as m,i as c}from"./assets/vendor-De63neY_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=t=>`
      <a class="gallery-item" href="${t.largeImageURL}">
        <div class="photo-card">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${t.likes}</p>
            <p><b>Views:</b> ${t.views}</p>
            <p><b>Comments:</b> ${t.comments}</p>
            <p><b>Downloads:</b> ${t.downloads}</p>
          </div>
        </div>
        </a>`,p="48302509-34d9f74736e571fd8f4b83a25",f="https://pixabay.com/api/",h=t=>{const s=new URLSearchParams({key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},u=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery");let y=new m(".gallery-item",{captionsData:"alt",captionDelay:250});const l=t=>{t?i.innerHTML="<p>Loading images, please wait...</p>":i.innerHTML=""},g=t=>{t.preventDefault();const s=t.currentTarget.elements.user_query.value.trim();if(s===""){c.error({message:"The search field cannot be empty!!"});return}l(!0),h(s).then(o=>{if(l(!1),o.total===0){c.warning({message:"Sorry, there are no images matching your search query. Please try again!"}),u.reset();return}const a=o.hits.map(e=>d(e)).join("");i.innerHTML=a,y.refresh()}).catch(o=>{console.log(o)})};u.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
