import{r as y,i as f,o as v,c as b,a as e,y as i,m as r,J as d,f as g}from"./index-MlIbSbKR.js";import{u as S}from"./application-BEfu2uo7.js";const w={key:0,class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"},_={class:"card-bg items-center max-w-md w-full p-6 space-y-4"},k={class:"flex items-center space-x-4"},h={class:"flex items-center space-x-2"},C={class:"flex items-center space-x-2"},P={__name:"ApplicationStatusModal",props:{applicationId:{required:!0}},emits:["data-updated"],setup(p,{emit:u}){const s=S(),a=y("Paid"),c=p,l=()=>{s.showStatusModal=!1},m=async()=>{try{await s.updatePaymentStatus(c.applicationId,a.value),x("data-updated")}catch(n){console.error("Error updating status:",n)}finally{l()}},x=u;return(n,t)=>f(s).showStatusModal?(v(),b("div",w,[e("div",_,[t[4]||(t[4]=e("h3",{class:"text-lg font-semibold text-gray-700 text-center"},[i(" এই নিবন্ধনটি গ্রহণ করা হচ্ছে... "),e("br"),i(" আপনি কি এই নিবন্ধনের টাকা পেয়েছেন? ")],-1)),e("div",k,[e("label",h,[r(e("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),value:"Paid"},null,512),[[d,a.value]]),t[2]||(t[2]=e("span",null,"হ্যা",-1))]),e("label",C,[r(e("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=o=>a.value=o),value:"Pending"},null,512),[[d,a.value]]),t[3]||(t[3]=e("span",null,"না",-1))])]),e("div",{class:"flex justify-end space-x-4 mt-6"},[e("button",{onClick:l,class:"bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition"}," Close "),e("button",{onClick:m,class:"bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"}," Save ")])])])):g("",!0)}};export{P as _};
