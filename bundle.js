(()=>{"use strict";var t={286:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(933),o=n.n(r),a=n(476),i=n.n(a)()(o());i.push([t.id,".editor {\n  width: 320px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #999999;\n  height: 4.5rem;\n}\n\n.tag-edit {\n  display: inline-block;\n  border: 1px solid #333333;\n  height: 1.5rem;\n}\n.tag-edit:placeholder-shown {\n  padding-left: 10px;\n}\n\n.editor button {\n  border: none;\n  color: #ffffff;\n  height: 1.5rem;\n  padding: 7px;\n  line-height: 0.7rem;\n  cursor: pointer;\n}\n.submit {\n  background-color: #3e38ef;\n  margin-right: 10px;\n}\n.cancel {\n  background-color: #cd0000;\n}\n",""]);const s=i},415:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(933),o=n.n(r),a=n(476),i=n.n(a)()(o());i.push([t.id,".input__area {\n  width: 92%;\n  border: 1px solid #000000;\n  font-size: 24px;\n  display: flex;\n  flex-direction: row;\n}\n\n#input-area__input {\n  width: 73%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  border: none;\n}\n\n#input-area__input::placeholder {\n  color: #212529;\n  opacity: 0.4;\n}\n\n.input-area__button {\n  width: 25%;\n  background-color: #3e38ef;\n  color: #fff;\n  height: calc(2.25rem + 2px);\n  border: none;\n  cursor: pointer;\n}\n.input-area__button:hover {\n  background-color: #304153;\n}\n.input-area__button:disabled {\n  background-color: #888888;\n}\n",""]);const s=i},853:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(933),o=n.n(r),a=n(476),i=n.n(a)()(o());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),i.push([t.id,"* {\n  padding: 0;\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  box-sizing: border-box;\n}\n\nbody {\n  background: #758567;\n}\n\n.app__wrapper {\n  margin: 100px auto 40px auto;\n  max-width: 320px;\n  background: #cdcdca;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  align-items: center;\n}\n",""]);const s=i},612:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(933),o=n.n(r),a=n(476),i=n.n(a)()(o());i.push([t.id,".tags__area {\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n}\n.tag__list {\n  list-style-type: none;\n  width: 100%;\n  height: 220px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  overflow-y: auto;\n}\n.tag__list-item {\n  background-color: #fff;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 0.75rem;\n}\n.tag__list-delete-button,\n.tag__list-edit-button {\n  cursor: pointer;\n  border: none;\n  background-color: #fff;\n}\n.tag__list-delete-button {\n  color: #ff0000;\n  font-size: 32px;\n}\n.tag__list-edit-button {\n  color: #555555;\n  font-size: 20px;\n}\n.tag__list-delete-button:hover,\n.tag__list-edit-button:hover {\n  color: #7b3535;\n}\n",""]);const s=i},1:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(933),o=n.n(r),a=n(476),i=n.n(a)()(o());i.push([t.id,".warning {\n  color: #dd0000;\n  width: 320px;\n  margin-left: auto;\n  margin-right: auto;\n}\n",""]);const s=i},476:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},933:t=>{t.exports=function(t){return t[1]}},892:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(g);else{var m=o(g,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=r(t,o),l=0;l<a.length;l++){var d=n(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},311:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},60:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},192:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},760:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},865:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var r={};(()=>{n.d(r,{S:()=>A,p:()=>L});var t=n(892),e=n.n(t),o=n(760),a=n.n(o),i=n(311),s=n.n(i),c=n(192),l=n.n(c),d=n(60),u=n.n(d),p=n(865),g=n.n(p),m=n(853),f={};f.styleTagTransform=g(),f.setAttributes=l(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=n(415),b={};b.styleTagTransform=g(),b.setAttributes=l(),b.insert=s().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=u(),e()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;var y=n(612),v={};v.styleTagTransform=g(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),e()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;const _=()=>{localStorage.setItem("tags",JSON.stringify(L)),localStorage.setItem("state",JSON.stringify(A))};var x=n(286),S={};S.styleTagTransform=g(),S.setAttributes=l(),S.insert=s().bind(null,"head"),S.domAPI=a(),S.insertStyleElement=u(),e()(x.Z,S),x.Z&&x.Z.locals&&x.Z.locals;const w=()=>{A.isEditorOpen=!1,document.querySelector(".editor").remove()};var E=n(1),Z={};Z.styleTagTransform=g(),Z.setAttributes=l(),Z.insert=s().bind(null,"head"),Z.domAPI=a(),Z.insertStyleElement=u(),e()(E.Z,Z),E.Z&&E.Z.locals&&E.Z.locals;const O=t=>{const e=t.target.getAttribute("id");!t.target.classList.contains("tag__list-edit-button")||A.isReadOnly||A.isEditorOpen||(t=>{A.isEditorOpen=!0;const e=document.createElement("div");e.classList.add("editor"),e.innerHTML='<input type="text" class="tag-edit" placeholder="type new tag\'s content">\n  <div><button class="submit">submit</button><button class="cancel">cancel</button></div>\n  ',document.body.appendChild(e),document.querySelector(".submit").addEventListener("click",(()=>{L.forEach((e=>{t===e.tagId&&document.querySelector(".tag-edit").value.trim().length&&(e.content=document.querySelector(".tag-edit").value)})),I(L),w()})),document.querySelector(".cancel").addEventListener("click",(()=>{w()}))})(e),"tag__list-delete-button"===t.target.className&&A.isReadOnly&&(()=>{const t=document.createElement("div");t.classList.add("warning"),t.textContent="tag cannot be deleted, disable read-only mode","warning"!==document.body.lastChild.className&&(document.body.appendChild(t),setTimeout((()=>{t.remove()}),700))})(),"tag__list-delete-button"!==t.target.className||A.isReadOnly||(document.querySelector(".tag__list").removeEventListener("clic",O),L.forEach(((t,n)=>{t.tagId===e&&(document.querySelector(".editor")&&w(),L.splice(n,1))})),_(),I(L))},I=t=>{const e=document.querySelector(".tag__list");e.innerHTML="",t.forEach((t=>{e.innerHTML+=`<li class="tag__list-item" id="${t.tagId}">\n    <span class="tag__list-content">${t.content}</span>\n    <div class="tag__list-buttons"><button class="tag__list-edit-button material-icons" id="${t.tagId}">edit</button>\n    <button class="tag__list-delete-button" id="${t.tagId}">&times;</button></div>\n  </li>`})),document.querySelector(".tag__list").addEventListener("click",O)},T=document.querySelector(".input-area__button"),k=document.querySelector("#input-area__input"),q=()=>{document.querySelector("#input-area__input").readOnly=A.isReadOnly,document.querySelector(".input-area__button").disabled=A.isReadOnly,document.querySelector(".editor")&&w()},L=[],A={isReadOnly:!1};window.addEventListener("load",(()=>{const t=JSON.parse(localStorage.getItem("tags"));t&&t.forEach((t=>{L.push(t)})),I(L)})),localStorage.getItem("state")&&(A.isReadOnly=JSON.parse(localStorage.getItem("state")).isReadOnly,document.querySelector("#is-readonly").checked=A.isReadOnly),T.addEventListener("click",(()=>{k.value.trim().length&&(L.push({tagId:(new Date).toISOString(),content:k.value}),k.value="",I(L),_())})),window.addEventListener("unload",_),document.querySelector("#is-readonly").addEventListener("change",(t=>{A.isReadOnly=t.target.checked,q()})),q()})()})();