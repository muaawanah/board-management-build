import{u as r}from"./application-BtvOw1zm.js";import{_ as n,g as i,f as d,o as l,a as p,c as u,e as m}from"./index-BEZtqmZo.js";const b={class:"my-container py-8 md:py-16"},y=m('<div class="flex items-center justify-center bg-gray-100" data-v-bb7de68e><div class="bg-white p-8 rounded-lg shadow-md text-center" data-v-bb7de68e><div class="flex justify-center items-center" data-v-bb7de68e><div class="loader mb-6" data-v-bb7de68e></div></div><h2 class="text-xl font-semibold text-gray-700" data-v-bb7de68e>Processing your payment, please wait...</h2><p class="text-gray-500 mt-2" data-v-bb7de68e>This might take a few seconds. Do not close the page.</p></div></div>',1),_=[y],v={__name:"BkashCallback",setup(g){const t=i(),a=d(),s=r(),{applicationId:o}=t.params,{paymentID:c,status:e}=t.query;return l(async()=>e==="success"?(await s.bkashExecutePayment(o,{paymentID:c}),a.replace({name:localStorage.getItem("ReturnTo")||"PrevApplication",query:{success:`Your Payment ${e}.`}})):a.replace({name:localStorage.getItem("ReturnTo")||"PrevApplication",query:{error:`Your Payment ${e}. Please try again.`}})),(h,f)=>(p(),u("div",b,_))}},P=n(v,[["__scopeId","data-v-bb7de68e"]]);export{P as default};
