(()=>{"use strict";var e,a,c,d,f,t={},b={};function r(e){var a=b[e];if(void 0!==a)return a.exports;var c=b[e]={id:e,loaded:!1,exports:{}};return t[e].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}r.m=t,r.c=b,r.amdD=function(){throw new Error("define cannot be used indirect")},e=[],r.O=(a,c,d,f)=>{if(!c){var t=1/0;for(i=0;i<e.length;i++){c=e[i][0],d=e[i][1],f=e[i][2];for(var b=!0,o=0;o<c.length;o++)(!1&f||t>=f)&&Object.keys(r.O).every((e=>r.O[e](c[o])))?c.splice(o--,1):(b=!1,f<t&&(t=f));if(b){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[c,d,f]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var f=Object.create(null);r.r(f);var t={};a=a||[null,c({}),c([]),c(c)];for(var b=2&d&&e;"object"==typeof b&&!~a.indexOf(b);b=c(b))Object.getOwnPropertyNames(b).forEach((a=>t[a]=()=>e[a]));return t.default=()=>e,r.d(f,t),f},r.d=(e,a)=>{for(var c in a)r.o(a,c)&&!r.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,c)=>(r.f[c](e,a),a)),[])),r.u=e=>"assets/js/"+({53:"935f2afb",203:"14fff630",223:"739cf87f",517:"9c632ee2",561:"b4ad462c",579:"86c58c0c",817:"3a6f2492",1167:"baed0d2f",3966:"e3a76e3d",4195:"c4f5d8e4",4368:"a94703ab",4611:"8d7e4d28",4958:"69dc1058",5027:"13c0be94",5261:"c8236bed",5733:"a52bc423",5987:"410da243",6e3:"54acb109",7753:"0f3c1539",7918:"17896441",8518:"a7bd4aaa",8983:"a173dc4a",9496:"2a4e7e69",9661:"5e95c892"}[e]||e)+"."+{53:"d6fc2a6c",98:"30d4d453",122:"7996ca2b",177:"c5830552",203:"d6ff4646",223:"87c00403",228:"09b46861",305:"b3e3f4ee",310:"b7447bab",370:"2b4124f5",402:"8f106238",517:"16313e5d",561:"92c80ae8",579:"dba57888",617:"a877610f",673:"2abe20ee",754:"324b8eff",758:"9450f854",817:"2729ad7e",870:"716c25fc",889:"9508415f",1053:"abc123b2",1084:"278f7412",1167:"d6b8e910",1224:"b54e293d",1390:"de862eda",1445:"423465a0",1446:"18454ac6",1639:"d918c968",1650:"ac42023c",1660:"a641b8db",1770:"50b72b46",1772:"3e74701d",1873:"aa815d87",1920:"5589f021",2011:"75b8f482",2040:"d4cacedf",2119:"c0872711",2136:"b15f02ac",2200:"309cfafd",2261:"857d8092",2314:"41cf25ce",2386:"abf6c6bc",2406:"a3eceb15",2531:"11c32661",2542:"191caf0e",2602:"b8846522",2675:"5bd1f97b",2687:"11331752",2744:"e500eab7",2877:"6c7c0491",3203:"8af1ac35",3283:"4669e1c9",3314:"d4f6362b",3336:"41f647c9",3465:"dd012688",3482:"57936db0",3509:"2e8cf1c1",3519:"f6be4efa",3833:"d163564a",3883:"14a13f8e",3966:"83bb18d5",3993:"5bba69cb",4144:"f774dc8b",4163:"24afd02d",4195:"c1960a94",4212:"0c978f5c",4293:"1b005ed1",4323:"aa9ba3de",4344:"0115aff0",4368:"60209310",4416:"c7f42385",4439:"c6276614",4511:"c6d0a2ec",4611:"1661ee83",4796:"d81f5bb8",4812:"5e46deed",4879:"84ae6bbf",4958:"7c7d9ab6",5027:"006d133e",5057:"a3b5401d",5134:"229f24dc",5261:"b5c4ddfa",5372:"c222e9cf",5461:"7fd731bc",5576:"0241eaeb",5648:"cb4710c0",5701:"c3847284",5733:"71ac4a00",5753:"cc5ba798",5815:"a90b5031",5819:"0cb7a277",5860:"f4f9af54",5879:"572b2515",5987:"73525e86",6e3:"260c5104",6062:"412167d0",6092:"7ea15dbf",6121:"45f76058",6395:"09093cbb",6443:"1b211bca",6471:"f0ee126d",6665:"588959dd",6692:"aac80c0f",6700:"e0e90b8c",6732:"0559268f",6907:"257f875e",6923:"17e466dc",6963:"3840106d",6991:"87d01583",7001:"3ca807b9",7213:"10394933",7315:"bbd5d0bf",7365:"a740d828",7370:"674c291e",7421:"d00238df",7475:"88126e07",7525:"e34c18a8",7590:"887eb094",7601:"69279ee5",7663:"41e9ba66",7753:"fd8e3fc3",7762:"1c27177f",7837:"1eda8e99",7917:"3c75696a",7918:"c9067773",7988:"4c1decff",8007:"4c9cb778",8029:"e2a3c023",8084:"e6140a3d",8120:"f34c157f",8142:"88a535af",8154:"9d528dd3",8171:"e5831f2f",8252:"723550ba",8283:"0944fb32",8393:"627c6830",8518:"bfce379c",8561:"a2d5cc2c",8688:"2f12e984",8717:"dbac52b5",8770:"b47e80ae",8813:"d1966061",8825:"a081c04f",8910:"979d8c8e",8915:"da90c248",8983:"4b1cecd8",9071:"38ba11a9",9121:"7e3fdbbd",9140:"85406be2",9155:"d5c269a3",9232:"a7407c47",9296:"e2bdb242",9496:"32ca1d56",9558:"a70c6d44",9567:"841fceb4",9607:"afd2e0bb",9661:"efc7242a",9699:"5aec1e1b",9713:"a6c016af",9781:"587f5a23",9831:"49ec6582",9972:"34ef56e6"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},f="2024msi-presentation:",r.l=(e,a,c,t)=>{if(d[e])d[e].push(a);else{var b,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+c){b=u;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,r.nc&&b.setAttribute("nonce",r.nc),b.setAttribute("data-webpack",f+c),b.src=e),d[e]=[a];var l=(a,c)=>{b.onerror=b.onload=null,clearTimeout(s);var f=d[e];if(delete d[e],b.parentNode&&b.parentNode.removeChild(b),f&&f.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),o&&document.head.appendChild(b)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/2024msi-presentation/",r.gca=function(e){return e={17896441:"7918","935f2afb":"53","14fff630":"203","739cf87f":"223","9c632ee2":"517",b4ad462c:"561","86c58c0c":"579","3a6f2492":"817",baed0d2f:"1167",e3a76e3d:"3966",c4f5d8e4:"4195",a94703ab:"4368","8d7e4d28":"4611","69dc1058":"4958","13c0be94":"5027",c8236bed:"5261",a52bc423:"5733","410da243":"5987","54acb109":"6000","0f3c1539":"7753",a7bd4aaa:"8518",a173dc4a:"8983","2a4e7e69":"9496","5e95c892":"9661"}[e]||e,r.p+r.u(e)},(()=>{r.b=document.baseURI||self.location.href;var e={1303:0,532:0};r.f.j=(a,c)=>{var d=r.o(e,a)?e[a]:void 0;if(0!==d)if(d)c.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((c,f)=>d=e[a]=[c,f]));c.push(d[2]=f);var t=r.p+r.u(a),b=new Error;r.l(t,(c=>{if(r.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var f=c&&("load"===c.type?"missing":c.type),t=c&&c.target&&c.target.src;b.message="Loading chunk "+a+" failed.\n("+f+": "+t+")",b.name="ChunkLoadError",b.type=f,b.request=t,d[1](b)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,c)=>{var d,f,t=c[0],b=c[1],o=c[2],n=0;if(t.some((a=>0!==e[a]))){for(d in b)r.o(b,d)&&(r.m[d]=b[d]);if(o)var i=o(r)}for(a&&a(c);n<t.length;n++)f=t[n],r.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return r.O(i)},c=self.webpackChunk_2024msi_presentation=self.webpackChunk_2024msi_presentation||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})(),r.nc=void 0})();