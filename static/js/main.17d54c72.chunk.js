(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{126:function(e,t,n){e.exports=n.p+"static/media/marvel-book-animation.2ad5e4bb.gif"},129:function(e,t,n){e.exports=n.p+"static/media/foward.710391ab.png"},131:function(e,t,n){e.exports=n(289)},136:function(e,t,n){},137:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},157:function(e){e.exports=JSON.parse('{"BACKEND_ROUTES":[{"route":"marvelAPI","url":"https://gateway.marvel.com/v1/public/"}]}')},161:function(e,t){},163:function(e,t){},173:function(e,t){},175:function(e,t){},201:function(e,t){},203:function(e,t){},204:function(e,t){},210:function(e,t){},212:function(e,t){},230:function(e,t){},233:function(e,t){},249:function(e,t){},252:function(e,t){},255:function(e,t,n){},263:function(e,t){},265:function(e,t){},282:function(e,t){},287:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(125),i=n.n(c),o=(n(136),n(137),n(18)),s=n.n(o),u=n(34),l=n(11),f=n(12),m=n(28),h=n(27),p=(n(139),n(126)),d=n.n(p),v=function(e){var t=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"overlay fade-out"}),r.a.createElement("img",{alt:"marvel book animation",src:d.a}))};return r.a.createElement(r.a.Fragment,null,e.show&&r.a.createElement("div",{id:"intro"},r.a.createElement(t,null)))},g=(n(140),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"flex align-items-center justify-content-center"},"  ",r.a.createElement("h1",{onClick:function(){return window.location.reload()}},"MARVEL",r.a.createElement("span",{style:{marginLeft:"-4px"}},"CARD")),"  "))}),b=n(35),y=n(130),E=n(21),k=n(127),j=n.n(k),w=n(157),O=n(128),x=n.n(O),S="dbb258f56cf0e85ba0a3bcf608741b2c",C=(new Date).getTime(),N={apikey:S,ts:C,hash:x.a.createHash("md5").update(C+"b97b275f00c65061c1c548114ece8c741cf8a27f"+S).digest("hex")},L=function(e){var t;return null===(t=w.BACKEND_ROUTES.find((function(t){return t.route===e})))||void 0===t?void 0:t.url},P=function(e){console.log(e)},A=function(){function e(t,n,a){Object(l.a)(this,e),this.client=j.a.create(Object.assign({},{timeout:3e5,baseURL:L(t)+(n||""),headers:{"Content-Type":"application/json"}},a)),this.client.interceptors.response.use((function(e){return e}),(function(e){var n,a,r=null===e||void 0===e||null===(n=e.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.message;return P(r||"N\xe3o conseguimos conex\xe3o com este dom\xednio ".concat(L(t))),Promise.reject(e)})),this.client.interceptors.request.use((function(e){return e.params=Object(b.a)(Object(b.a)({},e.params),N),e}),(function(e){return Promise.reject(e)}))}return Object(f.a)(e,[{key:"baseUrl",value:function(){return this.client.defaults.baseURL}},{key:"get",value:function(e,t){return this.client.get(function(e){return e?"/".concat(e.toString().replace("/","")):null}(e),t).then((function(e){return null===e||void 0===e?void 0:e.data})).catch((function(e){return Promise.reject(e)}))}}]),e}();A.enableGlobalErrorHandling=function(e){P=e};var B=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.call(this,"marvelAPI")}return Object(f.a)(n,[{key:"get",value:function(e,t,a,r){return Object(y.a)(Object(E.a)(n.prototype),"get",this).call(this,e,{params:Object(b.a)({},t?{name:t}:{limit:a||"6",offset:r||"0"})})}}]),n}(A),I=n(42),M=n.n(I),F=M.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3,timerProgressBar:!0,onOpen:function(e){e.addEventListener("mouseenter",M.a.stopTimer),e.addEventListener("mouseleave",M.a.resumeTimer)}}),K=function(){function e(){var t=this;Object(l.a)(this,e),window.alert=function(e){return t.info(e)}}return Object(f.a)(e,[{key:"success",value:function(e){F.fire({icon:"success",title:"Ok!",text:e})}},{key:"error",value:function(e){F.fire({icon:"error",title:"Ops!",text:e})}},{key:"warn",value:function(e){F.fire({icon:"warning",title:"Aten\xe7\xe3o!",text:e})}},{key:"info",value:function(e){F.fire({icon:"info",title:"Aten\xe7\xe3o!",text:e})}}]),e}(),V=(n(255),n(129)),T=n.n(V),D=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(256),r=new a("002030015187931256738:ax9zxpfhrlg","AIzaSyB36V0LmV5pmwA7txME4McW8MLaKgeBOhM"),null!==localStorage.getItem(t.name)){e.next=7;break}return e.next=5,r.search(t.name+"marvel").then((function(e){localStorage.setItem(t.name,e[0].url)}));case 5:e.next=9;break;case 7:return t.thumbnail.src=localStorage.getItem(t.name),e.abrupt("return",t);case 9:return e.abrupt("return",D(t));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).characterService=new B,a.notificationService=new K,a.state={character:!1,flip:!!e.flip&&e.flip},a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.setCharacter(this.props.character)}},{key:"nameHaveSpecification",value:function(e){var t=e.name,n="";return t.includes("(",")")?(n=t.substring(t.indexOf("(")+1).replace(")",""),t=t.substring(0,t.indexOf("(")),e.name=t,e.specification=n,e):e}},{key:"setCharacter",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var n=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&this.nameHaveSpecification(t)&&(t.thumbnail.path.includes("image_not_available")?D(t).then((function(){n.setState({character:t})})):(t.thumbnail.src=t.thumbnail.path+"."+t.thumbnail.extension,this.setState({character:t})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.character,n=t.thumbnail,a=this.state.flip;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:t?"card open-cards":"card",style:{backgroundImage:a?'url("'+T.a+'")':'url("'+n.src+'")'},onClick:function(){return e.setState({flip:!a})}},r.a.createElement("span",{style:{display:a&&"none"},className:"id"},"#",t.id),r.a.createElement("h2",{style:{display:a&&"none"}},t.name),t.specification&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{style:{display:a&&"none"}},t.specification))))}}]),n}(r.a.Component),U=(n(287),Math.floor(1493*Math.random())),H=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-md-5 mt-3 mb-3"},r.a.createElement("div",{className:"input-group",id:"search"},r.a.createElement("input",{type:"text",className:"form-control",onChange:e.onChange,onKeyPress:e.onKeyPress,placeholder:"Find character"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn text-light font-weight-bold",onClick:e.onClick,type:"button"},r.a.createElement("span",null,"GO!"))))))},_=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleKeyPress=function(e){"Enter"===e.key&&a.getCharacters(a.state.inputValue)},a.onChangeInputSearch=function(e){a.setState({inputValue:e.target.value})},a.getCharacterByName=function(){a.getCharacters(a.state.inputValue)},a.charactersService=new B,a.notificationService=new K,a.state={characters:[],isLoading:!0,inputValue:!1,flip:!0},a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.getCharacters()}},{key:"getCharacters",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var n=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.charactersService.get("/characters",t||"",4,U).then((function(e){return 0!==e.data.results.length?n.setState({characters:e.data.results,flip:!t}):n.notificationService.error("N\xe3o foi poss\xedvel encontrar o personagem! Verifique o nome e tente novamente.")}),this.state.isLoading&&setTimeout((function(){n.setState({isLoading:!1})}),4e3));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.notificationService.error("N\xe3o foi poss\xedvel obter a lista de personagens.");case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.characters,t=this.state.isLoading,n=this.state.flip;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(v,{show:t})," ",r.a.createElement("section",{id:"home",className:"justify-content-center align-items-center",style:{display:t?"none":"flex"}},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row flex justify-content-center mb-3"},r.a.createElement(H,{onClick:this.getCharacterByName,onKeyPress:this.handleKeyPress,onChange:this.onChangeInputSearch})),r.a.createElement("div",{className:"row no-gutters flex justify-content-center"},e.map((function(e,t){return r.a.createElement(R,{key:e.id,character:e,flip:n})})))),r.a.createElement("div",{className:"footer-copyright text-right py-0"},r.a.createElement("a",{href:"https://jotanarciso.com/",target:"blank","data-toggle":"tooltip","data-placement":"top",title:"jotanarciso.com | desenvolvedor de experi\xeancias"},";"))))}}]),n}(r.a.Component);var J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(288);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[131,1,2]]]);
//# sourceMappingURL=main.17d54c72.chunk.js.map