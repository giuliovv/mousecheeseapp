(this.webpackJsonpappmousecheese=this.webpackJsonpappmousecheese||[]).push([[0],{51:function(e,n,t){},53:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var r=t(3),o=t(0),c=t.n(o),a=t(10),i=t.n(a),s=(t(51),t(29)),l=t.n(s),u=t(38),d=t(32),h=t(39),f=(t(53),t(83)),p=t(86),j=t(84),b=t(85),v=t(82),w=t(37),m=t.n(w),x=t(35),g=t.n(x),O=t(36),k=t.n(O),y=t(34),C=t.n(y);function W(e){return Object(r.jsx)(b.a,Object(h.a)({elevation:6,variant:"filled"},e))}function S(e,n,t,r,o,c){return A.apply(this,arguments)}function A(){return(A=Object(d.a)(l.a.mark((function e(n,t,r,o,c,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("192.168.4.1/data/{forward:"+n+",backward:"+t+",left:"+r+",right"+o+",stop:"+c+"}");case 2:if("OK"===e.sent){e.next=7;break}a(!0),e.next=8;break;case 7:return e.abrupt("return","OK");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(){var e=c.a.useState(!1),n=Object(u.a)(e,2),t=n[0],o=n[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)(v.a,{variant:"h3",gutterBottom:!0,children:"Mouse & Cheese App"}),Object(r.jsxs)(f.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(r.jsx)(f.a,{item:!0,xs:12,children:Object(r.jsx)(p.a,{color:"primary","aria-label":"forward",component:"span",onClick:function(){return S(1,0,0,0,0,o)},children:Object(r.jsx)(C.a,{})})}),Object(r.jsxs)(f.a,{container:!0,direction:"row",justify:"center",alignItems:"center",xs:6,children:[Object(r.jsx)(f.a,{item:!0,xs:3,children:Object(r.jsx)(p.a,{color:"primary","aria-label":"forward",component:"span",onClick:function(){return S(0,0,1,0,0,o)},children:Object(r.jsx)(g.a,{})})}),Object(r.jsx)(f.a,{item:!0,xs:3,children:Object(r.jsx)(p.a,{color:"primary","aria-label":"forward",component:"span",onClick:function(){return S(0,0,0,1,0,o)},children:Object(r.jsx)(k.a,{})})})]}),Object(r.jsx)(f.a,{item:!0,xs:12,children:Object(r.jsx)(p.a,{color:"primary","aria-label":"forward",component:"span",onClick:function(){return S(0,1,0,0,0,o)},children:Object(r.jsx)(m.a,{})})})]})]}),Object(r.jsx)(j.a,{open:t,autoHideDuration:6e3,onClose:function(){return o(!1)},children:Object(r.jsx)(W,{onClose:function(){return o(!1)},severity:"error",children:"Error: please make sure to be connected to the chair."})})]})},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,88)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),o(e),c(e),a(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(B,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mousecheeseapp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/mousecheeseapp","/service-worker.js");E?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):F(n,e)}))}}(),I()}},[[59,1,2]]]);
//# sourceMappingURL=main.029ba64e.chunk.js.map