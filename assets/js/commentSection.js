(()=>{const e=document.getElementById("videoContainer"),t=document.getElementById("commentForm");t&&t.addEventListener("submit",(async n=>{n.preventDefault();const a=t.querySelector("textarea"),o=a.value,c=e.dataset.id;if(""===o.trim())return;const m=await fetch(`/api/videos/${c}/comment`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:o})});if(201===m.status){a.value="";const{newCommentId:e}=await m.json();((e,t)=>{const n=document.querySelector(".video__comments ul"),a=document.createElement("li");a.dataset.id=t,a.className="video__comment";const o=document.createElement("i");o.className="fas fa-comment";const c=document.createElement("span");c.innerText=` ${e}`;const m=document.createElement("span");m.innerText="❌",a.appendChild(o),a.appendChild(c),a.appendChild(m),n.prepend(a)})(o,e)}}))})();