(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),l=n(6),a=n.n(l),s=(n(12),n(4)),o=n(7),r=n(0),d=function(e){var t=e.checkBoxId,n=e.listItemText,c=!!e.isChecked||null;return"display"===e.type?Object(r.jsxs)("div",{id:"",className:"listItem",children:[Object(r.jsx)("input",{type:"checkbox",id:t,checked:!!c||null,onChange:e.changeTaskType}),Object(r.jsx)("label",{htmlFor:t}),Object(r.jsx)("div",{className:"listItemText",onClick:function(e){return e.target.parentElement.children[0].click()},children:n}),Object(r.jsx)("button",{className:"dltTask",onClick:function(){return e.dltTask(t)}})]},t):Object(r.jsxs)("div",{id:"",className:"listItem",children:[Object(r.jsx)("input",{type:"checkbox",name:"",id:t,disabled:!0}),Object(r.jsx)("label",{htmlFor:t}),Object(r.jsx)("div",{className:"listItemText",children:Object(r.jsx)("input",{type:"text",placeholder:n,onKeyUp:function(n){return e.handleNewData(n,t)},onBlur:function(n){return e.handleNewData(n,t)}})})]},t)},u=JSON.parse(localStorage.getItem("taskData"))||[],m=function(e){var t=Object(c.useState)(u),n=Object(o.a)(t,2),i=n[0],l=n[1],a=function(){for(var e="";i.map((function(e){return e.id})).includes(e)||""===e;)for(var t=0;t<5;t++)e+="abcdefghijklmnopqrstuvwxyz"[Math.floor(26*Math.random())];return e},m=function(e){"LI"===document.querySelector("#"+e).parentElement.parentElement.nodeName&&l(i.filter((function(t){return t.id!==e})))},v=function(e,t){if("keyup"===(null===e||void 0===e?void 0:e.type)&&"Enter"===(null===e||void 0===e?void 0:e.key)||"blur"===(null===e||void 0===e?void 0:e.type)){if(e.preventDefault(),""===e.target.value)return;l([].concat(Object(s.a)(i),[{id:a(),content:e.target.value,state:!1}])),e.target.value=""}},h=function(e){var t=e.target.id,n=e.target.checked;i.find((function(e){return e.id===t})).state=n,l(Object(s.a)(i))};Object(c.useEffect)((function(){localStorage.setItem("taskData",JSON.stringify(i))}));var p=function(e){switch(e){case"active":document.querySelectorAll("#root > div > div.TODOList > div > div > button").forEach((function(e){e.classList.contains("activeBtn")&&e.classList.remove("activeBtn")})),document.querySelector("#root > div > div.TODOList > div > div > button:nth-child(2)").classList.add("activeBtn"),document.querySelectorAll("#root > div > div.TODOList > ul li >div> input").forEach((function(e){e.parentElement.parentElement.style.display="block",e.checked&&(e.parentElement.parentElement.style.display="none")}));break;case"completed":document.querySelectorAll("#root > div > div.TODOList > div > div > button").forEach((function(e){e.classList.contains("activeBtn")&&e.classList.remove("activeBtn")})),document.querySelector("#root > div > div.TODOList > div > div > button:nth-child(3)").classList.add("activeBtn"),document.querySelectorAll("#root > div > div.TODOList > ul li >div> input").forEach((function(e){e.parentElement.parentElement.style.display="block",e.checked||(e.parentElement.parentElement.style.display="none")}));break;case"all":document.querySelectorAll("#root > div > div.TODOList > div > div > button").forEach((function(e){e.classList.contains("activeBtn")&&e.classList.remove("activeBtn")})),document.querySelector("#root > div > div.TODOList > div > div > button:nth-child(1)").classList.add("activeBtn"),document.querySelectorAll("#root > div > div.TODOList > ul li >div> input").forEach((function(e){e.parentElement.parentElement.style.display="block"}));break;default:document.querySelectorAll("#root > div > div.TODOList > ul li").style.display="block"}};return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsxs)("div",{className:"topBar",children:[Object(r.jsx)("h1",{className:"appName",children:"TODO"}),Object(r.jsx)("button",{className:"themeBtn",onClick:function(){var e=document.body.classList[0];"darkTheme"===e&&document.body.classList.replace("darkTheme","lightTheme"),"lightTheme"===e&&document.body.classList.replace("lightTheme","darkTheme")}})]}),Object(r.jsx)("div",{className:"newTODO",children:function(){var e=a();return Object(r.jsx)(d,{handleNewData:v,checkBoxId:e,isChecked:!1,listItemText:"Type new task",type:"input"})}()}),Object(r.jsxs)("div",{className:"TODOList",children:[Object(r.jsx)("ul",{children:i.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(d,{dltTask:m,changeTaskType:h,checkBoxId:e.id,isChecked:e.state,listItemText:e.content,type:"display"},e.id)},e.id)}))}),Object(r.jsxs)("div",{className:"listInfo",children:[Object(r.jsxs)("span",{className:"itemLength",children:[i.length," items left"]}),Object(r.jsxs)("div",{className:"filterItems",children:[Object(r.jsx)("button",{className:"activeBtn",onClick:function(){return p("all")},children:"All"}),Object(r.jsx)("button",{onClick:function(){return p("active")},children:"Active"}),Object(r.jsx)("button",{onClick:function(){return p("completed")},children:"Completed"})]}),Object(r.jsx)("button",{className:"clearComplete",onClick:function(){l(Object(s.a)(i.filter((function(e){return!e.state}))))},children:"Clear Complete"})]})]})]})};console.log("contact me at sukoonkumar2@gmail.com"),console.log("https://github.com/SukoonT"),a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.64cfda9b.chunk.js.map