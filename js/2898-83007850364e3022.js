"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2898],{19536:function(a,b,c){c.r(b);var d=c(70314),e=c(88985),f=function(){var a,b,c=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},f=c.product,g=(0,d.default)().publicRuntimeConfig.kwaiId;(null==(a=window)?void 0:null==(b=a.kwaiq)?void 0:b.instance)&&g&&f&&window.kwaiq.instance(g).track("addToCart",(0,e.default)(f))};b.default=f},77981:function(a,b,c){c.r(b);var d=c(19536),e=c(9327),f={"addtocart:success":[d.default],pageview:[e.default]};b.default=f},9327:function(a,b,c){c.r(b);var d=c(70314),e=c(88985),f=function(){var a,b,c=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},f=c.data,g=(f=void 0===f?{}:f).product,h=c.structure,i=(0,d.default)().publicRuntimeConfig.kwaiId;(null==(a=window)?void 0:null==(b=a.kwaiq)?void 0:b.instance)&&i&&((null==h?void 0:h.id)==="product"?window.kwaiq.instance(i).track("contentView",(0,e.default)(g)):window.kwaiq.instance(i).track("contentView"))};b.default=f},40649:function(a,b,c){c.r(b),c.d(b,{default:function(){return d.default}});var d=c(77981)},88985:function(a,b,c){c.r(b);var d=c(38009),e=function(a){var b,c,e,f,g,h;return{content_category:"".concat((0,d.oF)(null==a?void 0:null==(b=a.category)?void 0:b.id)," - ").concat((0,d.oF)(null==a?void 0:null==(c=a.subcategory)?void 0:c.id)),content_id:null==a?void 0:a.variationId,content_name:null==a?void 0:a.title,content_type:"product",currency:"BRL",price:(null==a?void 0:null==(e=a.price)?void 0:e.bestPrice)||(null==a?void 0:null==(f=a.price)?void 0:f.price),quantity:1,value:(null==a?void 0:null==(g=a.price)?void 0:g.bestPrice)||(null==a?void 0:null==(h=a.price)?void 0:h.price)}};b.default=e},12271:function(a,b,c){c.r(b);var d=c(83990),e=c(7145),f=c(71658),g=c(27368),h=c(9652),i=c(48133),j={"product:view":[g.default,d.default],"productlist:click":[f.default,i.default],"productlist:impression":[e.default,h.default]};b.default=j},55634:function(a,b,c){c.r(b);var d=c(84839),e=c(48924),f=function(a){var b,c,f=a.eventName,g=a.product,h=a.listPosition,i=a.structure;(0,d.default)(f,{ad_id:null==g?void 0:null==(b=g.ads)?void 0:b.id,channel_id:e.default.channelId,content_id:g.id,content_position:g.position,module_position:h,page_id:e.default.searchDefault.pageId,placement_id:e.default.searchDefault.placementId,showcase_id:e.default.searchDefault.showcaseId,user_id:null==i?void 0:null==(c=i.cookies)?void 0:c.customerId})};b.default=f},48133:function(a,b,c){c.r(b);var d=c(55634),e=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},c=b.structure;(null==a?void 0:a.ads)&&(0,d.default)({eventName:"Click",listPosition:a.listPosition,product:a,structure:c})};b.default=e},9652:function(a,b,c){c.r(b);var d=c(55634),e=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.products,c=a.listPosition,e=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},f=e.structure;b.forEach(function(a){(null==a?void 0:a.ads)&&(0,d.default)({eventName:"Impression",listPosition:c,product:a,structure:f})})};b.default=e},27368:function(a,b,c){c.r(b);var d=c(55634),e=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.product,c=a.listPosition,e=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},f=e.structure;(null==b?void 0:b.ads)&&(0,d.default)({eventName:"View",listPosition:c,product:b,structure:f})};b.default=e},71658:function(a,b,c){c.r(b);var d=c(48924),e=c(79870),f=c(84839),g=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},c=b.structure;if((null==(g=window)?void 0:null==(h=g.magaluads)?void 0:h.track)&&"bob"===a.origin&&a.trackingUrl){var g,h,i,j,k,l,m,n,o=(0,e.default)(a.trackingUrl);o&&(0,f.default)("Click",{ad_id:o,channel_id:d.default.channelId,content_id:null==a?void 0:null==(i=a.product)?void 0:i.id,content_position:null==a?void 0:null==(j=a.product)?void 0:j.position,module_position:null==a?void 0:a.listPosition,page_id:null==a?void 0:null==(k=a.showcase)?void 0:k.pageId,placement_id:null==a?void 0:null==(l=a.showcase)?void 0:l.placeId,showcase_id:null==a?void 0:null==(m=a.showcase)?void 0:m.id,user_id:null==(n=c.cookies)?void 0:n.customerId})}};b.default=g},7145:function(a,b,c){c.r(b);var d=c(48924),e=c(79870),f=c(84839),g=function(){var a,b,c=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},g=c.products,h=c.listPosition,i=c.origin,j=c.showcase,k=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},l=k.structure;(null==(a=window)?void 0:null==(b=a.magaluads)?void 0:b.track)&&"bob"===i&&(void 0===g?[]:g).forEach(function(a){if(a.trackingUrl){var b,c=(0,e.default)(a.trackingUrl);c&&(0,f.default)("Impression",{ad_id:c,channel_id:d.default.channelId,content_id:a.id,content_position:a.position,module_position:h,page_id:j.pageId,placement_id:j.placeId,showcase_id:j.id,user_id:null==l?void 0:null==(b=l.cookies)?void 0:b.customerId})}})};b.default=g},83990:function(a,b,c){c.r(b);var d=c(48924),e=c(79870),f=c(84839),g=function(){var a,b,c=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},g=c.products,h=void 0===g?[]:g,i=c.product,j=c.listPosition,k=c.origin,l=c.showcase,m=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},n=m.structure;(null==(a=window)?void 0:null==(b=a.magaluads)?void 0:b.track)&&"bob"===k&&(0===h.length&&i&&h.push(i),h.forEach(function(a){if(a.trackingUrl){var b,c=(0,e.default)(a.trackingUrl);c&&(0,f.default)("View",{ad_id:c,channel_id:d.default.channelId,content_id:a.id,content_position:a.position,module_position:j,page_id:l.pageId,placement_id:l.placeId,showcase_id:l.id,user_id:null==n?void 0:null==(b=n.cookies)?void 0:b.customerId})}}))};b.default=g},66202:function(a,b,c){c.r(b),c.d(b,{default:function(){return d.default}});var d=c(12271)},48924:function(a,b,c){c.r(b),b.default={channelId:"magazine_ecomm",searchDefault:{pageId:"search_results",placementId:"search_results",showcaseId:"search_results"}}},10865:function(a,b,c){c.r(b);var d=c(48834).Buffer,e=function(a){try{return d.from(a,"base64").toString("UTF-8")}catch(b){try{return btoa(a)}catch(c){return null}}};b.default=e},84839:function(a,b,c){c.r(b);var d=function(a,b){var c,d;(null==(c=window)?void 0:null==(d=c.magaluads)?void 0:d.track)&&b.ad_id&&window.magaluads.track(a,b)};b.default=d},79870:function(a,b,c){c.r(b);var d=c(76854),e=c(10865),f=function(a){var b=null==a?void 0:a.split("?"),c=(0,d.Z)(b,1)[0],f=null==c?void 0:c.split("/")[8];return f?(0,e.default)(f):null};b.default=f},65635:function(a,b,c){c.r(b);var d={"question:miniapp:open:float:modal":[c(16468).default]};b.default=d},16468:function(a,b,c){c.r(b);var d=c(86522),e=c(34795),f=c(38009);function g(){g=function(){return a};var a={},b=Object.prototype,c=b.hasOwnProperty,e=Object.defineProperty||function(a,b,c){a[b]=c.value},f="function"==typeof Symbol?Symbol:{},h=f.iterator||"@@iterator",i=f.asyncIterator||"@@asyncIterator",j=f.toStringTag||"@@toStringTag";function k(a,b,c){return Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}),a[b]}try{k({},"")}catch(l){k=function(a,b,c){return a[b]=c}}function m(a,b,c,d){var f=Object.create((b&&b.prototype instanceof p?b:p).prototype);return e(f,"_invoke",{value:y(a,c,new C(d||[]))}),f}function n(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(d){return{type:"throw",arg:d}}}a.wrap=m;var o={};function p(){}function q(){}function r(){}var s={};k(s,h,function(){return this});var t=Object.getPrototypeOf,u=t&&t(t(D([])));u&&u!==b&&c.call(u,h)&&(s=u);var v=r.prototype=p.prototype=Object.create(s);function w(a){["next","throw","return"].forEach(function(b){k(a,b,function(a){return this._invoke(b,a)})})}function x(a,b){var f;function g(e,f,h,i){var j=n(a[e],a,f);if("throw"!==j.type){var k=j.arg,l=k.value;return l&&"object"==(0,d.Z)(l)&&c.call(l,"__await")?b.resolve(l.__await).then(function(a){g("next",a,h,i)},function(a){g("throw",a,h,i)}):b.resolve(l).then(function(a){k.value=a,h(k)},function(a){return g("throw",a,h,i)})}i(j.arg)}e(this,"_invoke",{value:function(a,c){function d(){return new b(function(b,d){g(a,c,b,d)})}return f=f?f.then(d,d):d()}})}function y(a,b,c){var d="suspendedStart";return function(e,f){if("executing"===d)throw Error("Generator is already running");if("completed"===d){if("throw"===e)throw f;return E()}for(c.method=e,c.arg=f;;){var g=c.delegate;if(g){var h=z(g,c);if(h){if(h===o)continue;return h}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if("suspendedStart"===d)throw d="completed",c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);d="executing";var i=n(a,b,c);if("normal"===i.type){if(d=c.done?"completed":"suspendedYield",i.arg===o)continue;return{value:i.arg,done:c.done}}"throw"===i.type&&(d="completed",c.method="throw",c.arg=i.arg)}}}function z(a,b){var c=a.iterator[b.method];if(void 0===c){if(b.delegate=null,"throw"===b.method){if(a.iterator.return&&(b.method="return",b.arg=void 0,z(a,b),"throw"===b.method))return o;b.method="throw",b.arg=TypeError("The iterator does not provide a 'throw' method")}return o}var d=n(c,a.iterator,b.arg);if("throw"===d.type)return b.method="throw",b.arg=d.arg,b.delegate=null,o;var e=d.arg;return e?e.done?(b[a.resultName]=e.value,b.next=a.nextLoc,"return"!==b.method&&(b.method="next",b.arg=void 0),b.delegate=null,o):e:(b.method="throw",b.arg=TypeError("iterator result is not an object"),b.delegate=null,o)}function A(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function B(a){var b=a.completion||{};b.type="normal",delete b.arg,a.completion=b}function C(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(A,this),this.reset(!0)}function D(a){if(a){var b=a[h];if(b)return b.call(a);if("function"==typeof a.next)return a;if(!isNaN(a.length)){var d=-1,e=function b(){for(;++d<a.length;)if(c.call(a,d))return b.value=a[d],b.done=!1,b;return b.value=void 0,b.done=!0,b};return e.next=e}}return{next:E}}function E(){return{value:void 0,done:!0}}return q.prototype=r,e(v,"constructor",{value:r,configurable:!0}),e(r,"constructor",{value:q,configurable:!0}),q.displayName=k(r,j,"GeneratorFunction"),a.isGeneratorFunction=function(a){var b="function"==typeof a&&a.constructor;return!!b&&(b===q||"GeneratorFunction"===(b.displayName||b.name))},a.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,r):(a.__proto__=r,k(a,j,"GeneratorFunction")),a.prototype=Object.create(v),a},a.awrap=function(a){return{__await:a}},w(x.prototype),k(x.prototype,i,function(){return this}),a.AsyncIterator=x,a.async=function(b,c,d,e,f){void 0===f&&(f=Promise);var g=new x(m(b,c,d,e),f);return a.isGeneratorFunction(c)?g:g.next().then(function(a){return a.done?a.value:g.next()})},w(v),k(v,j,"Generator"),k(v,h,function(){return this}),k(v,"toString",function(){return"[object Generator]"}),a.keys=function(a){var b=Object(a),c=[];for(var d in b)c.push(d);return c.reverse(),function a(){for(;c.length;){var d=c.pop();if(d in b)return a.value=d,a.done=!1,a}return a.done=!0,a}},a.values=D,C.prototype={constructor:C,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(B),!a)for(var b in this)"t"===b.charAt(0)&&c.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=void 0)},stop:function(){this.done=!0;var a=this.tryEntries[0].completion;if("throw"===a.type)throw a.arg;return this.rval},dispatchException:function(a){if(this.done)throw a;var b=this;function d(c,d){return g.type="throw",g.arg=a,b.next=c,d&&(b.method="next",b.arg=void 0),!!d}for(var e=this.tryEntries.length-1;e>=0;--e){var f=this.tryEntries[e],g=f.completion;if("root"===f.tryLoc)return d("end");if(f.tryLoc<=this.prev){var h=c.call(f,"catchLoc"),i=c.call(f,"finallyLoc");if(h&&i){if(this.prev<f.catchLoc)return d(f.catchLoc,!0);if(this.prev<f.finallyLoc)return d(f.finallyLoc)}else if(h){if(this.prev<f.catchLoc)return d(f.catchLoc,!0)}else{if(!i)throw Error("try statement without catch or finally");if(this.prev<f.finallyLoc)return d(f.finallyLoc)}}}},abrupt:function(a,b){for(var d=this.tryEntries.length-1;d>=0;--d){var e=this.tryEntries[d];if(e.tryLoc<=this.prev&&c.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var f=e;break}}f&&("break"===a||"continue"===a)&&f.tryLoc<=b&&b<=f.finallyLoc&&(f=null);var g=f?f.completion:{};return g.type=a,g.arg=b,f?(this.method="next",this.next=f.finallyLoc,o):this.complete(g)},complete:function(a,b){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&b&&(this.next=b),o},finish:function(a){for(var b=this.tryEntries.length-1;b>=0;--b){var c=this.tryEntries[b];if(c.finallyLoc===a)return this.complete(c.completion,c.afterLoc),B(c),o}},catch:function(a){for(var b=this.tryEntries.length-1;b>=0;--b){var c=this.tryEntries[b];if(c.tryLoc===a){var d=c.completion;if("throw"===d.type){var e=d.arg;B(c)}return e}}throw Error("illegal catch attempt")},delegateYield:function(a,b,c){return this.delegate={iterator:D(a),resultName:b,nextLoc:c},"next"===this.method&&(this.arg=void 0),o}},a}var h,i=(h=(0,e.Z)(g().mark(function a(){var b,c,d,e,h=arguments;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=(b=h.length>0&& void 0!==h[0]?h[0]:{}).structure,d=(0,f.Yd)((null==c?void 0:c.config)||{}),a.next=4,(0,f.tI)(d);case 4:if(e=a.sent){a.next=15;break}return a.prev=6,a.next=9,(0,f.uY)(d);case 9:return a.abrupt("return",a.sent);case 12:return a.prev=12,a.t0=a.catch(6),a.abrupt("return",{});case 15:return a.abrupt("return",null);case 16:case"end":return a.stop()}},a,null,[[6,12]])})),function(){return h.apply(this,arguments)});b.default=i},10379:function(a,b,c){c.r(b),c.d(b,{default:function(){return d.default}});var d=c(65635)},3703:function(a,b,c){c.r(b);var d=c(86522),e=c(34795);function f(){f=function(){return a};var a={},b=Object.prototype,c=b.hasOwnProperty,e=Object.defineProperty||function(a,b,c){a[b]=c.value},g="function"==typeof Symbol?Symbol:{},h=g.iterator||"@@iterator",i=g.asyncIterator||"@@asyncIterator",j=g.toStringTag||"@@toStringTag";function k(a,b,c){return Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}),a[b]}try{k({},"")}catch(l){k=function(a,b,c){return a[b]=c}}function m(a,b,c,d){var f=Object.create((b&&b.prototype instanceof p?b:p).prototype);return e(f,"_invoke",{value:y(a,c,new C(d||[]))}),f}function n(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(d){return{type:"throw",arg:d}}}a.wrap=m;var o={};function p(){}function q(){}function r(){}var s={};k(s,h,function(){return this});var t=Object.getPrototypeOf,u=t&&t(t(D([])));u&&u!==b&&c.call(u,h)&&(s=u);var v=r.prototype=p.prototype=Object.create(s);function w(a){["next","throw","return"].forEach(function(b){k(a,b,function(a){return this._invoke(b,a)})})}function x(a,b){var f;function g(e,f,h,i){var j=n(a[e],a,f);if("throw"!==j.type){var k=j.arg,l=k.value;return l&&"object"==(0,d.Z)(l)&&c.call(l,"__await")?b.resolve(l.__await).then(function(a){g("next",a,h,i)},function(a){g("throw",a,h,i)}):b.resolve(l).then(function(a){k.value=a,h(k)},function(a){return g("throw",a,h,i)})}i(j.arg)}e(this,"_invoke",{value:function(a,c){function d(){return new b(function(b,d){g(a,c,b,d)})}return f=f?f.then(d,d):d()}})}function y(a,b,c){var d="suspendedStart";return function(e,f){if("executing"===d)throw Error("Generator is already running");if("completed"===d){if("throw"===e)throw f;return E()}for(c.method=e,c.arg=f;;){var g=c.delegate;if(g){var h=z(g,c);if(h){if(h===o)continue;return h}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if("suspendedStart"===d)throw d="completed",c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);d="executing";var i=n(a,b,c);if("normal"===i.type){if(d=c.done?"completed":"suspendedYield",i.arg===o)continue;return{value:i.arg,done:c.done}}"throw"===i.type&&(d="completed",c.method="throw",c.arg=i.arg)}}}function z(a,b){var c=a.iterator[b.method];if(void 0===c){if(b.delegate=null,"throw"===b.method){if(a.iterator.return&&(b.method="return",b.arg=void 0,z(a,b),"throw"===b.method))return o;b.method="throw",b.arg=TypeError("The iterator does not provide a 'throw' method")}return o}var d=n(c,a.iterator,b.arg);if("throw"===d.type)return b.method="throw",b.arg=d.arg,b.delegate=null,o;var e=d.arg;return e?e.done?(b[a.resultName]=e.value,b.next=a.nextLoc,"return"!==b.method&&(b.method="next",b.arg=void 0),b.delegate=null,o):e:(b.method="throw",b.arg=TypeError("iterator result is not an object"),b.delegate=null,o)}function A(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function B(a){var b=a.completion||{};b.type="normal",delete b.arg,a.completion=b}function C(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(A,this),this.reset(!0)}function D(a){if(a){var b=a[h];if(b)return b.call(a);if("function"==typeof a.next)return a;if(!isNaN(a.length)){var d=-1,e=function b(){for(;++d<a.length;)if(c.call(a,d))return b.value=a[d],b.done=!1,b;return b.value=void 0,b.done=!0,b};return e.next=e}}return{next:E}}function E(){return{value:void 0,done:!0}}return q.prototype=r,e(v,"constructor",{value:r,configurable:!0}),e(r,"constructor",{value:q,configurable:!0}),q.displayName=k(r,j,"GeneratorFunction"),a.isGeneratorFunction=function(a){var b="function"==typeof a&&a.constructor;return!!b&&(b===q||"GeneratorFunction"===(b.displayName||b.name))},a.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,r):(a.__proto__=r,k(a,j,"GeneratorFunction")),a.prototype=Object.create(v),a},a.awrap=function(a){return{__await:a}},w(x.prototype),k(x.prototype,i,function(){return this}),a.AsyncIterator=x,a.async=function(b,c,d,e,f){void 0===f&&(f=Promise);var g=new x(m(b,c,d,e),f);return a.isGeneratorFunction(c)?g:g.next().then(function(a){return a.done?a.value:g.next()})},w(v),k(v,j,"Generator"),k(v,h,function(){return this}),k(v,"toString",function(){return"[object Generator]"}),a.keys=function(a){var b=Object(a),c=[];for(var d in b)c.push(d);return c.reverse(),function a(){for(;c.length;){var d=c.pop();if(d in b)return a.value=d,a.done=!1,a}return a.done=!0,a}},a.values=D,C.prototype={constructor:C,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(B),!a)for(var b in this)"t"===b.charAt(0)&&c.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=void 0)},stop:function(){this.done=!0;var a=this.tryEntries[0].completion;if("throw"===a.type)throw a.arg;return this.rval},dispatchException:function(a){if(this.done)throw a;var b=this;function d(c,d){return g.type="throw",g.arg=a,b.next=c,d&&(b.method="next",b.arg=void 0),!!d}for(var e=this.tryEntries.length-1;e>=0;--e){var f=this.tryEntries[e],g=f.completion;if("root"===f.tryLoc)return d("end");if(f.tryLoc<=this.prev){var h=c.call(f,"catchLoc"),i=c.call(f,"finallyLoc");if(h&&i){if(this.prev<f.catchLoc)return d(f.catchLoc,!0);if(this.prev<f.finallyLoc)return d(f.finallyLoc)}else if(h){if(this.prev<f.catchLoc)return d(f.catchLoc,!0)}else{if(!i)throw Error("try statement without catch or finally");if(this.prev<f.finallyLoc)return d(f.finallyLoc)}}}},abrupt:function(a,b){for(var d=this.tryEntries.length-1;d>=0;--d){var e=this.tryEntries[d];if(e.tryLoc<=this.prev&&c.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var f=e;break}}f&&("break"===a||"continue"===a)&&f.tryLoc<=b&&b<=f.finallyLoc&&(f=null);var g=f?f.completion:{};return g.type=a,g.arg=b,f?(this.method="next",this.next=f.finallyLoc,o):this.complete(g)},complete:function(a,b){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&b&&(this.next=b),o},finish:function(a){for(var b=this.tryEntries.length-1;b>=0;--b){var c=this.tryEntries[b];if(c.finallyLoc===a)return this.complete(c.completion,c.afterLoc),B(c),o}},catch:function(a){for(var b=this.tryEntries.length-1;b>=0;--b){var c=this.tryEntries[b];if(c.tryLoc===a){var d=c.completion;if("throw"===d.type){var e=d.arg;B(c)}return e}}throw Error("illegal catch attempt")},delegateYield:function(a,b,c){return this.delegate={iterator:D(a),resultName:b,nextLoc:c},"next"===this.method&&(this.arg=void 0),o}},a}var g,h=(g=(0,e.Z)(f().mark(function a(b){var c,d,e,g,h;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return g=null==(e=b.config)?void 0:null==(c=e.parceiromagalu)?void 0:null==(d=c.rochelle)?void 0:d["profile-actions"],a.prev=2,a.next=5,fetch(g,{method:"POST"});case 5:if((h=a.sent).ok){a.next=8;break}throw Error("actionPoints request failed for ".concat(g," with status: ").concat(h.status," ").concat(h.statusText));case 8:return a.abrupt("return",{});case 11:return a.prev=11,a.t0=a.catch(2),console.error("[Events - actionPoints] - error: ".concat(a.t0)),a.abrupt("return",[]);case 15:case"end":return a.stop()}},a,null,[[2,11]])})),function(a){return g.apply(this,arguments)});b.default=h},41234:function(a,b,c){c.r(b);var d={"facebook:socialshare:click":[c(3703).default]};b.default=d},99141:function(a,b,c){c.r(b);var d=c(38009),e=c(58373),f=d.VD.ML2_SID,g=function(a,b,c){var g,h,i,j=a.cartId,k=b.structure,l=null==k?void 0:null==(g=k.route)?void 0:g.storeId,m=(0,e.default)(l,null==c?void 0:c.prefix),n=(0,d.ej)(f),o=(0,d.ej)("".concat(f,"_").concat(m));(o!==j||n!==j)&&((0,d.d8)({domain:null==k?void 0:null==(h=k.config)?void 0:h.cookieDomain,name:f,value:j}),(0,d.d8)({domain:null==k?void 0:null==(i=k.config)?void 0:i.cookieDomain,name:"".concat(f,"_").concat(m),value:j}))};b.default=g},63684:function(a,b,c){c.r(b);var d=c(58996),e=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},c=b.structure;(0,d.default)({structure:c})};b.default=e},86823:function(a,b,c){c.r(b);var d=c(58996),e=c(63684),f=c(99141),g={"addtocart:success":[f.default],"buybuttons:click":[e.default],pageview:[d.default],"shoppingbag:click":[d.default]};b.default=g},58373:function(a,b,c){c.r(b);var d=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:"",b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"magazine";return(null==a?void 0:a.startsWith(b))?a:"".concat(b).concat(a)};b.default=d},58996:function(a,b,c){c.r(b);var d=c(38009),e=c(58373),f=d.VD.ML2_SID,g=function(a,b){var c,g,h,i,j,k,l=a.structure,m=null==l?void 0:null==(c=l.route)?void 0:c.storeId,n=(0,e.default)(m,null==b?void 0:b.prefix),o=(0,d.ej)(f),p=(0,d.ej)("".concat(f,"_").concat(n));if((0,d.d8)({domain:null==l?void 0:null==(g=l.config)?void 0:g.cookieDomain,name:"MLPARCEIRO",value:null!==(h=null==b?void 0:b.partnerId)&& void 0!==h?h:3440}),(0,d.d8)({domain:null==l?void 0:null==(i=l.config)?void 0:i.cookieDomain,name:(null==b?void 0:b.cookieShowcaseName)||"mvc_showcase_name",value:n}),p!==o){if(p){(0,d.d8)({domain:null==l?void 0:null==(k=l.config)?void 0:k.cookieDomain,name:f,value:p});return}(0,d.nJ)(f,null==l?void 0:null==(j=l.config)?void 0:j.cookieDomain,"/")}};b.default=g},3433:function(a,b,c){c.r(b);var d=c(99141),e=function(a,b){(0,d.default)(a,b,{prefix:"parceiro"})};b.default=e},29805:function(a,b,c){c.r(b);var d=c(59765),e=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},c=b.structure;(0,d.default)({structure:c})};b.default=e},58579:function(a,b,c){c.r(b);var d=c(59765),e=c(29805),f=c(3433),g={"addtocart:success":[f.default],"buybuttons:click":[e.default],pageview:[d.default],"shoppingbag:click":[d.default]};b.default=g},59765:function(a,b,c){c.r(b);var d=c(58996),e=function(a){(0,d.default)(a,{cookieShowcaseName:"pme_showcase_name",partnerId:67633,prefix:"parceiro"})};b.default=e},89923:function(a,b,c){c.r(b);var d=function(a){var b,c,d,e,f=a.structure,g=null==f?void 0:f.id,h=null==f?void 0:null==(b=f.cookies)?void 0:null==(c=b.accountData)?void 0:c.customer_id,i=null==f?void 0:f.route;return(window.rtbhEvents=window.rtbhEvents||[],"category"===g)?null==(d=window)?void 0:d.rtbhEvents.push({eventType:"category",categoryId:i.categoryId},{eventType:"uid",id:null!=h?h:"unknown"}):"subcategory"===g?null==(e=window)?void 0:e.rtbhEvents.push({eventType:"category",categoryId:i.subCategoryId},{eventType:"uid",id:null!=h?h:"unknown"}):null};b.default=d},71238:function(a,b,c){c.r(b);var d=function(a){var b,c,d,e=a.structure,f=null==e?void 0:e.id,g=null==e?void 0:null==(b=e.cookies)?void 0:null==(c=b.accountData)?void 0:c.customer_id;window.rtbhEvents=window.rtbhEvents||[],"home"===f&&(null==(d=window)||d.rtbhEvents.push({eventType:"home"},{eventType:"uid",id:null!=g?g:"unknown"}))};b.default=d},64054:function(a,b,c){c.r(b);var d=function(a){var b,c=a.clientId,d=a.product,e=d.id;window.rtbhEvents=window.rtbhEvents||[],null==(b=window)||b.rtbhEvents.push({eventType:"basketadd",offerId:e},{eventType:"uid",id:c||"unknown"})};b.default=d},23018:function(a,b,c){c.r(b);var d=c(50448),e=c(64054),f=c(71238),g=c(89923),h=c(56355),i=c(9063),j=c(96913),k=c(41654),l={"addtocart:success":[e.default],pageview:[f.default,g.default,h.default,k.default,i.default,j.default],"product:wishlist:click":[d.default]};b.default=l},50448:function(a,b,c){c.r(b);var d=function(a){var b,c,d,e=a.structure,f=a.id,g=null==e?void 0:null==(b=e.cookies)?void 0:null==(c=b.accountData)?void 0:c.customer_id;window.rtbhEvents=window.rtbhEvents||[],null==(d=window)||d.rtbhEvents.push({eventType:"wishlist",offerId:f},{eventType:"uid",id:null!=g?g:"unknown"})};b.default=d},9063:function(a,b,c){c.r(b);var d=function(a){var b,c,d,e,f=a.data,g=a.structure,h=null==g?void 0:g.id,i=null==g?void 0:null==(b=g.cookies)?void 0:null==(c=b.accountData)?void 0:c.customer_id,j=null==f?void 0:null==(d=f.product)?void 0:d.id;window.rtbhEvents=window.rtbhEvents||[],"product"===h&&(null==(e=window)||e.rtbhEvents.push({eventType:"offer",offerId:j},{eventType:"uid",id:null!=i?i:"unknown"}))};b.default=d},96913:function(a,b,c){c.r(b);var d=function(a){var b,c,d,e=a.structure,f=null==e?void 0:e.id,g=null==e?void 0:null==(b=e.cookies)?void 0:null==(c=b.accountData)?void 0:c.customer_id;window.rtbhEvents=window.rtbhEvents||[],["bigsale","category","product","home","search","selection","subcategory"].includes(f)||null==(d=window)||d.rtbhEvents.push({eventType:"placebo"},{eventType:"uid",id:null!=g?g:"unknown"})};b.default=d},56355:function(a,b,c){c.r(b);var d=function(a){var b,c,d,e=a.structure,f=null==e?void 0:e.id,g=null==e?void 0:null==(b=e.cookies)?void 0:null==(c=b.accountData)?void 0:c.customer_id;window.rtbhEvents=window.rtbhEvents||[],("bigsale"===f||"selection"===f)&&(null==(d=window)||d.rtbhEvents.push({eventType:"sales"},{eventType:"uid",id:null!=g?g:"unknown"}))};b.default=d},41654:function(a,b,c){c.r(b);var d=function(a){var b,c,d,e,f,g=a.data,h=a.structure,i=null==h?void 0:h.id,j=null==h?void 0:null==(b=h.cookies)?void 0:null==(c=b.accountData)?void 0:c.customer_id,k=null==g?void 0:null==(d=g.search)?void 0:null==(e=d.products)?void 0:e.slice(0,5),l=null==k?void 0:k.map(function(a){return a.id});window.rtbhEvents=window.rtbhEvents||[],"search"===i&&(null==(f=window)||f.rtbhEvents.push({eventType:"listing",offerIds:l},{eventType:"uid",id:null!=j?j:"unknown"}))};b.default=d},40789:function(a,b,c){c.r(b),c.d(b,{default:function(){return d.default}});var d=c(23018)},88935:function(a,b,c){c.r(b);var d=function(a){var b,c,d=a.structure,e=null==d?void 0:null==(b=d.cookies)?void 0:null==(c=b.accountData)?void 0:c.customer_id;"function"==typeof window.spdt&&(window.spdt("alias",{id:e}),window.spdt("view"))};b.default=d},71850:function(a,b,c){c.r(b);var d=function(a){if("function"==typeof window.spdt){var b,c,d,e,f,g,h,i;window.spdt("product",{currency:"BRL",product_id:null==a?void 0:null==(b=a.product)?void 0:b.id,product_name:null==a?void 0:null==(c=a.product)?void 0:c.title,product_type:null==a?void 0:null==(d=a.product)?void 0:null==(e=d.category)?void 0:e.id,product_vendor:null==a?void 0:null==(f=a.product)?void 0:null==(g=f.seller)?void 0:g.id,value:null==a?void 0:null==(h=a.product)?void 0:null==(i=h.price)?void 0:i.bestPrice})}},e=function(a){var b=a.data,c=a.structure;return(null==c?void 0:c.id)==="product"&&d(b),null};b.default=e},53085:function(a,b,c){c.r(b);var d=function(a){var b,c,d,e,f=a.product;null==(b=window)||null==b.spdt||b.spdt("addtocart",{currency:"BRL",product_id:null==f?void 0:f.id,product_name:null==f?void 0:f.title,product_type:null==f?void 0:null==(c=f.category)?void 0:c.id,product_vendor:null==f?void 0:null==(d=f.seller)?void 0:d.category,quantity:1,value:null==f?void 0:null==(e=f.price)?void 0:e.bestPrice})};b.default=d},80273:function(a,b,c){c.r(b);var d=function(a){var b,c=a.id,d=a.price;null==(b=window)||null==b.spdt||b.spdt("lead",{category:"Add to Wish List",currency:"BRL",type:c,value:null==d?void 0:d.bestPrice})};b.default=d},94554:function(a,b,c){c.r(b);var d=c(88935),e=c(53085),f=c(80273),g=c(71850),h={"addtocart:success":[e.default],pageview:[d.default,g.default],"product:wishlist:click":[f.default]};b.default=h},7223:function(a,b,c){c.r(b),c.d(b,{default:function(){return d.default}});var d=c(94554)},89206:function(a,b,c){c.r(b);var d=c(59577),e=c(92901),f=c(53388),g=c(28061),h=c(19399),i={"addtocart:success":[g.default],"newsletter:success":[d.default],pageview:[e.default,f.default],"productlist:click":[h.default]};b.default=i},59577:function(a,b,c){c.r(b);var d=function(){var a,b,c,d,e,f=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},g=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},h=g.structure,i=null==h?void 0:null==(a=h.cookies)?void 0:null==(b=a.accountData)?void 0:b.id,j=null==h?void 0:null==(c=h.cookies)?void 0:c.customerId;if(null==(d=window)?void 0:null==(e=d.stewie)?void 0:e.api){var k=i||j;stewie.api.uid(k),stewie.api.sendUserInformation({origin:null==f?void 0:f.origin,userInformation:null==f?void 0:f.email,userName:null==f?void 0:f.name}),stewie.api.dispatch()}};b.default=d},92901:function(a,b,c){c.r(b);var d=function(){var a,b,c,d,e,f,g=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},h=g.structure,i=null==h?void 0:null==(a=h.cookies)?void 0:null==(b=a.accountData)?void 0:b.id,j=null==h?void 0:null==(c=h.cookies)?void 0:c.customerId,k=(null==h?void 0:null==(d=h.config)?void 0:d.stewieChannel)||"";(null==(e=window)?void 0:null==(f=e.stewie)?void 0:f.api)&&(!j||i&&j!==i)&&(stewie.api.channel(k),i&&stewie.api.uid(i),stewie.api.ping(),stewie.api.dispatch())};b.default=d},28061:function(a,b,c){c.r(b),c.d(b,{buildProductEvent:function(){return d}});var d=function(){var a,b,c,d=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{};return{price:null==d?void 0:null==(a=d.price)?void 0:a.fullPrice,productCashPrice:null==d?void 0:null==(b=d.price)?void 0:b.bestPrice,productId:null==d?void 0:d.variationId,sellerId:null==d?void 0:null==(c=d.seller)?void 0:c.id}},e=function(){var a,b,c=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},e=c.product,f=c.channel;(null==(a=window)?void 0:null==(b=a.stewie)?void 0:b.api)&&(stewie.api.channel(void 0===f?"":f),stewie.api.cart([d(void 0===e?{}:e)]),stewie.api.dispatch())};b.default=e},53388:function(a,b,c){c.r(b),c.d(b,{buildProductEvent:function(){return d}});var d=function(){var a,b,c=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{};return{productCashPrice:null==c?void 0:null==(a=c.price)?void 0:a.bestPrice,productId:null==c?void 0:c.variationId,productPrice:null==c?void 0:null==(b=c.installment)?void 0:b.totalAmount}},e=function(){var a,b,c,e=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},f=e.structure,g=void 0===f?{}:f,h=e.data,i=g.name,j=(void 0===h?{}:h).product;(null==(a=window)?void 0:null==(b=a.stewie)?void 0:b.api)&&"produto"===i&&(stewie.api.view(d(j)),stewie.api.channel((null==g?void 0:null==(c=g.config)?void 0:c.stewieChannel)||""),stewie.api.dispatch())};b.default=e},19399:function(a,b,c){c.r(b);var d=c(76854),e=function(){var a,b,c,e,f,g=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},h=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},i=h.structure;if((null==(a=window)?void 0:null==(b=a.stewie)?void 0:b.api)&&"doory"===g.origin&&(stewie.api.uid(null==i?void 0:null==(c=i.cookies)?void 0:c.customerId),stewie.api.channel((null==i?void 0:null==(e=i.config)?void 0:e.stewieChannel)||""),stewie.api.clickedOnSearch({departmentId:null==g?void 0:null==(f=g.category)?void 0:f.id,productId:null==g?void 0:g.id}),stewie.api.dispatch()),"bob"===g.origin&&g.trackingUrl){var j=g.trackingUrl.split("?"),k=(0,d.Z)(j,1)[0];document.createElement("img").src=k}};b.default=e},11887:function(a,b,c){c.r(b);var d=c(79583),e=function(){var a,b,c=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},e=c.product,f=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},g=f.eventId;(null==(a=window)?void 0:null==(b=a.ttq)?void 0:b.track)&&e&&window.ttq.track("AddToCart",(0,d.default)(e),{event_id:g})};b.default=e},17695:function(a,b,c){c.r(b);var d=c(11887),e=c(91268),f={"product:addToCart":[d.default],"product:details":[e.default]};b.default=f},91268:function(a,b,c){c.r(b);var d=c(79583),e=function(){var a,b,c=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},e=c.product,f=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},g=f.eventId;(null==(a=window)?void 0:null==(b=a.ttq)?void 0:b.track)&&window.ttq.track("ViewContent",(0,d.default)(e),{event_id:g})};b.default=e},41535:function(a,b,c){c.r(b),c.d(b,{default:function(){return d.default}});var d=c(17695)},79583:function(a,b,c){c.r(b);var d=c(38009),e=function(a){var b,c,e,f,g=Number((null==a?void 0:null==(b=a.price)?void 0:b.bestPrice)||(null==a?void 0:null==(c=a.price)?void 0:c.price));return{content_type:"product",contents:[{content_category:"".concat((0,d.oF)(null==a?void 0:null==(e=a.category)?void 0:e.id)," - ").concat((0,d.oF)(null==a?void 0:null==(f=a.subcategory)?void 0:f.id)),content_id:null==a?void 0:a.variationId,content_name:null==a?void 0:a.title,price:g,quantity:1}],currency:"BRL",value:g}};b.default=e},52898:function(a,b,c){c.r(b),c.d(b,{AllIn:function(){return d.default},CloudRetail:function(){return s.default},Cookies:function(){return f.default},Criteo:function(){return e.default},GA:function(){return g.default},GA4:function(){return h.default},Kwai:function(){return i.default},MagaluAds:function(){return o.default},MiniAppSdk:function(){return p.default},PmdActions:function(){return l.default},PmdCartCookie:function(){return m.default},PmeCartCookie:function(){return n.default},RTBHouse:function(){return q.default},SpotifyAdAnalytics:function(){return r.default},Stewie:function(){return j.default},TikTok:function(){return k.default},inventory:function(){return t}});var d=c(73778),e=c(79381),f=c(30040),g=c(19487),h=c(57016),i=c(40649),j=c(89206),k=c(41535),l=c(41234),m=c(86823),n=c(58579),o=c(66202),p=c(10379),q=c(40789),r=c(7223),s=c(80542),t=["AllIn","Criteo","GA","GA4","Cookies","Stewie","PmdActions","PmdCartCookie","PmeCartCookie","SpotifyAdAnalytics","TikTok","Kwai","MagaluAds","MiniAppSdk","RTBHouse","CloudRetail"]}}])
//# sourceMappingURL=2898-83007850364e3022.js.map