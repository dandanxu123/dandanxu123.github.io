(function(){"use strict";var e={2400:function(e,n,t){var o=t(5130),r=t(6768),i=t(782),a=(0,i.y$)({state:{name:"xdd",changeEventType:null},getters:{},mutations:{resetEditData(e){e.changeEventType=null}},actions:{resetEditData({commit:e}){e("resetEditData")}},modules:{}}),c=(0,r.pM)({__name:"App",setup(e){return window.addEventListener("message",(e=>{"EventType"===e.data.type&&(a.state.changeEventType={...e.data})}),!1),(e,n)=>{const t=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(t)}}});const s=c;var u=s,l=t(1387),d=t(8371),f=t(8776),p=t(1353),v=t(2951);const w={class:"change-btn"};var m=(0,r.pM)({__name:"HomeView",setup(e){new d.zD7;let n=[],t=null;const o=e=>{t!=n[e]&&t.fadeOut(1),n[e].reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(1).play(),t=n[e]};return(0,r.sV)((()=>{const e=window.innerWidth,o=window.innerHeight,r=new d.ubm(35,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=10;const i=new d.Z58,a=new d.iNn(.2,.2,.2),c=new d.qBx,s=(new d.eaF(a,c),new f.JeP({antialias:!0}));s.setSize(e,o),s.setClearColor(15658734),document.querySelector("#canvas").appendChild(s.domElement);new v.N(r,s.domElement);const u=new d.ZyN(16777215,5);u.position.set(1,1,1).normalize(),i.add(u);const l=new p.B;l.load("/body_anim_1204.glb",(e=>{i.add(e.scene);const o=e.animations,a=new d.Iw4(e.scene),c=a.clipAction(o[0]),u=a.clipAction(o[1]),l=a.clipAction(o[2]);u.play(),t=u,n=[c,u,l];let f=performance.now();function p(){requestAnimationFrame(p);const e=performance.now(),n=(e-f)/1e3;f=e,a.update(n),s.render(i,r)}p()}),void 0,(e=>{console.error(e)}))})),(0,r.wB)((()=>a.state.changeEventType),(e=>{"Play"==e?.EventType&&o(1),"Stop"==e?.EventType&&o(0)})),(e,n)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[n[3]||(n[3]=(0,r.Lk)("div",{id:"canvas"},null,-1)),(0,r.Lk)("div",w,[(0,r.Lk)("div",{onClick:n[0]||(n[0]=e=>o(0))},"动画1"),(0,r.Lk)("div",{onClick:n[1]||(n[1]=e=>o(1))},"动画2"),(0,r.Lk)("div",{onClick:n[2]||(n[2]=e=>o(2))},"动画3")])],64))}}),h=t(1241);const y=(0,h.A)(m,[["__scopeId","data-v-71991770"]]);var g=y;const b=[{path:"/home",name:"home",alias:"/",component:g}],E=(0,l.aE)({history:(0,l.LA)("/"),routes:b});var O=E;const k=(0,o.Ef)(u);k.use(a),k.use(O),k.mount("#app");const T=(e,n,...t)=>{let o=null;return function(){const r=self,i=t;clearTimeout(o),o=setTimeout((function(){e.apply(r,i)}),n)}},_=window.ResizeObserver;window.ResizeObserver=class extends _{constructor(e){e=T(e,16),super(e)}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(l--,1);var u=r();void 0!==u&&(n=u)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],c=o[1],s=o[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(s)var l=s(t)}for(n&&n(o);u<a.length;u++)i=a[u],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},o=self["webpackChunknjyi"]=self["webpackChunknjyi"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(2400)}));o=t.O(o)})();
//# sourceMappingURL=app.8ef3c123.js.map