"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2635],{84546:function(a,b,c){c.d(b,{Z:function(){return m}});var d=c(7896),e=c(31461),f=c(2784),g=c(13980),h=c(99673),i=c(91489),j=c(68054);let k=h.ZP.div({boxSizing:"border-box",cursor:({touch:a})=>a?"pointer":"inherit"},(0,j.qC)(j.Oq,j.Cg,j.bK,j.FK,j.AF,j.Dh,j.yd,j.cp,i.$_),i.Tf),l=f.forwardRef((a,b)=>{let{children:c}=a,g=(0,e.Z)(a,["children"]);return f.createElement(k,(0,d.Z)({ref:b},g),c)});l.propTypes={children:(0,g.oneOfType)([g.element,g.string,(0,g.arrayOf)(g.element),g.node])},l.defaultProps={children:void 0},l.displayName="Box";var m=l},8341:function(a,b,c){c.d(b,{Z:function(){return l}});var d=c(7896),e=c(2784),f=c(99673),g=c(91489),h=c(68054),i=c(84546);let j=(0,f.ZP)(i.Z)({display:"grid"},(0,h.qC)(h.eC,h.cp,g.$_,h.Dh,g.SG)),k=(0,e.forwardRef)((a,b)=>e.createElement(j,(0,d.Z)({ref:b},a)));k.displayName="Grid";var l=k},91785:function(a,b,c){c.d(b,{Z:function(){return j}});var d=c(7896),e=c(2784),f=c(33279),g=c(84546);let h="0px 0px 250px",i=({children:a,options:b,layout:c})=>{let{delay:i=500,threshold:j=0,rootMargin:k=h}=b||{},[l,m]=(0,e.useState)(!1),[n,o]=(0,e.useState)(c),[p,q]=(0,f.YD)({triggerOnce:!0,threshold:j,rootMargin:k});return(0,e.useEffect)(()=>{let a;return q&&!l&&(m(!0),a=setTimeout(()=>o({}),i)),()=>a&&clearTimeout(a)},[q]),e.createElement(g.Z,(0,d.Z)({},n,{"data-testid":"lazyload-container",ref:p}),l&&a)};i.defaultProps={children:void 0,layout:{},options:{delay:500,rootMargin:h,threshold:0}};var j=i},63825:function(a,b,c){c.d(b,{Z:function(){return m}});var d=c(7896),e=c(31461),f=c(2784),g=c(13980),h=c(99673),i=c(68054),j=c(91489);let k=h.ZP.p.attrs(a=>({color:a.color?(0,j.uu)(a.color)(a)||a.color:(0,j.uu)("base")(a)}))`
  ${(0,i.qC)(i.cp,i.Dh,j.$_,i.bK,i.FK,i.GQ,j.SG)}
  ${(0,i.By)({transform:!0})}
`,l=f.forwardRef((a,b)=>{let{children:c}=a,g=(0,e.Z)(a,["children"]);return f.createElement(k,(0,d.Z)({ref:b},g),c)});l.propTypes={children:(0,g.oneOfType)([g.string,g.node,(0,g.arrayOf)(g.element)])},l.defaultProps={children:""},l.displayName="Text";var m=l},33279:function(a,b,c){c.d(b,{YD:function(){return o}});var d=c(2784);function e(){return(e=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function f(a,b){return(f=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}var g=new Map,h=new WeakMap,i=0,j=void 0;function k(a,b,c,d){if(void 0===c&&(c={}),void 0===d&&(d=j),void 0===window.IntersectionObserver&& void 0!==d){var e=a.getBoundingClientRect();return b(d,{isIntersecting:d,target:a,intersectionRatio:"number"==typeof c.threshold?c.threshold:0,time:0,boundingClientRect:e,intersectionRect:e,rootBounds:e}),function(){}}var f=function(a){var b,c=Object.keys(b=a).sort().filter(function(a){return void 0!==b[a]}).map(function(a){var c;return a+"_"+("root"===a?(c=b.root)?(h.has(c)||(i+=1,h.set(c,i.toString())),h.get(c)):"0":b[a])}).toString(),d=g.get(c);if(!d){var e,f=new Map,j=new IntersectionObserver(function(b){b.forEach(function(b){var c,d=b.isIntersecting&&e.some(function(a){return b.intersectionRatio>=a});a.trackVisibility&& void 0===b.isVisible&&(b.isVisible=d),null==(c=f.get(b.target))||c.forEach(function(a){a(d,b)})})},a);e=j.thresholds||(Array.isArray(a.threshold)?a.threshold:[a.threshold||0]),d={id:c,observer:j,elements:f},g.set(c,d)}return d}(c),k=f.id,l=f.observer,m=f.elements,n=m.get(a)||[];return m.has(a)||m.set(a,n),n.push(b),l.observe(a),function(){n.splice(n.indexOf(b),1),0===n.length&&(m.delete(a),l.unobserve(a)),0===m.size&&(l.disconnect(),g.delete(k))}}var l=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function m(a){return"function"!=typeof a.children}var n=function(a){function b(b){var c;return(c=a.call(this,b)||this).node=null,c._unobserveCb=null,c.handleNode=function(a){!c.node||(c.unobserve(),a||c.props.triggerOnce||c.props.skip||c.setState({inView:!!c.props.initialInView,entry:void 0})),c.node=a||null,c.observeNode()},c.handleChange=function(a,b){a&&c.props.triggerOnce&&c.unobserve(),m(c.props)||c.setState({inView:a,entry:b}),c.props.onChange&&c.props.onChange(a,b)},c.state={inView:!!b.initialInView,entry:void 0},c}c=b,g=a,c.prototype=Object.create(g.prototype),c.prototype.constructor=c,f(c,g);var c,g,h=b.prototype;return h.componentDidUpdate=function(a){(a.rootMargin!==this.props.rootMargin||a.root!==this.props.root||a.threshold!==this.props.threshold||a.skip!==this.props.skip||a.trackVisibility!==this.props.trackVisibility||a.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},h.componentWillUnmount=function(){this.unobserve(),this.node=null},h.observeNode=function(){if(this.node&&!this.props.skip){var a=this.props,b=a.threshold,c=a.root,d=a.rootMargin,e=a.trackVisibility,f=a.delay,g=a.fallbackInView;this._unobserveCb=k(this.node,this.handleChange,{threshold:b,root:c,rootMargin:d,trackVisibility:e,delay:f},g)}},h.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},h.render=function(){if(!m(this.props)){var a=this.state,b=a.inView,c=a.entry;return this.props.children({inView:b,entry:c,ref:this.handleNode})}var f=this.props,g=f.children,h=f.as,i=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(f,l);return d.createElement(h||"div",e({ref:this.handleNode},i),g)},b}(d.Component);function o(a){var b=void 0===a?{}:a,c=b.threshold,e=b.delay,f=b.trackVisibility,g=b.rootMargin,h=b.root,i=b.triggerOnce,j=b.skip,l=b.initialInView,m=b.fallbackInView,n=d.useRef(),o=d.useState({inView:!!l}),p=o[0],q=o[1],r=d.useCallback(function(a){void 0!==n.current&&(n.current(),n.current=void 0),!j&&a&&(n.current=k(a,function(a,b){q({inView:a,entry:b}),b.isIntersecting&&i&&n.current&&(n.current(),n.current=void 0)},{root:h,rootMargin:g,threshold:c,trackVisibility:f,delay:e},m))},[Array.isArray(c)?c.toString():c,h,g,i,j,f,m,e]);(0,d.useEffect)(function(){n.current||!p.entry||i||j||q({inView:!!l})});var s=[r,p.inView,p.entry];return s.ref=s[0],s.inView=s[1],s.entry=s[2],s}n.displayName="InView",n.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}}}])
//# sourceMappingURL=2635-a3d26a26d09cc1d1.js.map