import{_ as m,r as p,o as t,c as s,a as n,F as c,b as d,n as h,t as u,d as _,w as b,e as v,f as g,T as x,u as y,g as w,h as k,i as S}from"./index-DKYzgkfE.js";const $={class:"w-full space-y-4"},T={class:"w-full flex justify-center items-center"},V={class:"flex p-2 rounded-lg gap-2 bg-gray-200 justify-center items-center"},C=["onClick"],B={key:0},L={__name:"TabView",props:{tabs:{required:!0}},setup(o){const a=p(o.tabs[0].id);return(l,f)=>(t(),s("div",$,[n("div",T,[n("div",V,[(t(!0),s(c,null,d(o.tabs,e=>(t(),s("button",{key:e.id,type:"button",class:h(["px-4 pt-2 pb-1.5 rounded-lg border",{"bg-white":a.value===e.id}]),onClick:r=>a.value=e.id},u(e.label),11,C))),128))])]),_(x,{name:"fade",mode:"out-in"},{default:b(()=>[(t(),s("div",{key:a.value,class:"w-full"},[(t(!0),s(c,null,d(o.tabs,e=>(t(),s(c,{key:e.id},[a.value===e.id?(t(),s("div",B,[v(l.$slots,e.id,{},void 0,!0)])):g("",!0)],64))),128))]))]),_:3})]))}},M=m(L,[["__scopeId","data-v-cbdfac10"]]),N={class:"my-container max-w-3xl my-4 min-h-[calc(100vh_-_200px)]"},j={class:"card-bg"},A={class:"p-8 md:p-12"},F={class:"text-3xl font-bold text-gray-800 mb-6"},H=["innerHTML"],q={__name:"AboutView",setup(o){const i=y(),a=[{id:"one",label:"আমাদের সম্পর্কে"},{id:"two",label:"আমাদের লক্ষ্য ও উদ্দেশ্য"}];return w(()=>{i.fetchAboutUs()}),(l,f)=>(t(),s("div",N,[_(M,{tabs:a},k({_:2},[d(a,e=>({name:e.id,fn:b(()=>{var r;return[n("div",j,[n("div",A,[n("h2",F,u(e.label),1),n("div",{innerHTML:(r=S(i).aboutUs)==null?void 0:r.about_us},null,8,H)])])]})}))]),1024)]))}};export{q as default};
