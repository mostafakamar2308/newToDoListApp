(()=>{"use strict";var e={455:(e,t,n)=>{e.exports=n.p+"28aa6cd01b04cfae367b.png"},602:(e,t,n)=>{e.exports=n.p+"ab45eb1d42b1faaf3d12.png"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.p="",(()=>{var e=n(455),t=n(602);let o,a=window.localStorage;a.getItem("sectionObj")?(o=JSON.parse(a.getItem("sectionObj")),console.log(o)):(o={Programming:{"Not Done":{"Productive Hero":{"Make The app":{},"Publish the app":{},"Make Money":{},"Marry ?":{}},"Social Media Limiting app":{"Make The app":{},"Publish the app":{},"Make Money":{},"Marry ?":{}}},Done:{}},"Medical School":{"Not Done":{CVS:{Anatomy:{},physiology:{},Pharmacology:{}},CNS:{Anatomy:{},physiology:{},Pathology:{}}},Done:{}},Home:{"Not Done":{"clean Bedroom":{"Make the bed":{},"Clean your desk":{},"Organize Your books":{}},cook:{"get Ingredients":{},"make Fire":{}}},Done:{}},Personal:{"Not Done":{Diary:{"10/2":{},"11/2":{}},Family:{"Talk to Sister":{},"Get mother from Grandmother":{}},Training:{"Leg Day":{},"10KM Run":{}},Friends:{"Talk to Khattab":{}}},Done:{}}},a.setItem("sectionObj",JSON.stringify(o)));let c=0,r=0;document.addEventListener("click",(function(e){!e.target.closest(".add")&&document.querySelector(".options")&&(q(),C(),r=0),"modal-container"===e.target.id&&k(document.querySelector("#modal-container")),"taskWindowContainer"===e.target.id&&(E(document.querySelector("#taskWindowContainer")),i(document.querySelector("main")),document.querySelector(`#${d}`).click(),document.querySelector(".add").style.display="block"),"new-task-container"===e.target.id&&E(document.querySelector("#new-task-container")),!e.target.closest(".settings")&&document.querySelector(".mark-complete")&&E(document.querySelector(".list"))}));let d="",l="";function i(e){let t=document.createElement("section");t.classList.add("categories-list"),e.append(t),Object.keys(o).forEach((e=>{s(t,e)})),u(t),p(t,"x"),window.addEventListener("resize",p,t,"x")}function s(e,t){let n=document.createElement("div");n.textContent=`${t}`;let o=t.split(" ").join("-");n.setAttribute("id",`${o}`),m(n),e.append(n),n.addEventListener("click",y,n.path)}function u(e){let t=document.createElement("div");t.classList.add("add-section"),t.textContent="+",e.append(t),t.addEventListener("click",g)}function m(e){if(c<4){switch(c){case 0:e.classList.add("red");break;case 1:e.classList.add("orange");break;case 2:e.classList.add("yellow");break;case 3:e.classList.add("blue")}c++}else c=0,c++,e.classList.add("red")}function p(e,t){var n=e.style.overflow;if("x"==t){n&&"visible"!==n||(e.style.overflow="hidden");let t=e.clientWidth<e.scrollWidth;e.style.overflowX=1==t?"scroll":"hidden"}else if("y"==t){n&&"visible"!==n||(e.style.overflow="hidden");let t=e.clientHeight<e.scrollHeight;e.style.overflowY=1==t?"scroll":"hidden"}}function y(e){d=e.path[0].id,document.querySelector("#project-section")&&document.querySelector("#project-section").parentNode.removeChild(document.querySelector("#project-section"));let t=document.createElement("section");t.id="project-section",document.querySelector("main").append(t);let n=document.createElement("h2");n.textContent=`${e.path[0].textContent}`,t.append(n),function(e,t){let n=document.createElement("section");n.id="projects-not-done-container";let a=document.createElement("h3");o[e.path[0].textContent].hasOwnProperty("Not Done")||console.log(o),a.innerHTML="<div class='not-lol' style='display:inline-block; transform: rotate(0deg)'> &#9658; </div>Not Completed",n.append(a),n.addEventListener("click",(function(t){if(t.target.classList.contains("not-lol"))if("rotate(0deg)"==document.querySelector(".not-lol").style.transform||"translate(0px, 0px)"==document.querySelector(".not-lol").style.transform){if(gsap.to(".not-lol",{duration:.3,rotationZ:90}),0===Object.keys(o[e.path[0].textContent]["Not Done"]).length){console.log("works");let e=document.createElement("div");e.textContent="No projects Yet",document.querySelector("#projects-not-done-container").append(e)}else Object.keys(o[e.path[0].textContent]["Not Done"]).forEach((e=>{f(e,n,"Not Done")}));p(document.querySelector("main"),"y"),function(){let e=2;document.querySelectorAll(".Not-Done").forEach((t=>{e%2==0?(t.classList.add("left-notDone"),e++):(t.classList.add("right-notDone"),e++)})),gsap.from(".left-notDone",{duration:.5,opacity:0,x:-400,stagger:1,ease:"ease"}),gsap.from(".right-notDone",{duration:.5,delay:.5,x:400,opacity:0,ease:"ease",stagger:1})}()}else{gsap.to(".not-lol",{duration:.3,rotationZ:0});for(let e=0;e<document.querySelectorAll(".Not-Done").length;e++)E(document.querySelector(".Not-Done"));console.log(document.querySelector("#projects-not-done-container").lastChild.tagName),"H3"!==document.querySelector("#projects-not-done-container").lastChild.tagName&&E(document.querySelector("#projects-not-done-container").lastChild)}})),t.append(n);let c=document.createElement("section");c.id="projects-done-container";let r=document.createElement("h3");r.innerHTML="<div class='lol' style='display:inline-block; transform: rotate(0deg)'> &#9658; </div>Completed",c.append(r),o[e.path[0].textContent].hasOwnProperty("Done")||(o[e.path[0].textContent].Done={}),c.addEventListener("click",(function(t){if(t.target.classList.contains("lol"))if("rotate(0deg)"==document.querySelector(".lol").style.transform||"translate(0px, 0px)"==document.querySelector(".lol").style.transform){if(gsap.to(".lol",{duration:.3,rotationZ:90}),0===Object.keys(o[e.path[0].textContent].Done).length){let e=document.createElement("div");e.textContent="No projects Yet",document.querySelector("#projects-done-container").append(e)}else Object.keys(o[e.path[0].textContent].Done).forEach((e=>{f(e,c,"Done")}));p(document.querySelector("main"),"y"),function(){let e=2;document.querySelectorAll(".Done").forEach((t=>{e%2==0?(t.classList.add("left-Done"),e++):(t.classList.add("right-Done"),e++)})),gsap.from(".left-Done",{duration:.5,opacity:0,x:-400,stagger:1,ease:"ease"}),gsap.from(".right-Done",{duration:.5,delay:.5,x:400,opacity:0,ease:"ease",stagger:1})}()}else{gsap.to(".lol",{duration:.3,rotationZ:0});for(let e=0;e<document.querySelectorAll(".Done").length;e++)E(document.querySelector(".Done"));"H3"!==document.querySelector("#projects-done-container").lastChild.tagName&&E(document.querySelector("#projects-done-container").lastChild)}})),t.append(c)}(e,t),function(e){let t=document.createElement("div");t.textContent="Start New Project",t.classList.add("new-project"),t.addEventListener("click",h),e.append(t)}(t),p(document.querySelector("main"),"y")}function f(e,t,n){let c=document.createElement("div");c.classList.add("project"),c.classList.add(n.toString().split(" ").join("-"));let r=document.createElement("label");if(r.textContent=e,c.append(r),c.id=e.split(" ").join("-"),t.append(c)," ► Not Completed"===c.parentNode.children[0].textContent){let e=document.createElement("span");e.textContent="---",e.classList.add("settings"),e.addEventListener("click",(function(){!function(e){let t=document.createElement("span");t.classList.add("list");let n=document.createElement("span");n.textContent="Mark As Complete",n.classList.add("mark-complete"),n.addEventListener("click",(function(){var t,c;t=o[d.split("-").join(" ")]["Not Done"],c=n.parentNode.parentNode.parentNode.id.split("-").join(" "),o[d.split("-").join(" ")].Done[Object.keys(t)[Object.keys(t).indexOf(c)]]=t[c];let r=e.parentNode.textContent.indexOf("---Mark As Complete");var l;!function(e){let t=o[d.split("-").join(" ")].Done[e];for(let e=0;e<Object.keys(t).length;e++)t[Object.keys(t)[e]]={done:!0}}(e.parentNode.textContent.slice(0,r)),"rotate(90deg)"!=document.querySelector(".lol").style.transform&&"translate(0px, 0px)"!=document.querySelector(".lol").style.transform||f(n.parentNode.parentNode.parentNode.id.split("-").join(" "),document.querySelector("#projects-done-container"),"Done"),l=n.parentNode.parentNode.parentNode.id.split("-").join(" "),delete o[d.split("-").join(" ")]["Not Done"][l],E(document.querySelector(`#${n.parentNode.parentNode.parentNode.id}`)),a.setItem("sectionObj",JSON.stringify(o))})),t.append(n),e.append(t)}(e)})),c.append(e)}m(c),c.addEventListener("click",(function(t){if("LABEL"===t.target.tagName||"DIV"===t.target.tagName){l=e;let t=getComputedStyle(c).backgroundColor;!function(){let e=document.querySelector("#project-section");gsap.to(e,{duration:1,transformOrigin:"50% 50%",rotateX:"360",opacity:"0",display:"none"})}(),setTimeout((()=>{document.querySelector("main").removeChild(document.querySelector("#project-section")),document.querySelector("main").removeChild(document.querySelector(".categories-list")),k(document.querySelector(".add"))}),1e3),function(e,t){let n=document.createElement("section");n.id="taskWindowContainer";let a=document.createElement("section");var c;a.id="task-window",n.append(a),document.querySelector("main").append(n),a.style.backgroundColor=e,c=a,gsap.from(c,{duration:1,delay:1,scale:0,opacity:0});let r=document.createElement("section");r.id="tasks-container",a.append(r),function(e){Object.keys(o[d.split("-").join(" ")][e][l.split("-").join(" ")]).forEach((t=>{v(t,e)}))}(t),N(t),p(a,"y")}(t,n)}}))}function g(){document.querySelector("#modal-container").style.display="flex"}function S(){let e=document.querySelector("#newSectionName");document.querySelector(".categories-list").removeChild(document.querySelector(".categories-list").lastChild),s(document.querySelector(".categories-list"),e.value.charAt(0).toUpperCase()+e.value.slice(1)),u(document.querySelector(".categories-list"));let t={[e.value.charAt(0).toUpperCase()+e.value.slice(1)]:{Done:{},"Not Done":{}}};var n,c;n=o,c=t,Object.assign(n,c),a.setItem("sectionObj",JSON.stringify(n)),console.log(a),console.log(n),e.value="",k(document.querySelector("#modal-container")),p(document.querySelector(".categories-list","x"))}function h(){document.querySelector("h2").textContent,document.querySelector(".project-modal").style.display="flex"}function E(e){e.parentNode.removeChild(e)}function k(e){e.style.display="none"}function v(e,t){let n=document.createElement("div");n.classList.add("task"),n.id=e.split(" ").join("-"),n.addEventListener("click",(function(c){"BUTTON"!==c.target.tagName&&(j(n),function(e,t){let n=o[d.split("-").join(" ")][t][l.split("-").join(" ")][e];n.hasOwnProperty("done")&&1==n.done?n.done=!1:n.done=!0,a.setItem("sectionObj",JSON.stringify(o))}(e,t))}));let c=document.createElement("label");c.innerText=e;let r=document.createElement("span"),i=document.createElement("button");i.textContent="Work on the task",i.addEventListener("click",(function(){!function(e){let t=document.createElement("section");t.classList.add("container"),t.addEventListener("click",(function(e){"SECTION"===e.target.tagName&&(b=0,E(t))}));let n=document.createElement("div");n.id="timer";let o=document.createElement("label");o.setAttribute("for","pomodoro-setions"),o.textContent="Number Of Pomodoro Setions";let a=document.createElement("input");a.type="number",a.id="pomodoro-number",a.name="pomodoro-number",a.defaultValue=1;let c=document.createElement("button");c.id="pomodoro-start",c.innerHTML="&#9658;",c.addEventListener("click",(function(){1!=b&&(E(document.querySelector("#pomodoro-number")),function(e,t,n){b=1,""==e&&(e=1);let o,a,c,r=25*e;o=Math.floor(r/60),a=r-60*o,c=0,t.textContent=`${o.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}:${(0).toString().padStart(2,"0")}`,function(e,t,n,o,a){let c=0,r=t,d=n;var l=setInterval((function(){0==Number(c)?(c=59,0==Number(r)?(r=59,Number(d--)):r--):c--;let e=`${d.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`;o.textContent=e,"00:00:00"===e&&(clearInterval(l),o.textContent="Nice Work")}),1e3)}(0,a,o,t)}(a.value,c))})),n.append(o),n.append(a),n.append(c),t.append(n),document.body.append(t)}()})),n.append(r),n.append(c),n.append(i),document.querySelector("#tasks-container").append(n);let s=o[d.split("-").join(" ")][t][l.split("-").join(" ")][e];s.hasOwnProperty("done")&&0!=s.done&&j(n)}function N(e){let t=document.createElement("button");t.id="add-task",t.textContent="Add New Task",t.addEventListener("click",(function(){!function(e){let t=document.createElement("section");t.id="new-task-container";let n=document.createElement("section");n.id="new-task-window";let c=document.createElement("span");c.textContent="What will you do today?";let r=document.createElement("input");r.id="nameOfTask";let i=document.createElement("div");i.id="add-task-final",i.textContent="Add New Task",i.addEventListener("click",(function(){o[d.split("-").join(" ")][e][l.split("-").join(" ")][r.value]={done:!1},v(r.value,e),E(document.querySelector("#new-task-container")),E(document.querySelector("#add-task")),N(e),p(document.querySelector("#task-window"),"y"),a.setItem("sectionObj",JSON.stringify(o))})),n.append(c),n.append(r),n.append(i),t.append(n),document.body.append(t)}(e)})),document.querySelector("#task-window").append(t)}function j(e){e.children[1].classList.toggle("marked"),e.children[0].textContent.length>0?e.children[0].textContent="":e.children[0].innerHTML="&#10003;",e.children[0].classList.toggle("marked")}!function(){let n=document.createElement("header");document.body.append(n),function(t){let n=document.createElement("img");n.src=e,n.classList.add("logo"),t.append(n)}(n),function(e){let n=document.createElement("div");n.classList.add("user-profile");let o=document.createElement("img");o.src=t,n.append(o),e.append(n)}(n)}(),function(){let e=document.createElement("main");document.body.append(e),i(e),document.querySelector(".categories-list").firstChild.click(),function(e){let t=document.createElement("Section");t.className="add",e.append(t),function(e){let t=document.createElement("div");t.classList.add("add-new"),t.textContent="+",e.append(t),t.addEventListener("click",L)}(t)}(e)}(),function(){let e=document.createElement("div");e.classList.add("options");let t=document.createElement("div");t.classList.add("add-menu-section"),t.innerHTML="<span> &#9658; </span> Section",t.addEventListener("click",g),e.append(t);let n=document.createElement("div");n.innerHTML=" <span> &#9658; </span> Project ",n.classList.add("add-menu-project"),n.addEventListener("click",h),e.append(n),document.querySelector(".add").append(e)}(),function(){let e=document.createElement("section");e.id="modal-container";let t=document.createElement("div");t.id="newSection-modal";let n=document.createElement("input");n.id="newSectionName",n.name="newSectionName";let o=document.createElement("label");o.setAttribute("for","newSectionName"),o.textContent="What is the new Section in your life?";let a=document.createElement("btn");a.textContent="Start New Journey",a.id="addSectionBtn",a.addEventListener("click",S),t.append(o),t.append(n),t.append(a),e.append(t),document.body.append(e)}(),document.querySelectorAll(".add-section").forEach((e=>{e.addEventListener("click",g)})),function(){let e=document.createElement("section");e.classList.add("project-modal"),e.addEventListener("click",(function(t){t.target===this&&(e.style.display="none")}));let t=document.createElement("div"),n=document.createElement("h3");n.textContent="What is your New Project's Name?";let c=document.createElement("input");c.id="new-project-name";let r=document.createElement("div");r.textContent="Start New Project",r.addEventListener("click",(function(){document.querySelector(".not-lol").click(),f(c.value,document.querySelector("#projects-not-done-container"),"Not Done"),o[document.querySelector("h2").textContent]["Not Done"][c.value]={},a.setItem("sectionObj",JSON.stringify(o)),k(document.querySelector(".project-modal"))})),t.append(n),t.append(c),t.append(r),e.append(t),document.body.append(e)}();let b=0;function q(){gsap.to(".add-new",{duration:.8,rotateZ:0})}function C(){gsap.to(".options",{duration:1,scaleX:0,scaleY:0})}function L(){0==r?(gsap.to(".add-new",{duration:.8,rotateZ:270}),gsap.to(".add",{duration:1,backgroundColor:"#22a35e",borderRadius:"40%"}),gsap.to(".options",{duration:.5,scaleX:1}),gsap.to(".options",{duration:.5,scaleY:1}),gsap.from(".add-menu-project",{duration:.5,y:500}),gsap.from(".add-menu-section",{duration:.8,y:500}),r=1):(q(),C(),r=0)}})()})();