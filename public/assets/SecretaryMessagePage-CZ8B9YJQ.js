import{u as g,r as c,h as y,c as o,a,d as m,i as p,n as v,y as _,t as f,o as n}from"./index-MlIbSbKR.js";import{_ as S}from"./TextEditor-DsPuRqoX.js";const M={class:"my-container"},b={class:"card-bg items-center px-4 p-4 md:p-8 space-y-4"},V={class:"w-full bg-gray-100 p-4 rounded-md relative"},k={key:0},x=["innerHTML"],N={__name:"SecretaryMessagePage",setup(h){const t=g(),e=c(!1),r=c("");y(()=>{t.fetchSecretaryMessage()});const d=async()=>{var l;e.value?(await t.updateSecretaryMessage({secretary_message:r.value}),t.secretaryMessage.secretary_message=r.value):r.value=((l=t.secretaryMessage)==null?void 0:l.secretary_message)||"",e.value=!e.value};return(l,s)=>{var i;return n(),o("div",M,[a("div",b,[s[2]||(s[2]=a("h4",{class:"title-lg"},"মহাসচিবের বাণী সেটিংস",-1)),a("div",V,[s[1]||(s[1]=a("b",null,"মহাসচিবের বাণী:",-1)),e.value?(n(),o("div",k,[m(S,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=u=>r.value=u)},null,8,["modelValue"])])):(n(),o("div",{key:1,innerHTML:(i=p(t).secretaryMessage)==null?void 0:i.secretary_message},null,8,x)),a("button",{class:"btn-3 px-2 py-0 border absolute top-2 right-2",onClick:d},[a("i",{class:v(e.value?"fas fa-save":"fas fa-edit")},null,2),_(" "+f(e.value?"Save":"Edit"),1)])])])])}}};export{N as default};
