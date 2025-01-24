import{S as m,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="48362167-980900dd24403cbb12294ed40",d="https://pixabay.com/api/";function h(s){const o=new URLSearchParams({key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${o}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function p(s){return s.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:i,downloads:f})=>`<li class="gallery-item">
            <a class="gallery-link" href="${r}">
                <img class="gallery-image" src="${o}" alt="${n}"/>
            </a>
                <ul class="inform">
                    <li class="inform-link">
                        <h2 class="inform-title">Likes:</h2>
                        <p class="inform-dan">${e}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Views:</h2>
                        <p class="inform-dan">${t}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Comments:</h2>
                        <p class="inform-dan">${i}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Downloads:</h2>
                        <p class="inform-dan">${f}</p>
                    </li>
                </ul>
            
    </li>`).join("")}const y=document.getElementById("search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";const g=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});y.addEventListener("submit",F);function F(s){s.preventDefault();let o=s.target.elements.query.value.trim();if(c.innerHTML=" ",!o){a.show({backgroundColor:"#EF4040",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}l.style.display="inline-block",h(o).then(r=>{r.hits.length===0&&a.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),c.insertAdjacentHTML("beforeend",p(r.hits)),g.refresh(),l.style.display="none"}).catch(r=>{console.log(r.message)}).finally(()=>s.target.reset())}
//# sourceMappingURL=index.js.map
