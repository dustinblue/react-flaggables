!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactFlaggables=t(require("react")):e.ReactFlaggables=t(e.React)}(window,function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=4)}([function(e,t,r){e.exports=r(2)()},function(t,r){t.exports=e},function(e,t,r){"use strict";var n=r(3);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,c){if(c!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(0),c=r.n(o),u=function(e){return"react-flaggables-".concat(e)},i=function(e){var t=u(e),r=localStorage.getItem(t);if(!r)return[];try{return JSON.parse(r)}catch(e){return console.error(e),!1}};function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g={flagged:{}},y=Object(n.createContext)(),b=Object(n.createContext)(g),v=function(e,t){var r=t.type,n=t.namespace,a=t.value,o=e.flagged,c=o&&o[n]||[];switch(r){case"REMOVE_ITEM":return p({},e,{flagged:p({},o,d({},n,c.filter(function(e){return e!==a})))});case"ADD_ITEM":return p({},e,{flagged:p({},o,d({},n,f(new Set([].concat(f(c),[a])))))});case"SET_ITEMS":return p({},e,{checkedValues:p({},o,d({},n,a))});default:return e}},m=function(e){var t=e.children,r=e.defaultState,o=e.setItems,c=e.namespace,u=l(Object(n.useReducer)(v,r),2),i=u[0],f=u[1],s=i.flagged,p=s&&s[c]||[];return Object(n.useEffect)(function(){o(c,p)}),a.a.createElement(b.Provider,{value:i},a.a.createElement(y.Provider,{value:f},t))};m.propTypes={children:c.a.shape({}).isRequired,defaultState:c.a.shape({flagged:c.a.array}),namespace:c.a.string.isRequired,setItems:c.a.func},m.defaultProps={defaultState:g,setItems:function(e,t){var r=u(e);try{return localStorage.setItem(r,JSON.stringify(t))}catch(e){return console.error(e),!1}}};var O=function(){var e=Object(n.useContext)(b);if(void 0===e)throw new Error("useFlaggableState must be used within a FlaggableProvider");return e},h=function(){var e=Object(n.useContext)(y);if(void 0===e)throw new Error("useFlaggableDispatch must be used within a FlaggableProvider");return e};function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w=function(e){var t=e.id,r=e.namespace,n=e.className,o=e.flagger,c=e.children,u=j([O(),h()],2),i=u[0],l=u[1],f="".concat(r," ").concat(function(e,t){var r=O().flagged;return-1!==(r&&r[t]||[]).indexOf(e)}(t,r)?"flagged":"");return a.a.createElement("button",{type:"button",onClick:function(){o(t,r,i,l)},className:"".concat(f," ").concat(n)},c)};w.propTypes={id:c.a.string.isRequired,namespace:c.a.string.isRequired,className:c.a.string,flagger:c.a.func,children:c.a.node},w.defaultProps={className:"",flagger:function(e,t,r,n){var a=r.flagged;n({type:-1!==(a&&a[t]||[]).indexOf(e)?"REMOVE_ITEM":"ADD_ITEM",namespace:t,value:e})},children:null};var E=function(e){var t=e.namespace,r=e.label,n=O().flagged,o=n&&n[t]?n[t].length:0;return a.a.createElement("div",{className:"flaggable-counter--".concat(t)},"(".concat(o,") ").concat(r))};E.propTypes={namespace:c.a.string.isRequired,label:c.a.string.isRequired},r.d(t,"Flag",function(){return w}),r.d(t,"FlaggableProvider",function(){return m}),r.d(t,"FlagCounter",function(){return E}),r.d(t,"getItems",function(){return i})}])});