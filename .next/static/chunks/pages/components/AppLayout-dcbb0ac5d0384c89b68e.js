_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{KZe9:function(e,t,n){"use strict";n.r(t);n("q1tI");var r=n("17x9"),o=n.n(r),c=n("YFqc"),i=n.n(c),a=n("nKUr"),s=function(){return Object(a.jsxs)("header",{children:[Object(a.jsx)("div",{id:"userButton",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(i.a,{href:"/login",children:Object(a.jsx)("a",{children:"\ub85c\uadf8\uc778"})})}),Object(a.jsx)("li",{children:"|"}),Object(a.jsx)("li",{children:Object(a.jsx)(i.a,{href:"/signup",children:Object(a.jsx)("a",{children:"\ud68c\uc6d0\uac00\uc785"})})})]})}),Object(a.jsx)("div",{id:"mainLogo",children:Object(a.jsx)(Image,{src:"../../public/img/logo.png",alt:"logo"})})]})};s.PropTypes={children:o.a.node.isRequired},t.default=s},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c,i=o(n("q1tI")),a=n("elyg"),s=n("nOHt"),u=new Map,l=window.IntersectionObserver,f={};var d=function(e,t){var n=c||(l?c=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function p(e,t,n,r){(0,a.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),c=o[0],u=o[1],h=(0,s.useRouter)(),v=h&&h.pathname||"/",j=i.default.useMemo((function(){var t=(0,a.resolveHref)(v,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,a.resolveHref)(v,e.as):c||o}}),[v,e.href,e.as]),b=j.href,g=j.as;i.default.useEffect((function(){if(t&&l&&c&&c.tagName&&(0,a.isLocalURL)(b)&&!f[b+"%"+g])return d(c,(function(){p(h,b,g)}))}),[t,c,b,g,h]);var w=e.children,y=e.replace,O=e.shallow,x=e.scroll;"string"===typeof w&&(w=i.default.createElement("a",null,w));var _=i.Children.only(w),E={ref:function(e){e&&u(e),_&&"object"===typeof _&&_.ref&&("function"===typeof _.ref?_.ref(e):"object"===typeof _.ref&&(_.ref.current=e))},onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,b,g,y,O,x)}};return t&&(E.onMouseEnter=function(e){(0,a.isLocalURL)(b)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),p(h,b,g,{priority:!0}))}),(e.passHref||"a"===_.type&&!("href"in _.props))&&(E.href=(0,a.addBasePath)((0,a.addLocale)(g,h&&h.locale,h&&h.defaultLocale))),i.default.cloneElement(_,E)};t.default=h},s8Dw:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/AppLayout",function(){return n("KZe9")}])}},[["s8Dw",0,2,1]]]);