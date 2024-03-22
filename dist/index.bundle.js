(()=>{"use strict";var e={958:(e,t,n)=>{n.d(t,{A:()=>q});var o=n(601),r=n.n(o),c=n(314),d=n.n(c),a=n(417),i=n.n(a),s=new URL(n(475),n.b),l=new URL(n(298),n.b),u=new URL(n(863),n.b),p=new URL(n(122),n.b),m=new URL(n(873),n.b),f=new URL(n(338),n.b),b=d()(r()),g=i()(s),y=i()(l),h=i()(u),v=i()(p),x=i()(m),S=i()(f);b.push([e.id,`/* Custom reset */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nform button,\nlabel,\ninput,\nselect,\nprogress,\nmeter {\n\tdisplay: block;\n\tfont-family: inherit;\n\tfont-size: 100%;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n\n* {\n\tbox-sizing: border-box;\n}\n/* End Custom reset */\n\n:root {\n  --body-background: #EEEEEE;\n  --aside-background: #DDDDDD;\n  --main-background: #FFFFFF;\n\t--button-color: #CCCCCC;\n\t--button-hover: #AAAAAA;\n\t--button-active: #949494;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: var(--body-background);\n}\n\n.container {\n  max-width: 1200px;\n  min-height: 100vh;\n  margin: 0 auto;\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\naside {\n  padding: 1rem;\n  background-color: var(--aside-background);\n}\n\nmain {\n  padding: 1rem;\n  background-color: var(--main-background);\n}\n\n.headline {\n  font-size: 2rem;\n  font-weight: bolder;\n\tmargin-bottom: 1rem;\n\n\tdisplay: flex;\n\tgap: 0.25rem;\n\talign-items: center;\n\tjustify-content: center;\n}\n\ndialog {\n\tborder: 3px solid;\n\tborder-radius: 10px;\n\tpadding: 1rem;\n\tmin-width: 20rem;\n}\n\ndialog > form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\ndialog .utility {\n\tfont-size: 1.5rem;\n\tfont-weight: bold;\n\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\ndialog label {\n\twidth: auto;\n\tfont-size: 1.25rem;\n\tmargin-bottom: 0.25rem;\n}\n\ndialog input,\ndialog textarea {\n\theight: 2rem;\n\toutline: none;\n\tborder: 1px solid gray;\n\tborder-radius: 10px;\n\tpadding: 0.25rem 0.5rem;\n\tfont-size: 1rem;\n}\n\ndialog input:focus,\ndialog textarea:focus {\n\tborder: 1px solid blue;\n}\n\ndialog button[type='submit'] {\n\twidth: auto;\n\tmargin: 0 auto;\n\tpadding: 0.25rem 0.5rem;\n\tborder: 1px solid;\n\tborder-radius: 10px;\n\tbackground-color: var(--button-color);\n\tcursor: pointer;\n\tfont-size: 1.25rem;\n}\n\ndialog button[type='submit']:hover {\n\tbackground-color: var(--button-hover);\n}\n\ndialog button[type='submit']:active {\n\tbackground-color: var(--button-active);\n}\n\ndialog textarea {\n\theight: 5rem;\n\twidth: 100%;\n}\n\ndialog select {\n\tpadding: 0.25rem 0;\n\tfont-size: 1rem;\n}\n\n.icon-button {\n\tdisplay: inline;\n\tborder: none;\n\tborder-radius: 50%;\n\twidth: 27px;\n\theight: 27px;\n\tmargin: 0;\n\tpadding: 0;\n\tcursor: pointer;\n}\n\n.icon-button:hover {\n\tborder: 1px solid gray;\n}\n\n.icon-button:active {\n\tborder: 1px solid black;\n}\n\n.headline > .icon-button {\n\tbackground: url(${g}) center/25px auto no-repeat;\n}\n\n.utility > .icon-button {\n\tbackground: url(${y}) center/25px auto no-repeat;\n}\n\n.project > .icon-button {\n\tbackground: url(${h}) center/25px auto no-repeat;\n}\n\n.projects {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\tgap: 1.5rem;\n}\n\n.project {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.25rem;\n}\n\n.project-button {\n\tborder: none;\n\tbackground-color: transparent;\n\tfont-size: 1.5rem;\n\tcursor: pointer;\n\n\tflex-grow: 1;\n}\n\n.project-button:hover {\n\tbackground-color: var(--button-hover);\n}\n\n.project-button:active {\n\tbackground-color: var(--button-active);\n}\n\n.todos {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n\tgap: 1rem;\n\talign-items: start;\n}\n\n.todo {\n\tpadding: 1rem;\n\tborder-radius: 10px;\n\tbox-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n\tfont-size: 1rem;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n}\n\n.todo-icons {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n.expand {\n\tbackground: url(${v}) center/25px auto no-repeat;\n}\n\n.delete {\n\tbackground: url(${h}) center/25px auto no-repeat;\n}\n\n.active {\n\tfont-size: 1.5rem;\n\tmargin-bottom: 1rem;\n}\n\n.checkbox {\n\tdisplay: inline;\n\twidth: auto;\n}\n\n.complete {\n\tmargin-right: auto;\n\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.2rem;\n\tjustify-content: flex-start;\n}\n\n.shrink {\n\tbackground: url(${x}) center/25px auto no-repeat;\n}\n\n.edit {\n\tbackground: url(${S}) center/25px auto no-repeat;\n}`,""]);const q=b},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(d[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&d[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},d=[],a=0;a<e.length;a++){var i=e[a],s=o.base?i[0]+o.base:i[0],l=c[s]||0,u="".concat(s," ").concat(l);c[s]=l+1;var p=n(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}d.push(u)}return d}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<c.length;d++){var a=n(c[d]);t[a].references--}for(var i=o(e,r),s=0;s<c.length;s++){var l=n(c[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=i}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},475:(e,t,n)=>{e.exports=n.p+"3be0ea4ac64cead2bf95.svg"},298:(e,t,n)=>{e.exports=n.p+"1ded1e99216871d2a3ae.svg"},863:(e,t,n)=>{e.exports=n.p+"642da2f9203fed7e99a0.svg"},338:(e,t,n)=>{e.exports=n.p+"9c1d0dcf9918d4367d56.svg"},122:(e,t,n)=>{e.exports=n.p+"730839144c126385607b.svg"},873:(e,t,n)=>{e.exports=n.p+"db993b821b0aa4bca997.svg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),o=n(825),r=n.n(o),c=n(659),d=n.n(c),a=n(56),i=n.n(a),s=n(540),l=n.n(s),u=n(113),p=n.n(u),m=n(958),f={};f.styleTagTransform=p(),f.setAttributes=i(),f.insert=d().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.A,f),m.A&&m.A.locals&&m.A.locals;const b={enableModals:function(){const e=document.querySelector("#add-project"),t=document.querySelector("#add-todo"),n=document.querySelector("#edit-todo"),o=document.querySelector("#show-add-project"),r=document.querySelector("#show-add-todo");o.addEventListener("click",(()=>{e.showModal()})),r.addEventListener("click",(()=>{t.showModal()}));const c=document.querySelector("#close-add-project"),d=document.querySelector("#close-add-todo"),a=document.querySelector("#close-edit-todo");c.addEventListener("click",(()=>{e.close()})),d.addEventListener("click",(()=>{t.close()})),a.addEventListener("click",(()=>{n.querySelector("form").reset(),document.querySelector("#todo-index").value="",n.close()}))},showProjects:function(e){const t=document.querySelector(".projects");t.textContent="",e.forEach((e=>{const n=document.createElement("div");n.classList.add("project"),n.dataset.project=e;const o=document.createElement("button");o.classList.add("project-button"),o.textContent=e;const r=document.createElement("button");r.classList.add("icon-button"),n.appendChild(o),n.appendChild(r),t.appendChild(n)}))},showTodos:function(e){const t=document.querySelector(".todos");t.textContent="","string"!=typeof e?e.forEach((e=>{const n=document.createElement("div");switch(n.classList.add("todo"),e.priority){case"high":n.style.backgroundColor="#FFB6C1",n.style.border="5px solid red";break;case"medium":n.style.backgroundColor="#FFFFE0",n.style.border="5px solid yellow";break;case"low":n.style.backgroundColor="#90EE90",n.style.border="5px solid green";break;default:n.style.backgroundColor="#90EE90"}const o=document.createElement("div");o.classList.add("todo-title"),o.textContent=e.title;const r=document.createElement("div");r.classList.add("todo-due-date"),r.textContent=`Due Date: ${e.dueDate}`;const c=document.createElement("div");c.classList.add("todo-icons"),c.dataset.todoIndex=e.todoIndex;const d=document.createElement("input");d.setAttribute("type","checkbox"),d.setAttribute("name","placeholder"),d.classList.add("checkbox"),e.complete&&(d.checked=!0);const a=document.createElement("div");a.classList.add("complete"),a.textContent="Complete:",a.appendChild(d),c.appendChild(a);const i=document.createElement("button");i.classList.add("icon-button"),i.classList.add("expand"),c.appendChild(i);const s=document.createElement("button");s.classList.add("icon-button"),s.classList.add("delete"),c.appendChild(s),n.appendChild(o),n.appendChild(r),n.appendChild(c),t.appendChild(n)})):t.textContent=e},expandTodo:function(e,t){const n=e.parentNode,o=document.createElement("div");o.classList.add("todo-priority"),o.textContent=`Priority: ${t.priority}`;const r=document.createElement("div");r.classList.add("todo-desc"),r.innerHTML=`Description:<br>${t.description}`;const c=document.createElement("div");c.classList.add("todo-notes"),c.innerHTML=`Notes:<br>${t.notes}`,n.insertBefore(o,e),n.insertBefore(r,e),n.insertBefore(c,e);const d=e.querySelector(".expand"),a=document.createElement("button");a.classList.add("icon-button","edit");const i=document.createElement("button");i.classList.add("icon-button","shrink"),e.insertBefore(a,d),e.insertBefore(i,d),e.removeChild(d)},shrinkTodo:function(e){e.querySelectorAll(".todo-priority, .todo-desc, .todo-notes").forEach((t=>{e.removeChild(t)}));const t=e.querySelector(".todo-icons");t.querySelectorAll(".edit, .shrink").forEach((e=>{t.removeChild(e)}));const n=document.createElement("button");n.classList.add("icon-button","expand");const o=e.querySelector(".delete");t.insertBefore(n,o)},showEditModal:function(e,t){document.querySelector("#todo-index").value=e,document.querySelector("#edit-todo-title").value=t.title,document.querySelector("#edit-todo-desc").value=t.description,document.querySelector("#edit-todo-date").value=t.dueDate,document.querySelector("#edit-todo-priority").value=t.priority,document.querySelector("#edit-todo-notes").value=t.notes,document.querySelector("#edit-todo").showModal()}},g=b,y={getProjects:function(){return v.slice()},createProject:function(e){return!v.includes(e)&&(v.push(e),h(),!0)},deleteProject:function(e){v.splice(v.indexOf(e),1),h()}};function h(){localStorage.setItem("projects",JSON.stringify(v))}const v=localStorage.getItem("projects")?JSON.parse(localStorage.getItem("projects")):["Default"];h();const x=y;class S{constructor(e,t,n,o,r,c){this.project=e,this.title=t,this.description=n,this.dueDate=o,this.priority=r,this.notes=c,this.complete=!1}}const q={getAllTodos:function(){return k.slice()},getTodosFromProject:function(e){const t=[];return k.forEach(((n,o)=>{if(n.project===e){const e=JSON.parse(JSON.stringify(n));e.todoIndex=o,t.push(e)}})),t},createTodo:function(e,t,n,o,r,c){k.push(new S(e,t,n,o,r,c)),E()},deleteTodo:function(e){k.splice(e,1),E()},changeCompletionStatus:function(e){!1===k[e].complete?k[e].complete=!0:k[e].complete=!1,E()},getTodo:function(e){return structuredClone(k[e])},editTodo:function(e,t,n,o,r,c){const d=k[e];d.title=t,d.description=n,d.dueDate=o,d.priority=r,d.notes=c,E()}};function E(){localStorage.setItem("todos",JSON.stringify(k))}const k=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[new S("Default","Default Todo","/","2069-12-31","low","/")];E();const w=q;function C(){const e=x.getProjects();g.showProjects(e),document.querySelectorAll(".project > .icon-button").forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.parentNode.dataset.project,n=document.querySelector(".active");t===n.textContent&&(n.textContent="",document.querySelector(".todos").textContent=""),x.deleteProject(t),w.getTodosFromProject(t).forEach((e=>{w.deleteTodo(e.todoIndex)})),C()}))})),document.querySelectorAll(".project > .project-button").forEach((e=>{e.addEventListener("click",(e=>{const t=document.querySelector(".active"),n=e.currentTarget.parentNode.dataset.project;t.textContent=n,j(n)}))}))}function j(e){if(!x.getProjects())return void g.showTodos("ERROR - NO TODOS");g.showTodos(w.getTodosFromProject(e)),document.querySelectorAll(".checkbox").forEach((e=>{e.addEventListener("click",(e=>{const t=parseInt(e.currentTarget.parentNode.parentNode.dataset.todoIndex);w.changeCompletionStatus(t)}))})),document.querySelectorAll(".delete").forEach((e=>{e.addEventListener("click",(e=>{const t=document.querySelector(".active").textContent,n=parseInt(e.currentTarget.parentNode.dataset.todoIndex);w.deleteTodo(n),j(t)}))}));const t=function(e){const n=e.currentTarget.parentNode,o=n.dataset.todoIndex,r=w.getTodo(o);g.expandTodo(n,r),n.querySelector(".shrink").addEventListener("click",(e=>{const n=e.currentTarget.parentNode.parentNode;g.shrinkTodo(n),n.querySelector(".expand").addEventListener("click",t)})),n.querySelector(".edit").addEventListener("click",(e=>{const t=parseInt(e.currentTarget.parentNode.dataset.todoIndex),n=w.getTodo(t);g.showEditModal(t,n)}))};document.querySelectorAll(".expand").forEach((e=>{e.addEventListener("click",t)}))}g.enableModals(),document.querySelector('#add-project button[type="submit"]').addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector("#get-project-title").value;x.createProject(t)?(document.querySelector("#add-project").close(),document.querySelector("#add-project > form").reset(),C()):alert("Name already exists!")})),document.querySelector('#add-todo button[type="submit"]').addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector(".active").textContent;if(!t)return document.querySelector("#add-todo").close(),void g.showTodos("You need to select a project!");const n=document.querySelector("#get-todo-title").value,o=document.querySelector("#get-todo-desc").value,r=document.querySelector("#get-todo-date").value,c=document.querySelector("#get-todo-priority").value,d=document.querySelector("#get-todo-notes").value;document.querySelector("#add-todo > form").reset(),document.querySelector("#add-todo").close(),w.createTodo(t,n,o,r,c,d),j(t)})),document.querySelector('#edit-todo button[type="submit"]').addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector(".active").textContent;if(!t)return document.querySelector("#edit-todo").close(),void g.showTodos("You need to select a project!");const n=parseInt(document.querySelector("#todo-index").value);if(isNaN(n))return document.querySelector("#edit-todo").close(),void alert("ERROR");const o=document.querySelector("#edit-todo-title").value,r=document.querySelector("#edit-todo-desc").value,c=document.querySelector("#edit-todo-date").value,d=document.querySelector("#edit-todo-priority").value,a=document.querySelector("#edit-todo-notes").value;document.querySelector("#edit-todo > form").reset(),document.querySelector("#todo-index").value="",document.querySelector("#edit-todo").close(),w.editTodo(n,o,r,c,d,a),j(t)})),C()})()})();