webpackJsonp([11],{"./.cache/api-runner-browser.js":function(e,o,n){"use strict";var t=[{plugin:n("./node_modules/gatsby-plugin-offline/gatsby-browser.js"),options:{plugins:[]}}];e.exports=function(e,o,n){var s=t.map(function(n){if(n.plugin[e]){var t=n.plugin[e](o,n.options);return t}});return s=s.filter(function(e){return"undefined"!=typeof e}),s.length>0?s:n?[n]:[]}},"./.cache/async-requires.js":function(e,o,n){"use strict";o.components={"page-component---node-modules-gatsby-plugin-offline-app-shell-js":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js"),"page-component---src-templates-blog-page-js":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-templates-blog-page-js!./src/templates/blog-page.js"),"page-component---src-pages-index-js":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js"),"page-component---src-pages-projects-js":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-projects-js!./src/pages/projects.js")},o.json={"offline-plugin-app-shell-fallback.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json"),"posts-composeable-web.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---posts-composeable-web!./.cache/json/posts-composeable-web.json"),"about.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json"),"index.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),"projects.json":n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---projects!./.cache/json/projects.json")},o.layouts={index:n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js")}},"./.cache/component-renderer.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var s=n("./node_modules/babel-runtime/helpers/extends.js"),a=t(s),r=n("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),l=t(r),i=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),u=t(i),d=n("./node_modules/babel-runtime/helpers/createClass.js"),c=t(d),p=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),g=t(p),m=n("./node_modules/babel-runtime/helpers/inherits.js"),f=t(m),b=n("./node_modules/react/react.js"),j=t(b),h=n("./.cache/loader.js"),_=t(h),x=n("./.cache/emitter.js"),y=t(x),v=function(e){function o(e){(0,u.default)(this,o);var n=(0,g.default)(this,(o.__proto__||(0,l.default)(o)).call(this));return n.state={location:e.location,pageResources:_.default.getResourcesForPathname(e.location.pathname)},n}return(0,f.default)(o,e),(0,c.default)(o,[{key:"componentWillReceiveProps",value:function(e){var o=this;if(this.state.location.pathname!==e.location.pathname){var n=_.default.getResourcesForPathname(e.location.pathname);n?this.setState({location:e.location,pageResources:n}):_.default.getResourcesForPathname(e.location.pathname,function(n){o.setState({location:e.location,pageResources:n})})}}},{key:"componentDidMount",value:function(){var e=this;y.default.on("onPostLoadPageResources",function(o){o.page.path===_.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:o.pageResources})})}},{key:"shouldComponentUpdate",value:function(e,o){return this.state.pageResources.component!==o.pageResources.component||this.state.pageResources.json!==o.pageResources.json}},{key:"render",value:function(){return this.state.pageResources?(0,b.createElement)(this.state.pageResources.component,(0,a.default)({},this.props,this.state.pageResources.json)):null}}]),o}(j.default.Component);o.default=v},"./.cache/emitter.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/mitt/dist/mitt.js"),a=t(s),r=(0,a.default)();e.exports=r},"./.cache/find-page.js":function(e,o,n){"use strict";var t=n("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var a=n.slice(o.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),s[a])return s[a];var r=void 0;return e.some(function(e){if(e.matchPath){if((0,t.matchPath)(a,{path:e.path})||(0,t.matchPath)(a,{path:e.matchPath}))return r=e,s[a]=e,!0}else if((0,t.matchPath)(a,{path:e.path,exact:!0}))return r=e,s[a]=e,!0;return!1}),r}}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(8,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/about.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(7,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---offline-plugin-app-shell-fallback!./.cache/json/offline-plugin-app-shell-fallback.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(6,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/offline-plugin-app-shell-fallback.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---posts-composeable-web!./.cache/json/posts-composeable-web.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(5,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/posts-composeable-web.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---projects!./.cache/json/projects.json":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(4,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/projects.json")})})}},"./.cache/loader.js":function(e,o,n){(function(o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/babel-runtime/core-js/get-iterator.js"),a=t(s),r=n("./.cache/find-page.js"),l=t(r),i=n("./.cache/emitter.js"),u=t(i),d=void 0,c={},p={},g={},m={},f={},b=[],j=[],h={},_=[],x={},y=function(e){return e&&e.default||e},v=void 0,R=!0;v=n("./.cache/prefetcher.js")({getNextQueuedResources:function(){return _.slice(-1)[0]},createResourceDownload:function(e){P(e,function(){_=_.filter(function(o){return o!==e}),v.onResourcedFinished(e)})}}),u.default.on("onPreLoadPageResources",function(e){v.onPreLoadPageResources(e)}),u.default.on("onPostLoadPageResources",function(e){v.onPostLoadPageResources(e)});var k=function(e,o){return x[e]>x[o]?1:x[e]<x[o]?-1:0},w=function(e,o){return h[e]>h[o]?1:h[e]<h[o]?-1:0},P=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[e])o.nextTick(function(){n(null,m[e])});else{var t="page-c"===e.slice(0,6)?p.components[e]:p.json[e];t(function(o,t){m[e]=t,n(o,t)})}},N=function(e,n){f[e]?o.nextTick(function(){n(null,f[e])}):P(e,function(o,t){if(o)n(o);else{var s=y(t());f[e]=s,n(o,s)}})},E=1,U={empty:function(){j=[],h={},x={},_=[],b=[]},addPagesArray:function(e){b=e;var o="";d=(0,l.default)(e,o)},addDevRequires:function(e){c=e},addProdRequires:function(e){p=e},dequeue:function(e){return j.pop()},enqueue:function(e){if(!b.some(function(o){return o.path===e}))return!1;var o=1/E;E+=1,h[e]?h[e]+=1:h[e]=1,U.has(e)||j.unshift(e),j.sort(w);var n=d(e);return n.jsonName&&(x[n.jsonName]?x[n.jsonName]+=1+o:x[n.jsonName]=1+o,_.indexOf(n.jsonName)!==-1||m[n.jsonName]||_.unshift(n.jsonName)),n.componentChunkName&&(x[n.componentChunkName]?x[n.componentChunkName]+=1+o:x[n.componentChunkName]=1+o,_.indexOf(n.componentChunkName)!==-1||m[n.jsonName]||_.unshift(n.componentChunkName)),_.sort(k),v.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:_,resourcesCount:x}},getPages:function(){return{pathArray:j,pathCount:h}},getPage:function(e){return d(e)},has:function(e){return j.some(function(o){return o===e})},getResourcesForPathname:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(d(e)||navigator.serviceWorker.getRegistrations().then(function(e){var o=!0,n=!1,t=void 0;try{for(var s,r=(0,a.default)(e);!(o=(s=r.next()).done);o=!0){var l=s.value;l.unregister()}}catch(e){n=!0,t=e}finally{try{!o&&r.return&&r.return()}finally{if(n)throw t}}window.location.reload()})),R=!1;var t=d(e);if(!t)return void console.log("A page wasn't found for \""+e+'"');if(e=t.path,g[e])return o.nextTick(function(){n(g[e]),u.default.emit("onPostLoadPageResources",{page:t,pageResources:g[e]})}),g[e];u.default.emit("onPreLoadPageResources",{path:e});var s=void 0,r=void 0,l=function(){if(s&&r){g[e]={component:s,json:r};var o={component:s,json:r};n(o),u.default.emit("onPostLoadPageResources",{page:t,pageResources:o})}};return N(t.componentChunkName,function(e,o){e&&console.log("Loading the component for "+t.path+" failed"),s=o,l()}),void N(t.jsonName,function(e,o){e&&console.log("Loading the JSON for "+t.path+" failed"),r=o,l()})},peek:function(e){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(e){return j.length-j.indexOf(e)-1}};e.exports=U}).call(o,n("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,o){e.exports=[{componentChunkName:"page-component---node-modules-gatsby-plugin-offline-app-shell-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"page-component---src-templates-blog-page-js",jsonName:"posts-composeable-web.json",path:"/posts/composeable-web"},{componentChunkName:"page-component---src-templates-blog-page-js",jsonName:"about.json",path:"/about"},{componentChunkName:"page-component---src-pages-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"page-component---src-pages-projects-js",jsonName:"projects.json",path:"/projects/"}]},"./.cache/prefetcher.js":function(e,o){"use strict";e.exports=function(e){var o=e.getNextQueuedResources,n=e.createResourceDownload,t=[],s=[],a=function(){var e=o();e&&(s.push(e),n(e))},r=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(o){return o!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(o){return o!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(e){r({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){r({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){r({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){r({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:s}},empty:function(){t=[],s=[]}}}},0:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function s(e){window.___history||(window.___history=e,e.listen(function(e,o){(0,u.default)("onRouteUpdate",{location:e,action:o})}))}function a(e,o){var n=o.location.pathname,t=(0,u.default)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(t.length>0)return t[0];if(e){var s=e.location.pathname;if(s===n)return!1}return!0}var r=n("./node_modules/babel-runtime/helpers/extends.js"),l=t(r),i=n("./.cache/api-runner-browser.js"),u=t(i),d=n("./node_modules/react/react.js"),c=t(d),p=n("./node_modules/react-dom/index.js"),g=t(p),m=n("./node_modules/react-router-dom/index.js"),f=n("./node_modules/react-router-scroll/lib/index.js"),b=n("./node_modules/history/createBrowserHistory.js"),j=t(b),h=n("./.cache/emitter.js"),_=t(h),x=n("./.cache/pages.json"),y=t(x),v=n("./.cache/component-renderer.js"),R=t(v),k=n("./.cache/async-requires.js"),w=t(k),P=n("./.cache/loader.js"),N=t(P);window.___emitter=_.default,N.default.addPagesArray(y.default),N.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=N.default,window.matchPath=m.matchPath,(0,u.default)("onClientEntry"),(0,u.default)("registerServiceWorker").length>0&&n("./.cache/register-service-worker.js");var E=function(e){function o(t){t.page.path===N.default.getPage(e).path&&(_.default.off("onPostLoadPageResources",o),clearTimeout(n),window.___history.push(e))}if(window.location.pathname!==e){var n=setTimeout(function(){_.default.off("onPostLoadPageResources",o),_.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);N.default.getResourcesForPathname(e)?(clearTimeout(n),window.___history.push(e)):_.default.on("onPostLoadPageResources",o)}};window.___navigateTo=E;var U=(0,j.default)();(0,u.default)("onRouteUpdate",{location:U.location,action:U.action});var W=(0,u.default)("replaceRouterComponent",{history:U})[0],C=function(e){var o=e.children;return c.default.createElement(m.BrowserRouter,{history:U},o)},O=function(e){w.default.layouts.index?w.default.layouts.index(function(o,n){var t=n();e(t)}):e(function(e){return c.default.createElement("div",null,e.children())})};O(function(e){N.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,d.createElement)(W?W:C,null,(0,d.createElement)(f.ScrollContext,{shouldUpdateScroll:a},(0,d.createElement)((0,m.withRouter)(e),{children:function(e){return(0,d.createElement)(m.Route,{render:function(o){s(o.history);var n=e?e:o;return N.default.getPage(n.location.pathname)?(0,d.createElement)(R.default,(0,l.default)({},n)):(0,d.createElement)(R.default,{location:{pathname:"/404.html"}})}})}})))},n=(0,u.default)("wrapRootComponent",{Root:o},o)[0];g.default.render(c.default.createElement(n,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0)})})},"./.cache/register-service-worker.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./.cache/emitter.js"),a=t(s),r="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(r+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var o=e.installing;console.log("installingWorker",o),o.addEventListener("statechange",function(){switch(o.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---node-modules-gatsby-plugin-offline-app-shell-js!./node_modules/gatsby-plugin-offline/app-shell.js":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(9,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/gatsby-plugin-offline/app-shell.js")})})}},"./node_modules/gatsby-plugin-offline/gatsby-browser.js":function(e,o){"use strict";o.registerServiceWorker=function(){return!0}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js":function(e,o,n){"use strict";function t(){function e(e){var o=t.lastChild;return"SCRIPT"!==o.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",o)):void(o.onload=o.onerror=function(){o.onload=o.onerror=null,setTimeout(e,0)})}var o,t=document.querySelector("head"),s=n.e,a=n.s;n.e=function(t,r){var l=!1,i=!0,u=function(e){r&&(r(n,e),r=null)};return!a&&o&&o[t]?void u(!0):(s(t,function(){l||(l=!0,i?setTimeout(function(){u()}):u())}),void(l||(i=!1,e(function(){l||(l=!0,a?a[t]=void 0:(o||(o={}),o[t]=!0),u(!0))}))))}}t()},"./node_modules/hoist-non-react-statics/index.js":function(e,o){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},s="function"==typeof Object.getOwnPropertySymbols;e.exports=function(e,o,a){if("string"!=typeof o){var r=Object.getOwnPropertyNames(o);s&&(r=r.concat(Object.getOwnPropertySymbols(o)));for(var l=0;l<r.length;++l)if(!(n[r[l]]||t[r[l]]||a&&a[r[l]]))try{e[r[l]]=o[r[l]]}catch(e){}}return e}},"./node_modules/mitt/dist/mitt.js":function(e,o){function n(e){return e=e||Object.create(null),{on:function(o,n){(e[o]||(e[o]=[])).push(n)},off:function(o,n){e[o]&&e[o].splice(e[o].indexOf(n)>>>0,1)},emit:function(o,n){(e[o]||[]).map(function(e){e(n)}),(e["*"]||[]).map(function(e){e(o,n)})}}}e.exports=n},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(2,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/alex/Working/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/alex/Working/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/alex/Working/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/alex/Working/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/alex/Working/blog/node_modules/babel-preset-env/lib/index.js","/Users/alex/Working/blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/alex/Working/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(1,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/alex/Working/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/alex/Working/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/alex/Working/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/alex/Working/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/alex/Working/blog/node_modules/babel-preset-env/lib/index.js","/Users/alex/Working/blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/alex/Working/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-projects-js!./src/pages/projects.js":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(3,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/alex/Working/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/alex/Working/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/alex/Working/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/alex/Working/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/alex/Working/blog/node_modules/babel-preset-env/lib/index.js","/Users/alex/Working/blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/alex/Working/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/projects.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-templates-blog-page-js!./src/templates/blog-page.js":function(e,o,n){n("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(10,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/alex/Working/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/alex/Working/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/alex/Working/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/alex/Working/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/alex/Working/blog/node_modules/babel-preset-env/lib/index.js","/Users/alex/Working/blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/alex/Working/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/blog-page.js')})})}}});
//# sourceMappingURL=app-8769f61cc1c0bfc0d207.js.map