(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{161:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"rightToc",(function(){return i})),r.d(n,"Highlight",(function(){return p})),r.d(n,"default",(function(){return f}));r(0);var t=r(173);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c={id:"mdx",title:"Powered by MDX"},i=[],p=function(e){var n=e.children,r=e.color;return Object(t.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},u={rightToc:i,Highlight:p},l="wrapper";function f(e){var n=e.components,r=a(e,["components"]);return Object(t.b)(l,o({},u,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("p",null,"You can write JSX and use React components within your Markdown thanks to ",Object(t.b)("a",o({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX"),"."),Object(t.b)(p,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",Object(t.b)(p,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",Object(t.b)("p",null,"I can write ",Object(t.b)("strong",{parentName:"p"},"Markdown")," alongside my ",Object(t.b)("em",{parentName:"p"},"JSX"),"!"))}f.isMDXComponent=!0},173:function(e,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return f}));var t=r(0),o=r.n(t),a=o.a.createContext({}),c=function(e){var n=o.a.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},i=function(e){var n=c(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},l=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,p=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),l=c(r),f=t,s=l[i+"."+f]||l[f]||u[f]||a;return r?o.a.createElement(s,Object.assign({},{ref:n},p,{components:r})):o.a.createElement(s,Object.assign({},{ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=l;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:t,c[1]=i;for(var f=2;f<a;f++)c[f]=r[f];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);