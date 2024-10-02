import{u as y}from"./area-CkKzqqD7.js";import{M as g,o,c as r,a as e,p as w,q as $,v as k,z as A,y as x,t as h,r as p,g as M,f as _,i as v,F as j,b as C,N as f}from"./index-DKYzgkfE.js";const S={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},D={class:"card-bg md:p-8 p-4 md:w-1/2"},N=e("h2",{class:"text-xl font-bold mb-4"},"অঞ্চল যুক্ত করুন",-1),V={class:"mb-4"},q=e("label",{class:"block mb-2"},"নাম",-1),z={class:"flex justify-center gap-4"},B=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),E={__name:"AddAreaModal",emits:["close","saved"],setup(i,{emit:a}){const t=a,n=g({name:""}),c=y(),d=async()=>{await c.createArea(n),t("saved"),t("close")};return(u,s)=>(o(),r("div",S,[e("div",D,[N,e("form",{onSubmit:w(d,["prevent"])},[e("div",V,[q,$(e("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>n.name=l),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[k,n.name]])]),e("div",z,[B,e("button",{type:"button",onClick:s[1]||(s[1]=l=>t("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},L={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},F={class:"card-bg md:p-8 p-4 md:w-1/2"},O=e("h2",{class:"text-xl font-bold mb-4"},"অঞ্চল সম্পাদনা",-1),T={class:"mb-4"},U=e("label",{class:"block mb-2"},"Name",-1),G={class:"flex justify-center gap-4"},H=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),I={__name:"EditAreaModal",props:{area:Object},emits:["close","updated"],setup(i,{emit:a}){const t=a,n=i,c=g({name:""});A(()=>n.area,s=>{c.name=s.name||""},{immediate:!0});const d=y(),u=async()=>{await d.updateArea(n.area.id,c),t("updated"),t("close")};return(s,l)=>(o(),r("div",L,[e("div",F,[O,e("form",{onSubmit:w(u,["prevent"])},[e("div",T,[U,$(e("input",{"onUpdate:modelValue":l[0]||(l[0]=m=>c.name=m),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[k,c.name]])]),e("div",G,[H,e("button",{type:"button",onClick:l[1]||(l[1]=m=>t("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},J={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},K={class:"card-bg p-4 md:p-8"},P=e("h2",{class:"text-xl font-bold mb-4"},"ডিলেট অঞ্চল",-1),Q={class:"flex justify-end mt-4"},R={__name:"DeleteAreaModal",props:{area:{type:Object,required:!0}},emits:["close","deleted"],setup(i,{emit:a}){const t=a,n=i,c=y(),d=async()=>{await c.deleteArea(n.area.id),t("deleted"),t("close")};return(u,s)=>(o(),r("div",J,[e("div",K,[P,e("p",null,[x(" আপনি কি ("),e("b",null,h(i.area.name),1),x(") ডিলিট করতে চান? ")]),e("div",Q,[e("button",{onClick:s[0]||(s[0]=l=>t("close")),class:"bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"}," না "),e("button",{onClick:d,class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," ডিলেট ")])])]))}},W={class:"my-container space-y-2"},X={class:"flex justify-between items-center"},Y=e("h1",{class:"title-lg"},"অঞ্চল তালিকা",-1),Z={key:0,class:"flex justify-center items-center"},ee=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),te=[ee],se={key:1,class:"overflow-x-auto"},oe={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},ae={class:"bg-gray-200 text-gray-700 text-sm leading-normal"},ne=e("th",{class:"py-3 px-2 text-center"},"থানা কোড",-1),ce=e("th",{class:"py-3 px-2 text-left"},"অঞ্চলের নাম",-1),le=e("th",{class:"py-3 px-2 text-center"},"মোট মাদরাসা",-1),re={class:"text-gray-600 text-sm font-light"},de={class:"py-3 px-2 text-left whitespace-nowrap"},ie={class:"flex justify-center items-center"},ue={class:"mr-2"},_e={class:"font-medium"},pe={class:"py-3 px-2 text-left"},me={class:"title-md"},be={class:"py-3 px-2 text-center"},he={class:"title-md"},ye={key:1},fe=e("td",{colspan:"5",class:"text-center text-red-500 py-4"},"No areas found",-1),xe=[fe],ke={__name:"AreaList",setup(i){const a=y(),t=p(!1),n=p(!1),c=p(!1),d=p(null),u=p(!0),s=async()=>{t.value=!1,await a.fetchAreas()},l=async()=>{n.value=!1,await a.fetchAreas()},m=()=>c.value=!1;return M(async()=>{try{await a.fetchAreas()}finally{u.value=!1}}),(ve,ge)=>(o(),r("div",W,[e("div",X,[Y,_("",!0)]),u.value?(o(),r("div",Z,te)):(o(),r("div",se,[e("table",oe,[e("thead",null,[e("tr",ae,[ne,ce,le,_("",!0)])]),e("tbody",re,[v(a).areas.length?(o(!0),r(j,{key:0},C(v(a).areas,b=>(o(),r("tr",{key:b.id,class:"border-b border-gray-200 hover:bg-gray-100"},[e("td",de,[e("div",ie,[e("div",ue,[e("p",_e,h(b.area_code),1)])])]),e("td",pe,[e("p",me,h(b.name),1)]),e("td",be,[e("p",he,h(b.institutes_count),1)]),_("",!0)]))),128)):(o(),r("tr",ye,xe))])])])),t.value?(o(),f(E,{key:2,class:"z-40",onClose:s})):_("",!0),n.value?(o(),f(I,{key:3,class:"z-40",area:d.value,onClose:l},null,8,["area"])):_("",!0),c.value?(o(),f(R,{key:4,class:"z-40",area:d.value,onClose:m},null,8,["area"])):_("",!0)]))}};export{ke as default};
