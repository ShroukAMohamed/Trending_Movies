import './polyfills.server.mjs';
function v(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)a.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]]);return o}function g(e,a,o,t){function i(n){return n instanceof o?n:new o(function(c){c(n)})}return new(o||(o=Promise))(function(n,c){function u(l){try{p(t.next(l))}catch(y){c(y)}}function f(l){try{p(t.throw(l))}catch(y){c(y)}}function p(l){l.done?n(l.value):i(l.value).then(u,f)}p((t=t.apply(e,a||[])).next())})}function _(e){var a=typeof Symbol=="function"&&Symbol.iterator,o=a&&e[a],t=0;if(o)return o.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(a?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(e){return this instanceof d?(this.v=e,this):new d(e)}function O(e,a,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=o.apply(e,a||[]),i,n=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",c),i[Symbol.asyncIterator]=function(){return this},i;function c(r){return function(s){return Promise.resolve(s).then(r,y)}}function u(r,s){t[r]&&(i[r]=function(h){return new Promise(function(w,m){n.push([r,h,w,m])>1||f(r,h)})},s&&(i[r]=s(i[r])))}function f(r,s){try{p(t[r](s))}catch(h){b(n[0][3],h)}}function p(r){r.value instanceof d?Promise.resolve(r.value.v).then(l,y):b(n[0][2],r)}function l(r){f("next",r)}function y(r){f("throw",r)}function b(r,s){r(s),n.shift(),n.length&&f(n[0][0],n[0][1])}}function j(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=e[Symbol.asyncIterator],o;return a?a.call(e):(e=typeof _=="function"?_(e):e[Symbol.iterator](),o={},t("next"),t("throw"),t("return"),o[Symbol.asyncIterator]=function(){return this},o);function t(n){o[n]=e[n]&&function(c){return new Promise(function(u,f){c=e[n](c),i(u,f,c.done,c.value)})}}function i(n,c,u,f){Promise.resolve(f).then(function(p){n({value:p,done:u})},c)}}export{v as a,g as b,d as c,O as d,j as e};
