import{r as _,d as y,a as b,c as f,b as e,i,z as r,j as v,q as c}from"./index-D8NEAiqQ.js";import{u as g}from"./application-DzJyLeew.js";const h={key:0,class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"},S={class:"card-bg items-center max-w-md w-full p-6 space-y-4"},w=e("h3",{class:"text-lg font-semibold text-gray-700 text-center"},[c(" এই আবেদনটি গ্রহণ করা হচ্ছে... "),e("br"),c(" আপনি কি এই আবেদনের টাকা পেয়েছেন? ")],-1),k={class:"flex items-center space-x-4"},C={class:"flex items-center space-x-2"},M=e("span",null,"হ্যা",-1),V={class:"flex items-center space-x-2"},P=e("span",null,"না",-1),N={__name:"ApplicationStatusModal",props:{applicationId:{required:!0}},emits:["data-updated"],setup(d,{emit:p}){const s=g(),t=_("Paid"),u=d,n=()=>{s.showStatusModal=!1},m=async()=>{try{await s.updatePaymentStatus(u.applicationId,t.value),x("data-updated")}catch(l){console.error("Error updating status:",l)}finally{n()}},x=p;return(l,a)=>y(s).showStatusModal?(b(),f("div",h,[e("div",S,[w,e("div",k,[e("label",C,[i(e("input",{type:"radio","onUpdate:modelValue":a[0]||(a[0]=o=>t.value=o),value:"Paid"},null,512),[[r,t.value]]),M]),e("label",V,[i(e("input",{type:"radio","onUpdate:modelValue":a[1]||(a[1]=o=>t.value=o),value:"Pending"},null,512),[[r,t.value]]),P])]),e("div",{class:"flex justify-end space-x-4 mt-6"},[e("button",{onClick:n,class:"bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition"}," Close "),e("button",{onClick:m,class:"bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"}," Save ")])])])):v("",!0)}};export{N as _};
