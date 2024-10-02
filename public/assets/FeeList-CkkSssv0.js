import{u as S}from"./fee-raLZv9xx.js";import{r as h,g as C,o as a,c as n,a as e,t as p,i as $,q as b,O as L,v as g,F as w,b as F,p as E,M as O,z as Z,B as j,y as q,N as M,f as z}from"./index-BX3jB4bk.js";import{u as N}from"./exam-B08JBtki.js";import{u as A}from"./zamat-C0QQRPE1.js";const P={class:"card-bg md:p-8 p-4"},T=e("h2",{class:"text-xl font-bold mb-4"},"ফি যুক্ত করুন",-1),I={class:"mb-4 flex gap-4"},G=e("label",{class:"block mb-2"},"পরীক্ষা:",-1),H={class:"font-semibold"},J={class:"flex mb-4"},K=e("label",{for:"same-fee",class:"ml-2"},"সকল ক্লাসে একই ফি",-1),Q={key:0},R={class:"mb-4"},W=e("label",{class:"block mb-2"},"মূল পরিমাণ",-1),X={class:"mb-4"},Y=e("label",{class:"block mb-2"},"অতিরিক্ত পরিমাণ",-1),ee={key:1},te=e("div",{class:"grid grid-cols-3 gap-4"},[e("label",{class:"block mb-2"},"জামাত"),e("label",{class:"block mb-2"},"মূল পরিমাণ"),e("label",{class:"block mb-2"},"অতিরিক্ত পরিমাণ")],-1),se={class:"flex items-center"},le={class:"ml-2"},oe=["onUpdate:modelValue"],ae=["onUpdate:modelValue"],ne={class:"flex justify-center gap-4"},de=["disabled"],ie={__name:"AddFeeModal",emits:["close","saved"],setup(v,{emit:u}){const d=u,s=h({isSameFee:!0,singleFee:{exam_id:null,zamat_id:null,amount:0,late_fee:0},multiFees:[]}),l=S(),i=N(),_=A(),m=h(!1);C(async()=>{var c;await Promise.all([i.fetchLastExam(),_.fetchZamats()]),i.exam&&(s.value.singleFee.exam_id=i.exam.id),(c=_.zamats)!=null&&c.length&&_.zamats.forEach(t=>{s.value.multiFees.push({exam_id:i.exam.id,zamat_id:t.id,amount:0,late_fee:0})})});const x=async()=>{m.value=!0;try{const c={fees:s.value.isSameFee?[s.value.singleFee]:s.value.multiFees};await l.createFee(c),d("saved"),d("close")}finally{m.value=!1}};return(c,t)=>{var o;return a(),n("div",P,[T,e("form",{onSubmit:E(x,["prevent"])},[e("div",I,[G,e("p",H,p(((o=$(i).exam)==null?void 0:o.name)||"No exam selected"),1)]),e("div",J,[b(e("input",{type:"checkbox",id:"same-fee","onUpdate:modelValue":t[0]||(t[0]=r=>s.value.isSameFee=r)},null,512),[[L,s.value.isSameFee]]),K]),s.value.isSameFee?(a(),n("div",Q,[e("div",R,[W,b(e("input",{"onUpdate:modelValue":t[1]||(t[1]=r=>s.value.singleFee.amount=r),type:"number",class:"w-full p-2 border rounded",required:""},null,512),[[g,s.value.singleFee.amount]])]),e("div",X,[Y,b(e("input",{"onUpdate:modelValue":t[2]||(t[2]=r=>s.value.singleFee.late_fee=r),type:"number",class:"w-full p-2 border rounded",required:""},null,512),[[g,s.value.singleFee.late_fee]])])])):(a(),n("div",ee,[te,(a(!0),n(w,null,F(s.value.multiFees,(r,y)=>(a(),n("div",{key:y,class:"grid grid-cols-3 gap-4 mb-4"},[e("div",se,[e("label",le,p($(_).findNameById(r.zamat_id)),1)]),e("div",null,[b(e("input",{"onUpdate:modelValue":k=>r.amount=k,type:"number",class:"w-full p-2 border rounded",required:""},null,8,oe),[[g,r.amount]])]),e("div",null,[b(e("input",{"onUpdate:modelValue":k=>r.late_fee=k,type:"number",class:"w-full p-2 border rounded",required:""},null,8,ae),[[g,r.late_fee]])])]))),128))])),e("div",ne,[e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",disabled:m.value}," Save ",8,de),e("button",{type:"button",onClick:t[3]||(t[3]=r=>d("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])}}},ce={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},re={class:"card-bg md:p-8 p-4 md:w-1/2"},ue=e("h2",{class:"text-xl font-bold mb-4"},"ফি সম্পাদনা",-1),_e={class:"mb-4"},me=e("label",{class:"block mb-2"},"পরীক্ষা",-1),pe=e("option",{disabled:"",value:""},"একটি পরীক্ষা নির্বাচন করুন",-1),be=["value"],fe={class:"mb-4"},he=e("label",{class:"block mb-2"},"জামাত",-1),ve=e("option",{value:""},"All",-1),xe=["value"],ye={class:"mb-4"},ge=e("label",{class:"block mb-2"},"মূল পরিমাণ",-1),$e={class:"mb-4"},ke=e("label",{class:"block mb-2"},"অতিরিক্ত পরিমাণ",-1),we={class:"flex justify-center gap-4"},Fe=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),Se={__name:"EditFeeModal",props:{fee:Object},emits:["close","updated"],setup(v,{emit:u}){const d=u,s=v,l=O({exam_id:null,zamat_id:null,amount:"",late_fee:""}),i=S(),_=N(),m=A();Z(()=>s.fee,c=>{c&&(l.exam_id=c.exam_id||null,l.zamat_id=c.zamat_id||null,l.amount=c.amount||"",l.late_fee=c.late_fee||"")},{immediate:!0}),C(async()=>{await Promise.all([_.fetchExams(),m.fetchZamats()])});const x=async()=>{await i.updateFee(s.fee.id,l),d("updated"),d("close")};return(c,t)=>(a(),n("div",ce,[e("div",re,[ue,e("form",{onSubmit:E(x,["prevent"])},[e("div",_e,[me,b(e("select",{"onUpdate:modelValue":t[0]||(t[0]=o=>l.exam_id=o),class:"w-full p-2 border rounded",required:""},[pe,(a(!0),n(w,null,F($(_).exams,o=>(a(),n("option",{key:o.id,value:o.id},p(o.name),9,be))),128))],512),[[j,l.exam_id]])]),e("div",fe,[he,b(e("select",{"onUpdate:modelValue":t[1]||(t[1]=o=>l.zamat_id=o),class:"w-full p-2 border rounded"},[ve,(a(!0),n(w,null,F($(m).zamats,o=>(a(),n("option",{key:o.id,value:o.id},p(o.name),9,xe))),128))],512),[[j,l.zamat_id]])]),e("div",ye,[ge,b(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>l.amount=o),type:"number",class:"w-full p-2 border rounded",required:""},null,512),[[g,l.amount]])]),e("div",$e,[ke,b(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>l.late_fee=o),type:"number",class:"w-full p-2 border rounded",required:""},null,512),[[g,l.late_fee]])]),e("div",we,[Fe,e("button",{type:"button",onClick:t[4]||(t[4]=o=>d("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},Me={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},ze={class:"card-bg p-4 md:p-8"},Ce=e("h2",{class:"text-xl font-bold mb-4"},"ডিলেট ফি",-1),Ve={class:"flex justify-end mt-4"},Ue={__name:"DeleteFeeModal",props:{fee:{type:Object,required:!0}},emits:["close","deleted"],setup(v,{emit:u}){const d=u,s=v,l=S(),i=async()=>{await l.deleteFee(s.fee.id),d("deleted"),d("close")};return(_,m)=>(a(),n("div",Me,[e("div",ze,[Ce,e("p",null,[q("আপনি কি ("),e("b",null,p(v.fee.exam.name),1),q(")-এর এই ফি ডিলিট করতে চান?")]),e("div",Ve,[e("button",{onClick:m[0]||(m[0]=x=>d("close")),class:"bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"}," না "),e("button",{onClick:i,class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," ডিলেট ")])])]))}},je={class:"my-container space-y-2"},qe=e("h1",{class:"title-lg"},"ফি তালিকা",-1),Ee={key:0,class:"flex justify-center items-center"},Ne=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),Ae=[Ne],De={key:1,class:"overflow-x-auto"},Be={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},Le=e("thead",null,[e("tr",{class:"bg-gray-200 text-gray-700 text-sm leading-normal"},[e("th",{class:"py-3 px-2 text-left"},"#"),e("th",{class:"py-3 px-2 text-left"},"পরীক্ষা"),e("th",{class:"py-3 px-2 text-left"},"জামাত"),e("th",{class:"py-3 px-2 text-left"},"ফি পরিমাণ"),e("th",{class:"py-3 px-2 text-left"},"বিলম্ব ফি"),e("th",{class:"py-3 px-2 text-center"},"একশন")])],-1),Oe={class:"text-gray-600 text-sm font-light"},Ze={class:"py-3 px-2 text-left whitespace-nowrap"},Pe={class:"flex items-center"},Te={class:"mr-2"},Ie={class:"font-medium"},Ge={class:"py-3 px-2 text-left"},He={class:"title-md"},Je={class:"py-3 px-2 text-left"},Ke={class:"title-md"},Qe={class:"py-3 px-2 text-left"},Re={class:"title-md"},We={class:"py-3 px-2 text-left"},Xe={class:"title-md"},Ye={class:"py-3 px-2 text-center"},et={class:"flex item-center justify-center gap-4"},tt=["onClick"],st=e("i",{class:"fas fa-edit"},null,-1),lt=[st],ot=["onClick"],at=e("i",{class:"fas fa-trash"},null,-1),nt=[at],dt={key:1},it=e("td",{colspan:"6",class:"text-center text-red-500 py-4"},"No fees found",-1),ct=[it],pt={__name:"FeeList",setup(v){const u=S(),d=h(!1),s=h(!1),l=h(!1),i=h(null),_=h(!0),m=()=>d.value=!0,x=async()=>{d.value=!1,await u.fetchFees()},c=y=>{i.value=y,s.value=!0},t=async()=>{s.value=!1,await u.fetchFees()},o=y=>{i.value=y,l.value=!0},r=()=>l.value=!1;return C(async()=>{try{await u.fetchFees()}finally{_.value=!1}}),(y,k)=>(a(),n("div",je,[e("div",{class:"flex justify-between items-center"},[qe,e("button",{class:"btn-2",onClick:m},"ফি যুক্ত করুন")]),e("div",null,[d.value?(a(),M(ie,{key:0,class:"z-40",onClose:x})):z("",!0)]),_.value?(a(),n("div",Ee,Ae)):(a(),n("div",De,[e("table",Be,[Le,e("tbody",Oe,[$(u).fees.length?(a(!0),n(w,{key:0},F($(u).fees,(f,D)=>{var V,U;return a(),n("tr",{key:f.id,class:"border-b border-gray-200 hover:bg-gray-100"},[e("td",Ze,[e("div",Pe,[e("div",Te,[e("p",Ie,p(D+1),1)])])]),e("td",Ge,[e("p",He,p(((V=f.exam)==null?void 0:V.name)||"N/A"),1)]),e("td",Je,[e("p",Ke,p(((U=f.zamat)==null?void 0:U.name)||"All"),1)]),e("td",Qe,[e("p",Re,p(f.amount)+" টাকা",1)]),e("td",We,[e("p",Xe,p(f.late_fee)+" টাকা",1)]),e("td",Ye,[e("div",et,[e("button",{onClick:B=>c(f),class:"text-blue-600 hover:text-blue-800"},lt,8,tt),e("button",{onClick:B=>o(f),class:"text-red-600 hover:text-red-800"},nt,8,ot)])])])}),128)):(a(),n("tr",dt,ct))])])])),s.value?(a(),M(Se,{key:2,class:"z-40",fee:i.value,onClose:t},null,8,["fee"])):z("",!0),l.value?(a(),M(Ue,{key:3,class:"z-40",fee:i.value,onClose:r},null,8,["fee"])):z("",!0)]))}};export{pt as default};
