import{_ as L}from"./Icon-ee54346b.js";import{k as y,m as k,n as v,o as b,p as S,_ as h}from"./index-486943be.js";import{h as x,B,i as w,D as C,j}from"./ant-design-vue-ebd62544.js";import{d as D,W as s,X as _,a5 as o,v as l,a0 as I,a1 as N,u as t,F as V,I as F,a4 as r,a2 as p,a3 as M}from"./common-10c167db.js";function W(){return{changeLocale:e=>{const a=y();e!==a.$state.locale&&(a.setLocale(e),k.global.locale.value=e,x.locale(v[e]),window.location.reload())}}}const $=D({__name:"LangSelect",props:{dark:{type:Boolean},small:{type:Boolean}},setup(c){const e=c,a=b(),{changeLocale:u}=W();return(z,E)=>{const m=L,d=B,i=j,g=w,f=C;return s(),_(f,{placement:"bottom",class:p(["lang_select",{dark:e.dark,small:e.small}])},{overlay:o(()=>[l(g,{class:"locale_menu"},{default:o(()=>[(s(!0),I(V,null,N(t(S),n=>(s(),_(i,{key:n.lang,onClick:O=>t(u)(n.lang)},{default:o(()=>[M("span",{class:p(t(a).locale===n.lang?"active":"")},r(n.label),3)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:o(()=>[l(d,{type:"text",class:"locale"},{default:o(()=>[l(m,{name:"yuyan",right:4}),F(" "+r(t(a).localeLabel),1)]),_:1})]),_:1},8,["class"])}}});const G=h($,[["__scopeId","data-v-892b0fb0"]]);export{G as L};
