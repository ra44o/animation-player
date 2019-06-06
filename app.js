!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist",t(t.s=8)}([function(e,n,t){var r=t(1);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(6)(r,a);r.locals&&(e.exports=r.locals)},function(e,n,t){n=e.exports=t(2)(!1);var r=t(3),a=r(t(4)),o=r(t(5));n.push([e.i,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.header {\n  width: 100%;\n  height: 40px;\n  display: inline-flex;\n  align-items: center;\n  color: #212121;\n  box-shadow: 0px 1px 5px 0px #757575;\n}\n\n.menu-button {\n  position: relative;\n  width: 16px;\n  height: 2px;\n  background-color: #757575;\n  margin: 0 0 0 20px;\n}\n\n.menu-button::before,\n.menu-button::after {\n  content: '';\n  position: absolute;\n  width: inherit;\n  height: inherit;\n  background-color: #757575;\n}\n\n.menu-button::before {\n  margin-top: -6px;\n}\n\n.menu-button::after {\n  margin-top: 6px;\n}\n\n.header-h1 {\n  font-family: sans-serif;\n  font-size: 20px;\n  margin-left: 30px;\n}\n\n.context-menu {\n  position: relative;\n  right: 30px;\n  width: 4px;\n  height: 4px;\n  background-color: #757575;\n  margin: 0 0 0 auto;\n  border-radius: 50%;\n  \n}\n\n.context-menu::before,\n.context-menu::after {\n  content: '';\n  position: absolute;\n  width: inherit;\n  height: inherit;\n  background-color: #757575;\n  border-radius: 50%;\n}\n\n.context-menu::before {\n  margin-top: -6px;\n}\n  \n.context-menu::after {\n  margin-top: 6px;\n}\n  \n.main {\n  display: flex;\n  margin-top: 20px;\n  height: calc(100vh - 60px);\n}\n\n.frames-wrapper {\n  width: 20%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n}\n\n.frames-wrapper::-webkit-scrollbar {\n  width: 5px;\n}\n\n.frames-wrapper::-webkit-scrollbar-thumb {\n  background-color: #757575;\n  outline: 1px solid slategrey;\n}\n\n.frame {\n  width: 70px;\n  height: 70px;\n  position: relative;\n  box-shadow: 0px 0px 5px 0px #757575;\n  margin: 10px auto 10px auto;\n}\n\n.active-frame {\n  box-shadow: 0px 0px 10px 0px #ffff00;\n}\n\n.frame-number {\n  top: 1px;\n  left: 1px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n}\n\n.delete-frame {\n  top: 1px;\n  right: 1px;\n  background-image: url("+a+");\n}\n\n.copy-frame {\n  right: 1px;\n  bottom: 1px;\n  background-image: url("+o+");\n}\n\n.frame-number,\n.delete-frame,\n.copy-frame {\n  z-index: 2;\n  position: absolute;\n  width: 15px;\n  height: 17px;\n  border-radius: 4px;\n  background-color: #ffffff;\n}\n\n.delete-frame:hover,\n.copy-frame:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n\n.frame-canvas {\n  position: relative;\n  z-index: 1;\n  width: 70px;\n  height: 70px;\n}\n\n.new-frame-button {\n  width: 70px;\n  margin: 10px auto 10px auto;\n}\n\n.new-frame-button:hover {\n  cursor: pointer;\n}\n\n.canvas-wrapper {\n  margin: 0 auto;\n  display: flex;\n}\n\n.main-canvas {\n  box-shadow: 0px 0px 5px 0px #757575;\n  width: 500px;\n  height: 500px;\n}\n\n.preview-wrapper {\n  position: relative;\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n}\n\n.animation {\n  width: 100%;\n  display: flex;\n}\n\n.animation-canvas {\n  width: 250px;\n  height: 250px;\n  box-shadow: 0px 0px 5px 0px #757575;\n  margin: 0 auto;\n}\n\n.range {\n  -webkit-appearance: none;\n  border-radius: 2px;\n  height: 4px;\n  border: 1px solid #D4D4D4;\n  background-color: #d4d4d4;\n  cursor: pointer;\n  margin: 20px auto;\n}\n\n.range::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 18px;\n  height: 18px;\n  background:#D4D4D4;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: 1s;\n}\n\n.tooltip {\n  width: 50px;\n  height: 30px;\n  border-radius: 8px;\n  background-color: #ffff00;\n  justify-content: center;\n  align-items: center;\n  margin: 10px auto 0 auto;\n  display: flex;\n}\n\n.full-screen-button {\n  width: 100px;\n  margin: 20px auto 0 auto;\n}\n\n.full-screen-button:hover {\n  cursor: pointer;\n}\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var a=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(o).concat([a]).join("\n")}var i;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];null!=i[0]&&r[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),n.push(i))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||n?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,n,t){e.exports=t.p+"86367f8cf58ebcdec1d9b76460abd691.webp"},function(e,n,t){e.exports=t.p+"b05e2af344b97aef18d0e45bcf6628a7.webp"},function(e,n,t){var r,a,o={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),s=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),c=null,l=0,u=[],f=t(7);function p(e,n){for(var t=0;t<e.length;t++){var r=e[t],a=o[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(g(r.parts[i],n))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(g(r.parts[i],n));o[r.id]={id:r.id,refs:1,parts:s}}}}function d(e,n){for(var t=[],r={},a=0;a<e.length;a++){var o=e[a],i=n.base?o[0]+n.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(s):t.push(r[i]={id:i,parts:[s]})}return t}function m(e,n){var t=s(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),u.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=s(e.insertAt.before,t);t.insertBefore(n,a)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=u.indexOf(e);n>=0&&u.splice(n,1)}function v(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return b(n,e.attrs),m(e,n),n}function b(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function g(e,n){var t,r,a,o;if(n.transform&&e.css){if(!(o="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=o}if(n.singleton){var i=l++;t=c||(c=v(n)),r=w.bind(null,t,i,!1),a=w.bind(null,t,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(n,e.attrs),m(e,n),n}(n),r=function(e,n,t){var r=t.css,a=t.sourceMap,o=void 0===n.convertToAbsoluteUrls&&a;(n.convertToAbsoluteUrls||o)&&(r=f(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,t,n),a=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=v(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),a=function(){h(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=d(e,n);return p(t,n),function(e){for(var r=[],a=0;a<t.length;a++){var i=t[a];(s=o[i.id]).refs--,r.push(s)}e&&p(d(e,n),n);for(a=0;a<r.length;a++){var s;if(0===(s=r[a]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var x,y=(x=[],function(e,n){return x[e]=n,x.filter(Boolean).join("\n")});function w(e,n,t,r){var a=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var a,o=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(a=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(e,n,t){"use strict";t.r(n);t(0);class r{static getFrame(e){const n=document.createElement("div");n.setAttribute("class","frame");const t=document.createElement("div");t.setAttribute("class","frame-number"),t.innerText=e;const r=document.createElement("div");r.setAttribute("class","delete-frame");const a=document.createElement("div");a.setAttribute("class","copy-frame");const o=document.createElement("canvas");return o.setAttribute("class","frame-canvas"),o.setAttribute("height","500"),o.setAttribute("width","500"),n.appendChild(t),n.appendChild(r),n.appendChild(a),n.appendChild(o),n}static getElem(e){return document.querySelector(e)}static updateFrameNumbers(){let e=1;[...r.getElem(".frames-wrapper").children].map(e=>[...e.children].filter(e=>e.classList.contains("frame-number"))).flat().forEach(n=>{n.innerText=e,e+=1})}}(class{static start(){const{body:e}=document;e.innerHTML='\n        <header class="header">\n            <div class="menu-button"></div>\n            <h1 class="header-h1">CodeJam - Animation Player</h1>\n            <div class="context-menu"></div>\n        </header>\n        <main class="main">\n            <div class="frames-wrapper">\n                <button class="new-frame-button">Add new frame</button>\n            </div>\n            <div class="canvas-wrapper">\n                <canvas class="main-canvas" height="500" width="500"></canvas>\n            </div>\n            <div class="preview-wrapper">\n                <div class="animation">\n                    <canvas class="animation-canvas" height="500" width="500"></canvas>\n                </div>\n                <input class="range" type="range" min="1" max="24" step="1" value="0">\n                <div class="tooltip">1 fps</div>\n                <button class="full-screen-button">Full screen</button>\n            </div>\n        </main>\n    ';const n=document.querySelector(".new-frame-button"),t=document.querySelector(".frames-wrapper"),a=r.getFrame(1);a.classList.add("active-frame"),t.insertBefore(a,n)}}).start();const a=r.getElem(".range"),o=r.getElem(".tooltip"),i=r.getElem(".main-canvas"),s=r.getElem(".frames-wrapper"),c=r.getElem(".full-screen-button"),l=r.getElem(".animation-canvas"),u=i.getContext("2d");function f(e,n){const t=e.getContext("2d").getImageData(0,0,500,500);n.getContext("2d").putImageData(t,0,0,0,0,500,500)}let p;function d(e){const n=[...r.getElem(".frames-wrapper").children].slice(0,-1).map(e=>[...e.children]).flat().filter(e=>"CANVAS"===e.tagName);void 0!==p&&clearInterval(p);let t=0;p=setInterval(function(){t>=n.length&&(t=0),f(n[t],l),t+=1},1e3/e)}a.addEventListener("change",e=>{o.innerText=`${e.target.value} fps`,d(e.target.value)});let m=!1;i.addEventListener("mousedown",()=>{m=!0}),i.addEventListener("mouseup",()=>{m=!1,u.beginPath();const e=r.getElem(".frames-wrapper").querySelector(".active-frame").querySelector("canvas");f(i,e),d(a.value)}),i.addEventListener("mousemove",e=>{if(m){!function(e,n){u.lineTo(e,n),u.lineWidth=10,u.stroke(),u.beginPath(),u.arc(e,n,5,0,2*Math.PI),u.fill(),u.beginPath(),u.moveTo(e,n)}(e.pageX-i.parentNode.offsetLeft,e.pageY-i.parentNode.offsetTop)}}),s.addEventListener("click",e=>{const n=e.target;if(n.classList.contains("frame")||n.classList.contains("frame-canvas")){if([...r.getElem(".frames-wrapper").children].forEach(e=>{e.classList.remove("active-frame")}),n.classList.contains("frame-canvas"))n.parentNode.classList.add("active-frame"),f(n,i);else{n.classList.add("active-frame"),f(n.querySelector("canvas"),i)}d(a.value)}else if(n.classList.contains("new-frame-button")){const e=r.getFrame(s.children.length);s.insertBefore(e,n),d(a.value)}else if(n.classList.contains("delete-frame")){if(s.children.length<3)return n.parentNode.classList.add("active-frame"),f(n.parentNode.querySelector("canvas"),i),void d(a.value);s.removeChild(n.parentNode),r.updateFrameNumbers(),d(a.value)}else if(n.classList.contains("copy-frame")){const e=n.parentNode.querySelector("canvas"),t=n.parentNode.cloneNode(!0);f(e,t.querySelector("canvas")),s.insertBefore(t,n.parentNode.nextSibling),n.parentNode.classList.remove("active-frame"),r.updateFrameNumbers(),d(a.value)}}),c.addEventListener("click",()=>{l.webkitRequestFullScreen(),l.style.backgroundColor="#ffffff"})}]);