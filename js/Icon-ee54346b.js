import"//at.alicdn.com/t/c/font_4057669_5w7vhnmayto.js";import{d,c as n,W as l,a0 as i,a3 as u,u as o,a9 as m,a2 as g,ac as x}from"./common-10c167db.js";import{_ as h}from"./index-486943be.js";const y=["xlink:href"],k={key:0,d:"M10,10 A7,7 0 0,1 17,12",fill:"none",stroke:"#2fc774","stroke-width":"5",class:"loading"},v=d({__name:"Icon",props:{name:{},class:{default:""},loading:{type:Boolean,default:!1},gap:{type:Boolean,default:!1},left:{default:0},right:{default:0},size:{default:void 0},action:{type:Boolean,default:!1}},setup(r){const e=r,p=n(()=>`#icon-${e.name}`),_=n(()=>({icon:!0,gap:e.gap,[e.class]:!0,action_icon:e.action})),f=n(()=>{var a,s,c;const t={};return e.left&&(t.marginLeft=`${(a=String(e.left))==null?void 0:a.replace("px","")}px`),e.right&&(t.marginRight=`${(s=String(e.right))==null?void 0:s.replace("px","")}px`),e.size&&(t.fontSize=`${(c=String(e.size))==null?void 0:c.replace("px","")}px`),t});return(t,a)=>(l(),i("svg",{class:g(o(_)),style:x(o(f)),"aria-hidden":"true"},[u("use",{"xlink:href":o(p)},null,8,y),e.loading?(l(),i("path",k)):m("",!0)],6))}});const C=h(v,[["__scopeId","data-v-2a82cfca"]]);export{C as _};
