"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1105],{88338:function(a,b,c){c.d(b,{"$1":function(){return e},q7:function(){return g},rX:function(){return f},wO:function(){return d}});var d="addToBag",e="oneTouch",f="pickupStore",g="typeFloat"},71105:function(a,b,c){c.d(b,{wO:function(){return q.wO},"$1":function(){return q.$1},rX:function(){return q.rX},q7:function(){return q.q7},lQ:function(){return d},bo:function(){return r},rz:function(){return k},"_G":function(){return w},"D$":function(){return p},b0:function(){return v}});var d=function(a,b){return function(c){var d=c.cartInfo,e=void 0===d?{}:d,f=c.channel,g=c.clientId,h=c.error,i=c.location,j=c.product,k=c.services,l=c.typeButton;if(h)b("addtocart:error",{error:h,product:j});else{var m=e.cartId,n=e.cartUrl,o=void 0===n?{}:n;b("addtocart:success",{cartId:m,channel:void 0===f?"":f,clientId:g,location:i,product:j,services:k,typeButton:l}),a({cartUrl:o,type:l})}}},e=c(86522),f=c(7896),g=c(34795);function h(){h=function(){return a};var a={},b=Object.prototype,c=b.hasOwnProperty,d=Object.defineProperty||function(a,b,c){a[b]=c.value},f="function"==typeof Symbol?Symbol:{},g=f.iterator||"@@iterator",i=f.asyncIterator||"@@asyncIterator",j=f.toStringTag||"@@toStringTag";function k(a,b,c){return Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}),a[b]}try{k({},"")}catch(l){k=function(a,b,c){return a[b]=c}}function m(a,b,c,e){var f=Object.create((b&&b.prototype instanceof p?b:p).prototype);return d(f,"_invoke",{value:y(a,c,new C(e||[]))}),f}function n(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(d){return{type:"throw",arg:d}}}a.wrap=m;var o={};function p(){}function q(){}function r(){}var s={};k(s,g,function(){return this});var t=Object.getPrototypeOf,u=t&&t(t(D([])));u&&u!==b&&c.call(u,g)&&(s=u);var v=r.prototype=p.prototype=Object.create(s);function w(a){["next","throw","return"].forEach(function(b){k(a,b,function(a){return this._invoke(b,a)})})}function x(a,b){var f;function g(d,f,h,i){var j=n(a[d],a,f);if("throw"!==j.type){var k=j.arg,l=k.value;return l&&"object"==(0,e.Z)(l)&&c.call(l,"__await")?b.resolve(l.__await).then(function(a){g("next",a,h,i)},function(a){g("throw",a,h,i)}):b.resolve(l).then(function(a){k.value=a,h(k)},function(a){return g("throw",a,h,i)})}i(j.arg)}d(this,"_invoke",{value:function(a,c){function d(){return new b(function(b,d){g(a,c,b,d)})}return f=f?f.then(d,d):d()}})}function y(a,b,c){var d="suspendedStart";return function(e,f){if("executing"===d)throw Error("Generator is already running");if("completed"===d){if("throw"===e)throw f;return E()}for(c.method=e,c.arg=f;;){var g=c.delegate;if(g){var h=z(g,c);if(h){if(h===o)continue;return h}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if("suspendedStart"===d)throw d="completed",c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);d="executing";var i=n(a,b,c);if("normal"===i.type){if(d=c.done?"completed":"suspendedYield",i.arg===o)continue;return{value:i.arg,done:c.done}}"throw"===i.type&&(d="completed",c.method="throw",c.arg=i.arg)}}}function z(a,b){var c=a.iterator[b.method];if(void 0===c){if(b.delegate=null,"throw"===b.method){if(a.iterator.return&&(b.method="return",b.arg=void 0,z(a,b),"throw"===b.method))return o;b.method="throw",b.arg=TypeError("The iterator does not provide a 'throw' method")}return o}var d=n(c,a.iterator,b.arg);if("throw"===d.type)return b.method="throw",b.arg=d.arg,b.delegate=null,o;var e=d.arg;return e?e.done?(b[a.resultName]=e.value,b.next=a.nextLoc,"return"!==b.method&&(b.method="next",b.arg=void 0),b.delegate=null,o):e:(b.method="throw",b.arg=TypeError("iterator result is not an object"),b.delegate=null,o)}function A(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function B(a){var b=a.completion||{};b.type="normal",delete b.arg,a.completion=b}function C(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(A,this),this.reset(!0)}function D(a){if(a){var b=a[g];if(b)return b.call(a);if("function"==typeof a.next)return a;if(!isNaN(a.length)){var d=-1,e=function b(){for(;++d<a.length;)if(c.call(a,d))return b.value=a[d],b.done=!1,b;return b.value=void 0,b.done=!0,b};return e.next=e}}return{next:E}}function E(){return{value:void 0,done:!0}}return q.prototype=r,d(v,"constructor",{value:r,configurable:!0}),d(r,"constructor",{value:q,configurable:!0}),q.displayName=k(r,j,"GeneratorFunction"),a.isGeneratorFunction=function(a){var b="function"==typeof a&&a.constructor;return!!b&&(b===q||"GeneratorFunction"===(b.displayName||b.name))},a.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,r):(a.__proto__=r,k(a,j,"GeneratorFunction")),a.prototype=Object.create(v),a},a.awrap=function(a){return{__await:a}},w(x.prototype),k(x.prototype,i,function(){return this}),a.AsyncIterator=x,a.async=function(b,c,d,e,f){void 0===f&&(f=Promise);var g=new x(m(b,c,d,e),f);return a.isGeneratorFunction(c)?g:g.next().then(function(a){return a.done?a.value:g.next()})},w(v),k(v,j,"Generator"),k(v,g,function(){return this}),k(v,"toString",function(){return"[object Generator]"}),a.keys=function(a){var b=Object(a),c=[];for(var d in b)c.push(d);return c.reverse(),function a(){for(;c.length;){var d=c.pop();if(d in b)return a.value=d,a.done=!1,a}return a.done=!0,a}},a.values=D,C.prototype={constructor:C,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(B),!a)for(var b in this)"t"===b.charAt(0)&&c.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=void 0)},stop:function(){this.done=!0;var a=this.tryEntries[0].completion;if("throw"===a.type)throw a.arg;return this.rval},dispatchException:function(a){if(this.done)throw a;var b=this;function d(c,d){return g.type="throw",g.arg=a,b.next=c,d&&(b.method="next",b.arg=void 0),!!d}for(var e=this.tryEntries.length-1;e>=0;--e){var f=this.tryEntries[e],g=f.completion;if("root"===f.tryLoc)return d("end");if(f.tryLoc<=this.prev){var h=c.call(f,"catchLoc"),i=c.call(f,"finallyLoc");if(h&&i){if(this.prev<f.catchLoc)return d(f.catchLoc,!0);if(this.prev<f.finallyLoc)return d(f.finallyLoc)}else if(h){if(this.prev<f.catchLoc)return d(f.catchLoc,!0)}else{if(!i)throw Error("try statement without catch or finally");if(this.prev<f.finallyLoc)return d(f.finallyLoc)}}}},abrupt:function(a,b){for(var d=this.tryEntries.length-1;d>=0;--d){var e=this.tryEntries[d];if(e.tryLoc<=this.prev&&c.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var f=e;break}}f&&("break"===a||"continue"===a)&&f.tryLoc<=b&&b<=f.finallyLoc&&(f=null);var g=f?f.completion:{};return g.type=a,g.arg=b,f?(this.method="next",this.next=f.finallyLoc,o):this.complete(g)},complete:function(a,b){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&b&&(this.next=b),o},finish:function(a){for(var b=this.tryEntries.length-1;b>=0;--b){var c=this.tryEntries[b];if(c.finallyLoc===a)return this.complete(c.completion,c.afterLoc),B(c),o}},catch:function(a){for(var b=this.tryEntries.length-1;b>=0;--b){var c=this.tryEntries[b];if(c.tryLoc===a){var d=c.completion;if("throw"===d.type){var e=d.arg;B(c)}return e}}throw Error("illegal catch attempt")},delegateYield:function(a,b,c){return this.delegate={iterator:D(a),resultName:b,nextLoc:c},"next"===this.method&&(this.arg=void 0),o}},a}var i,j=(i=(0,g.Z)(h().mark(function a(b){var c,d,e,f,g,i,j,k,l;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=b.actionWishList,d=b.customerId,f=(e=b.product).title,g=e.price.price,i=e.variationId,a.next=4,c({name:f,price:parseFloat(g),userId:d,variationId:i});case 4:return k=(j=a.sent).data,l=j.error,a.abrupt("return",{data:k,error:l});case 8:case"end":return a.stop()}},a)})),function(a){return i.apply(this,arguments)}),k=function(a){var b,c=a.addToWishlist,d=a.publish,e=a.structure,i=a.removeFromWishlist,k=a.shouldUpdateHeart;return b=(0,g.Z)(h().mark(function a(b){var g,l,m,n,o,p;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return g=b.customerId,l=b.isLiked,m=b.product,n=l?i:c,a.next=4,j({actionWishList:n,customerId:g,product:m});case 4:(p=(o=a.sent).error)||(d("product:wishlist:click",(0,f.Z)({stateWishList:!l},m,{structure:e})),k());case 7:case"end":return a.stop()}},a)})),function(a){return b.apply(this,arguments)}},l=c(85942),m=c(46152),n=c.n(m),o=function(a,b,c){var d,e,f=a.links,g=a.title,h=n()(f),i=h.slice(0,b);return d=i,e=c-g.length,d.reduce(function(a,b){var c=a.links,d=a.totalCharacters;return d+b.value.length<=e-1?{links:[].concat((0,l.Z)(c),[b]),totalCharacters:d+b.value.length+1}:a},{links:[],totalCharacters:0}).links},p=function(){var a,b=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{};return(null==b?void 0:null==(a=b.links)?void 0:a.length)>1&&(null==b?void 0:b.title)&&(null==b?void 0:b.listSize)&&(null==b?void 0:b.maxChars)?{linksSuggestions:(0,f.Z)({},b,{links:o(b,b.listSize,b.maxChars)})}:{}},q=c(88338),r=function(a){var b,c=a.deliveries,d=a.error,e=a.isClickedCalculateShipping,f=a.publish,g=a.setErrorMessage,h=a.setDeliveryTypes,i=a.shippings,j=a.zipcode;if(d)return g(d),f("product:shipping:error",{error:d}),null;var k=null==c?void 0:null==(b=c[0])?void 0:b.modalities.map(function(){var a,b,c,d=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},e=d.shippingTime,f=d.id,g=d.cost,h=d.type;return{complement:null==e?void 0:null==(a=e.disclaimers)?void 0:null==(b=a[0])?void 0:b.message,description:null==e?void 0:e.description,id:f,price:null==g?void 0:g.customer,time:null==e?void 0:null==(c=e.value)?void 0:c.max,type:h,unit:null==e?void 0:e.unit}});return h(k),e||f("product:shipping:change",{deliveries:c,shipping:i,zipcode:j}),f("product:shipping:haschanged",{deliveries:c,shipping:i,zipcode:j}),k},s=c(59740),t=["__typename"],u=["__typename"],v=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.pageName,c=void 0===b?"":b,d=a.product,e=void 0===d?{}:d,g=a.structure,h=void 0===g?{}:g,i=a.customZipCode,j=void 0===i?"":i,k=e.price,l=(k=void 0===k?{}:k).fullPrice,m=k.price,n=k.currency,o=k.exchangeRate,p=k.idExchangeRate,q=k.originalPriceForeign,r=e.seller;r=void 0===r?{}:r;var v=r.id,w=void 0===v?"":v,x=r.category,y=void 0===x?"1p":x,z=r.sku,A=void 0===z?"":z,B=e.variationId,C=void 0===B?"":B,D=e.type,E=void 0===D?"":D,F=e.bundles,G=void 0===F?[]:F,H=e.dimensions;(H=void 0===H?{}:H).__typename;var I=(0,s.Z)(H,u),J=l||m,K=h.cookies;K=void 0===K?{}:K;var L=K.location;L=void 0===L?{}:L;var M=L.zipCode,N=void 0===M?"":M,O=K.accountData;O=void 0===O?{}:O;var P=O.id,Q=void 0===P?"":P,R=h.config,S=void 0===R?{}:R,T=h.route;T=void 0===T?{}:T;var U,V,W=T.categoryId,X=T.subCategoryId,Y=T.partner_id;return{metadata:{categoryId:void 0===W?"":W,clientId:Q,organizationId:"magazine_luiza",pageName:c,partnerId:Array.isArray(U=void 0===Y?"0":Y)?U[0]:U,salesChannelId:S.salesChannelId,sellerId:w,subcategoryId:void 0===X?"":X},product:(0,f.Z)({currency:n,dimensions:(0,f.Z)({},I),exchangeRate:parseFloat(o),id:"1p"===y?C:A,idExchangeRate:String(p),originalPriceForeign:parseFloat(q),price:parseFloat(J),quantity:1,type:E},"bundle"===E&&(null==G?void 0:G.length)>0&&{bundles:(V=G).map(function(a){var b=a.id,c=a.quantity,d=a.price,e=a.dimensions,g=(e.__typename,(0,s.Z)(e,t));return{dimensions:(0,f.Z)({},g),id:b,price:d,quantity:c}})}),zipcode:j||N}},w={button:{actionLabel:"calcular",changeLabel:"alterar",maxCityLength:24,placeholder:"Calcular frete e prazo"},error:{NOT_AVAILABLE:"not_available"},labels:{conventional:{complement:"ap\xf3s o pagamento confirmado",default:"Entrega em at\xe9 1h",plural:"Receber em at\xe9 {X} dias \xfateis",singular:"Receber em at\xe9 1 dia \xfatil"},store_pickup:{complement:"ap\xf3s o pagamento confirmado",default:"Retirar na loja em 2h",plural:"Retirar na loja em at\xe9 {X} dias \xfateis",singular:"Retirar na loja em at\xe9 1 dia \xfatil"}}}}}])
//# sourceMappingURL=1105-bfd0737276f064c6.js.map