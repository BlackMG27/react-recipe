(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(43)},23:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c),i=(t(23),t(10)),o=t(11),s=t(12),m=t(15),u=t(13),d=t(16);var p=function(e){return console.log(e.data),r.a.createElement("div",{className:"col s12 l4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},r.a.createElement("img",{className:"activator",src:e.data.recipe.image,alt:e.data.recipe.label})),r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title activator grey-text text-darken-4"},e.data.recipe.label,r.a.createElement("i",{className:"material-icons right"},"more_vert")),r.a.createElement("p",null,r.a.createElement("a",{href:e.data.recipe.url,target:"_blank",rel:"noopener noreferrer"},e.data.recipe.source))),r.a.createElement("div",{className:"card-reveal"},r.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Ingredients",r.a.createElement("i",{className:"material-icons right"},"close")),r.a.createElement("ul",null,e.data.recipe.ingredientLines.map(function(e){return r.a.createElement("li",null,e)})))))},h=t(14),v=t.n(h),E={search:function(e){return v.a.get("https://api.edamam.com/search?q=".concat(e,"&app_id=53c99899&app_key=5bcac43624cd4fde163db0d5b37859e3&from=0&to=48"))}},f=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={recipes:[],input:""},t.searchRecipes=function(e){console.log(e),E.search(e).then(function(e){return t.setState({recipes:e.data.hits})}).catch(function(e){return console.log(e)})},t.handleInputChange=function(e){var a=e.target,n=a.value,r=a.name;console.log(n+r),t.setState(Object(i.a)({},r,n))},t.handleFormSubmit=function(e){e.preventDefault(),t.searchRecipes(t.state.input)},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"container"},r.a.createElement("h1",null,"Hello")),r.a.createElement("section",{className:"container"},r.a.createElement("form",null,r.a.createElement("input",{value:this.state.input,onChange:this.handleInputChange,name:"input"}),r.a.createElement("button",{onClick:this.handleFormSubmit,className:"btn"},"Search"))),r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"row"},this.state.recipes.map(function(e){return r.a.createElement(p,{data:e})}))))}}]),a}(n.Component);var g=function(){return r.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.2846479c.chunk.js.map