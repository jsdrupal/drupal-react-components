!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.DrupalReactComponents=t(require("react")):e.DrupalReactComponents=t(e.React)}("undefined"!=typeof self?self:this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(t,n){t.exports=e},function(e,t,n){e.exports=n(6)()},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o,a;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=r(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(c.apply(null,n));else if("object"===o)for(var a in n)i.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}var i={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=c:"object"===r(n(3))&&n(3)?(o=[],void 0!==(a=function(){return c}.apply(t,o))&&(e.exports=a)):window.classNames=c}()},function(e,t){(function(t){e.exports=t}).call(t,{})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=n(10),a=n(11),c=n(12),i=n(13),u=n(15),s=n(16);n.d(t,"Button",function(){return r.a}),n.d(t,"Card",function(){return o.a}),n.d(t,"Checkbox",function(){return a.a}),n.d(t,"Form",function(){return c.a}),n.d(t,"Input",function(){return i.a}),n.d(t,"Label",function(){return u.a}),n.d(t,"Select",function(){return s.a})},function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=n(0),c=n.n(a),i=n(2),u=n.n(i),s=n(1),l=(n.n(s),function(e){var t=e.type,n=e.disabled,a=e.className,i=e.content,s=o(e,["type","disabled","className","content"]),l=r({},s,{type:t,disabled:n,className:u()(t?"button-".concat(t):"button-button",n?"button-disabled":null,a)});return c.a.createElement("button",l,i)});l.propTypes={autoFocus:s.bool,className:s.string,content:s.string.isRequired,disabled:s.bool,formEncType:Object(s.oneOf)(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]),formMethod:Object(s.oneOf)(["post","get"]),formTarget:Object(s.oneOf)(["_self","_blank","_parent","_top"]),name:s.string.isRequired,type:Object(s.oneOf)(["submit","reset","button","menu"])},l.defaultProps={autoFocus:!0,className:"",disabled:!1,formEncType:"text/plain",formMethod:"post",formTarget:"_self",type:"submit"},t.a=l},function(e,t,n){"use strict";var r=n(7),o=n(8),a=n(9);e.exports=function(){function e(e,t,n,r,c,i){i!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function r(e,t,n,r,a,c,i,u){if(o(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,c,i,u],f=0;s=new Error(t.replace(/%s/g,function(){return l[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),c=(n.n(a),function(e){var t=e.title,n=e.children;return o.a.createElement("div",{className:"card"},t?o.a.createElement("h1",{className:"card-title"},t):"",o.a.createElement("div",{className:"card-children"},n))});c.propTypes={children:Object(a.oneOfType)([Object(a.arrayOf)(a.node),a.node]),title:a.string},c.defaultProps={children:"",title:""},t.a=c},function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=n(0),c=n.n(a),i=n(2),u=n.n(i),s=n(1),l=(n.n(s),function(e){var t=(e.className,e.label),n=(e.title,e.disabled),a=o(e,["className","label","title","disabled"]),i=u()("checkbox",{"checkbox-disabled":n},e.className);return c.a.createElement("label",{className:i},t&&c.a.createElement("span",{className:"checkbox-label"},t),c.a.createElement("input",r({type:"checkbox",className:"checkbox-input",disabled:n},a)))});l.propTypes={className:s.string,disabled:s.bool,label:s.string,title:s.string},l.defaultProps={className:"",disabled:!1,label:!1,title:!1},t.a=l},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2),c=n.n(a),i=n(1),u=(n.n(i),function(e){var t=e.className,n=e.onSubmit,r=e.children,a=c()("form",t);return o.a.createElement("form",{className:a,onSubmit:n},r)});u.propTypes={className:i.string,children:Object(i.oneOfType)([Object(i.arrayOf)(i.node),i.node]),onSubmit:i.func.isRequired},u.defaultProps={className:"",children:""},t.a=u},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),c=(n.n(a),n(14)),i=function(e){var t=e.type,n=e.accept,r=e.autocomplete,a=e.disabled;return o.a.createElement("input",{type:t,accept:n,autoComplete:r,disabled:a})};i.propTypes={type:Object(a.oneOf)(c.b).isRequired,accept:a.string,autocomplete:Object(a.oneOf)(c.a),disabled:a.bool},i.defaultProps={accept:!1,autocomplete:"off",disabled:!1},t.a=i},function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var r=["button","checkbox","color","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","onSubmittel","text","time","url","week"],o=["off","on","name","honorific-prefix","given-name","family-name","honorific-suffix","nickname","email","username","new-password","current-password","organization-title","organization","street-address","country","country-name","postal-code","cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","transaction-currency","transaction-amount","language","bday","bday-day","bday-month","bday-year","sex","tel","url","photo"]},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2),c=n.n(a),i=n(1),u=(n.n(i),function(e){var t=e.className,n=e.htmlFor,r=e.children,a=e.text;return o.a.createElement("label",{htmlFor:n,className:c()("form-label",t)},o.a.createElement("span",null,a),r)});u.propTypes={className:i.string,htmlFor:i.string,text:i.string,children:Object(i.oneOfType)([Object(i.arrayOf)(i.node),i.node]).isRequired},u.defaultProps={className:"",htmlFor:"",text:""},t.a=u},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function i(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l,f,p=n(0),b=n.n(p),d=n(1),m=(n.n(d),f=l=function(e){function t(e){var n,r=e.onChange;return o(this,t),n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),Object.defineProperty(s(n),"changeHandler",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=new Set(Array.from(e.target.options).filter(function(e){return e.selected}).map(function(e){return e.value}));n.onChange(t)}}),n.onChange=r,n}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.data,r=e.selected,o=e.size;return b.a.createElement("select",{key:"select-".concat(t||"select"),multiple:!0,size:o,onChange:this.changeHandler,value:Array.from(r||[])},n.map(function(e){var t=e.value,n=e.item;return b.a.createElement("option",{key:"".concat(n,"-").concat(t),value:t},n)}))}}]),t}(p.Component),Object.defineProperty(l,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{data:Object(d.arrayOf)(Object(d.shape)({item:d.string,value:d.string})).isRequired,label:d.string,onChange:d.func.isRequired,selected:Object(d.arrayOf)(d.array),size:d.string}}),Object.defineProperty(l,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{label:"",size:"2",selected:[]}}),f);t.a=m}])});