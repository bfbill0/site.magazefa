(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9601],{93837:function(a,b){"use strict";let c={"pt-br":"BRL","en-US":"USD"},d=({value:a="",locale:b="pt-br",rightFilling:d=!1})=>new Intl.NumberFormat(b,{style:"currency",currency:c[b],minimumFractionDigits:2}).format(d?parseFloat(a/100):a);b.Z=d},41544:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});let d={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 m\xeas",other:"cerca de {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};function e(a,b){let c;return`${"string"==typeof d[a]?d[a]:1===b?d[a].one:d[a].other.replace("{{count}}",b)}`}let f=(a,b)=>{let c=parseInt(Math.abs(new Date(a)-new Date(b))/6e4,10),d=Math.abs((new Date(a)-new Date(b))/1e3),f=Math.abs(a.getMonth()-b.getMonth()+12*(a.getFullYear()-b.getFullYear()));if(c<2)return d<40?e("halfAMinute",null):d<60?e("lessThanXMinutes",1):e("xMinutes",c);if(c<45)return e("xMinutes",c);if(c<90)return e("aboutXHours",1);if(c<1440){let g=Math.round(c/60);return e("aboutXHours",g)}if(c<2520)return e("xDays",1);if(c<43200){let h=Math.round(c/1440);return e("xDays",h)}if(c<86400){let i=Math.round(c/43200);return e("aboutXMonths",i)}if(f<12){let j=Math.round(c/43200);return e("xMonths",j)}let k=f%12,l=Math.floor(f/12);return k<3?e("aboutXYears",l):k<9?e("overXYears",l):e("almostXYears",l+1)};var g=f},71180:function(a,b,c){"use strict";c.d(b,{jL:function(){return e.Z},oB:function(){return d.Z}});var d=c(93837),e=c(41544)},60861:function(a,b,c){"use strict";c.d(b,{Z:function(){return r}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(99673),i=c(68054),j=c(91489);let k={auto:h.iv`
    height: auto;
    min-width: auto;
  `,small:h.iv`
    height: 32px;
    min-width: 80px;
    font-size: ${a=>(0,j.R)("fontSizes.0")(a)}px;
  `,medium:h.iv`
    height: 44px;
    min-width: 140px;
    font-size: ${a=>(0,j.R)("fontSizes.1")(a)}px;
  `,large:h.iv`
    height: 52px;
    min-width: 180px;
    font-size: ${a=>(0,j.R)("fontSizes.2")(a)}px;
  `},l={fill:h.iv`
    ${a=>{var b,c,d,e;return`
      background-color: 
        ${null!=(b=a.customColor)&&b.default?null==(c=a.customColor)?void 0:c.default:(0,j.ow)("base")(a)};
      color: ${(0,j.uu)("lightest")(a)};
      svg {
        fill: ${(0,j.uu)("lightest")(a)};
      }

      &:hover {
        background-color: 
        ${null!=(d=a.customColor)&&d.hover?null==(e=a.customColor)?void 0:e.hover:(0,j.ow)("dark")(a)};
        color: ${(0,j.uu)("lightest")(a)};
      }
    `}};

    ${a=>a.disabled&&`
      &,
      &:hover {
        background-color: ${(0,j.ow)("background.whisper")(a)};
        color: ${(0,j.uu)("scratched")(a)};
        svg {
          fill: ${(0,j.uu)("scratched")(a)};
        }
      }
    `};

    ${a=>{var b,c,d,e,f,g,h,i,k,l;return!a.disabled&&a.invertedColors&&`
      background-color: 
        ${null!=(b=a.customColor)&&b.default?null==(c=a.customColor)?void 0:c.default:(0,j.ow)("base")(a)};
      color:
        ${null!=(d=a.customColor)&&d.hover?null==(e=a.customColor)?void 0:e.hover:(0,j.uu)("lightest")(a)};
      svg {
        fill: ${(0,j.uu)("lightest")(a)};
      }

      &:hover {
        background-color:
          ${null!=(f=a.customColor)&&f.hover?null==(g=a.customColor)?void 0:g.hover:(0,j.uu)("lightest")(a)};
        color: ${null!=(h=a.customColor)&&h.default?null==(i=a.customColor)?void 0:i.default:(0,j.ow)("base")(a)};
        svg {
          fill: ${null!=(k=a.customColor)&&k.hover?null==(l=a.customColor)?void 0:l.hover:(0,j.ow)("base")(a)};
        }
      }
    `}};
  `,outline:h.iv`
    ${a=>{var b,c,d,e,f,g,h,i,k,l,m,n;return`
    background-color: transparent;
    box-shadow: inset 0 0 0 1px
      ${null!=(b=a.customColor)&&b.default?null==(c=a.customColor)?void 0:c.default:(0,j.ow)("base")(a)};
    color: ${null!=(d=a.customColor)&&d.default?null==(e=a.customColor)?void 0:e.default:(0,j.ow)("base")(a)};
    svg {
      fill: ${null!=(f=a.customColor)&&f.default?null==(g=a.customColor)?void 0:g.default:(0,j.ow)("base")(a)};
    }

    &:hover {
      box-shadow: inset 0 0 0 1px
        ${null!=(h=a.customColor)&&h.hover?null==(i=a.customColor)?void 0:i.hover:(0,j.ow)("dark")(a)};
      color: ${null!=(k=a.customColor)&&k.hover?null==(l=a.customColor)?void 0:l.hover:(0,j.ow)("dark")(a)};
      svg {
        fill: ${null!=(m=a.customColor)&&m.hover?null==(n=a.customColor)?void 0:n.hover:(0,j.ow)("dark")(a)};
      }
    }
  `}}

    ${a=>a.disabled&&`
      &,
      &:hover {
        background-color: transparent;
        box-shadow: inset 0 0 0 1px ${(0,j.uu)("lighter")(a)};
        color: ${(0,j.uu)("lighter")(a)};
        svg {
          fill: ${(0,j.uu)("lighter")(a)};
        }
      }
    `}
  `},m=h.ZP.span`
  grid-area: start;
  svg {
    vertical-align: middle;
    float: left;
  }
`,n=h.ZP.label`
  cursor: ${a=>a.disabled?"not-allowed":"pointer"};
  font-weight: ${a=>(0,j.R)("fontWeights.medium")(a)};
  text-align: center;
  margin-top: 1px;
  grid-area: label;
  align-self: center;
  small {
    font-weight: ${a=>(0,j.R)("fontWeights.medium")(a)};
    text-transform: none;
    display: block;
  }
`,o=h.ZP.span`
  grid-area: end;
  svg {
    vertical-align: middle;
    float: right;
  }
`,p=h.ZP.button`
  cursor: ${a=>a.disabled?"not-allowed":"pointer"};
  font-family: ${a=>(0,j.R)("fontFamily")(a)};
  outline: none;
  border: none;
  border-radius: ${a=>a.rounded?"30px":"4px"};
  padding: 0px 15px;
  width: ${a=>a.full?"100%":"auto"};
  display: grid;
  grid-column: ${a=>a.gridColumn||"unset"};
  grid-template-areas: ${a=>a.startIcon||a.endIcon?"'start label end'":"'label'"};
  ${a=>{let{centered:b}=a,c=(0,e.Z)(a,["centered"]);return b?h.iv`
          grid-template-columns: '';
          grid-gap: 0px
            ${c.startIcon||c.endIcon?(0,j.R)("space.2")(c):0}px;
        `:h.iv`
          grid-template-columns: ${c.startIcon||c.endIcon?"1fr 4fr 1fr":"auto"};
        `}}
  justify-content: center;
  align-content: center;
  text-decoration: none;
  ${n} {
    ${({uppercase:a})=>a&&h.iv`
        text-transform: uppercase;
      `}
  }
  ${a=>k[a.size]||k.medium}
  ${a=>l[a.variation]||l.fill}
  ${i.Dh}
  ${i.bK}
  ${i.cp}
`,q=a=>{let{onClick:b}=a,c=(0,e.Z)(a,["onClick"]),{startIcon:h,endIcon:i,children:j,disabled:k}=c,l=a=>"string"==typeof a?f.createElement(g.JO$,{name:a}):a;return f.createElement(p,(0,d.Z)({onClick:a=>b(a)},c),h&&f.createElement(m,null,l(h)),f.createElement(n,{disabled:k},j),i&&f.createElement(o,null,l(i)))};q.defaultProps={centered:!1,children:void 0,color:"primary",customColor:{default:null,hover:null},disabled:!1,invertedColors:!1,onClick:()=>{},rounded:!1,size:"medium",uppercase:!0,variation:"fill"},q.displayName="Button";var r=q},37270:function(a,b,c){"use strict";c.d(b,{Dx:function(){return o},W2:function(){return n},Xk:function(){return r},aV:function(){return m},bo:function(){return q},f:function(){return t},h4:function(){return s},yW:function(){return p}});var d=c(99673),e=c(91489),f=c(82753),g=c(84546),h=c(19527),i=c(63825);let j={top:d.iv`
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    animation: ${f.ie} 0.3s ease-in-out;
  `,center:d.iv`
    margin: 15px;
    animation: ${f.Ji} 0.3s ease-in;
  `,bottom:d.iv`
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    animation: ${f.$7} 0.3s ease-in-out;
  `},k=({type:a,fullScreen:b})=>b?d.iv`
      width: 100%;
      border-radius: ${(0,e.R)("radii.default")};
    `:"alert"===a?d.iv`
      width: 300px;
      border-radius: ${(0,e.R)("radii.medium")};
    `:"responsive"===a?d.iv`
      padding: ${(0,e.R)("space.4")}px;
      border-radius: ${(0,e.R)("radii.default")};
      overflow-x: hidden;
    `:"full"===a?d.iv`
      max-width: 1366px;
      width: 100%;
    `:d.iv`
    width: 85%;
    max-width: 1366px;
    border-radius: ${(0,e.R)("radii.default")};
  `,l={top:d.iv`
    justify-content: flex-start;
  `,center:d.iv`
    justify-content: center;
  `,bottom:d.iv`
    justify-content: flex-end;
  `},m=(0,d.ZP)(g.Z).attrs(()=>({bg:"background.overlay"}))`
  animation: ${f.Ji} 0.3s linear;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  cursor: pointer;
`,n=(0,d.ZP)(h.Z).attrs(a=>({zIndex:4,padding:a.fullScreen?4:void 0}))`
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  ${a=>l[a.position]}
  visibility: ${({visible:a})=>a?"visible":"hidden"};
`,o=(0,d.ZP)(i.Z).attrs(a=>Object.assign({color:"text.dark",fontSize:3,p:2},a.titleStyle))`
  margin: 6px 0;
  width: 100%;
`,p=(0,d.ZP)(h.Z)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,q=d.ZP.hr`
  height: ${({size:a})=>`${a}px`};
  width: 100vh;
  border: none;
  ${e.$_}
`,r=(0,d.ZP)(g.Z).attrs(a=>Object.assign({p:3,bg:"background.base",zIndex:1},a))`
  overflow-x: auto;
  ${a=>j[a.position]}
  ${a=>k(a)}
`,s=(0,d.ZP)(h.Z)`
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`,t=d.ZP.div`
  padding-right: 8px;
  margin-left: auto;
  cursor: pointer;
`},66762:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(75851),i=c(37270);let j=a=>f.createElement(h.Z,{id:"portal-dialog"},a),k=a=>{let{portal:b=!1}=a,c=(0,e.Z)(a,["portal"]),d=f.createElement(l,c);return b?j(d):d},l=a=>{let{title:b,showClose:c,onClickOutside:h,children:j,visible:k,position:l,fullScreen:m,type:n,titleStyle:o,ruleSize:p,bgRule:q,showHorizontalRule:r}=a,s=(0,e.Z)(a,["title","showClose","onClickOutside","children","visible","position","fullScreen","type","titleStyle","ruleSize","bgRule","showHorizontalRule"]);return(0,f.useEffect)(()=>{let a=window.getComputedStyle(document.body).overflow;return document.body.style.overflow=k?"hidden":a,()=>{document.body.style.overflow=a}},[k]),f.createElement(i.W2,{position:l,visible:k,fullScreen:m,"data-testid":"dialog"},f.createElement(i.aV,{onClick:h,role:"dialog","data-testid":"dialog-overlay"}),f.createElement(i.Xk,(0,d.Z)({position:l,"data-testid":"dialog-content",type:n,fullScreen:m},s),f.createElement(i.h4,null,f.createElement(i.yW,null,b&&f.createElement(i.Dx,{titleStyle:o,"data-testid":"dialog-title"},b),c&&f.createElement(i.f,null,f.createElement(g.x8P,{color:"#999","aria-label":"Close",onClick:h,"data-testid":"dialog-close"}))),r&&f.createElement(i.bo,{size:p,bg:q,"data-testid":"horizontal-rule"})),j))};l.defaultProps={children:void 0,title:void 0,fullScreen:!1,position:"bottom",type:"dialog",showClose:!1,titleStyle:{},visible:!0,ruleSize:1,bgRule:"border.light",showHorizontalRule:!1};var m=k},19527:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d=c(7896),e=c(31461),f=c(2784),g=c(13980),h=c(99673),i=c(91489),j=c(68054);let k=h.ZP.div({display:"flex"},(0,j.qC)(j.GQ,j.Oq,j.Cg,j.bK,j.FK,j.AF,j.Dh,j.yd,j.cp,i.$_,i.oc),i.SG),l=(0,f.forwardRef)((a,b)=>{let{children:c}=a,g=(0,e.Z)(a,["children"]);return f.createElement(k,(0,d.Z)({ref:b},g),c)});l.propTypes={children:(0,g.oneOfType)([g.element,g.string,(0,g.arrayOf)(g.element),g.node])},l.defaultProps={children:void 0},l.displayName="Flex";var m=l},25610:function(a,b,c){"use strict";c.d(b,{Z:function(){return j}});var d=c(7896),e=c(31461),f=c(2784),g=c(13980),h=c(63825);let i=f.forwardRef((a,b)=>{let{children:c}=a,g=(0,e.Z)(a,["children"]);return f.createElement(h.Z,(0,d.Z)({ref:b,as:"h3","data-testid":"main-title"},g),c)});i.propTypes={children:g.string.isRequired},i.displayName="Heading";var j=i},75851:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(2784),e=c(28316);let f=({id:a,children:b})=>{if("object"!=typeof window)return d.Fragment;let c=(0,d.useRef)(document.getElementById(a)||document.createElement("div")),[f]=(0,d.useState)(!c.current.parentElement);return(0,d.useEffect)(()=>(f&&(c.current.id=a,document.querySelector("main")?document.querySelector("main").appendChild(c.current):document.body.appendChild(c.current)),()=>{f&&c.current.parentElement&&c.current.parentElement.removeChild(c.current)}),[a]),(0,e.createPortal)(b,c.current)};var g=(0,d.memo)(f)},70715:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(91489),i=c(8341);let j=(0,g.ZP)(i.Z).attrs(a=>Object.assign({forwardedAs:"label",color:"text.base",gridTemplateColumns:"min-content auto",gridGap:3,py:3},a))`
  cursor: pointer;
  align-items: center;
`,k=g.ZP.input.attrs(a=>Object.assign({type:"radio"},a))`
  pointer-events: ${({pointerNone:a})=>a?"none":"auto"};
  appearance: none;
  background: transparent;
  width: 20px;
  height: 20px;
  border: ${(0,h.R)("borders.1")};
  border-radius: ${(0,h.R)("radii.circle")};
  cursor: pointer;

  &:checked {
    border-color: ${(0,h.dF)("primary")};

    &:before {
      content: '';
      display: block;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: ${(0,h.R)("radii.circle")};
      background: ${(0,h.dF)("primary")};
    }
  }
`,l=a=>{let{pointerNone:b,label:c,onChange:g}=a,h=(0,e.Z)(a,["pointerNone","label","onChange"]),i=f.createElement(k,(0,d.Z)({pointerNone:b},h,{onChange:g,"data-testid":"radio-input"}));return c?f.createElement(j,(0,d.Z)({},h,{"data-testid":"radio"}),i,c):i};l.defaultProps={fontSize:1,pointerNone:""};var m=l},7029:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d=c(7896),e=c(31461),f=c(2784),g=c(12468),h=c(99673),i=c(68054),j=c(91489);let k=h.ZP.img`
  width: 100%;
  height: inherit;
  object-fit: ${({objectFit:a})=>a||"contain"};
  ${i.FK}
  ${i.Dh}
  ${i.bK}
  ${i.Cg}
  ${j.oc}
`,l=a=>{let{src:b,srcSetDensity:c,imageWidth:g,imageHeight:h,width:i,height:j,lazy:l}=a,m=(0,e.Z)(a,["src","srcSetDensity","imageWidth","imageHeight","width","height","lazy"]);if(!b)return f.createElement(f.Fragment,null);let n=Object.assign({},m,{width:g,height:h,src:b.replace("{w}",i).replace("{h}",j)}),o=c.map(a=>{let c=b.replace("{w}",i*a).replace("{h}",j*a),d=a>1?` ${a}x`:"";return`${c}${d}`}).join(", ");return o&&(n.srcSet=o),l&&(n.loading="lazy"),f.createElement(k,(0,d.Z)({"data-testid":"image"},n))};l.defaultProps={height:g.w.height,lazy:!0,src:"",srcSetDensity:[],width:g.w.width,imageWidth:"",imageHeight:""};var m=l},12468:function(a,b,c){"use strict";c.d(b,{Bl:function(){return k},Co:function(){return d},IY:function(){return f},K9:function(){return l},RW:function(){return g},Uh:function(){return m},dz:function(){return j},ig:function(){return i},w:function(){return h},wp:function(){return n},yg:function(){return e}});let d="miniature",e="gallery",f="list",g="https://www.magazineluiza.com.br",h={width:"186",height:"140"},i="magazineluiza",j="Descubra outras ofertas aqui",k={endIcon:"ChevronRight",justifyContent:"flex-start"},l="Mostrar mais produtos",m={startIcon:"ChevronDownCircle",centered:!0},n="BRL"},98047:function(a,b){"use strict";let c=(a,b)=>a.find(a=>(null==a?void 0:a.value)===b);b.Z=c},82753:function(a,b,c){"use strict";c.d(b,{kC:function(){return e},lb:function(){return M},vQ:function(){return f},qJ:function(){return h},Ji:function(){return R},bd:function(){return N},lm:function(){return I},KF:function(){return i.Z},xx:function(){return C.Z},rx:function(){return q},Z4:function(){return p},RZ:function(){return n},zY:function(){return s},az:function(){return S},"$7":function(){return Q},ie:function(){return P},hY:function(){return A},gf:function(){return B.Z},IC:function(){return y},yH:function(){return u},O:function(){return E},"t$":function(){return F},Ay:function(){return G},CK:function(){return l.Z}});let d=a=>"string"!=typeof a?"":a.toLowerCase().charAt(0).toUpperCase()+a.slice(1);var e=d;function f(a){if(navigator.clipboard)return navigator.clipboard.writeText(a);let b=document.createElement("textarea");return b.value=a,b.setAttribute("readonly",""),b.style={position:"absolute",left:"-9999px"},document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b)}let g=a=>{if(!a||"string"!=typeof a||!a.includes("www.youtube.com/v/"))return a;let b=a.match(/v\/([a-zA-Z0-9_-]+)&?/),c=null!=b&&b.length?b[1]:null;return c?`https://www.youtube.com/embed/${c}`:a};var h=g,i=c(98047);let j=(a,b="")=>{let c=a;return b.length<c?b:(3===c&&(c+=3),`${b.substr(0,c-3)}...`)};var k=j,l=c(7874);let m=({zipCode:a="",zipCodeCity:b="",zipCodeState:c="",maxCityLength:d=24,formatter:e=(a,b)=>`${a.toUpperCase()}, ${b.toUpperCase()}`,includeAddress:f=!0}={})=>{let g=b&&"string"==typeof b?k(d,b):"",h=a&&"string"==typeof a?a:"",i=e(g,c&&"string"==typeof c?c:"");return f?`${i} - ${(0,l.Z)(h)}`:(0,l.Z)(h)};var n=m;c(63113);let o=(a,b,c)=>b<=a&&a<=c,p=(a,b,c,d)=>o(a,c,d)&&a<b,q=(a,b,c,d)=>o(a,c,d)&&a>b,r=a=>{let b=(null==a?void 0:a.length)>1?"dos seguros":"do seguro",c=a.join(", ").replace(/, ([^,]*)$/," e $1").toLowerCase();return`${b} ${c}`};var s=r;let t=(a=[],b=[])=>b.map(b=>a.find(a=>Number(null==a?void 0:a.id)===b));var u=t;let v=(a=[],b=null)=>{if(!b)throw Error("Invalid parameter [key]");return a.length?a.reduce((a,c)=>Object.assign({},a,{[c[b]]:c}),{}):{}};var w=v;let x=(a=[],b=[])=>{if(!b.length||!a.length)return a;if(!b.every(a=>"string"==typeof a))throw Error("Invalid parameter [orderBy]");let c=w(a,"id"),d=Object.keys(c).filter(a=>!b.includes(a)),e=b.map(a=>c[a]).slice(0,a.length),f=d.map(a=>c[a]);return[...e,...f]};var y=x;let z=(a={})=>(b=[])=>{var c;let d=(null==a?void 0:null==(c=a.values)?void 0:c.reduce((a,c)=>{let d=(0,i.Z)(b,c);return Object.assign({},a,{[c]:null==d?void 0:d.available})},{}))||{};return Object.entries(d).sort(([,a],[,b])=>b-a).map(([a])=>a)};var A=z,B=c(41869),C=c(97728),D=c(2784),E=(a,b,c="block")=>{(0,D.useEffect)(()=>{let d=()=>{Object.values(a).forEach(a=>{a.current.style.display=c}),Object.values(a).filter(a=>a.current.offsetLeft+a.current.offsetWidth>b.current.offsetWidth+b.current.offsetLeft).forEach(a=>{a.current.style.display="none"})};return d(),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}},[b.current])},F=(a,b)=>{(0,D.useEffect)(()=>{let c=c=>{!(!a.current||a.current.contains(c.target))&&b(c)};return document.addEventListener("mousedown",c),document.addEventListener("touchstart",c),()=>{document.removeEventListener("mousedown",c),document.removeEventListener("touchstart",c)}},[a,b])},G=(a,b)=>{(0,D.useEffect)(()=>{let c=()=>b(!0),d=()=>b(!1),e=null==a?void 0:a.current;if(e)return e.addEventListener("mouseenter",c),e.addEventListener("mouseleave",d),()=>{e.removeEventListener("mouseenter",c),e.removeEventListener("mouseleave",d)}},[a])};let H=(a,b)=>a.some(a=>(null==a?void 0:a.value)===b&&(null==a?void 0:a.available)=== !0);var I=H;let J=6e4,K=60*J,L=a=>String(a).padStart(2,"0");function M(a,b){if(!a)return{show:!1,timeRemainingFormatted:"00:00:00"};let{timer_start_date:c,timer_end_date:d}=a||{},e=new Date(b).getTime(),f=new Date(c).getTime(),g=new Date(d).getTime();if(!f||!g||e<f||g<=e)return{show:!1,timeRemainingFormatted:"00:00:00"};let{hours:h,minutes:i,seconds:j}=function(a){let b=Math.floor(a/K);a%=K;let c=Math.floor(a/J);a%=J;let d=Math.floor(a/1e3);return{hours:b,minutes:c,seconds:d}}(g-e),k=`${L(h)}:${L(i)}:${L(j)}`;return{show:!0,timeRemainingFormatted:k}}function N(){let a=new Date,b=new Date(a.toLocaleString("en-US",{timeZone:"America/Sao_Paulo"})),c=b.getFullYear(),d=L(b.getMonth()+1),e=L(b.getDate()),f=L(b.getHours()),g=L(b.getMinutes()),h=L(b.getSeconds());return`${c}-${d}-${e}T${f}:${g}:${h}`}var O=c(99673);let P=O.F4`
  from { transform: translateY(-100%); }
  to { transform: translateY(0%); }
`,Q=O.F4`
  from { transform: translateY(100%);}
  to { transform: translateY(0); }
`,R=O.F4`
  from { opacity: 0; }
  to { opacity: 1; }
`,S=O.F4`
  from { opacity: 0.5; -webkit-transform: scale(0.5); transform: scale(0.5); }
  to { opacity: 1; -webkit-transform: scale(0.5); transform: scale(1); }
`},97728:function(a,b,c){"use strict";var d=c(12468);b.Z=({currency:a=d.wp}={})=>a!==d.wp},63113:function(a,b,c){"use strict";var d=c(71180);let e=a=>{let b=a;"string"==typeof a&&(b=a.replace(".","").replace(",","").replace(/\D/g,""));let c=Number.isNaN(b)||""===b?0:b,e=(0,d.oB)({value:c,rightFilling:!0});return{amount:c,currency:e}};b.Z=e},41869:function(a,b){"use strict";let c=(a=[])=>a.sort((a,b)=>(null==b?void 0:b.selected)-(null==a?void 0:a.selected));b.Z=c},7874:function(a,b){"use strict";let c=a=>a.replace(/\D/g,"").replace(/(\d{5})(\d)/,"$1-$2").replace(/(\d{5})(\d{3})/,"$1-$2").replace(/(-\d{3})\d+?$/,"$1");b.Z=c},69918:function(a,b,c){var d=c(51522),e=c(85876);a.exports=function(a){return e(d(a))}},5809:function(a){var b=Math.floor,c=Math.random;a.exports=function(a,d){return a+b(c()*(d-a+1))}},12682:function(a,b,c){var d=c(85876),e=c(98346);a.exports=function(a){return d(e(a))}},50753:function(a,b,c){var d=c(50343);a.exports=function(a,b){return d(b,function(b){return a[b]})}},85876:function(a,b,c){var d=c(5809);a.exports=function(a,b){var c=-1,e=a.length,f=e-1;for(b=void 0===b?e:b;++c<b;){var g=d(c,f),h=a[g];a[g]=a[c],a[c]=h}return a.length=b,a}},46152:function(a,b,c){var d=c(69918),e=c(12682),f=c(86152);a.exports=function(a){return(f(a)?d:e)(a)}},98346:function(a,b,c){var d=c(50753),e=c(90249);a.exports=function(a){return null==a?[]:d(a,e(a))}}}])
//# sourceMappingURL=9601-808c40fa11b1b2f4.js.map