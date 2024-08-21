"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1054],{68909:function(a,b){var c=function(a){return!!(a&&!a.includes("{{"))};b.Z=c},17370:function(a,b){var c=function(a){try{return a.replace(/\D+/g,"").slice(0,14).replace(/(\d{2})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1/$2").replace(/(\d{4})(\d)/,"$1-$2")}catch(b){return""}};b.Z=c},59191:function(a,b,c){c.d(b,{Z:function(){return t}});var d=c(7896),e=c(59740),f=c(2784),g=c(84546),h=c(60861),i=c(19527),j=c(25610),k=c(10200),l=c(8341),m=c(34490),n=c(89382),o=["title","icon","links","newEntry"],p=["id"],q={button:h.Z,default:k.Z},r=function(a){var b=a.title,c=a.icon,h=a.links,k=a.newEntry,l=(0,e.Z)(a,o);return f.createElement(g.Z,(0,d.Z)({bg:"background.base",p:3},l),f.createElement(i.Z,{mb:2,justifyContent:"space-between",alignItems:"center"},f.createElement(i.Z,{alignItems:"center"},f.createElement(j.Z,{as:"h2",color:"text.primary",mr:2},b),k&&f.createElement(g.Z,{p:1,bg:"secondary.base",color:"#fff"},"NOVO")),f.createElement(m.JO$,{name:c,color:"background.primary",width:40,height:40})),f.createElement(i.Z,{flexDirection:"column",gap:2,alignItems:"flex-start"},h.map(function(a){var b=a.type,c=a.value,d=a.href,e=q[b||"default"];return f.createElement(e,{uppercase:!1,key:c,as:"a",size:"small",href:d},c)})))};r.defaultProps={newEntry:!1};var s=function(a){var b=a.static;return f.createElement(l.Z,{gridGap:"30px",height:"100%"},b.items.map(function(a){var b=a.id,c=(0,e.Z)(a,p);return f.createElement(r,(0,d.Z)({key:b},c))}))};s.ssr=!0;var t=(0,n.Z)(s)},75120:function(a,b,c){c.d(b,{Z:function(){return h}});var d=c(2784),e=c(63825),f=c(89382),g=function(a){var b=a.static;return d.createElement(e.Z,{color:"text.base"},d.createElement("span",null,"Ol\xe1"),d.createElement("strong",null," ".concat(b.accountName||"Cliente",". ")),d.createElement("span",null,b.accountInfo))};g.ssr=!0;var h=(0,f.Z)(g)},76346:function(a,b,c){c.d(b,{Z:function(){return j}});var d=c(7896),e=c(2784),f=c(5530),g=c(87333),h=c(89382),i=function(a){var b=a.static,c=(0,g.Np)().publish,h=function(){c("action:click",b)};return e.createElement(f.Z,(0,d.Z)({onButtonClick:h},b))};i.defaultProps={static:{},structure:{}},i.ssr=!1;var j=(0,h.Z)(i)},88289:function(a,b,c){c.d(b,{Z:function(){return q}});var d,e=c(7896),f=c(59740),g=c(76854),h=c(2784),i=c(89382),j=c(71171),k=c(99673),l=c(84546),m=(0,k.ZP)(l.Z)(d||(d=(0,j.Z)(["\n  position: relative;\n  & > div,\n  & iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100% !important;\n    height: 100% !important;\n  }\n\n  & > div::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    ","\n  }\n"])),function(a){return!a.touch&&"pointer-events: none;"}),n=["static","structure","onClick","slotOnload"],o=function(a){var b=(0,g.Z)(a,1)[0];return Array.isArray(b)?b:a};function p(a){var b=a.static,c=a.structure,d=a.onClick,i=a.slotOnload,j=(0,f.Z)(a,n),k=(0,h.useState)(),l=(0,g.Z)(k,2),p=l[0],q=l[1],r=b.cursorPointer,s=b.path,t=b.responsive,u=void 0===t||t,v=b.size,w=b.touch,x=b.target,y=void 0===x?[]:x,z=c.cookies;z=void 0===z?{}:z;var A=z.clientId,B=void 0===A?"":A,C=o(v),D=(0,g.Z)(C,2),E=D[0],F=D[1];(0,h.useEffect)(function(){var a,b=window.googletag,c=void 0===b?{}:b;return c.cmd&&c.cmd.push(function(){a=null==c?void 0:c.defineSlot(s,v),q(a.getSlotElementId()),a.addService(c.pubads()),a.setForceSafeFrame(!w),a.setTargeting("GA_USER_ID",B),y.forEach(function(b){var c=(0,g.Z)(b,2),d=c[0],e=c[1];d&&e&&a.setTargeting(d,e)}),c.pubads().enableSingleRequest(),c.pubads().collapseEmptyDivs(),c.pubads().disableInitialLoad(),c.enableServices(),c.display(p),c.pubads().refresh([a]),c.pubads().addEventListener("slotRenderEnded",i)}),function(){c.cmd&&c.cmd.push(function(){c.destroySlots([a])}),q()}},[s,v]);var G=function(a){d(a);var b,c,e,f,g=a.target.querySelector("iframe");return null==g?void 0:null==(b=g.contentWindow)?void 0:null==(c=b.document)?void 0:null==(e=c.body)?void 0:null==(f=e.querySelector("a"))?void 0:f.click()},H=u?"".concat(Math.ceil(F/E*100),"%"):"".concat(F,"px");return h.createElement(m,(0,e.Z)({"data-testid":"adunit",cursorPointer:r,touch:w,width:"100%",height:"0",paddingTop:H,overflow:"hidden",onClick:G},j,{id:p}))}p.defaultProps={onClick:function(){},slotOnload:function(){},static:{},structure:{}},p.ssr=!0;var q=(0,i.Z)(p)},40597:function(a,b,c){c.d(b,{Z:function(){return j}});var d=c(7896),e=c(2784),f=c(75335),g=c(89382),h=[{id:"237689100",trackId:"WyJlX1BKYm5OIiwiM",variationId:null,title:"Cerveja Heineken Lata 350ml 12 Unidades",description:null,image:"https://a-static.mlcdn.com.br/{w}x{h}/cerveja-heineken-lata-350ml-12-unidades-lager-puro-malte/magazineluiza/237689100/181672997ea11893ec1f423ded45c723.jpg",available:null,position:null,isBuyBox:null,url:"https://rgr.bob-recs.com/interactions/click/temp_8d76c690-53f1-11ef-aaaf-57339d4b3c92/cGFnZWRlc2tzaXRlLWRlc2tzaG1pZGRsZTtzaG93Y2FzZS0yNDE3OzQ1OzcyNjZhZTdmLWVhNTAtNDRjOS1hMzc2LWFlZmU3NGQxMzlkMw/237689100/?url=https%3A%2F%2Fwww.magazineluiza.com.br%2Fcerveja-heineken-lata-350ml-12-unidades-lager-puro-malte%2Fp%2F237689100%2Fme%2Fcvej%2F%3Fpartner_id%3D62174",path:"cerveja-heineken-lata-350ml-12-unidades-lager-puro-malte/p/237689100/me/cvej/",reference:null,offerTags:[],minimumOrderQuantity:null,attributes:[],seller:{id:"magazineluiza",sku:null,description:"Magalu",category:"1p",deliveryId:null,deliveryDescription:null,details:null,__typename:"Seller"},brand:{label:"Heineken",slug:"heineken",__typename:"Brand"},price:{paymentMethodDescription:"no Pix",price:"64.00",fullPrice:null,bestPrice:"52.53",discount:"1.00",currency:"BRL",exchangeRate:null,idExchangeRate:null,originalPriceForeign:null,__typename:"Price"},installment:{paymentMethodDescription:"sem juros",quantity:1,amount:"53.06",totalAmount:"53.06",__typename:"Installment"},rating:{count:311,score:5,__typename:"Rating"},badges:[],category:{id:"ME",name:"Mercado",__typename:"ProductCategory"},subcategory:{id:"CVEJ",name:"Cerveja",__typename:"ProductCategory"},loyalty:null,restrictions:null,__typename:"Product",isOnWishlist:!1,shippingTag:{cost:null,time:null,complement:null,__typename:"ShippingTag"}},{id:"218940900",trackId:"WyJlX1BKYm5OIiwiM",variationId:null,title:"Amaciante Downy Concentrado",description:null,image:"https://a-static.mlcdn.com.br/{w}x{h}/amaciante-downy-concentrado-brisa-de-verao-15l/magazineluiza/218940900/2a74da25f748fc67416185f7b0333b17.jpg",available:null,position:null,isBuyBox:null,url:"https://rgr.bob-recs.com/interactions/click/temp_8d76c690-53f1-11ef-aaaf-57339d4b3c92/cGFnZWRlc2tzaXRlLWRlc2tzaG1pZGRsZTtzaG93Y2FzZS0yNDE3OzQ1OzcyNjZhZTdmLWVhNTAtNDRjOS1hMzc2LWFlZmU3NGQxMzlkMw/218940900/?url=https%3A%2F%2Fwww.magazineluiza.com.br%2Famaciante-downy-concentrado-brisa-de-verao-15l%2Fp%2F218940900%2Fme%2Famro%2F%3Fpartner_id%3D62174",path:"amaciante-downy-concentrado-brisa-de-verao-15l/p/218940900/me/amro/",reference:null,offerTags:["magalu_indica"],minimumOrderQuantity:null,attributes:[{type:"fragrancia",label:null,value:"Brisa de Ver\xe3o",current:null,values:null,__typename:"Attribute"},{type:"volume",label:null,value:"1,5l",current:null,values:null,__typename:"Attribute"}],seller:{id:"magazineluiza",sku:null,description:"Magalu",category:"1p",deliveryId:null,deliveryDescription:null,details:null,__typename:"Seller"},brand:{label:"Downy",slug:"downy",__typename:"Brand"},price:{paymentMethodDescription:"no Pix",price:"32.90",fullPrice:null,bestPrice:"25.64",discount:"1.00",currency:"BRL",exchangeRate:null,idExchangeRate:null,originalPriceForeign:null,__typename:"Price"},installment:{paymentMethodDescription:"sem juros",quantity:1,amount:"25.90",totalAmount:"25.90",__typename:"Installment"},rating:{count:2705,score:5,__typename:"Rating"},badges:[],category:{id:"ME",name:"Mercado",__typename:"ProductCategory"},subcategory:{id:"AMRO",name:"Amaciante",__typename:"ProductCategory"},loyalty:null,restrictions:null,__typename:"Product",isOnWishlist:!1,shippingTag:{cost:null,time:null,complement:null,__typename:"ShippingTag"}},{id:"229400700",trackId:"WyJlX1BKYm5OIiwiM",variationId:null,title:"Kit Sab\xe3o em P\xf3 Omo Lavagem Perfeita 1,6kg",description:null,image:"https://a-static.mlcdn.com.br/{w}x{h}/kit-sabao-em-po-omo-lavagem-perfeita-16kg-3-unidades/magazineluiza/229400700/65ca9a4541095f5b1ada3709e8099469.jpg",available:null,position:null,isBuyBox:null,url:"https://rgr.bob-recs.com/interactions/click/temp_8d76c690-53f1-11ef-aaaf-57339d4b3c92/cGFnZWRlc2tzaXRlLWRlc2tzaG1pZGRsZTtzaG93Y2FzZS0yNDE3OzQ1OzcyNjZhZTdmLWVhNTAtNDRjOS1hMzc2LWFlZmU3NGQxMzlkMw/229400700/?url=https%3A%2F%2Fwww.magazineluiza.com.br%2Fkit-sabao-em-po-omo-lavagem-perfeita-16kg-3-unidades%2Fp%2F229400700%2Fme%2Fsepo%2F%3Fpartner_id%3D62174",path:"kit-sabao-em-po-omo-lavagem-perfeita-16kg-3-unidades/p/229400700/me/sepo/",reference:null,offerTags:[],minimumOrderQuantity:null,attributes:[],seller:{id:"magazineluiza",sku:null,description:"Magalu",category:"1p",deliveryId:null,deliveryDescription:null,details:null,__typename:"Seller"},brand:{label:"Omo",slug:"omo",__typename:"Brand"},price:{paymentMethodDescription:"no Pix",price:"119.97",fullPrice:null,bestPrice:"54.99",discount:"1.00",currency:"BRL",exchangeRate:null,idExchangeRate:null,originalPriceForeign:null,__typename:"Price"},installment:{paymentMethodDescription:"sem juros",quantity:1,amount:"55.55",totalAmount:"55.55",__typename:"Installment"},rating:{count:34,score:4,__typename:"Rating"},badges:[{text:"seloofertarelampago",imageUrl:"https://i.mlcdn.com.br/selo-ml/{w}x{h}/b225b3ba-c1fd-11ee-97a5-02566cc712d2.png",container:"image",position:"top",tooltip:"seloofertarelampago",__typename:"Badge"}],category:{id:"ME",name:"Mercado",__typename:"ProductCategory"},subcategory:{id:"SEPO",name:"Sab\xe3o em P\xf3",__typename:"ProductCategory"},loyalty:null,restrictions:null,__typename:"Product",isOnWishlist:!1,shippingTag:{cost:null,time:null,complement:null,__typename:"ShippingTag"}},{id:"239008900",trackId:"WyJlX1BKYm5OIiwiM",variationId:null,title:"Kit Sab\xe3o L\xedquido Omo Lavagem Perfeita",description:null,image:"https://a-static.mlcdn.com.br/{w}x{h}/kit-sabao-liquido-omo-lavagem-perfeita-3l-cada-2-unidades/magazineluiza/239008900/1be29dbac35960dc8308c43d76f0cf29.jpg",available:null,position:null,isBuyBox:null,url:"https://rgr.bob-recs.com/interactions/click/temp_8d76c690-53f1-11ef-aaaf-57339d4b3c92/cGFnZWRlc2tzaXRlLWRlc2tzaG1pZGRsZTtzaG93Y2FzZS0yNDE3OzQ1OzcyNjZhZTdmLWVhNTAtNDRjOS1hMzc2LWFlZmU3NGQxMzlkMw/239008900/?url=https%3A%2F%2Fwww.magazineluiza.com.br%2Fkit-sabao-liquido-omo-lavagem-perfeita-3l-cada-2-unidades%2Fp%2F239008900%2Fme%2Fsabl%2F%3Fpartner_id%3D62174",path:"kit-sabao-liquido-omo-lavagem-perfeita-3l-cada-2-unidades/p/239008900/me/sabl/",reference:null,offerTags:[],minimumOrderQuantity:null,attributes:[],seller:{id:"magazineluiza",sku:null,description:"Magalu",category:"1p",deliveryId:null,deliveryDescription:null,details:null,__typename:"Seller"},brand:{label:"Omo",slug:"omo",__typename:"Brand"},price:{paymentMethodDescription:"no Pix",price:"119.80",fullPrice:null,bestPrice:"58.31",discount:"1.00",currency:"BRL",exchangeRate:null,idExchangeRate:null,originalPriceForeign:null,__typename:"Price"},installment:{paymentMethodDescription:"sem juros",quantity:1,amount:"58.90",totalAmount:"58.90",__typename:"Installment"},rating:{count:184,score:5,__typename:"Rating"},badges:[],category:{id:"ME",name:"Mercado",__typename:"ProductCategory"},subcategory:{id:"SABL",name:"Sab\xe3o L\xedquido",__typename:"ProductCategory"},loyalty:null,restrictions:null,__typename:"Product",isOnWishlist:!1,shippingTag:{cost:null,time:null,complement:null,__typename:"ShippingTag"}},{id:"218044400",trackId:"WyJlX1BKYm5OIiwiM",variationId:null,title:"Carga para Aparelho de Barbear Gillette",description:null,image:"https://a-static.mlcdn.com.br/{w}x{h}/carga-para-aparelho-de-barbear-gillette-mach3-sensitive-16-cargas/magazineluiza/218044400/16c7239c853698f8e7eba02477a6ef14.jpg",available:null,position:null,isBuyBox:null,url:"https://rgr.bob-recs.com/interactions/click/temp_8d76c690-53f1-11ef-aaaf-57339d4b3c92/cGFnZWRlc2tzaXRlLWRlc2tzaG1pZGRsZTtzaG93Y2FzZS0yNDE3OzQ1OzcyNjZhZTdmLWVhNTAtNDRjOS1hMzc2LWFlZmU3NGQxMzlkMw/218044400/?url=https%3A%2F%2Fwww.magazineluiza.com.br%2Fcarga-para-aparelho-de-barbear-gillette-mach3-sensitive-16-cargas%2Fp%2F218044400%2Fme%2Fladb%2F%3Fpartner_id%3D62174",path:"carga-para-aparelho-de-barbear-gillette-mach3-sensitive-16-cargas/p/218044400/me/ladb/",reference:null,offerTags:["magalu_indica"],minimumOrderQuantity:null,attributes:[{type:"quantity",label:null,value:"16 unidades",current:null,values:null,__typename:"Attribute"}],seller:{id:"magazineluiza",sku:null,description:"Magalu",category:"1p",deliveryId:null,deliveryDescription:null,details:null,__typename:"Seller"},brand:{label:"Gillette",slug:"gillette",__typename:"Brand"},price:{paymentMethodDescription:"no Pix",price:"142.22",fullPrice:null,bestPrice:"96.02",discount:"1.00",currency:"BRL",exchangeRate:null,idExchangeRate:null,originalPriceForeign:null,__typename:"Price"},installment:{paymentMethodDescription:"sem juros",quantity:1,amount:"96.99",totalAmount:"96.99",__typename:"Installment"},rating:{count:4122,score:5,__typename:"Rating"},badges:[],category:{id:"ME",name:"Mercado",__typename:"ProductCategory"},subcategory:{id:"LADB",name:"L\xe2mina e Carga para Aparelho de Barbear",__typename:"ProductCategory"},loyalty:null,restrictions:null,__typename:"Product",isOnWishlist:!1,shippingTag:{cost:null,time:null,complement:null,__typename:"ShippingTag"}},{id:"226984500",trackId:"WyJlX1BKYm5OIiwiM",variationId:null,title:"Sab\xe3o L\xedquido Omo Lavanderia Profissional Lavagem Perfeita Profissional 7L",description:null,image:"https://a-static.mlcdn.com.br/{w}x{h}/sabao-liquido-omo-lavanderia-profissional-lavagem-perfeita-profissional-7l/magazineluiza/226984500/31008a7f6013684f6be4724e660b60e7.jpg",available:null,position:null,isBuyBox:null,url:"https://rgr.bob-recs.com/interactions/click/temp_8d76c690-53f1-11ef-aaaf-57339d4b3c92/cGFnZWRlc2tzaXRlLWRlc2tzaG1pZGRsZTtzaG93Y2FzZS0yNDE3OzQ1OzcyNjZhZTdmLWVhNTAtNDRjOS1hMzc2LWFlZmU3NGQxMzlkMw/226984500/?url=https%3A%2F%2Fwww.magazineluiza.com.br%2Fsabao-liquido-omo-lavanderia-profissional-lavagem-perfeita-profissional-7l%2Fp%2F226984500%2Fme%2Fsabl%2F%3Fpartner_id%3D62174",path:"sabao-liquido-omo-lavanderia-profissional-lavagem-perfeita-profissional-7l/p/226984500/me/sabl/",reference:null,offerTags:["magalu_indica"],minimumOrderQuantity:null,attributes:[{type:"volume",label:null,value:"7l",current:null,values:null,__typename:"Attribute"}],seller:{id:"magazineluiza",sku:null,description:"Magalu",category:"1p",deliveryId:null,deliveryDescription:null,details:null,__typename:"Seller"},brand:{label:"Omo",slug:"omo",__typename:"Brand"},price:{paymentMethodDescription:"no Pix",price:"108.35",fullPrice:null,bestPrice:"69.29",discount:"1.00",currency:"BRL",exchangeRate:null,idExchangeRate:null,originalPriceForeign:null,__typename:"Price"},installment:{paymentMethodDescription:"sem juros",quantity:1,amount:"69.99",totalAmount:"69.99",__typename:"Installment"},rating:{count:1980,score:5,__typename:"Rating"},badges:[],category:{id:"ME",name:"Mercado",__typename:"ProductCategory"},subcategory:{id:"SABL",name:"Sab\xe3o L\xedquido",__typename:"ProductCategory"},loyalty:null,restrictions:null,__typename:"Product",isOnWishlist:!1,shippingTag:{cost:null,time:null,complement:null,__typename:"ShippingTag"}},{id:"237817000",trackId:"WyJlX1BKYm5OIiwiM",variationId:null,title:"Bebida Energ\xe9tica Red Bull The Summer Edition",description:null,image:"https://a-static.mlcdn.com.br/{w}x{h}/bebida-energetica-red-bull-the-summer-edition-figo-e-maca-250ml/magazineluiza/237817000/3b85cf792f6207f94a7e7ed0ad5b59f8.jpg",available:null,position:null,isBuyBox:null,url:"https://rgr.bob-recs.com/interactions/click/temp_8d76c690-53f1-11ef-aaaf-57339d4b3c92/cGFnZWRlc2tzaXRlLWRlc2tzaG1pZGRsZTtzaG93Y2FzZS0yNDE3OzQ1OzcyNjZhZTdmLWVhNTAtNDRjOS1hMzc2LWFlZmU3NGQxMzlkMw/237817000/?url=https%3A%2F%2Fwww.magazineluiza.com.br%2Fbebida-energetica-red-bull-the-summer-edition-figo-e-maca-250ml%2Fp%2F237817000%2Fme%2Fengt%2F%3Fpartner_id%3D62174",path:"bebida-energetica-red-bull-the-summer-edition-figo-e-maca-250ml/p/237817000/me/engt/",reference:null,offerTags:["magalu_indica"],minimumOrderQuantity:null,attributes:[{type:"volume",label:null,value:"250ml",current:null,values:null,__typename:"Attribute"},{type:"flavor",label:null,value:"Figo e Ma\xe7\xe3",current:null,values:null,__typename:"Attribute"}],seller:{id:"magazineluiza",sku:null,description:"Magalu",category:"1p",deliveryId:null,deliveryDescription:null,details:null,__typename:"Seller"},brand:{label:"Red Bull",slug:"red-bull",__typename:"Brand"},price:{paymentMethodDescription:"no Pix",price:"9.49",fullPrice:null,bestPrice:"3.95",discount:"1.00",currency:"BRL",exchangeRate:null,idExchangeRate:null,originalPriceForeign:null,__typename:"Price"},installment:{paymentMethodDescription:"sem juros",quantity:1,amount:"3.99",totalAmount:"3.99",__typename:"Installment"},rating:{count:48,score:5,__typename:"Rating"},badges:[],category:{id:"ME",name:"Mercado",__typename:"ProductCategory"},subcategory:{id:"ENGT",name:"Bebida Energ\xe9tica",__typename:"ProductCategory"},loyalty:null,restrictions:null,__typename:"Product",isOnWishlist:!1,shippingTag:{cost:null,time:null,complement:null,__typename:"ShippingTag"}},{id:"222260500",trackId:"WyJlX1BKYm5OIiwiM",variationId:null,title:"Sab\xe3o L\xedquido Brilhante Limpeza Total",description:null,image:"https://a-static.mlcdn.com.br/{w}x{h}/sabao-liquido-brilhante-limpeza-total-5l/magazineluiza/222260500/413d72f5da04b7fffda522e6150fbc0a.jpg",available:null,position:null,isBuyBox:null,url:"https://rgr.bob-recs.com/interactions/click/temp_8d76c690-53f1-11ef-aaaf-57339d4b3c92/cGFnZWRlc2tzaXRlLWRlc2tzaG1pZGRsZTtzaG93Y2FzZS0yNDE3OzQ1OzcyNjZhZTdmLWVhNTAtNDRjOS1hMzc2LWFlZmU3NGQxMzlkMw/222260500/?url=https%3A%2F%2Fwww.magazineluiza.com.br%2Fsabao-liquido-brilhante-limpeza-total-5l%2Fp%2F222260500%2Fme%2Fsabo%2F%3Fpartner_id%3D62174",path:"sabao-liquido-brilhante-limpeza-total-5l/p/222260500/me/sabo/",reference:null,offerTags:["magalu_indica"],minimumOrderQuantity:null,attributes:[{type:"volume",label:null,value:"5l",current:null,values:null,__typename:"Attribute"}],seller:{id:"magazineluiza",sku:null,description:"Magalu",category:"1p",deliveryId:null,deliveryDescription:null,details:null,__typename:"Seller"},brand:{label:"Brilhante",slug:"brilhante",__typename:"Brand"},price:{paymentMethodDescription:"no Pix",price:"74.90",fullPrice:null,bestPrice:"37.61",discount:"1.00",currency:"BRL",exchangeRate:null,idExchangeRate:null,originalPriceForeign:null,__typename:"Price"},installment:{paymentMethodDescription:"sem juros",quantity:1,amount:"37.99",totalAmount:"37.99",__typename:"Installment"},rating:{count:1613,score:5,__typename:"Rating"},badges:[],category:{id:"ME",name:"Mercado",__typename:"ProductCategory"},subcategory:{id:"SABO",name:"Sab\xe3o",__typename:"ProductCategory"},loyalty:null,restrictions:null,__typename:"Product",isOnWishlist:!1,shippingTag:{cost:null,time:null,complement:null,__typename:"ShippingTag"}}],i=function(a){var b,c=a.static,g=c.carouselConfig,i=c.showcase,j=void 0===i?{}:i,k=c.exhibition,l=c.titleAs,m=c.productTitleAs,n=c.jsonLD,o=c.showInCashLabel,p=c.showDiscount,q=c.showDiscountOnlyCashInfo,r=(0,e.useRef)(null),s=null==(b=h)?void 0:b.map(function(a,b){return Object.values(a).length?{available:!0,brand:{label:a.brand},campaignId:a.campaignId,category:{name:a.category},id:a.id,image:a.image,path:"/",position:b+1,price:a.price,rating:a.rating,seller:{id:a.seller.id},subcategory:{name:a.subcategory.name},title:a.title,trackId:a.trackId,url:a.url}:null}).filter(Boolean),t=function(){},u=function(){};return e.createElement(e.Fragment,null,!!(null==s?void 0:s.length)&&e.createElement(f.Z,(0,d.Z)({ref:r,key:"ads-showcase-1",exhibition:k,data:(0,d.Z)({},null==j?void 0:j.config,{products:s}),jsonLD:n,titleAs:l,productTitleAs:m,showInCashInfo:o,showDiscount:p,showDiscountOnlyCashInfo:q,showSponsoredSubTitle:!0,onProductView:t,onClick:u},void 0===g?{}:g)))};i.defaultProps={data:{},static:{exhibition:"carousel",name:i,slots:5},structure:{}},i.ssr=!0;var j=(0,g.Z)(i)}}])
//# sourceMappingURL=1054-f42beae75328bfc4.js.map