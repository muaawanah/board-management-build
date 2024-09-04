import{u as h}from"./department-BMeWAchJ.js";import{H as w,a,c as r,b as e,w as $,i as k,v as D,s as N,q as v,t as y,r as p,o as V,d as g,F as q,m as A,I as f,j as x}from"./index-_YQyFPma.js";const B={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},z={class:"card-bg md:p-8 p-4 md:w-1/2"},L=e("h2",{class:"text-xl font-bold mb-4"},"বিভাগ যুক্ত করুন",-1),F={class:"mb-4"},O=e("label",{class:"block mb-2"},"নাম",-1),T={class:"flex justify-center gap-4"},U=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),H={__name:"AddDepartmentModal",emits:["close","saved"],setup(i,{emit:d}){const t=d,s=w({name:""}),o=h(),l=async()=>{await o.createDepartment(s),t("saved"),t("close")};return(u,n)=>(a(),r("div",B,[e("div",z,[L,e("form",{onSubmit:$(l,["prevent"])},[e("div",F,[O,k(e("input",{"onUpdate:modelValue":n[0]||(n[0]=c=>s.name=c),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[D,s.name]])]),e("div",T,[U,e("button",{type:"button",onClick:n[1]||(n[1]=c=>t("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},I={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},G={class:"card-bg md:p-8 p-4 md:w-1/2"},J=e("h2",{class:"text-xl font-bold mb-4"},"বিভাগ সম্পাদনা",-1),K={class:"mb-4"},P=e("label",{class:"block mb-2"},"Name",-1),Q={class:"flex justify-center gap-4"},R=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),W={__name:"EditDepartmentModal",props:{department:Object},emits:["close","updated"],setup(i,{emit:d}){const t=d,s=i,o=w({name:""});N(()=>s.department,n=>{o.name=n.name||""},{immediate:!0});const l=h(),u=async()=>{await l.updateDepartment(s.department.id,o),t("updated"),t("close")};return(n,c)=>(a(),r("div",I,[e("div",G,[J,e("form",{onSubmit:$(u,["prevent"])},[e("div",K,[P,k(e("input",{"onUpdate:modelValue":c[0]||(c[0]=m=>o.name=m),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[D,o.name]])]),e("div",Q,[R,e("button",{type:"button",onClick:c[1]||(c[1]=m=>t("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},X={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},Y={class:"card-bg p-4 md:p-8"},Z=e("h2",{class:"text-xl font-bold mb-4"},"ডিলেট বিভাগ",-1),ee={class:"flex justify-end mt-4"},te={__name:"DeleteDepartmentModal",props:{department:{type:Object,required:!0}},emits:["close","deleted"],setup(i,{emit:d}){const t=d,s=i,o=h(),l=async()=>{await o.deleteDepartment(s.department.id),t("deleted"),t("close")};return(u,n)=>(a(),r("div",X,[e("div",Y,[Z,e("p",null,[v("আপনি কি ("),e("b",null,y(i.department.name),1),v(") ডিলিট করতে চান?")]),e("div",ee,[e("button",{onClick:n[0]||(n[0]=c=>t("close")),class:"bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"}," না "),e("button",{onClick:l,class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," ডিলেট ")])])]))}},se={class:"my-container space-y-2"},oe=e("h1",{class:"title-lg"},"বিভাগ তালিকা",-1),ne={key:0,class:"flex justify-center items-center"},ae=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),le=[ae],ce={key:1,class:"overflow-x-auto"},de={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},re=e("thead",null,[e("tr",{class:"bg-gray-200 text-gray-700 text-sm leading-normal"},[e("th",{class:"py-3 px-2 text-left"},"#"),e("th",{class:"py-3 px-2 text-left"},"বিভাগের নাম"),e("th",{class:"py-3 px-2 text-center"},"একশন")])],-1),ie={class:"text-gray-600 text-sm font-light"},ue={class:"py-3 px-2 text-left whitespace-nowrap"},pe={class:"flex items-center"},me={class:"mr-2"},_e={class:"font-medium"},be={class:"py-3 px-2 text-left"},he={class:"title-md"},fe={class:"py-3 px-2 text-center"},xe={class:"flex item-center justify-center gap-4"},ye=["onClick"],ve=e("i",{class:"fas fa-edit"},null,-1),ge=[ve],we=["onClick"],$e=e("i",{class:"fas fa-trash"},null,-1),ke=[$e],De={key:1},Ce=e("td",{colspan:"5",class:"text-center text-red-500 py-4"},"No departments found",-1),Me=[Ce],Ne={__name:"DepartmentList",setup(i){const d=h(),t=p(!1),s=p(!1),o=p(!1),l=p(null),u=p(!0),n=()=>t.value=!0,c=()=>t.value=!1,m=_=>{l.value=_,s.value=!0},C=()=>s.value=!1,M=_=>{l.value=_,o.value=!0},j=()=>o.value=!1;return V(async()=>{try{await d.fetchDepartments()}finally{u.value=!1}}),(_,je)=>(a(),r("div",se,[e("div",{class:"flex justify-between items-center"},[oe,e("button",{class:"btn-2",onClick:n},"নতুন যুক্ত করুন")]),u.value?(a(),r("div",ne,le)):(a(),r("div",ce,[e("table",de,[re,e("tbody",ie,[g(d).departments.length?(a(!0),r(q,{key:0},A(g(d).departments,(b,S)=>(a(),r("tr",{key:b.id,class:"border-b border-gray-200 hover:bg-gray-100"},[e("td",ue,[e("div",pe,[e("div",me,[e("p",_e,y(S+1),1)])])]),e("td",be,[e("p",he,y(b.name),1)]),e("td",fe,[e("div",xe,[e("button",{onClick:E=>m(b),class:"text-blue-600 hover:text-blue-800"},ge,8,ye),e("button",{onClick:E=>M(b),class:"text-red-600 hover:text-red-800"},ke,8,we)])])]))),128)):(a(),r("tr",De,Me))])])])),t.value?(a(),f(H,{key:2,class:"z-40",onClose:c})):x("",!0),s.value?(a(),f(W,{key:3,class:"z-40",department:l.value,onClose:C},null,8,["department"])):x("",!0),o.value?(a(),f(te,{key:4,class:"z-40",department:l.value,onClose:j},null,8,["department"])):x("",!0)]))}};export{Ne as default};
