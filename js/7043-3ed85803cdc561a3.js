(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7043],{50616:function(a,b,c){"use strict";c.d(b,{Z:function(){return s}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(19527),i=c(99673),j=c(91489),k=c(81572);let l={text:i.iv`
    font-size: ${a=>(0,j.R)("fontSizes.1")(a)}px;
    line-height: ${a=>(0,j.R)("lineHeights.plus")(a)}px;
    color: ${a=>(0,j.uu)("scratched")(a)};

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    ${a=>a.open?i.iv`
            max-height: 54px;
            margin-bottom: 16px;
          `:i.iv`
            max-height: 0px;
          `}
  `,component:i.iv`
    max-height: ${a=>a.open?"100%":"0px"};
  `},m=(0,i.ZP)(k.Z).attrs(a=>Object.assign({cursor:"pointer",outline:"none",py:0,gap:0},a))``,n=(0,i.ZP)(m.Header)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding-right: 8px;
`,o=(0,i.ZP)(m.Content)`
  overflow: hidden;
  transition: max-height 0.3s ease-out;

  ${a=>a.isText?l.text:l.component}
`,p=i.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30px, max-content));
  justify-content: center;
  padding: 8px;
  grid-gap: ${a=>(0,j.R)("space.4")(a)}px;
`;var q=c(25610);let r=(0,f.forwardRef)((a,b)=>{let{asTitle:c,children:i,id:j,textAlign:k,openIcon:l,closeIcon:r,title:s,innerControl:t,open:u,fontSize:v,fontWeight:w,onClick:x}=a,y=(0,e.Z)(a,["asTitle","children","id","textAlign","openIcon","closeIcon","title","innerControl","open","fontSize","fontWeight","onClick"]),[z,A]=(0,f.useState)(!1),B=()=>{A(!z),x()};return f.createElement(m,(0,d.Z)({ref:b},y),f.createElement(n,{scale:"large",fill:"background.dark",endIcon:u?r:l,onClick:B},f.createElement(h.Z,{justifyContent:"flex-start",alignItems:"center"},f.createElement(p,null,f.createElement(g.JO$,{name:`Category${j}`,fill:"background.primary"})),f.createElement(q.Z,{as:c,fontSize:v,fontWeight:w},s))),f.createElement(o,{open:t?z:u,isText:"string"==typeof i,textAlign:k},i))});r.defaultProps={asTitle:"h2",children:null,textAlign:"justify",openIcon:"ChevronRight",closeIcon:"ChevronRight",innerControl:!1,open:!1,fontSize:2,fontWeight:"medium"},r.displayName="Accordion";var s=r},59120:function(a,b,c){"use strict";c.d(b,{W:function(){return f},z:function(){return e}});var d=c(99673);let e=d.iv`
  border: none;
  cursor: pointer;

  background: none;

  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.5;
  }
`,f=d.ZP.button`
  position: relative;
  width: 100%;
  height: 100%;

  ${e}

  ${({noHover:a})=>!a&&d.iv`
      &:hover:not(:disabled) {
        transform: scale(1.1);
      }
    `}
`},66685:function(a,b,c){"use strict";c.d(b,{Z:function(){return i}});var d=c(7896),e=c(31461),f=c(2784),g=c(59120);function h(a){let{children:b}=a,c=(0,e.Z)(a,["children"]);return f.createElement(g.W,(0,d.Z)({"data-testid":"base-button",role:"button"},c),b)}h.defaultProps={noHover:!1,onClick:()=>{}};var i=h},27439:function(a,b,c){"use strict";c.d(b,{ZP:function(){return x}});var d=c(7896),e=c(31461),f=c(2784),g=c(13980),h=c(99673),i=c(91489),j=c(68054),k=c(63825),l=c(25610),m=c(19527),n=c(7029);let o=a=>h.iv`
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${a};
`,p=h.ZP.a.withConfig({shouldForwardProp:(a,b)=>!!(a.includes("ads-")||a.includes("redirect"))||b(a)}).attrs(a=>Object.assign({},a))({transition:"box-shadow ease 0.4s",textDecoration:"none",cursor:"pointer",display:"grid",overflow:"hidden",gridTemplateAreas:'"image" "body"',justifyContent:"space-between",borderRadius:(0,i.R)("radii.default")},a=>{let{enableHover:b}=a,c=(0,e.Z)(a,["enableHover"]);return b&&{":hover":{boxShadow:(0,i.R)("boxShadows.4")(c)}}},(0,j.qC)(j.Oq,i.$_,j.Dh,j.eC,j.bK,j.fU),i.Tf),q=(0,h.ZP)(n.Z).attrs(a=>Object.assign({imageWidth:"100%",imageHeight:"100%",objectFit:"cover"},a))`
  grid-area: image;
`,r=(0,h.ZP)(m.Z).attrs(a=>Object.assign({color:"inherit",background:"inherit",padding:"16px 14px",flexDirection:"column"},a))`
  grid-area: body;
`,s=(0,h.ZP)(l.Z).attrs(a=>Object.assign({fontSize:6,color:"inherit",lineHeight:"1.2em"},a))`
  ${({truncate:a,lines:b=2})=>a&&o(b)}
`,t=(0,h.ZP)(k.Z).attrs(a=>Object.assign({forwardedAs:"small",color:"inherit",display:"block",fontSize:0,marginTop:2},a))`
  ${({truncate:a,lines:b=2})=>a&&o(b)}
`,u=(0,h.ZP)(k.Z).attrs(a=>Object.assign({fontSize:2,fontWeight:"light",lineHeight:"1.5em",color:"inherit",marginTop:"3"},a))`
  ${({truncate:a,lines:b=4})=>a&&o(b)}
`,v=f.forwardRef((a,b)=>{let{children:c}=a,g=(0,e.Z)(a,["children"]);return f.createElement(p,(0,d.Z)({ref:b},g),c)});v.displayName="Card",v.Image=q,v.Title=s,v.Subtitle=t,v.Text=u,v.Body=r;let w={truncate:g.bool,lines:g.number};v.Title.propTypes=Object.assign({},w),v.Subtitle.propTypes=Object.assign({},w),v.Text.propTypes=Object.assign({},w);var x=v},18281:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(91489),i=c(19527);let j=(0,g.ZP)(i.Z).attrs(a=>{let{color:b,disabled:c}=a,d=(0,e.Z)(a,["color","disabled"]);return Object.assign({alignItems:"center",color:c?"text.gray":b},d)})``,k=g.ZP.input.attrs(()=>({type:"checkbox"}))`
  appearance: none;
  background: transparent;
  width: 20px;
  height: 20px;
  outline: none;
  cursor: pointer;

  &:not(:checked) {
    border-radius: ${(0,h.R)("radii.medium")};
    border: ${(0,h.R)("borders.1")};
  }

  &:checked {
    &:after {
      content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJzdmdJZCIgZmlsbD0iI2ZmZiIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0ic2MtYlpReW5NIGpjVFFtYyI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiLz48L3N2Zz4=');
      position: absolute;
      width: 20px;
      height: 20px;
      background: ${(0,h.dF)("primary")};
      border-radius: ${(0,h.R)("radii.medium")};
      box-sizing: border-box;
    }

    &:disabled {
      &:after {
        background: ${(0,h.dF)("dark")};
      }
    }
  }
`,l=(0,f.forwardRef)((a,b)=>{let{children:c,checked:g,defaultChecked:h,disabled:i,value:l,onChange:m,label:n,name:o,as:p}=a,q=(0,e.Z)(a,["children","checked","defaultChecked","disabled","value","onChange","label","name","as"]),r=f.createElement(k,{onChange:a=>m(a,l),checked:g,disabled:i,defaultChecked:h,ref:b,value:l,name:o,"data-testid":"checkbox-item"});return c||n?f.createElement(j,(0,d.Z)({forwardedAs:p,disabled:i},q,{"data-testid":"checkbox"}),r,n||c):r});l.defaultProps={children:null,disabled:!1,color:"text.base",as:"label",gap:2,onChange:()=>{}},l.displayName="Checkbox";var m=l},17781:function(a,b,c){"use strict";c.d(b,{Z:function(){return u}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(68054),i=c(91489);let j="primary",k={light:i.rS.palette.text.white,dark:i.rS.palette.text.base},l=`
  -webkit-transition: all 500ms ease;
  transition: all 500ms ease;
`,m=`
  ${l}
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`,n={xsmall:"18px",small:"28px",medium:"38px"},o=({props:a,variation:b,checked:c=!1})=>{let{bg:d,type:e,scales:f=k}=a,h={colorfulTransition:g.iv`
      ${l}
      background-color: ${(0,i.dF)(d||j)(a)};
      color: ${(0,i.jk)(d||j,f)(a)};
      > svg {
        ${l}
        fill: ${(0,i.jk)(d||j,f)(a)};
      }
    `,colorful:g.iv`
      ${l}
      background-color: ${(0,i.dF)(d||j)(a)};
      color: ${(0,i.jk)(d||j,f)(a)};
      > svg {
        ${l}
        fill: ${(0,i.jk)(d||j,f)(a)};
      }
    `,default:g.iv`
      background-color: ${(0,i.dF)("white")(a)};
      color: ${(0,i.jk)("white",f)(a)};
    `},m=d&&(c||!e.includes("radio","checkbox"))?"colorful":"default";return h[b||m]},p=g.ZP.div`
  ${h.e6}
  ${h.bK}
  text-decoration: none;
`,q=g.ZP.label`
  display: flex;
  justify-content: ${({justify:a})=>a};
  align-items: center;
  border: ${({hasBorder:a})=>a?"1px solid":"none"};
  scroll-snap-align: center;
  border-radius: ${a=>(0,i.R)("space.4")(a)}px;

  min-width: ${({minWidth:a})=>a};
  height: ${a=>n[null==a?void 0:a.size]};

  ${a=>o({props:a})};

  ${({autoSize:a})=>a?g.iv`
          justify-content: space-around;
          width: auto;
          min-width: auto;
          height: auto;
          padding: ${(0,i.R)("space.2")}px ${(0,i.R)("space.2")}px;
        `:g.iv`
          max-width: ${({maxWidth:a})=>a};
        `}

  ${m}
  ${l}
  ${h.E0}
  ${h.o3}
  ${h.JB}
  ${h.Ue}
  ${h.Cc}
`,r=g.ZP.p`
  max-width: ${({textMaxWidth:a})=>a};
  font-size: inherit;
  font-weight: inherit;
  line-height: ${a=>(0,i.R)("lineHeights.standard")(a)}px;
  font-stretch: normal;
  letter-spacing: normal;

  ${a=>{let{color:b}=a,c=(0,e.Z)(a,["color"]);return b&&g.iv`
      color: ${(0,i.uu)(b)(c)};
    `}}

  ${({autoSize:a})=>a&&g.iv`
      max-width: 100%;
    `};
`,s=g.ZP.input`
  ${m}
  display: none;

  &:checked + ${q} {
    ${a=>o({props:a,variation:"colorfulTransition",checked:!0})};
  }
`,t=a=>{let{as:b,checked:c,clickable:g,startIcon:h,children:i,autoSize:j,endIcon:k,value:l,color:m,gridGap:n,size:o,name:t,type:u,id:v,bg:w,scales:x,onChange:y,onClick:z,hasBorder:A,textMaxWidth:B}=a,C=(0,e.Z)(a,["as","checked","clickable","startIcon","children","autoSize","endIcon","value","color","gridGap","size","name","type","id","bg","scales","onChange","onClick","hasBorder","textMaxWidth"]),D=a=>{var b,c;y({value:null==a?void 0:null==(b=a.target)?void 0:b.value,selected:null==a?void 0:null==(c=a.target)?void 0:c.checked})};return f.createElement(p,(0,d.Z)({},C,{as:g?b||"a":b||"div","data-testid":"chip-container"}),u&&f.createElement(s,{"data-testid":"chip-input",checked:c,onChange:D,value:l,type:u,name:t,bg:w,scales:x,id:v}),f.createElement(q,(0,d.Z)({"data-testid":"chip-label",onClick:z,gridGap:n,clickable:g,startIcon:h,autoSize:j,endIcon:k,size:o,htmlFor:v,bg:w,type:u,hasBorder:A,scales:x},C,g&&{onChange:y}),h,f.createElement(r,{autoSize:j,clickable:g,color:m,bg:w,textMaxWidth:B},i),k))};t.defaultProps={onChange:()=>{},onClick:()=>{},type:"",clickable:!1,startIcon:null,size:"medium",children:null,gridGap:2,bg:"",fontSize:0,fontWeight:"regular",hasBorder:!1,endIcon:null,value:"",color:"",name:"",id:"",justify:"center",minWidth:"144px",maxWidth:"144px",textMaxWidth:"60%"};var u=t},88699:function(a,b,c){"use strict";c.d(b,{Z:function(){return k}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(8341);let i=(0,g.ZP)(h.Z)`
  display: grid;
  ${({trigger:a,collapsedIn:b})=>a&&g.iv`
      > *:nth-child(n + ${b}) {
        display: none;
        overflow: hidden;
        max-height: 0;
      }
    `};
`,j=a=>{let{children:b,trigger:c,collapsedIn:g}=a,h=(0,e.Z)(a,["children","trigger","collapsedIn"]);return f.createElement(i,(0,d.Z)({trigger:c,collapsedIn:g+1,"data-testid":"collapse"},h),f.Children.toArray(b).map(a=>f.isValidElement(a)&&f.cloneElement(a)))};j.defaultProps={trigger:!1,children:null,collapsedIn:0},j.displayName="Collapse";var k=j},58331:function(a,b,c){"use strict";c.d(b,{Z:function(){return k}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(19527),i=c(63825);let j={like:{icon:"Like"},dislike:{icon:"Dislike"}};var k=function(a){let{type:b,label:c,onClick:k,color:l}=a,m=(0,e.Z)(a,["type","label","onClick","color"]),{icon:n}=j[b];return f.createElement(h.Z,(0,d.Z)({alignItems:"center",onClick:k},m),f.createElement(g.JO$,{name:n,color:l,cursor:"pointer"}),f.createElement(i.Z,{ml:"6px"},c))}},74822:function(a,b,c){"use strict";c.d(b,{Z:function(){return I}});var d=c(7896),e=c(31461),f=c(2784),g=c(82753),h=c(99673),i=c(91489),j=c(34490),k=c(10200),l=c(84546),m=c(19527);let n=(0,h.ZP)(m.Z).attrs(a=>Object.assign({color:"text.base",alignItems:"center",p:3},a))``,o=(0,h.ZP)(l.Z).attrs(a=>Object.assign({display:"inline-block"},a))``,p=(0,h.ZP)(k.Z).attrs(a=>{let{pointing:b}=a,c=(0,e.Z)(a,["isOpen","pointing"]);return Object.assign({position:"relative",fontSize:1,py:b?3:2,gridGap:1},c)})``,q=(0,h.ZP)(l.Z).attrs(a=>Object.assign({position:"absolute",color:"text.base",bg:"background.lighter",borderRadius:"medium",zIndex:1,minWidth:"10rem",maxHeight:"20rem",forwardedAs:"ul"},(0,e.Z)(a,["pointing"])))`
  border: ${(0,i.R)("borders.0")};

  ${({pointing:a})=>a&&h.iv`
      &::before,
      &::after {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 19px;
        border: 11px solid transparent;
        border-bottom-color: ${(0,i.R)("borders.0")};
      }

      &::after {
        left: 20px;
        border: 10px solid transparent;
        border-bottom-color: ${(0,i.dF)("lighter")};
      }
    `}
`,r=(0,h.ZP)(n)`
  gap: ${(0,i.R)("space.1")}px;
  ${({disableHover:a})=>!a&&h.iv`
      &:hover {
        background-color: ${(0,i.dF)("darker")};
      }
    `}
`,s=(0,h.ZP)(n)`
  font-weight: ${a=>(0,i.R)("fontWeights.medium")(a)};
`,t=(0,h.ZP)(j._ME)`
  width: 20px;
  height: 20px;
  transition: transform 0.25s ease-out;
  transform: ${({rotated:a})=>a&&"rotate(-180deg)"};
  ${i.$_}
`,u=(0,f.createContext)(!1),v=({children:a,value:b})=>f.createElement(u.Provider,{value:b},a),w=()=>(0,f.useContext)(u);var x=v;let y=a=>{let{children:b,fill:c}=a,g=(0,e.Z)(a,["children","fill"]),{isOpen:h,handleOnClick:i,pointing:j}=w();return f.createElement(p,(0,d.Z)({},g,{isOpen:h,pointing:j,onClick:i,"data-testid":"dropdown-title"}),b,f.createElement(t,{fill:c,rotated:h}))};y.defaultProps={children:null,fill:"text.base",underlineOnHover:!1},y.displayName="DropdownTitle";var z=y;let A=a=>{let{children:b}=a,c=(0,e.Z)(a,["children"]),{isOpen:g,pointing:h}=w();return g?f.createElement(q,(0,d.Z)({},c,{pointing:h,"data-testid":"dropdown-menu"}),b):null};A.defaultProps={children:null,fontSize:1,forwardedAs:"ul"},A.displayName="DropdownMenu";var B=A;let C=a=>{let{children:b,startIcon:c,endIcon:d}=a,g=(0,e.Z)(a,["children","startIcon","endIcon"]);return f.createElement(s,g,c,b,d)};C.defaultProps={children:null,startIcon:null,endIcon:null,forwardedAs:"li"},C.displayName="DropdownLabel";let D=a=>{let{children:b,value:c,startIcon:g,endIcon:h}=a,i=(0,e.Z)(a,["children","value","startIcon","endIcon","onClick"]),{setIsOpen:j,handleOnChange:k}=w(),l=a=>{j(!1),k(a,{value:c})};return f.createElement(r,(0,d.Z)({},i,{role:"option",onClick:l,"data-testid":"dropdown-item"}),g,b,h)};D.defaultProps={children:null,value:null,startIcon:null,endIcon:null,disableHover:!1,forwardedAs:"li"},D.displayName="DropdownItem";var E=D,F=c(97600);let G=a=>f.createElement(F.Z,a),H=a=>{let{title:b,children:c,options:h,onClick:i,onChange:j,mouseenter:k,pointing:l}=a,m=(0,e.Z)(a,["title","children","options","onClick","onChange","mouseenter","pointing"]),n=(0,f.useRef)(),[p,q]=(0,f.useState)(!1);k?(0,g.Ay)(n,q):(0,g.t$)(n,()=>q(!1));let r=a=>{k||q(!p),i(a)},s=(a,{value:b})=>{j(a,{value:b})};return f.createElement(x,{value:{isOpen:p,setIsOpen:q,handleOnClick:r,handleOnChange:s,pointing:l}},f.createElement(o,{ref:n,"data-testid":"dropdown"},(()=>{let a=f.Children.toArray(c).find(({type:{displayName:a}})=>"DropdownTitle"===a);return a?f.isValidElement(a)&&a:f.createElement(z,m,b)})(),h?f.createElement(B,{mouseenter:k,pointing:l},null==h?void 0:h.map(a=>{let{key:b,text:c,value:g,startIcon:h,endIcon:i}=a,j=(0,e.Z)(a,["key","text","value","startIcon","endIcon"]);return f.createElement(E,(0,d.Z)({key:b,value:g,startIcon:h,endIcon:i},j),c)})):f.Children.toArray(c).find(({type:{displayName:a}})=>"DropdownMenu"===a)))};H.defaultProps={children:null,mouseenter:!1,pointing:!1,onChange:()=>{},onClick:()=>{}},H.Title=z,H.Menu=B,H.Label=C,H.Divider=G,H.Item=E,G.displayName="DropdownDivider";var I=H},97600:function(a,b,c){"use strict";c.d(b,{Z:function(){return i}});var d=c(2784),e=c(99673),f=c(91489);let g=e.ZP.hr`
  height: ${({size:a})=>`${a}px`};
  width: 100%;
  border: none;
  ${f.$_}
`,h=a=>d.createElement(g,a);h.defaultProps={size:1,bg:"border.light"};var i=h},39471:function(a,b,c){"use strict";c.d(b,{Z:function(){return r}});var d=c(2784),e=c(99673),f=c(91489),g=c(7029),h=c(84546),i=c(19527),j=c(63825);let k=(0,e.ZP)(h.Z)`
  border-radius: 50%;
  width: ${a=>(0,f.R)("sizes.hotLinks.width")(a)};
  height: ${a=>(0,f.R)("sizes.hotLinks.height")(a)};
  margin-bottom: 8px;
`,l=e.ZP.a`
  display: block;
  text-decoration: none;
  width: 100%;
`,m=(0,e.ZP)(g.Z)``,n=e.iv`
  flex-flow: wrap;
  background: ${a=>(0,f.R)("palette.background.lighter")(a)};
  padding: 0 8px;
  border-left: 4px solid ${({borderColor:a})=>a||"transparent"};
  width: 100%;
  border-radius: 4px;
  box-shadow: ${a=>(0,f.R)("boxShadows.4")(a)};

  p {
    font-size: ${a=>(0,f.R)("fontSizes.2")(a)}px;
    color: ${a=>(0,f.uu)("scratched")(a)};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    text-align: left;
  }

  ${k} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: ${a=>(0,f.R)("borders.0")(a)};
    margin: 4px 7px 4px 0;

    ${m} {
      width: 100%;
      border-radius: 50%;
    }
  }
`,o=(0,e.ZP)(i.Z)`
  flex-direction: column;
  align-items: center;

  ${({directionType:a})=>"column"===a&&n}
`,p=(0,e.ZP)(j.Z).attrs(()=>({color:"base",fontSize:[0,1,2]}))`
  text-align: center;
  line-height: ${a=>(0,f.R)("lineHeights.plus")(a)}px;
`,q=({item:a,onClick:b,directionType:c,imgLazyLoading:e})=>{let{link:f,image:g,text:h,borderColor:i}=a;return d.createElement(l,{href:f,onClick:c=>b(c,a),"data-testid":"hotlink-link",borderColor:i},d.createElement(o,{directionType:c,borderColor:i,"data-testid":`title-${h}`},d.createElement(k,null,d.createElement(m,{alt:h,src:g,lazy:e})),d.createElement(p,null,h)))};q.defaultProps={item:{},onClick:()=>{},directionType:"row",imgLazyLoading:!0};var r=q},29869:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(91489);let i=g.iv`
  border: 1px solid;
  border-color: ${a=>{let{hasError:b}=a,c=(0,e.Z)(a,["hasError"]);return(0,h.ow)(b?"error.base":"border.light")(c)}};
  border-radius: 4px;
  width: 100%;

  padding: ${(0,h.R)("space.2")}px;
  line-height: ${(0,h.R)("lineHeights.input")};
  font-size: ${(0,h.R)("fontSizes.1")}px;

  ::placeholder {
    color: ${(0,h.uu)("light")};
  }
`,j=g.ZP.input`
  ${i}
`,k=g.ZP.textarea.attrs(a=>({rows:a.rows||"5",cols:a.cols||"40"}))`
  ${i}
  resize: none;
  font-family: ${(0,h.R)("fontFamily")};
`,l=(0,f.forwardRef)((a,b)=>{let{children:c,value:g,onChange:h}=a,i=(0,e.Z)(a,["children","value","onChange"]),l=i.multiline?k:j;return f.createElement(l,(0,d.Z)({ref:b},i,{value:g,onChange:a=>h(a,g)}),c)});l.defaultProps={multiline:!1,hasError:!1,onChange:()=>{}},l.displayName="Input";var m=l},81572:function(a,b,c){"use strict";c.d(b,{Z:function(){return w}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(91489),i=c(63825),j=c(19527),k=c(84546);let l=(0,g.ZP)(j.Z).attrs(a=>{let{justifyContent:b,centered:c}=a,d=(0,e.Z)(a,["justifyContent","centered"]);return Object.assign({width:"100%",alignItems:"center",justifyContent:c?"center":b,flexWrap:"wrap",gap:2,px:2},!(null!=d&&d.scale)&&{py:2},d)})({textDecoration:"none"},h.bU,h.bA),m=(0,g.ZP)(i.Z).attrs(a=>{let{textAlign:b,centered:c,justifyContent:d}=a,f=(0,e.Z)(a,["textAlign","centered","justifyContent"]);return Object.assign({forwardedAs:"span",fontSize:1,flex:c||"space-between"!==d?"unset":1,color:"inherit",position:"center"===b?"absolute":"initial",transform:"center"===b?"translateX(-50%)":"initial",left:"center"===b?"50%":"initial"},f)})``,n=(0,g.ZP)(k.Z).attrs(a=>Object.assign({fontSize:1,color:"text.scratched",fontWeight:"regular",lineHeight:"display"},a))({flexBasis:"100%",textAlign:"justify",textAlignLast:"left"});var o=c(34490);let p=a=>{let{children:b}=a,c=(0,e.Z)(a,["children"]);return f.createElement(i.Z,(0,d.Z)({},c,{"data-testid":"item-description"}),b)};p.defaultProps={color:"inherit",fontWeight:"normal",display:"block",as:"small",fontSize:0,mt:1},p.displayName="ItemDescription";var q=p;let r=a=>{let{children:b}=a,c=(0,e.Z)(a,["children"]);return f.createElement(n,(0,d.Z)({},c,{"data-testid":"item-content"}),b)};r.displayName="ItemContent";var s=r;let t=a=>{let{centered:b,description:c,content:g,endIcon:h,fill:j,fontSize:k,hint:n,onClick:p,startIcon:r,textAlign:t,title:u,ellipsis:v,as:w,titleAs:x,justifyContent:y}=a,z=(0,e.Z)(a,["centered","description","content","endIcon","fill","fontSize","hint","onClick","startIcon","textAlign","title","ellipsis","as","titleAs","justifyContent"]),A=f.Children.toArray(null==z?void 0:z.children),B=a=>a&&"string"==typeof a?f.createElement(o.JO$,{name:a,fill:j,"data-testid":"item-icon"}):a,C=()=>c&&"string"==typeof c?f.createElement(q,null,c):c;return f.createElement(l,(0,d.Z)({forwardedAs:w,centered:b,textAlign:t,onClick:p,"data-testid":"item",justifyContent:y},z),B(r),(u&&"string"==typeof u?f.createElement(m,{fontSize:k,textAlign:t,centered:b,"data-testid":"item-title",forwardedAs:x},u,C()):u)||(()=>{let a=C(),c=v?{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",width:"100%"}:null;return a?f.createElement(f.Fragment,null,f.createElement(m,{fontSize:k,textAlign:t,centered:b,style:c,"data-testid":"item-title",forwardedAs:x},A,a)):f.createElement(f.Fragment,null,f.createElement(m,{fontSize:k,textAlign:t,centered:b,style:c,"data-testid":"item-title",forwardedAs:x,justifyContent:y},null==A?void 0:A.filter(({type:{displayName:a}={}})=>"ItemContent"!==a)))})(),(n&&"string"==typeof n?f.createElement(i.Z,{as:"label",fontSize:1,fontWeight:"normal","data-testid":"item-hint"},n):n)||B(h),(()=>{let a=null==A?void 0:A.find(({type:{displayName:a}={}})=>"ItemContent"===a);return a||(g?f.createElement(s,null,g):null)})())};t.defaultProps={title:"",children:null,justifyContent:"space-between",startIcon:null,endIcon:null,hint:null,centered:!1,fill:"currentColor",ellipsis:!1};var u=t;let v=(0,f.forwardRef)((a,b)=>{let{as:c,onClick:g}=a,h=(0,e.Z)(a,["as","onClick"]),i=f.Children.toArray(null==h?void 0:h.children),j=null==i?void 0:i.find(({type:{displayName:a}={}})=>null==a?void 0:a.includes("ItemHeader"));return j?f.createElement(l,(0,d.Z)({ref:b,forwardedAs:c,onClick:g,"data-testid":"item-container"},h),i):f.createElement(u,(0,d.Z)({ref:b,as:c,onClick:g},h))});v.defaultProps={title:"",children:null},v.Content=s,v.Description=q,v.Header=a=>f.createElement(u,(0,d.Z)({px:0,py:0},a)),v.Header.displayName="ItemHeader",v.displayName="Item";var w=v},66228:function(a,b,c){"use strict";c.d(b,{ij:function(){return d.ij},ZP:function(){return g},I1:function(){return d.I1},Iy:function(){return d.Iy}});var d=c(93088),e=c(2784);let f=({type:a,schema:b})=>{let c=Array.isArray(b)?{"@context":"https://schema.org/","@graph":b}:Object.assign({"@context":"https://schema.org/","@type":a},b);return e.createElement("script",{type:"application/ld+json","data-testid":"jsonld-script",dangerouslySetInnerHTML:{__html:JSON.stringify(c)}})};var g=f},93088:function(a,b,c){"use strict";c.d(b,{H9:function(){return e},ij:function(){return h},I1:function(){return j},NI:function(){return l},Iy:function(){return v},"$5":function(){return x}});let d=(a,b)=>{var c,d,e,f,g,h,i;return a&&0!==Object.keys(a).length&&(null==a?void 0:a.count)!==0||b&&null!=b&&b.general&&0!==Object.keys(null==b?void 0:b.general).length&&(null==b?void 0:null==(c=b.general)?void 0:c.reviewCount)!==0?{"@type":"AggregateRating",ratingValue:(null==a?void 0:a.count)>0?null==a?void 0:null==(d=a.score)?void 0:d.toString():null==b?void 0:null==(e=b.general)?void 0:null==(f=e.rating)?void 0:f.toFixed(0),reviewCount:(null==a?void 0:a.count)>0?null==a?void 0:null==(g=a.count)?void 0:g.toString():null==b?void 0:null==(h=b.general)?void 0:null==(i=h.reviewCount)?void 0:i.toString()}:null};var e=d,f=c(12468);let g=(a,b=f.RW)=>{if(!a||0===a.length)return{};let c=[{name:"magalu.com",position:1,url:""}],d=[...c,...a],e=d.map(a=>({"@type":"ListItem",position:a.position,item:{"@id":`${b}${null==a?void 0:a.url}`,name:a.name}}));return{itemListElement:e}};var h=g;let i=a=>{if(!a||0===Object.keys(a).length||0===a.count)return null;let b=a.filter(a=>a.question&&a.answer).map(a=>({"@type":"Question",name:a.question,acceptedAnswer:{"@type":"Answer",text:a.answer}}));return{mainEntity:b}};var j=i;let k=(a,b)=>{var c,d,e,f;return a&&0!==Object.keys(a).length&&b&&a.price&&(null!=a&&null!=(c=a.price)&&c.bestPrice||null!=a&&null!=(d=a.price)&&d.price)?{"@type":"Offer",price:(null==a?void 0:null==(e=a.price)?void 0:e.bestPrice)||(null==a?void 0:null==(f=a.price)?void 0:f.price),priceCurrency:"BRL",availability:"http://schema.org/InStock",url:(null==a?void 0:a.offer)||b}:null};var l=k;let m=a=>{let b=new Date(a);return a?`${b.getFullYear()}-${b.getMonth()+1}-${b.getDate()}`:""};var n=m;let o=(a,b,c)=>{var d,g;let h=`${c}${null==a?void 0:a.url}`,i=e(a.rating,b),j=l(a,h);return Object.assign({"@context":"https://schema.org","@type":"Product"},i?{aggregateRating:i}:{},{name:a.title,image:null==(d=a.image)?void 0:d.replace("{w}",f.w.width).replace("{h}",f.w.height),brand:null==(g=a.brand)?void 0:g.label,sku:a.id,description:a.description||a.title},j?{offers:j}:{})};var p=o;let q=(a="",b="")=>a?`${a} > ${b}`:"";var r=q;let s=(a,b)=>{var c,d,e,f,g;let h=null==b?void 0:null==(c=b.userReviews)?void 0:null==(d=c.items)?void 0:d.map(a=>x(a)).filter(a=>a),i=null==a?void 0:null==(e=a.attributes)?void 0:e.find(a=>"color"===a.type);return Object.assign({description:a.description||a.title,category:r(null==a?void 0:null==(f=a.category)?void 0:f.name,null==a?void 0:null==(g=a.subcategory)?void 0:g.name),color:null==i?void 0:i.current,itemCondition:"https://schema.org/NewCondition",sku:null==a?void 0:a.id},h?{review:h}:{})};var t=s;let u=({product:a={},productRating:b={},isList:c=!1},d=f.RW)=>{if(!a||0===Object.keys(a).length)return{};let e=p(a,b,d),g=c?{}:t(a,b);return Object.assign({},e,g)};var v=u;let w=a=>{var b;return a&&0!==Object.keys(a).length&&a.userData&&null!=(b=a.userData)&&b.name?{"@type":"Review",author:{"@type":"Person",name:a.userData.name},datePublished:n(a.submissionDate),reviewBody:a.description,name:a.title,reviewRating:{"@type":"Rating",bestRating:"5",ratingValue:a.rating.toString(),worstRating:"1"}}:null};var x=w},10200:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d=c(7896),e=c(31461),f=c(2784);c(21302);var g=c(99673),h=c(68054),i=c(91489);let j={a:g.iv`
    text-decoration: none;
  `,button:g.iv`
    font-size: inherit;
    font-family: inherit;
    border: 0;
    margin: 0;
    overflow: visible;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  `},k=g.ZP.a.attrs(a=>{let{color:b}=a,c=(0,e.Z)(a,["color"]);return Object.assign({color:b||"text.base",fontSize:1},c)})`
  cursor: pointer;

  ${({as:a})=>j[a]}
  ${({textAlign:a})=>a?g.iv`
          display: block;
        `:g.iv`
          ${{display:"inline-flex"}}
          ${h.GQ}
          align-items: center;
        `}
  ${({underline:a})=>a&&g.iv`
      text-decoration: underline;
    `}
  ${({hover:a})=>a&&g.iv`
      &:hover {
        text-decoration: ${a=>null!=a&&a.underlineOnHover?"underline":!(null!=a&&a.underline)&&"none"};
        color: ${a=>a.colorOnHover||(0,i.ow)(a.color)(a)||a.color};
      }
    `}
  ${h.Oq}
  ${h.Cg}
  ${h.bK}
  ${i.$_}
  ${h.Dh}
  ${h.yd}
  ${h.cp}
  ${h.eC}
  ${i.SG}
`;function l(a){let{children:b}=a,c=(0,e.Z)(a,["children"]),g=null!=c&&c.href?"a":"button";return f.createElement(k,(0,d.Z)({"data-testid":"link",as:g},c),b)}l.defaultProps={hover:!0,underline:!1,underlineOnHover:!0,bg:"transparent"},l.displayName="Link";var m=l},15566:function(a,b,c){"use strict";c.d(b,{Z:function(){return h}});var d=c(2784),e=c(34490),f=c(23076);let g=({storeName:a,width:b,height:c,src:g,alt:h,prefix:i})=>a?d.createElement(f.Z,{name:a,prefix:i}):g?d.createElement("img",{id:"logo",width:`${b}px`,src:g,alt:h}):d.createElement(e.ZGh,{id:"logo",color:"#fff",width:b,height:c,viewBox:"0 0 60 13",titleAccess:"Logo Magalu"});g.defaultProps={storeName:void 0,prefix:void 0,width:87,height:19,src:"",alt:""};var h=(0,d.memo)(g)},23076:function(a,b,c){"use strict";c.d(b,{Z:function(){return l}});var d=c(2784),e=c(99673),f=c(91489);let g=e.ZP.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${a=>(0,f.ow)("primary.text")(a)};
`,h=e.ZP.strong`
  color: ${a=>(0,f.ow)("primary.dark")(a)};
  margin-right: 2px;
`,i=e.ZP.span`
  display: block;
  margin-bottom: 5px;
  font-size: ${a=>(0,f.R)("fontSizes.4")(a)}px;
  font-weight: ${a=>(0,f.R)("fontWeights.bold")(a)};
  line-height: ${a=>(0,f.R)("lineHeights.fontSize")(a)};
`,j=e.ZP.div`
  font-size: ${a=>(0,f.R)("fontSizes.0")(a)}px;
  margin-bottom: 5px;
`,k=({name:a,prefix:b})=>{let c=0===a.indexOf(b)?a.replace(b,""):a;return d.createElement(g,null,d.createElement(i,null,d.createElement(h,null,b),c),d.createElement(j,null,"uma loja parceira do ",d.createElement("strong",null,"Magalu")))};k.defaultProps={prefix:"magazine"};var l=(0,d.memo)(k)},54934:function(a,b,c){"use strict";c.d(b,{Z:function(){return q}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(99673),i=c(91489),j=c(84546),k=c(63825);let l={primary:h.iv`
    background-color: ${a=>(0,i.dF)("primary")(a)};
    color: ${a=>(0,i.uu)("lightest")(a)};
    font-size: ${a=>(0,i.R)("fontSizes.2")(a)}px;
  `,secondary:h.iv`
    color: ${a=>(0,i.uu)("light")(a)};
  `},m=h.ZP.div`
  ${({noBorder:a})=>!a&&h.iv`
      border-bottom: 1px solid #ededed;
    `}
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 4px 12px 12px;
  ${a=>l[a.variation]}
`,n=(0,h.ZP)(j.Z)`
  flex: 1;
`,o=(0,h.ZP)(k.Z).attrs(({isLink:a,chevronRight:b})=>({fontSize:1,fontWeight:a||!b?"regular":"medium"}))`
  ${a=>l[a.variation]}
  line-height: ${a=>(0,i.R)("lineHeights.tall")(a)}px;
  padding-left: ${a=>a.icon?"8px":"0px"};
`;function p(a){let{icon:b,text:c,testId:h,onClick:i}=a,j=(0,e.Z)(a,["icon","text","testId","onClick"]),{chevronRight:k,href:l,variation:p}=j,q="primary"===p?"#FFF":"#999",r=Array.isArray(c)?c[0]:c||"",s=Array.isArray(c)?c.slice(1):[];return f.createElement(m,(0,d.Z)({"data-testid":h,as:l?"a":"div",href:l,onClick:i},j),b&&f.createElement(g.JO$,{name:b,color:b.startsWith("Category")?"#0086FF":q}),f.createElement(n,null,f.createElement(o,(0,d.Z)({isLink:!!l,icon:b},j),r),s.map(a=>f.createElement(o,{key:a,isLink:!!l,icon:b,variation:"secondary"},a))),k&&f.createElement(g.JO$,{name:"ChevronRight",color:q}))}p.defaultProps={chevronRight:!0,href:null,icon:null,testId:"",variation:"",onClick:()=>{}};var q=p},97851:function(a,b,c){"use strict";c.d(b,{Z:function(){return k}});var d=c(2784),e=c(99673),f=c(91489);let g=e.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,h=e.ZP.button`
  position: relative;
  width: 100%;
  height: 100%;

  max-width: ${({maxWidth:a})=>`${a}px`};
  max-height: ${({maxHeight:a})=>`${a}px`};
  border: none;
  cursor: pointer;

  background: none;

  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    transform: scale(1.1);
  }
`,i=e.ZP.div`
  ${f.$_}

  position: absolute;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: 3px solid ${({borderColor:a})=>a};

  font-size: 12px;
  font-weight: bold;
`,j=({children:a,amount:b=0,nullable:c=!0,truncateAmountThreshold:e,maxWidth:f=60,maxHeight:j=46,backgroundColor:k="#ccc",counterColor:l="#fff",fontColor:m="#000",onClick:n})=>d.createElement(g,null,d.createElement(h,{maxWidth:f,maxHeight:j,onClick:n},a,(b||c)&&d.createElement(i,{"data-testid":"numbered-btn-counter",bg:l,borderColor:k,color:m},e&&b>e?`${e}+`:b)));var k=j},26527:function(a,b,c){"use strict";c.d(b,{Z:function(){return j}});var d=c(2784),e=c(34490),f=c(99673),g=c(91489);let h=f.ZP.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  backdrop-filter: blur(4px);
  z-index: ${a=>(0,g.R)("zIndices.4")(a)};

  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${(0,g.ow)("background.lighter")};
    opacity: 0.7;
    position: absolute;
    z-index: -1;
  }
`,i=()=>d.createElement(h,null,d.createElement(e.JO$,{name:"AnimatedLoadingColorful2",width:50,height:50}));var j=i},22035:function(a,b,c){"use strict";c.d(b,{Z:function(){return aE}});var d=c(7896),e=c(31461),f=c(2784),g=c(28316);function h(a){if(null==a)return window;if("[object Window]"!==a.toString()){var b=a.ownerDocument;return b&&b.defaultView||window}return a}function i(a){var b=h(a).Element;return a instanceof b||a instanceof Element}function j(a){var b=h(a).HTMLElement;return a instanceof b||a instanceof HTMLElement}function k(a){if("undefined"==typeof ShadowRoot)return!1;var b=h(a).ShadowRoot;return a instanceof b||a instanceof ShadowRoot}var l=Math.max,m=Math.min,n=Math.round;function o(){var a=navigator.userAgentData;return null!=a&&a.brands?a.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function p(){return!/^((?!chrome|android).)*safari/i.test(o())}function q(a,b,c){void 0===b&&(b=!1),void 0===c&&(c=!1);var d=a.getBoundingClientRect(),e=1,f=1;b&&j(a)&&(e=a.offsetWidth>0&&n(d.width)/a.offsetWidth||1,f=a.offsetHeight>0&&n(d.height)/a.offsetHeight||1);var g=(i(a)?h(a):window).visualViewport,k=!p()&&c,l=(d.left+(k&&g?g.offsetLeft:0))/e,m=(d.top+(k&&g?g.offsetTop:0))/f,o=d.width/e,q=d.height/f;return{width:o,height:q,top:m,right:l+o,bottom:m+q,left:l,x:l,y:m}}function r(a){var b=h(a),c=b.pageXOffset,d=b.pageYOffset;return{scrollLeft:c,scrollTop:d}}function s(a){return a?(a.nodeName||"").toLowerCase():null}function t(a){return((i(a)?a.ownerDocument:a.document)||window.document).documentElement}function u(a){return q(t(a)).left+r(a).scrollLeft}function v(a){return h(a).getComputedStyle(a)}function w(a){var b=v(a),c=b.overflow,d=b.overflowX,e=b.overflowY;return/auto|scroll|overlay|hidden/.test(c+e+d)}function x(a){var b=q(a),c=a.offsetWidth,d=a.offsetHeight;return 1>=Math.abs(b.width-c)&&(c=b.width),1>=Math.abs(b.height-d)&&(d=b.height),{x:a.offsetLeft,y:a.offsetTop,width:c,height:d}}function y(a){return"html"===s(a)?a:a.assignedSlot||a.parentNode||(k(a)?a.host:null)||t(a)}function z(a){return["html","body","#document"].indexOf(s(a))>=0?a.ownerDocument.body:j(a)&&w(a)?a:z(y(a))}function A(a,b){void 0===b&&(b=[]);var c,d=z(a),e=d===(null==(c=a.ownerDocument)?void 0:c.body),f=h(d),g=e?[f].concat(f.visualViewport||[],w(d)?d:[]):d,i=b.concat(g);return e?i:i.concat(A(y(g)))}function B(a){return["table","td","th"].indexOf(s(a))>=0}function C(a){return j(a)&&"fixed"!==v(a).position?a.offsetParent:null}function D(a){for(var b=h(a),c=C(a);c&&B(c)&&"static"===v(c).position;)c=C(c);return c&&("html"===s(c)||"body"===s(c)&&"static"===v(c).position)?b:c||function(a){var b=/firefox/i.test(o());if(/Trident/i.test(o())&&j(a)&&"fixed"===v(a).position)return null;var c=y(a);for(k(c)&&(c=c.host);j(c)&&0>["html","body"].indexOf(s(c));){var d=v(c);if("none"!==d.transform||"none"!==d.perspective||"paint"===d.contain|| -1!==["transform","perspective"].indexOf(d.willChange)||b&&"filter"===d.willChange||b&&d.filter&&"none"!==d.filter)return c;c=c.parentNode}return null}(a)||b}var E="top",F="bottom",G="right",H="left",I="auto",J=[E,F,G,H],K="start",L="viewport",M="popper",N=J.reduce(function(a,b){return a.concat([b+"-"+K,b+"-end"])},[]),O=[].concat(J,[I]).reduce(function(a,b){return a.concat([b,b+"-"+K,b+"-end"])},[]),P=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],Q={placement:"bottom",modifiers:[],strategy:"absolute"};function R(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return!b.some(function(a){return!(a&&"function"==typeof a.getBoundingClientRect)})}var S={passive:!0};function T(a){return a.split("-")[0]}function U(a){return a.split("-")[1]}function V(a){return["top","bottom"].indexOf(a)>=0?"x":"y"}function W(a){var b,c=a.reference,d=a.element,e=a.placement,f=e?T(e):null,g=e?U(e):null,h=c.x+c.width/2-d.width/2,i=c.y+c.height/2-d.height/2;switch(f){case E:b={x:h,y:c.y-d.height};break;case F:b={x:h,y:c.y+c.height};break;case G:b={x:c.x+c.width,y:i};break;case H:b={x:c.x-d.width,y:i};break;default:b={x:c.x,y:c.y}}var j=f?V(f):null;if(null!=j){var k="y"===j?"height":"width";switch(g){case K:b[j]=b[j]-(c[k]/2-d[k]/2);break;case"end":b[j]=b[j]+(c[k]/2-d[k]/2)}}return b}var X={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Y(a){var b,c,d=a.popper,e=a.popperRect,f=a.placement,g=a.variation,i=a.offsets,j=a.position,k=a.gpuAcceleration,l=a.adaptive,m=a.roundOffsets,o=a.isFixed,p=i.x,q=void 0===p?0:p,r=i.y,s=void 0===r?0:r,u="function"==typeof m?m({x:q,y:s}):{x:q,y:s};q=u.x,s=u.y;var w=i.hasOwnProperty("x"),x=i.hasOwnProperty("y"),y=H,z=E,A=window;if(l){var B=D(d),C="clientHeight",I="clientWidth";if(B===h(d)&&(B=t(d),"static"!==v(B).position&&"absolute"===j&&(C="scrollHeight",I="scrollWidth")),f===E||(f===H||f===G)&&"end"===g){z=F;var J=o&&B===A&&A.visualViewport?A.visualViewport.height:B[C];s-=J-e.height,s*=k?1:-1}if(f===H||(f===E||f===F)&&"end"===g){y=G;var K=o&&B===A&&A.visualViewport?A.visualViewport.width:B[I];q-=K-e.width,q*=k?1:-1}}var L,M,N,O,P,Q=Object.assign({position:j},l&&X),R=!0===m?(M=(L={x:q,y:s}).x,N=L.y,O=window,P=O.devicePixelRatio||1,{x:n(M*P)/P||0,y:n(N*P)/P||0}):{x:q,y:s};return(q=R.x,s=R.y,k)?Object.assign({},Q,((c={})[z]=x?"0":"",c[y]=w?"0":"",c.transform=1>=(A.devicePixelRatio||1)?"translate("+q+"px, "+s+"px)":"translate3d("+q+"px, "+s+"px, 0)",c)):Object.assign({},Q,((b={})[z]=x?s+"px":"",b[y]=w?q+"px":"",b.transform="",b))}var Z={left:"right",right:"left",bottom:"top",top:"bottom"};function $(a){return a.replace(/left|right|bottom|top/g,function(a){return Z[a]})}var _={start:"end",end:"start"};function aa(a){return a.replace(/start|end/g,function(a){return _[a]})}function ab(a,b){var c=b.getRootNode&&b.getRootNode();if(a.contains(b))return!0;if(c&&k(c)){var d=b;do{if(d&&a.isSameNode(d))return!0;d=d.parentNode||d.host}while(d)}return!1}function ac(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function ad(a,b,c){var d,e,f,g,j,k,m,n,o,s,w,x;return b===L?ac(function(a,b){var c=h(a),d=t(a),e=c.visualViewport,f=d.clientWidth,g=d.clientHeight,i=0,j=0;if(e){f=e.width,g=e.height;var k=p();(k|| !k&&"fixed"===b)&&(i=e.offsetLeft,j=e.offsetTop)}return{width:f,height:g,x:i+u(a),y:j}}(a,c)):i(b)?(d=b,(f=q(d,!1,"fixed"===(e=c))).top=f.top+d.clientTop,f.left=f.left+d.clientLeft,f.bottom=f.top+d.clientHeight,f.right=f.left+d.clientWidth,f.width=d.clientWidth,f.height=d.clientHeight,f.x=f.left,f.y=f.top,f):ac((g=t(a),k=t(g),m=r(g),n=null==(j=g.ownerDocument)?void 0:j.body,o=l(k.scrollWidth,k.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=l(k.scrollHeight,k.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),w=-m.scrollLeft+u(g),x=-m.scrollTop,"rtl"===v(n||k).direction&&(w+=l(k.clientWidth,n?n.clientWidth:0)-o),{width:o,height:s,x:w,y:x}))}function ae(){return{top:0,right:0,bottom:0,left:0}}function af(a){return Object.assign({},ae(),a)}function ag(a,b){return b.reduce(function(b,c){return b[c]=a,b},{})}function ah(a,b){void 0===b&&(b={});var c,d,e,f,g,h,k,n,o,p,r=b,u=r.placement,w=void 0===u?a.placement:u,x=r.strategy,z=void 0===x?a.strategy:x,B=r.boundary,C=r.rootBoundary,H=r.elementContext,I=void 0===H?M:H,K=r.altBoundary,N=r.padding,O=void 0===N?0:N,P=af("number"!=typeof O?O:ag(O,J)),Q=a.rects.popper,R=a.elements[void 0!==K&&K?I===M?"reference":M:I],S=(c=i(R)?R:R.contextElement||t(a.elements.popper),d=void 0===B?"clippingParents":B,e=void 0===C?L:C,f=z,o=(n=[].concat("clippingParents"===d?(h=A(y(g=c)),k=["absolute","fixed"].indexOf(v(g).position)>=0&&j(g)?D(g):g,i(k)?h.filter(function(a){return i(a)&&ab(a,k)&&"body"!==s(a)}):[]):[].concat(d),[e]))[0],p=n.reduce(function(a,b){var d=ad(c,b,f);return a.top=l(d.top,a.top),a.right=m(d.right,a.right),a.bottom=m(d.bottom,a.bottom),a.left=l(d.left,a.left),a},ad(c,o,f)),p.width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p),T=q(a.elements.reference),U=W({reference:T,element:Q,strategy:"absolute",placement:w}),V=ac(Object.assign({},Q,U)),X=I===M?V:T,Y={top:S.top-X.top+P.top,bottom:X.bottom-S.bottom+P.bottom,left:S.left-X.left+P.left,right:X.right-S.right+P.right},Z=a.modifiersData.offset;if(I===M&&Z){var $=Z[w];Object.keys(Y).forEach(function(a){var b=[G,F].indexOf(a)>=0?1:-1,c=[E,F].indexOf(a)>=0?"y":"x";Y[a]+=$[c]*b})}return Y}function ai(a,b,c){return l(a,m(b,c))}function aj(a,b,c){return void 0===c&&(c={x:0,y:0}),{top:a.top-b.height-c.y,right:a.right-b.width+c.x,bottom:a.bottom-b.height+c.y,left:a.left-b.width-c.x}}function ak(a){return[E,G,F,H].some(function(b){return a[b]>=0})}var al,am,an,ao,ap,aq,ar=(al={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(a){var b=a.state,c=a.instance,d=a.options,e=d.scroll,f=void 0===e||e,g=d.resize,i=void 0===g||g,j=h(b.elements.popper),k=[].concat(b.scrollParents.reference,b.scrollParents.popper);return f&&k.forEach(function(a){a.addEventListener("scroll",c.update,S)}),i&&j.addEventListener("resize",c.update,S),function(){f&&k.forEach(function(a){a.removeEventListener("scroll",c.update,S)}),i&&j.removeEventListener("resize",c.update,S)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(a){var b=a.state,c=a.name;b.modifiersData[c]=W({reference:b.rects.reference,element:b.rects.popper,strategy:"absolute",placement:b.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(a){var b=a.state,c=a.options,d=c.gpuAcceleration,e=c.adaptive,f=c.roundOffsets,g=void 0===f||f,h={placement:T(b.placement),variation:U(b.placement),popper:b.elements.popper,popperRect:b.rects.popper,gpuAcceleration:void 0===d||d,isFixed:"fixed"===b.options.strategy};null!=b.modifiersData.popperOffsets&&(b.styles.popper=Object.assign({},b.styles.popper,Y(Object.assign({},h,{offsets:b.modifiersData.popperOffsets,position:b.options.strategy,adaptive:void 0===e||e,roundOffsets:g})))),null!=b.modifiersData.arrow&&(b.styles.arrow=Object.assign({},b.styles.arrow,Y(Object.assign({},h,{offsets:b.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:g})))),b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-placement":b.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(a){var b=a.state;Object.keys(b.elements).forEach(function(a){var c=b.styles[a]||{},d=b.attributes[a]||{},e=b.elements[a];j(e)&&s(e)&&(Object.assign(e.style,c),Object.keys(d).forEach(function(a){var b=d[a];!1===b?e.removeAttribute(a):e.setAttribute(a,!0===b?"":b)}))})},effect:function(a){var b=a.state,c={popper:{position:b.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(b.elements.popper.style,c.popper),b.styles=c,b.elements.arrow&&Object.assign(b.elements.arrow.style,c.arrow),function(){Object.keys(b.elements).forEach(function(a){var d=b.elements[a],e=b.attributes[a]||{},f=Object.keys(b.styles.hasOwnProperty(a)?b.styles[a]:c[a]),g=f.reduce(function(a,b){return a[b]="",a},{});j(d)&&s(d)&&(Object.assign(d.style,g),Object.keys(e).forEach(function(a){d.removeAttribute(a)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(a){var b=a.state,c=a.options,d=a.name,e=c.offset,f=void 0===e?[0,0]:e,g=O.reduce(function(a,c){var d,e,g,h,i,j,k,l;return a[c]=(d=c,e=b.rects,g=f,i=[H,E].indexOf(h=T(d))>=0?-1:1,k=(j="function"==typeof g?g(Object.assign({},e,{placement:d})):g)[0],l=j[1],k=k||0,l=(l||0)*i,[H,G].indexOf(h)>=0?{x:l,y:k}:{x:k,y:l}),a},{}),h=g[b.placement],i=h.x,j=h.y;null!=b.modifiersData.popperOffsets&&(b.modifiersData.popperOffsets.x+=i,b.modifiersData.popperOffsets.y+=j),b.modifiersData[d]=g}},{name:"flip",enabled:!0,phase:"main",fn:function(a){var b=a.state,c=a.options,d=a.name;if(!b.modifiersData[d]._skip){for(var e=c.mainAxis,f=void 0===e||e,g=c.altAxis,h=void 0===g||g,i=c.fallbackPlacements,j=c.padding,k=c.boundary,l=c.rootBoundary,m=c.altBoundary,n=c.flipVariations,o=void 0===n||n,p=c.allowedAutoPlacements,q=b.options.placement,r=T(q),s=i||(r!==q&&o?function(a){if(T(a)===I)return[];var b=$(a);return[aa(a),b,aa(b)]}(q):[$(q)]),t=[q].concat(s).reduce(function(a,c){var d,e,f,g,h,i,m,n,q,r,s,t,u,v;return a.concat(T(c)===I?(d=b,e={placement:c,boundary:k,rootBoundary:l,padding:j,flipVariations:o,allowedAutoPlacements:p},g=(f=e).placement,h=f.boundary,i=f.rootBoundary,m=f.padding,n=f.flipVariations,q=f.allowedAutoPlacements,r=void 0===q?O:q,s=U(g),t=s?n?N:N.filter(function(a){return U(a)===s}):J,u=t.filter(function(a){return r.indexOf(a)>=0}),0===u.length&&(u=t),v=u.reduce(function(a,b){return a[b]=ah(d,{placement:b,boundary:h,rootBoundary:i,padding:m})[T(b)],a},{}),Object.keys(v).sort(function(a,b){return v[a]-v[b]})):c)},[]),u=b.rects.reference,v=b.rects.popper,w=new Map,x=!0,y=t[0],z=0;z<t.length;z++){var A=t[z],B=T(A),C=U(A)===K,D=[E,F].indexOf(B)>=0,L=D?"width":"height",M=ah(b,{placement:A,boundary:k,rootBoundary:l,altBoundary:m,padding:j}),P=D?C?G:H:C?F:E;u[L]>v[L]&&(P=$(P));var Q=$(P),R=[];if(f&&R.push(M[B]<=0),h&&R.push(M[P]<=0,M[Q]<=0),R.every(function(a){return a})){y=A,x=!1;break}w.set(A,R)}if(x)for(var S=o?3:1,V=function(a){var b=t.find(function(b){var c=w.get(b);if(c)return c.slice(0,a).every(function(a){return a})});if(b)return y=b,"break"},W=S;W>0&&"break"!==V(W);W--);b.placement!==y&&(b.modifiersData[d]._skip=!0,b.placement=y,b.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(a){var b,c=a.state,d=a.options,e=a.name,f=d.mainAxis,g=d.altAxis,h=d.boundary,i=d.rootBoundary,j=d.altBoundary,k=d.padding,n=d.tether,o=void 0===n||n,p=d.tetherOffset,q=void 0===p?0:p,r=ah(c,{boundary:h,rootBoundary:i,padding:k,altBoundary:j}),s=T(c.placement),t=U(c.placement),u=!t,v=V(s),w="x"===(b=v)?"y":"x",y=c.modifiersData.popperOffsets,z=c.rects.reference,A=c.rects.popper,B="function"==typeof q?q(Object.assign({},c.rects,{placement:c.placement})):q,C="number"==typeof B?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B),I=c.modifiersData.offset?c.modifiersData.offset[c.placement]:null,J={x:0,y:0};if(y){if(void 0===f||f){var L,M="y"===v?E:H,N="y"===v?F:G,O="y"===v?"height":"width",P=y[v],Q=P+r[M],R=P-r[N],S=o?-A[O]/2:0,W=t===K?z[O]:A[O],X=t===K?-A[O]:-z[O],Y=c.elements.arrow,Z=o&&Y?x(Y):{width:0,height:0},$=c.modifiersData["arrow#persistent"]?c.modifiersData["arrow#persistent"].padding:ae(),_=$[M],aa=$[N],ab=ai(0,z[O],Z[O]),ac=u?z[O]/2-S-ab-_-C.mainAxis:W-ab-_-C.mainAxis,ad=u?-z[O]/2+S+ab+aa+C.mainAxis:X+ab+aa+C.mainAxis,af=c.elements.arrow&&D(c.elements.arrow),ag=af?"y"===v?af.clientTop||0:af.clientLeft||0:0,aj=null!=(L=null==I?void 0:I[v])?L:0,ak=P+ac-aj-ag,al=P+ad-aj,am=ai(o?m(Q,ak):Q,P,o?l(R,al):R);y[v]=am,J[v]=am-P}if(void 0!==g&&g){var an,ao,ap,aq,ar,as="x"===v?E:H,at="x"===v?F:G,au=y[w],av="y"===w?"height":"width",aw=au+r[as],ax=au-r[at],ay=-1!==[E,H].indexOf(s),az=null!=(an=null==I?void 0:I[w])?an:0,aA=ay?aw:au-z[av]-A[av]-az+C.altAxis,aB=ay?au+z[av]+A[av]-az-C.altAxis:ax,aC=o&&ay?(ao=aA,ap=au,(ar=ai(ao,ap,aq=aB))>aq?aq:ar):ai(o?aA:aw,au,o?aB:ax);y[w]=aC,J[w]=aC-au}c.modifiersData[e]=J}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(a){var b,c=a.state,d=a.name,e=a.options,f=c.elements.arrow,g=c.modifiersData.popperOffsets,h=T(c.placement),i=V(h),j=[H,G].indexOf(h)>=0,k=j?"height":"width";if(f&&g){var l,m,n=(l=e.padding,m=c,af("number"!=typeof(l="function"==typeof l?l(Object.assign({},m.rects,{placement:m.placement})):l)?l:ag(l,J))),o=x(f),p=c.rects.reference[k]+c.rects.reference[i]-g[i]-c.rects.popper[k],q=g[i]-c.rects.reference[i],r=D(f),s=r?"y"===i?r.clientHeight||0:r.clientWidth||0:0,t=n["y"===i?E:H],u=s-o[k]-n["y"===i?F:G],v=s/2-o[k]/2+(p/2-q/2),w=ai(t,v,u),y=i;c.modifiersData[d]=((b={})[y]=w,b.centerOffset=w-v,b)}},effect:function(a){var b=a.state,c=a.options.element,d=void 0===c?"[data-popper-arrow]":c;if(null!=d&&("string"!=typeof d||(d=b.elements.popper.querySelector(d))))ab(b.elements.popper,d)&&(b.elements.arrow=d)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(a){var b=a.state,c=a.name,d=b.rects.reference,e=b.rects.popper,f=b.modifiersData.preventOverflow,g=ah(b,{elementContext:"reference"}),h=ah(b,{altBoundary:!0}),i=aj(g,d),j=aj(h,e,f),k=ak(i),l=ak(j);b.modifiersData[c]={referenceClippingOffsets:i,popperEscapeOffsets:j,isReferenceHidden:k,hasPopperEscaped:l},b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-reference-hidden":k,"data-popper-escaped":l})}}]},ao=void 0===(an=(am=al).defaultModifiers)?[]:an,ap=am.defaultOptions,aq=void 0===ap?Q:ap,function(a,b,c){void 0===c&&(c=aq);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},Q,aq),modifiersData:{},elements:{reference:a,popper:b},attributes:{},styles:{}},e=[],f=!1,g={state:d,setOptions:function(c){var e,f,h,j,m="function"==typeof c?c(d.options):c;l(),d.options=Object.assign({},aq,d.options,m),d.scrollParents={reference:i(a)?A(a):a.contextElement?A(a.contextElement):[],popper:A(b)};var n=(j=function(a){var b=new Map,c=new Set,d=[];function e(a){c.add(a.name),[].concat(a.requires||[],a.requiresIfExists||[]).forEach(function(a){if(!c.has(a)){var d=b.get(a);d&&e(d)}}),d.push(a)}return a.forEach(function(a){b.set(a.name,a)}),a.forEach(function(a){c.has(a.name)||e(a)}),d}(h=Object.keys(f=(e=[].concat(ao,d.options.modifiers)).reduce(function(a,b){var c=a[b.name];return a[b.name]=c?Object.assign({},c,b,{options:Object.assign({},c.options,b.options),data:Object.assign({},c.data,b.data)}):b,a},{})).map(function(a){return f[a]})),P.reduce(function(a,b){return a.concat(j.filter(function(a){return a.phase===b}))},[]));return d.orderedModifiers=n.filter(function(a){return a.enabled}),k(),g.update()},forceUpdate:function(){if(!f){var a,b,c,e,i,k,l,m,o,p,v,y,z,A,B,C=d.elements,E=C.reference,F=C.popper;if(R(E,F)){d.rects={reference:(c=E,e=D(F),i="fixed"===d.options.strategy,k=j(e),v=j(e)&&(o=n((m=(l=e).getBoundingClientRect()).width)/l.offsetWidth||1,p=n(m.height)/l.offsetHeight||1,1!==o||1!==p),y=t(e),z=q(c,v,i),A={scrollLeft:0,scrollTop:0},B={x:0,y:0},(k|| !k&&!i)&&(("body"!==s(e)||w(y))&&(A=(a=e,a!==h(a)&&j(a)?{scrollLeft:(b=a).scrollLeft,scrollTop:b.scrollTop}:r(a))),j(e)?(B=q(e,!0),B.x+=e.clientLeft,B.y+=e.clientTop):y&&(B.x=u(y))),{x:z.left+A.scrollLeft-B.x,y:z.top+A.scrollTop-B.y,width:z.width,height:z.height}),popper:x(F)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(a){return d.modifiersData[a.name]=Object.assign({},a.data)});for(var G=0;G<d.orderedModifiers.length;G++){if(!0===d.reset){d.reset=!1,G=-1;continue}var H=d.orderedModifiers[G],I=H.fn,J=H.options,K=void 0===J?{}:J,L=H.name;"function"==typeof I&&(d=I({state:d,options:K,name:L,instance:g})||d)}}}},update:function(a){var b;return function(){return b||(b=new Promise(function(c){Promise.resolve().then(function(){b=void 0,c(a())})})),b}}(function(){return new Promise(function(a){g.forceUpdate(),a(d)})}),destroy:function(){l(),f=!0}};if(!R(a,b))return g;function k(){d.orderedModifiers.forEach(function(a){var b=a.name,c=a.options,f=a.effect;if("function"==typeof f){var h=f({state:d,name:b,instance:g,options:void 0===c?{}:c}),i=function(){};e.push(h||i)}})}function l(){e.forEach(function(a){return a()}),e=[]}return g.setOptions(c).then(function(a){!f&&c.onFirstUpdate&&c.onFirstUpdate(a)}),g}),as=c(78435),at=c.n(as),au=function(a){return a.reduce(function(a,b){var c=b[0],d=b[1];return a[c]=d,a},{})},av="undefined"!=typeof window&&window.document&&window.document.createElement?f.useLayoutEffect:f.useEffect,aw=[],ax=function(a,b,c){void 0===c&&(c={});var d=f.useRef(null),e={onFirstUpdate:c.onFirstUpdate,placement:c.placement||"bottom",strategy:c.strategy||"absolute",modifiers:c.modifiers||aw},h=f.useState({styles:{popper:{position:e.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),i=h[0],j=h[1],k=f.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(a){var b=a.state,c=Object.keys(b.elements);g.flushSync(function(){j({styles:au(c.map(function(a){return[a,b.styles[a]||{}]})),attributes:au(c.map(function(a){return[a,b.attributes[a]]}))})})},requires:["computeStyles"]}},[]),l=f.useMemo(function(){var a={onFirstUpdate:e.onFirstUpdate,placement:e.placement,strategy:e.strategy,modifiers:[].concat(e.modifiers,[k,{name:"applyStyles",enabled:!1}])};return at()(d.current,a)?d.current||a:(d.current=a,a)},[e.onFirstUpdate,e.placement,e.strategy,e.modifiers,k]),m=f.useRef();return av(function(){m.current&&m.current.setOptions(l)},[l]),av(function(){if(null!=a&&null!=b){var d=(c.createPopper||ar)(a,b,l);return m.current=d,function(){d.destroy(),m.current=null}}},[a,b,c.createPopper]),{state:m.current?m.current.state:null,styles:i.styles,attributes:i.attributes,update:m.current?m.current.update:null,forceUpdate:m.current?m.current.forceUpdate:null}},ay=c(99673),az=c(68054),aA=c(91489),aB=c(82753);let aC=ay.ZP.div.attrs(a=>Object.assign({},a))`
  border-radius: ${a=>(0,aA.R)("radii.default")(a)};
  background-color: ${a=>a.backgroundColor||"white"};
  animation: ${aB.Ji} 0.2s ease-in;

  #arrow {
    position: absolute;
    width: 16px;
    height: 16px;
    &:after {
      content: ' ';
      background-color: ${a=>a.backgroundColor||"white"};
      position: absolute;
      width: 16px;
      height: 16px;
      transform: rotate(45deg);
      ${aA.$_}
    }
  }

  &[data-popper-placement^='bottom'] > #arrow {
    top: -8px;
    :after {
      left: 0;
    }
  }

  &[data-popper-placement^='top'] > #arrow {
    bottom: -8px;
    :after {
      left: 0;
    }
  }

  &[data-popper-placement^='right'] > #arrow {
    left: -6px;
  }

  &[data-popper-placement^='left'] > #arrow {
    right: -6px;
  }

  ${az.Dh}
  ${az.cp}
  ${aA.$_}
`;var aD=c(84546),aE=function(a){let{backgroundColor:b,children:c,parentRef:g,placement:h="bottom",visible:i}=a,j=(0,e.Z)(a,["backgroundColor","children","parentRef","placement","visible"]),[k,l]=(0,f.useState)(null),m=(0,f.useRef)(null),{styles:n,attributes:o}=ax(g.current,m.current,{placement:h,modifiers:[{name:"arrow",options:{element:k}},{name:"offset",options:{offset:[0,10]}},{name:"flip",options:{flipVariations:!1}}]});return f.createElement(f.Fragment,null,i?f.createElement(aC,(0,d.Z)({"data-testid":"popper-container",ref:m,style:n.popper},o.popper,{backgroundColor:b},j),f.createElement("div",{ref:l,style:n.arrow,id:"arrow"}),f.createElement(aD.Z,{"data-testid":"popper-children-container",m:1},c)):null)}},73002:function(a,b,c){"use strict";c.d(b,{Z:function(){return l}});var d=c(31461),e=c(2784),f=c(34490),g=c(99673),h=c(91489),i=c(84546);let j=(0,g.ZP)(i.Z)`
  display: flex;
  align-items: center;
  cursor: pointer;

  label {
    margin-right: 10px;
    font-weight: 700;

    ${({desktopMode:a})=>a&&g.iv`
        font-size: ${a=>(0,h.R)("fontSizes.0")(a)}px;
      `};
  }

  select {
    appearance: none;
    display: block;
    background: transparent;
    cursor: pointer;
    border: 1px solid ${a=>(0,h.kJ)("base")(a)};

    ${({desktopMode:a})=>a?g.iv`
            font-size: ${a=>(0,h.R)("fontSizes.0")(a)}px;
            padding: 8px 32px 8px 12px;
          `:g.iv`
            width: 100%;
            padding: 16px 32px 16px 12px;
            border-radius: 4px;
          `};

    &:focus {
      outline: none;
      background: ${a=>(0,h.R)("baseColors.wildsand.base")(a)};
    }
    ::-ms-expand {
      display: none;
    }
  }

  svg {
    outline: none;
    pointer-events: none;

    flex: 0 0 auto;
    margin-left: -32px;
  }
`;function k(a){let{id:b,textLabel:c,options:g,onChange:h}=a,i=(0,d.Z)(a,["id","textLabel","options","onChange"]),k=g.find(a=>a.selected);return e.createElement(j,i,c&&e.createElement("label",{htmlFor:`select-${b}`,"data-testid":"select-label"},c),e.createElement("select",{id:`select-${b}`,onChange:a=>h(a.target.value),value:null==k?void 0:k.value,"data-testid":`select-${b}`},null==g?void 0:g.map(a=>e.createElement("option",{key:a.value,selected:a.selected,value:a.value,"data-testid":"select-option"},a.label))),e.createElement(f._ME,{width:20,height:20}))}k.defaultProps={desktopMode:!1,onChange:()=>{},options:[]};var l=k},76328:function(a,b,c){"use strict";c.d(b,{Z:function(){return o}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(19527),i=c(63825),j=c(99673);let k=j.ZP.input`
  height: 0;
  width: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
`,l=[1,2,3,4,5],m={1:"uma",2:"duas",3:"tr\xeas",4:"quatro",5:"cinco"},n=(0,f.forwardRef)((a,b)=>{let{onChange:c,emptyOutline:j,showLabel:n,labelOptions:o,value:p,name:q}=a,r=(0,e.Z)(a,["onChange","emptyOutline","showLabel","labelOptions","value","name"]),[s,t]=(0,f.useState)(p),u=j?"StarOutline":"Star",v=o[s]||"";(0,f.useEffect)(()=>(t(p),()=>t(0)),[p]);let w=a=>s>=a||j?"stars.base":"stars.disabled";return f.createElement(h.Z,{justifyContent:"space-between",alignItems:"center"},f.createElement(h.Z,{ref:b,"data-testid":"select-rating",justifyContent:"start",role:"radiogroup",onMouseLeave:()=>t(p)},l.map(a=>f.createElement(f.Fragment,{key:a},f.createElement(k,{type:"radio",name:q,value:a,id:`${q}${a}`,onChange:()=>c({target:{value:a}})}),f.createElement("label",{htmlFor:`${q}${a}`},f.createElement(g.JO$,(0,d.Z)({name:s>=a?"Star":u,cursor:"pointer",color:w(a),onMouseOver:()=>t(a),"aria-label":`${m[a]} ${1===a?"estrela":"estrelas"}`,onClick:()=>c({target:{value:a}})},r)))))),n&&f.createElement(i.Z,{fontSize:[1,2],minWidth:80,textAlign:"center",fontWeight:"medium"},v))});n.defaultProps={emptyOutline:!1,showLabel:!1,value:"",name:"rating",labelOptions:{1:"P\xe9ssimo",2:"Ruim",3:"Regular",4:"Bom",5:"Excelente"}},n.displayName="SelectRating";var o=n},85737:function(a,b,c){"use strict";c.d(b,{Z:function(){return i}});var d=c(7896),e=c(2784),f=c(99673);let g=f.ZP.hr`
  float: left;
  height: ${({size:a})=>`${a}px`};
  position: ${({position:a})=>a};
  width: 100%;
  overflow: hidden;
  border: none;
  background-image: linear-gradient(
    to right,
    #ffff4a 0,
    #fcd000 4%,
    #ffc112 8%,
    #ffc112 11%,
    #ff8a00 16%,
    #ff5f5f 22%,
    #ff253a 28%,
    #ff37a8 37%,
    #c739ff 49%,
    #a400e1 56%,
    #2eceff 72%,
    #0086ff 80%,
    #72f772 94%,
    #00d604
  );
`,h=a=>e.createElement(g,(0,d.Z)({"data-testid":"strip"},a));h.defaultProps={position:"absolute",size:5};var i=(0,e.memo)(h)},87043:function(a,b,c){"use strict";c.d(b,{UQ:function(){return d.Z},Yd:function(){return f.Z},xu:function(){return e.Z},gN:function(){return w},zx:function(){return x.Z},XZ:function(){return y.Z},Af:function(){return z.Z},UO:function(){return A.Z},Vq:function(){return B.Z},Lt:function(){return C.Z},cx:function(){return H},kC:function(){return m.Z},rj:function(){return I.Z},X6:function(){return J.Z},bo:function(){return K.Z},Ee:function(){return _.Z},II:function(){return L.Z},ck:function(){return M.Z},uk:function(){return V},rU:function(){return Z.Z},TR:function(){return W.Z},fG:function(){return Y.Z},SX:function(){return $.Z},rD:function(){return az.Z},U2:function(){return ay},Ph:function(){return X.Z},jv:function(){return ar.Z},D_:function(){return aa.Z},OK:function(){return ac},q5:function(){return aj},td:function(){return an},x4:function(){return ap},xv:function(){return aq.Z}});var d=c(50616),e=c(84546),f=c(66685),g=c(7896),h=c(31461),i=c(2784),j=c(99673),k=c(91489),l=c(34490),m=c(19527);let n=(0,j.ZP)(m.Z)`
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: ${a=>(0,k.R)("space.2")(a)}px 0;
`,o=j.ZP.span`
  font-size: ${a=>(0,k.R)("fontSizes.0")(a)}px;
  color: ${a=>(0,k.uu)("light")(a)};
`,p=j.ZP.span`
  font-size: ${a=>(0,k.R)("fontSizes.2")(a)}px;
  color: ${a=>(0,k.uu)("base")(a)};
`,q=(0,j.ZP)(m.Z)`
  align-items: center;
  height: 100%;
`,r=(0,j.ZP)(l._Qn).attrs(a=>({color:(0,k.uu)("lighter")(a)}))``,s=j.ZP.a`
  text-decoration: none;
  font-size: ${a=>(0,k.R)("fontSizes.1")(a)}px;
  color: ${a=>(0,k.uu)("lighter")(a)};
`,t=j.ZP.span`
  font-size: ${a=>(0,k.R)("fontSizes.1")(a)}px;
  color: ${a=>(0,k.uu)("scratched")(a)};
`,u=j.ZP.span`
  display: flex;
`,v=a=>{let{seller:b,item:c,onClick:d,active:e}=a,f=(0,h.Z)(a,["seller","item","onClick","active"]);return b?i.createElement(q,{"data-testid":"breadcrumb-item-list"},i.createElement(n,{"data-testid":"breadcrumb-item"},i.createElement(o,null,b.text),i.createElement(p,{"data-testid":"breadcrumb-item-name"},i.createElement("b",null,b.name)))):i.createElement(q,{"data-testid":"breadcrumb-item-list"},c.position>0&&i.createElement(r,{width:20,height:20}),i.createElement(e?t:s,(0,g.Z)({"data-testid":"breadcrumb-item",onClick:e?null:a=>d(a,c),active:e,href:c.url},f),i.createElement(u,null,c.icon||c.name)))};v.defaultProps={seller:void 0,item:void 0,active:!0,onClick:()=>{}};var w=v,x=c(60861);c(27439);var y=c(18281),z=c(17781),A=c(88699),B=c(66762),C=c(74822);let D=j.ZP.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${({padding:a})=>a}%;
`,E=j.ZP.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;var F=c(82753);let G=a=>{let{src:b,ratio:c}=a,d=(0,h.Z)(a,["src","ratio"]),[e,f]=(c&&"string"==typeof c?c:"16:9").split(":"),j=e&&f?f/e:null,k=j&&!Number.isNaN(j)?(100*j).toFixed(2):"56.25";return i.createElement(D,(0,g.Z)({"data-testid":"embed",padding:k},d),i.createElement(E,{src:(0,F.qJ)(b)}))};G.defaultProps={ratio:"16:9"};var H=G;c(58331);var I=c(8341),J=c(25610),K=c(97600);c(39471);var L=c(29869),M=c(81572);c(66228),c(93088),c(91785);let N=({quantity:a=0,size:b=6,color:c="rgba(0, 0, 0, 0.3)"})=>j.iv`
  width: ${b}px;
  height: ${b}px;
  background-color: ${c};
  border-radius: 50%;
  margin-right: calc((100% / ${a}) - ${b}px);

  &:last-child {
    margin-right: ${b}px;
  }
`,O=j.ZP.div`
  position: relative;
  height: ${({height:a})=>a};

  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    ${({bullets:a})=>N(a)}
  }
`,P=j.ZP.div`
  position: relative;
  width: ${({width:a})=>a||"100%"};
  height: ${({height:a})=>a||"auto"};
`,Q=j.ZP.progress`
  position: absolute;
  width: ${({width:a})=>a||"100%"};
  height: ${({height:a})=>a||"auto"};
  border-radius: ${(0,k.R)("radii.big")};
  appearance: none;
  border: none;

  &::-webkit-progress-bar {
    height: ${({height:a})=>a};
    border-radius: ${(0,k.R)("radii.big")};
    background-color: ${a=>(0,k.dF)("whisper")(a)};
  }

  &::-webkit-progress-value {
    height: ${({height:a})=>a};
    border-radius: ${(0,k.R)("radii.big")};
    background-color: ${({color:a})=>a};
  }

  &::-moz-progress-bar {
    height: ${({height:a})=>a};
    border-radius: ${(0,k.R)("radii.big")};
    background-color: ${({color:a})=>a};
  }
`,R=j.ZP.span`
  font-size: ${a=>(0,k.R)("fontSizes.3")(a)}px;
  color: ${({color:a})=>(0,k._j)(a,15)};
  font-weight: ${a=>(0,k.R)("fontWeights.bold")(a)};

  position: absolute;
  left: ${({value:a})=>a&&`calc(${a}% - 22px)`};
  top: -25px;
`,S=({quantity:a})=>a&&Array.from(Array(a).keys()).map(a=>i.createElement("div",{key:a,"data-testid":"linear-progress-bullet"})),T=a=>Boolean(Object.keys(a).length),U=({bullets:a,value:b,max:c,color:d,label:e,height:f,width:g}={})=>i.createElement(P,{color:d,width:g,height:f,"data-testid":"linear-progress"},e&&i.createElement(R,{color:d,value:b,"data-testid":"linear-progress-label"},e),i.createElement(Q,{max:c,color:d,width:g,height:f,value:b,"data-label":e},e),T(a)&&i.createElement(O,{bullets:a,height:f},S(a)));U.defaultProps={max:100,label:"",color:"#FFCC03",width:"100%",height:"10px",bullets:{}};var V=U,W=c(15566);c(23076),c(54934);var X=c(73002);(function({links:a}){return a.map((a,b)=>i.createElement("link",(0,g.Z)({key:`link-head-${b}`},a)))}).defaultProps={links:[]};var Y=c(97851),Z=c(10200),$=c(26527);c(75851),c(70715);var _=c(7029),aa=c(85737);let ab=(0,i.forwardRef)(function(a,b){let{onChange:c,onClick:d,value:e,children:f}=a,g=(0,h.Z)(a,["onChange","onClick","value","children"]),j=a=>{c(a,e),d(a)};if(!i.isValidElement(f))return null;let k=i.cloneElement(f,Object.assign({},g));return i.createElement("div",{onClick:j,ref:b},k)});ab.defaultProps={onClick:()=>({})};var ac=ab;let ad=(0,i.createContext)(null);ad.displayName="TabContext";let ae=()=>{let[a,b]=i.useState(null);return i.useEffect(()=>{b(`stereo-id-${Math.round(1e5*Math.random())}`)},[]),a},af=({children:a,value:b})=>{let c=ae(),d=(0,i.useMemo)(()=>({idPrefix:c,value:b}),[b]);return i.createElement(ad.Provider,{value:d},a)},ag=()=>(0,i.useContext)(ad),ah=(a,b)=>{let{idPrefix:c}=a;return null===c?null:`${a.idPrefix}-P-${b}`},ai=(a,b)=>{let{idPrefix:c}=a;return null===c?null:`${a.idPrefix}-T-${b}`};var aj=af;let ak=i.forwardRef(function(a,b){let{onChange:c,value:d,children:e}=a,f=(0,h.Z)(a,["onChange","value","children"]),j=i.Children.map(e,a=>{let b=a.props.value;if(void 0===b)return null;let e=b===d;return i.cloneElement(a,{value:b,onChange:c,selected:e})});return i.createElement("div",(0,g.Z)({},f,{ref:b,role:"tablist"}),j)});var al=ak;let am=i.forwardRef(function(a,b){let{children:c}=a,d=(0,h.Z)(a,["children"]),e=ag();if(null===e)throw TypeError("No TabContext provided");let f=i.Children.map(c,a=>i.isValidElement(a)?i.cloneElement(a,{"aria-controls":ah(e,a.props.value),id:ai(e,a.props.value)}):null);return i.createElement(al,(0,g.Z)({},d,{ref:b,value:e.value}),f)});var an=am;let ao=i.forwardRef(function(a,b){let{children:c,value:d}=a,f=(0,h.Z)(a,["children","value"]),j=ag();if(null===j)throw TypeError("No TabContext provided");let k=ah(j,d),l=ai(j,d);return void 0===d?null:i.createElement(e.Z,(0,g.Z)({ref:b,hidden:j.value!==d,id:k,"aria-labelledby":l,role:"tabpanel"},f),c)});var ap=ao,aq=c(63825),ar=c(76328);let as=(0,j.ZP)(m.Z).attrs({alignItems:"center",justifyContent:"center",backgroundColor:"background.lighter"})`
  height: 24px;
`,at=(0,j.ZP)(e.Z)`
  width: 100%;
`,au=(0,j.ZP)(e.Z).attrs(a=>Object.assign({},a,{borderRadius:"medium",zIndex:0}))`
  background-color: ${a=>(0,k.R)("baseColors.wildsand.base")(a)};
  position: absolute;
  height: 3px;
  width: 100%;
`,av=(0,j.ZP)(e.Z).attrs({bg:"background.primary",borderRadius:"medium",zIndex:1})`
  position: absolute;
  height: 3px;
`,aw=j.ZP.input.attrs({type:"range"})`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 100%;
  outline: none;
  z-index: ${a=>a.overlapIndex?(0,k.R)(`zIndices.${a.overlapIndex}`)(a):(0,k.R)("zIndices.3")(a)};

  &,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  &::-webkit-slider-thumb {
    background-color: ${(0,k.dF)("lighter")};
    border: ${a=>(0,k.R)("borders.0")(a)};
    border-radius: ${a=>(0,k.R)("radii.circle")(a)};
    box-shadow: ${a=>(0,k.R)("boxShadows.2")(a)};
    cursor: pointer;
    height: 24px;
    width: 24px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  &::-moz-range-thumb {
    background-color: ${(0,k.dF)("lighter")};
    border: ${a=>(0,k.R)("borders.0")(a)};
    border-radius: ${a=>(0,k.R)("radii.circle")(a)};
    box-shadow: ${a=>(0,k.R)("boxShadows.2")(a)};
    cursor: pointer;
    height: 24px;
    width: 24px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`,ax=({minAllowed:a,maxAllowed:b,currentMin:c,currentMax:d,onChange:e})=>{let[f,g]=(0,i.useState)(c),[h,j]=(0,i.useState)(d),k=(0,i.useRef)(null),l=(0,i.useRef)(null),m=(0,i.useRef)(null),n=(0,i.useCallback)(c=>Math.round((c-a)/(b-a)*100),[c,d]),o=c=>(0,F.Z4)(c,d,a,b),p=d=>(0,F.rx)(d,c,a,b);(0,i.useEffect)(()=>{if(l.current){let a=n(f),b=n(+l.current.value);m.current&&(m.current.style.left=`${a}%`,m.current.style.width=`${b-a}%`)}},[f,n]),(0,i.useEffect)(()=>{if(k.current){let a=n(+k.current.value),b=n(h);m.current&&(m.current.style.width=`${b-a}%`)}},[h,n]),(0,i.useEffect)(()=>{g(o(c)?c:a),j(p(d)?d:b)},[c,d]);let q=(a,b)=>{e({currentMin:a,currentMax:b})};return i.createElement(as,null,i.createElement(aw,{"data-testid":"slider-input-min",type:"range",min:a,max:b,value:f,ref:k,step:.01,overlapIndex:f>b-100?4:2,onChange:function(a){let b=Math.min(+a.target.value,h-1);g(b),q(b,h)}}),i.createElement(aw,{"data-testid":"slider-input-max",type:"range",min:a,max:b,value:h,ref:l,step:.01,onChange:function(a){let b=Math.max(+a.target.value,f+1);j(b),q(f,b)}}),i.createElement(at,null,i.createElement(au,null),i.createElement(av,{ref:m})))};var ay=ax,az=c(22035)},78435:function(a){var b="undefined"!=typeof Element,c="function"==typeof Map,d="function"==typeof Set,e="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function f(a,g){if(a===g)return!0;if(a&&g&&"object"==typeof a&&"object"==typeof g){var h,i,j,k;if(a.constructor!==g.constructor)return!1;if(Array.isArray(a)){if((h=a.length)!=g.length)return!1;for(i=h;0!=i--;)if(!f(a[i],g[i]))return!1;return!0}if(c&&a instanceof Map&&g instanceof Map){if(a.size!==g.size)return!1;for(k=a.entries();!(i=k.next()).done;)if(!g.has(i.value[0]))return!1;for(k=a.entries();!(i=k.next()).done;)if(!f(i.value[1],g.get(i.value[0])))return!1;return!0}if(d&&a instanceof Set&&g instanceof Set){if(a.size!==g.size)return!1;for(k=a.entries();!(i=k.next()).done;)if(!g.has(i.value[0]))return!1;return!0}if(e&&ArrayBuffer.isView(a)&&ArrayBuffer.isView(g)){if((h=a.length)!=g.length)return!1;for(i=h;0!=i--;)if(a[i]!==g[i])return!1;return!0}if(a.constructor===RegExp)return a.source===g.source&&a.flags===g.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===g.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===g.toString();if((h=(j=Object.keys(a)).length)!==Object.keys(g).length)return!1;for(i=h;0!=i--;)if(!Object.prototype.hasOwnProperty.call(g,j[i]))return!1;if(b&&a instanceof Element)return!1;for(i=h;0!=i--;)if(("_owner"!==j[i]&&"__v"!==j[i]&&"__o"!==j[i]||!a.$$typeof)&&!f(a[j[i]],g[j[i]]))return!1;return!0}return a!=a&&g!=g}a.exports=function(a,b){try{return f(a,b)}catch(c){if((c.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw c}}}}])
//# sourceMappingURL=7043-3ed85803cdc561a3.js.map