import{u as b}from"./department-Bk8D_B_L.js";import{I as g,a as o,c,b as e,w,i as $,v as k,s as M,q as x,t as f,r as u,o as j,j as p,d as v,F as C,m as S,J as h}from"./index-DxqKlCjx.js";const N={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},V={class:"card-bg md:p-8 p-4 md:w-1/2"},q=e("h2",{class:"text-xl font-bold mb-4"},"বিভাগ যুক্ত করুন",-1),B={class:"mb-4"},E=e("label",{class:"block mb-2"},"নাম",-1),z={class:"flex justify-center gap-4"},A=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),L={__name:"AddDepartmentModal",emits:["close","saved"],setup(i,{emit:d}){const t=d,n=g({name:""}),a=b(),r=async()=>{await a.createDepartment(n),t("saved"),t("close")};return(m,s)=>(o(),c("div",N,[e("div",V,[q,e("form",{onSubmit:w(r,["prevent"])},[e("div",B,[E,$(e("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>n.name=l),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[k,n.name]])]),e("div",z,[A,e("button",{type:"button",onClick:s[1]||(s[1]=l=>t("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},F={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},O={class:"card-bg md:p-8 p-4 md:w-1/2"},T=e("h2",{class:"text-xl font-bold mb-4"},"বিভাগ সম্পাদনা",-1),U={class:"mb-4"},I=e("label",{class:"block mb-2"},"Name",-1),J={class:"flex justify-center gap-4"},G=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),H={__name:"EditDepartmentModal",props:{department:Object},emits:["close","updated"],setup(i,{emit:d}){const t=d,n=i,a=g({name:""});M(()=>n.department,s=>{a.name=s.name||""},{immediate:!0});const r=b(),m=async()=>{await r.updateDepartment(n.department.id,a),t("updated"),t("close")};return(s,l)=>(o(),c("div",F,[e("div",O,[T,e("form",{onSubmit:w(m,["prevent"])},[e("div",U,[I,$(e("input",{"onUpdate:modelValue":l[0]||(l[0]=_=>a.name=_),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[k,a.name]])]),e("div",J,[G,e("button",{type:"button",onClick:l[1]||(l[1]=_=>t("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},K={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},P={class:"card-bg p-4 md:p-8"},Q=e("h2",{class:"text-xl font-bold mb-4"},"ডিলেট বিভাগ",-1),R={class:"flex justify-end mt-4"},W={__name:"DeleteDepartmentModal",props:{department:{type:Object,required:!0}},emits:["close","deleted"],setup(i,{emit:d}){const t=d,n=i,a=b(),r=async()=>{await a.deleteDepartment(n.department.id),t("deleted"),t("close")};return(m,s)=>(o(),c("div",K,[e("div",P,[Q,e("p",null,[x("আপনি কি ("),e("b",null,f(i.department.name),1),x(") ডিলিট করতে চান?")]),e("div",R,[e("button",{onClick:s[0]||(s[0]=l=>t("close")),class:"bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"}," না "),e("button",{onClick:r,class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," ডিলেট ")])])]))}},X={class:"my-container space-y-2"},Y={class:"flex justify-between items-center"},Z=e("h1",{class:"title-lg"},"বিভাগ তালিকা",-1),ee={key:0,class:"flex justify-center items-center"},te=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),se=[te],oe={key:1,class:"overflow-x-auto"},ne={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},ae={class:"bg-gray-200 text-gray-700 text-sm leading-normal"},le=e("th",{class:"py-3 px-2 text-left"},"#",-1),de=e("th",{class:"py-3 px-2 text-left"},"বিভাগের নাম",-1),ce={class:"text-gray-600 text-sm font-light"},re={class:"py-3 px-2 text-left whitespace-nowrap"},ie={class:"flex items-center"},me={class:"mr-2"},pe={class:"font-medium"},ue={class:"py-3 px-2 text-left"},_e={class:"title-md"},be={key:1},he=e("td",{colspan:"5",class:"text-center text-red-500 py-4"},"No departments found",-1),fe=[he],we={__name:"DepartmentList",setup(i){const d=b(),t=u(!1),n=u(!1),a=u(!1),r=u(null),m=u(!0),s=()=>t.value=!1,l=()=>n.value=!1,_=()=>a.value=!1;return j(async()=>{try{await d.fetchDepartments()}finally{m.value=!1}}),(ye,xe)=>(o(),c("div",X,[e("div",Y,[Z,p("",!0)]),m.value?(o(),c("div",ee,se)):(o(),c("div",oe,[e("table",ne,[e("thead",null,[e("tr",ae,[le,de,p("",!0)])]),e("tbody",ce,[v(d).departments.length?(o(!0),c(C,{key:0},S(v(d).departments,(y,D)=>(o(),c("tr",{key:y.id,class:"border-b border-gray-200 hover:bg-gray-100"},[e("td",re,[e("div",ie,[e("div",me,[e("p",pe,f(D+1),1)])])]),e("td",ue,[e("p",_e,f(y.name),1)]),p("",!0)]))),128)):(o(),c("tr",be,fe))])])])),t.value?(o(),h(L,{key:2,class:"z-40",onClose:s})):p("",!0),n.value?(o(),h(H,{key:3,class:"z-40",department:r.value,onClose:l},null,8,["department"])):p("",!0),a.value?(o(),h(W,{key:4,class:"z-40",department:r.value,onClose:_},null,8,["department"])):p("",!0)]))}};export{we as default};
