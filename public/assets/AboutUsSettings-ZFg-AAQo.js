import{u as _,r as c,g as b,o as l,c as u,a,d as p,i as v,n as f,y as m,t as g}from"./index-DKYzgkfE.js";import{_ as h}from"./TextEditor-B_jrMd-A.js";const U={class:"my-container"},y={class:"card-bg items-center px-4 p-4 md:p-8 space-y-4"},S=a("h4",{class:"title-lg"},"আমাদের সম্পর্কে",-1),A={class:"w-full bg-gray-100 p-4 rounded-md relative"},V={key:0},k=["innerHTML"],N={__name:"AboutUsSettings",setup(x){const e=_(),t=c(!1),s=c("");b(()=>{e.fetchScrollingNotice(),e.fetchDirectorMessage(),e.fetchAboutUs()});const r=async()=>{var o;t.value?(await e.updateAboutUs({about_us:s.value}),e.aboutUs.about_us=s.value):s.value=((o=e.aboutUs)==null?void 0:o.about_us)||"",t.value=!t.value};return(o,n)=>{var i;return l(),u("div",U,[a("div",y,[S,a("div",A,[t.value?(l(),u("div",V,[p(h,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=d=>s.value=d)},null,8,["modelValue"])])):(l(),u("div",{key:1,innerHTML:(i=v(e).aboutUs)==null?void 0:i.about_us},null,8,k)),a("button",{class:"btn-3 px-2 py-0 border absolute top-2 right-2",onClick:r},[a("i",{class:f(t.value?"fas fa-save":"fas fa-edit")},null,2),m(" "+g(t.value?"Save":"Edit"),1)])])])])}}};export{N as default};
