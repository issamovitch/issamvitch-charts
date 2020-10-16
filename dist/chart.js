!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.IssChart=t():e.IssChart=t()}(window,(function(){return function(e){var t=window.webpackHotUpdateIssChart;window.webpackHotUpdateIssChart=function(e,r){!function(e,t){if(!k[e]||!w[e])return;for(var r in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(f[r]=t[r]);0==--v&&0===y&&F()}(e,r),t&&t(e,r)};var r,n=!0,a="e389d6e0bc5680dfba83",i={},o=[],s=[];function l(e){var t=j[e];if(!t)return I;var n=function(n){return t.hot.active?(j[n]?-1===j[n].parents.indexOf(e)&&j[n].parents.push(e):(o=[e],r=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),o=[]),I(n)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(t){I[e]=t}}};for(var i in I)Object.prototype.hasOwnProperty.call(I,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,a(i));return n.e=function(e){return"ready"===u&&p("prepare"),y++,I.e(e).then(t,(function(e){throw t(),e}));function t(){y--,"prepare"===u&&(b[e]||x(e),0===y&&0===v&&F())}},n.t=function(e,t){return 1&t&&(e=n(e)),I.t(e,-2&t)},n}function d(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:r!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":(f={})[t]=e[t],p("ready");break;case"ready":C(t);break;case"prepare":case"check":case"dispose":case"apply":(g=g||[]).push(t)}},check:_,apply:D,status:function(e){if(!e)return u;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var t=c.indexOf(e);t>=0&&c.splice(t,1)},data:i[t]};return r=void 0,n}var c=[],u="idle";function p(e){u=e;for(var t=0;t<c.length;t++)c[t].call(null,e)}var h,f,m,g,v=0,y=0,b={},w={},k={};function E(e){return+e+""===e?+e:e}function _(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return n=e,p("check"),(t=1e4,t=t||1e4,new Promise((function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,i=I.p+""+a+".hot-update.json";n.open("GET",i,!0),n.timeout=t,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+i+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void r(e)}e(t)}}}))).then((function(e){if(!e)return p(O()?"ready":"idle"),null;w={},b={},k=e.c,m=e.h,p("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));f={};return x(0),"prepare"===u&&0===y&&0===v&&F(),t}));var t}function x(e){k[e]?(w[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=I.p+""+e+"."+a+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function F(){p("ready");var e=h;if(h=null,e)if(n)Promise.resolve().then((function(){return D(n)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var r in f)Object.prototype.hasOwnProperty.call(f,r)&&t.push(E(r));e.resolve(t)}}function D(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");return function t(n){var s,l,d,c,u;function h(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var a=n.pop(),i=a.id,o=a.chain;if((c=j[i])&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:o,moduleId:i};for(var s=0;s<c.parents.length;s++){var l=c.parents[s],d=j[l];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:o.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(d.hot._acceptedDependencies[i]?(r[l]||(r[l]=[]),v(r[l],[i])):(delete r[l],t.push(l),n.push({chain:o.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}O();var y={},b=[],w={},_=function(){console.warn("[HMR] unexpected require("+F.moduleId+") to disposed module")};for(var x in f)if(Object.prototype.hasOwnProperty.call(f,x)){var F;u=E(x),F=f[x]?h(u):{type:"disposed",moduleId:x};var D=!1,C=!1,M=!1,A="";switch(F.chain&&(A="\nUpdate propagation: "+F.chain.join(" -> ")),F.type){case"self-declined":n.onDeclined&&n.onDeclined(F),n.ignoreDeclined||(D=new Error("Aborted because of self decline: "+F.moduleId+A));break;case"declined":n.onDeclined&&n.onDeclined(F),n.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+F.moduleId+" in "+F.parentId+A));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(F),n.ignoreUnaccepted||(D=new Error("Aborted because "+u+" is not accepted"+A));break;case"accepted":n.onAccepted&&n.onAccepted(F),C=!0;break;case"disposed":n.onDisposed&&n.onDisposed(F),M=!0;break;default:throw new Error("Unexception type "+F.type)}if(D)return p("abort"),Promise.reject(D);if(C)for(u in w[u]=f[u],v(b,F.outdatedModules),F.outdatedDependencies)Object.prototype.hasOwnProperty.call(F.outdatedDependencies,u)&&(y[u]||(y[u]=[]),v(y[u],F.outdatedDependencies[u]));M&&(v(b,[F.moduleId]),w[u]=_)}var P,H=[];for(l=0;l<b.length;l++)u=b[l],j[u]&&j[u].hot._selfAccepted&&w[u]!==_&&!j[u].hot._selfInvalidated&&H.push({module:u,parents:j[u].parents.slice(),errorHandler:j[u].hot._selfAccepted});p("dispose"),Object.keys(k).forEach((function(e){!1===k[e]&&function(e){delete installedChunks[e]}(e)}));var B,S,N=b.slice();for(;N.length>0;)if(u=N.pop(),c=j[u]){var q={},$=c.hot._disposeHandlers;for(d=0;d<$.length;d++)(s=$[d])(q);for(i[u]=q,c.hot.active=!1,delete j[u],delete y[u],d=0;d<c.children.length;d++){var L=j[c.children[d]];L&&((P=L.parents.indexOf(u))>=0&&L.parents.splice(P,1))}}for(u in y)if(Object.prototype.hasOwnProperty.call(y,u)&&(c=j[u]))for(S=y[u],d=0;d<S.length;d++)B=S[d],(P=c.children.indexOf(B))>=0&&c.children.splice(P,1);p("apply"),void 0!==m&&(a=m,m=void 0);for(u in f=void 0,w)Object.prototype.hasOwnProperty.call(w,u)&&(e[u]=w[u]);var T=null;for(u in y)if(Object.prototype.hasOwnProperty.call(y,u)&&(c=j[u])){S=y[u];var R=[];for(l=0;l<S.length;l++)if(B=S[l],s=c.hot._acceptedDependencies[B]){if(-1!==R.indexOf(s))continue;R.push(s)}for(l=0;l<R.length;l++){s=R[l];try{s(S)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:u,dependencyId:S[l],error:e}),n.ignoreErrored||T||(T=e)}}}for(l=0;l<H.length;l++){var U=H[l];u=U.module,o=U.parents,r=u;try{I(u)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:t,originalError:e}),n.ignoreErrored||T||(T=t),T||(T=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:u,error:e}),n.ignoreErrored||T||(T=e)}}if(T)return p("fail"),Promise.reject(T);if(g)return t(n).then((function(e){return b.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return p("idle"),new Promise((function(e){e(b)}))}(t=t||{})}function O(){if(g)return f||(f={}),g.forEach(C),g=void 0,!0}function C(t){Object.prototype.hasOwnProperty.call(f,t)||(f[t]=e[t])}var j={};function I(t){if(j[t])return j[t].exports;var r=j[t]={i:t,l:!1,exports:{},hot:d(t),parents:(s=o,o=[],s),children:[]};return e[t].call(r.exports,r,r.exports,l(t)),r.l=!0,r.exports}return I.m=e,I.c=j,I.d=function(e,t,r){I.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},I.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,t){if(1&t&&(e=I(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(I.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)I.d(r,n,function(t){return e[t]}.bind(null,n));return r},I.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(t,"a",t),t},I.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},I.p="",I.h=function(){return a},l(5)(I.s=5)}([function(e,t,r){"use strict";var n=r(1),a=r(3);e.exports=function(e){var t;Array.isArray(e)&&e.raw&&(e=String.raw.apply(null,arguments));var r=n(e);return r.space?((t=Array(3))[0]=Math.min(Math.max(r.values[0],0),255),t[1]=Math.min(Math.max(r.values[1],0),255),t[2]=Math.min(Math.max(r.values[2],0),255),"h"===r.space[0]&&(t=a.rgb(t)),t.push(Math.min(Math.max(r.alpha,0),1)),t):[]}},function(e,t,r){"use strict";var n=r(2);e.exports=function(e){var t,r,i=[],o=1;if("string"==typeof e)if(n[e])i=n[e].slice(),r="rgb";else if("transparent"===e)o=0,r="rgb",i=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var s=(c=e.slice(1)).length;o=1,s<=4?(i=[parseInt(c[0]+c[0],16),parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16)],4===s&&(o=parseInt(c[3]+c[3],16)/255)):(i=[parseInt(c[0]+c[1],16),parseInt(c[2]+c[3],16),parseInt(c[4]+c[5],16)],8===s&&(o=parseInt(c[6]+c[7],16)/255)),i[0]||(i[0]=0),i[1]||(i[1]=0),i[2]||(i[2]=0),r="rgb"}else if(t=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var l=t[1],d="rgb"===l,c=l.replace(/a$/,"");r=c;s="cmyk"===c?4:"gray"===c?1:3;i=t[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,t){if(/%$/.test(e))return t===s?parseFloat(e)/100:"rgb"===c?255*parseFloat(e)/100:parseFloat(e);if("h"===c[t]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==a[e])return a[e]}return parseFloat(e)})),l===c&&i.push(1),o=d||void 0===i[s]?1:i[s],i=i.slice(0,s)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(i=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),r=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(i=[e[0],e[1],e[2]],r="rgb",o=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(r="rgb",i=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(r="hsl",i=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),o=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(o/=100)):(r="rgb",i=[e>>>16,(65280&e)>>>8,255&e]);return{space:r,values:i,alpha:o}};var a={red:0,orange:60,yellow:120,green:180,blue:240,purple:300}},function(e,t,r){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(e,t,r){"use strict";var n=r(4);e.exports={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(e){var t,r,n,a,i,o=e[0]/360,s=e[1]/100,l=e[2]/100;if(0===s)return[i=255*l,i,i];t=2*l-(r=l<.5?l*(1+s):l+s-l*s),a=[0,0,0];for(var d=0;d<3;d++)(n=o+1/3*-(d-1))<0?n++:n>1&&n--,i=6*n<1?t+6*(r-t)*n:2*n<1?r:3*n<2?t+(r-t)*(2/3-n)*6:t,a[d]=255*i;return a}},n.hsl=function(e){var t,r,n=e[0]/255,a=e[1]/255,i=e[2]/255,o=Math.min(n,a,i),s=Math.max(n,a,i),l=s-o;return s===o?t=0:n===s?t=(a-i)/l:a===s?t=2+(i-n)/l:i===s&&(t=4+(n-a)/l),(t=Math.min(60*t,360))<0&&(t+=360),r=(o+s)/2,[t,100*(s===o?0:r<=.5?l/(s+o):l/(2-s-o)),100*r]}},function(e,t,r){"use strict";e.exports={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]}},function(e,t,r){"use strict";r.r(t);const n=r(0);class a{constructor(e,t,r,n){this.type=e,this.elem=t,this.default_options={width:300,height:300,title:null,title_position:"top",tooltips:!0,labels:!0,debug:!1},this.options=Object.assign(this.default_options,r),this.data=n}init(){this.total=0,this.canvas=document.createElement("canvas"),this.elem.className="issamovitch-chart",this.canvas.id="issamovitch-chart-"+Math.random().toString(36).substr(2,9),this.canvas.width=this.options.width,this.canvas.height=this.options.height,this.elem.appendChild(this.canvas),this.render()}debug(){let e=document.createElement("pre"),t={options:this.options,data:this.data};e.textContent=JSON.stringify(t,void 0,2),e.className="debug",document.body.appendChild(e)}setData(e){this.data=e,this.render()}setOptions(e){this.options=Object.assign(this.default_options,e),this.setData(this.data)}render(){this.show_title();this.canvas.getContext("2d").clearRect(0,0,this.canvas.width,this.canvas.height),this.options.debug&&this.debug(),this.total=0,this[this.type]();let e=this;this.options.tooltips&&this.canvas.addEventListener("mousemove",(function(t){e.show_tooltips(t)})),this.options.labels&&this.show_labels()}show_title(){for(var e=this.elem.getElementsByClassName("title");e.length>0;)e[0].parentNode.removeChild(e[0]);if(this.options.title){let e=document.createElement("div");e.className="title",e.innerHTML=this.options.title,"top"==this.options.title_position?(this.elem.prepend(e),e.style.marginBottom="10px"):"bottom"==this.options.title_position&&(this.elem.appendChild(e),e.style.marginTop="10px")}}show_tooltips(e){for(var t=this.elem.getElementsByClassName("tooltip");t.length>0;)t[0].parentNode.removeChild(t[0]);let r=this.canvas.getContext("2d");var n=e.clientX,a=e.clientY,i=r.getImageData(n,a,1,1).data,o=parseFloat(i[3]/255);i=`rgba(${i[0]},${i[1]},${i[2]},${o})`;for(var s in this.data){if(this.data[s].color==i){var l=parseInt(this.data[s].value/this.total*100);let e=document.createElement("div");e.className="tooltip",e.innerHTML=s+" "+l+"%",e.style.top=a-30+"px",e.style.left=n+"px",this.elem.appendChild(e)}}}show_labels(){for(var e=this.elem.getElementsByClassName("labels");e.length>0;)e[0].parentNode.removeChild(e[0]);let t=document.createElement("ul");for(var r in t.className="labels",this.data){let e=document.createElement("li");var n=parseInt(this.data[r].value/this.total*100);e.innerHTML='<div class="label-box" style="background:'+this.data[r].color+';"></div><span>'+r+" "+n+"%</span>",t.appendChild(e)}this.elem.appendChild(t)}piechart(){for(var e in this.data)this.total+=this.data[e].value;let t=this.canvas.getContext("2d"),r=0,a=0;for(var e in this.data){let i=this.data[e].value,o=this.data[e].color||["#FF6633","#FFB399","#FF33FF","#FFFF99","#00B3E6","#E6B333","#3366E6","#999966","#99FF99","#B34D4D","#80B300","#809900","#E6B3B3","#6680B3","#66991A","#FF99E6","#CCFF1A","#FF1A66","#E6331A","#33FFCC","#66994D","#B366CC","#4D8000","#B33300","#CC80CC","#66664D","#991AFF","#E666FF","#4DB3FF","#1AB399","#E666B3","#33991A","#CC9999","#B3B31A","#00E680","#4D8066","#809980","#E6FF80","#1AFF33","#999933","#FF3380","#CCCC00","#66E64D","#4D80CC","#9900B3","#E64D66","#4DB380","#FF4D4D","#99E6E6","#6666FF"][a++];o=this.data[e].color=`rgba(${n(o)[0]},${n(o)[1]},${n(o)[2]},${n(o)[3]})`;let s=r+2*Math.PI*(i/this.total);this.drawPieSlice(t,this.options.width/2,this.options.height/2,Math.min(this.options.width/2,this.options.height/2),r,s,o),r=s}}drawPieSlice(e,t,r,n,a,i,o){e.fillStyle=o,e.beginPath(),e.moveTo(t,r),e.arc(t,r,n,a,i),e.closePath(),e.fill()}}t.default=function(e,t,r,n=null){let i=new a(e,t,r,n||{"no Data":50});return i.init(),i}}]).default}));