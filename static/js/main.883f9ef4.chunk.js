(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/pin.bbb83361.svg"},25:function(e,t,a){e.exports=a(63)},31:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),l=a(65),s=a(66),i=a(67);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(31);var u=a(12),h=a.n(u),d=a(21),p=a(5),m=a(6),f=a(8),b=a(7),v=a(9),E=(a(35),a(37),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).handleSearch=function(){a.validateSearch()&&(a.props.handleSearch(a.search.value.match(/\d+/g).join([])),a.search.value="")},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"validateSearch",value:function(){return this.search.value.length>=8}},{key:"render",value:function(){var e=this,t=this.props.value;return r.a.createElement("div",{className:"search"},r.a.createElement("h1",{className:"title"},"Consultar"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"CEP"),r.a.createElement("input",{id:"search",type:"text",placeholder:"02050010",ref:function(t){return e.search=t},value:t}),r.a.createElement("button",{type:"button",onClick:this.handleSearch},"Buscar")))}}]),t}(n.Component)),y=(a(39),a(22)),g=a.n(y),j=a(23),O=a.n(j),w=function(e){var t=e.text;return r.a.createElement("div",{style:{color:"white",backgroundImage:"url("+O.a+")",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"50px",height:"50px",display:"inline-flex",alignItems:"center",transform:"translate(-50%, -50%)"}},t)},k=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.location;return r.a.createElement("div",{style:{height:"400px",width:"100%"}},r.a.createElement(g.a,{bootstrapURLKeys:{key:"AIzaSyAuf_OHJWTlUcpsMUV4yqi3TBeLq0JhVAU"},defaultCenter:this.props.center,defaultZoom:this.props.zoom,center:e},r.a.createElement(w,{lat:e.lat,lng:e.lng})))}}]),t}(n.Component);k.defaultProps={center:{lat:59.95,lng:30.33},zoom:16};var C=k,x=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).handleClose=function(){a.props.handleClose()},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.address,a=e.location;return r.a.createElement("div",{className:"result",style:{display:t?"block":"none"}},r.a.createElement("button",{type:"button",className:"close",onClick:this.handleClose},"Close"),r.a.createElement("address",{className:"address"},r.a.createElement("span",null,t&&t.logradouro),r.a.createElement("br",null),t&&t.bairro,r.a.createElement("br",null),t&&"".concat(t.localidade," - ").concat(t.uf),r.a.createElement("br",null),t&&t.cep),r.a.createElement("div",{className:"map"},a?r.a.createElement(C,{location:a}):"error"))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).handleClose=function(){a.setState({address:null,location:null})},a.handleSearch=function(){var e=Object(d.a)(h.a.mark(function e(t){var n,r,c,o,l,s;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://viacep.com.br/ws/".concat(t,"/json/"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.next=8,fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(r.gia,"+").concat(r.logradouro,",+").concat(r.city,",+").concat(r.uf,"&key=AIzaSyAuf_OHJWTlUcpsMUV4yqi3TBeLq0JhVAU"));case 8:return c=e.sent,e.next=11,c.json();case 11:o=e.sent,l=o.results,s=l[0].geometry.location,a.setState({address:r,location:s});case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={address:null},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"app-header"},r.a.createElement("div",{className:"container"},r.a.createElement(E,{handleSearch:this.handleSearch}))),r.a.createElement("main",{className:"app-main"},r.a.createElement("div",{className:"container"},r.a.createElement(x,{address:this.state.address,location:this.state.location,handleClose:this.handleClose}))))}}]),t}(n.Component);o.a.render(r.a.createElement(l.a,null,r.a.createElement(s.a,null,r.a.createElement(i.a,{path:"/",component:S}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.883f9ef4.chunk.js.map