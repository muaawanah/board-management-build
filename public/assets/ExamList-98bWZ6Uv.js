import{u as v}from"./exam-lq2j1cSA.js";import{G as k,a as d,c as r,b as e,w as E,i as p,v as b,s as V,q as $,t as f,r as x,o as q,d as h,F as U,m as A,H as g,j as w}from"./index-D8NEAiqQ.js";const B={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},N={class:"card-bg md:p-8 p-4 md:w-1/2"},L=e("h2",{class:"text-xl font-bold mb-4"},"পরীক্ষা যুক্ত করুন",-1),F={class:"mb-4"},O=e("label",{class:"block mb-2"},"নাম",-1),T={class:"mb-4"},G=e("label",{class:"block mb-2"},"রেজিস্ট্রেশনের শেষ তারিখ",-1),H={class:"mb-4"},z=e("label",{class:"block mb-2"},"রেজিস্ট্রেশনের চূড়ান্ত তারিখ",-1),I={class:"flex justify-center gap-4"},J=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),K={__name:"AddExamModal",emits:["close","saved"],setup(u,{emit:n}){const l=n,a=k({name:"",reg_last_date:"",reg_final_date:""}),s=v(),c=async()=>{try{await s.createExam(a),l("saved"),l("close")}catch(i){console.error("Error saving exam:",i)}};return(i,t)=>(d(),r("div",B,[e("div",N,[L,e("form",{onSubmit:E(c,["prevent"])},[e("div",F,[O,p(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>a.name=o),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[b,a.name]])]),e("div",T,[G,p(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>a.reg_last_date=o),type:"date",class:"w-full p-2 border rounded",required:""},null,512),[[b,a.reg_last_date]])]),e("div",H,[z,p(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>a.reg_final_date=o),type:"date",class:"w-full p-2 border rounded",required:""},null,512),[[b,a.reg_final_date]])]),e("div",I,[J,e("button",{type:"button",onClick:t[3]||(t[3]=o=>l("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},P={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},Q={class:"card-bg md:p-8 p-4 md:w-1/2"},R=e("h2",{class:"text-xl font-bold mb-4"},"পরীক্ষা সম্পাদনা",-1),W={class:"mb-4"},X=e("label",{class:"block mb-2"},"নাম",-1),Y={class:"mb-4"},Z=e("label",{class:"block mb-2"},"রেজিস্ট্রেশনের শেষ তারিখ",-1),ee={class:"mb-4"},te=e("label",{class:"block mb-2"},"রেজিস্ট্রেশনের চূড়ান্ত তারিখ",-1),se={class:"flex justify-center gap-4"},oe=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),ae={__name:"EditExamModal",props:{exam:Object},emits:["close","updated"],setup(u,{emit:n}){const l=n,a=u,s=k({name:"",reg_last_date:"",reg_final_date:""});V(()=>a.exam,t=>{s.name=t.name||"",s.reg_last_date=t.reg_last_date||"",s.reg_final_date=t.reg_final_date||""},{immediate:!0});const c=v(),i=async()=>{try{await c.updateExam(a.exam.id,s),l("updated"),l("close")}catch(t){console.error("Error updating exam:",t)}};return(t,o)=>(d(),r("div",P,[e("div",Q,[R,e("form",{onSubmit:E(i,["prevent"])},[e("div",W,[X,p(e("input",{"onUpdate:modelValue":o[0]||(o[0]=_=>s.name=_),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[b,s.name]])]),e("div",Y,[Z,p(e("input",{"onUpdate:modelValue":o[1]||(o[1]=_=>s.reg_last_date=_),type:"date",class:"w-full p-2 border rounded",required:""},null,512),[[b,s.reg_last_date]])]),e("div",ee,[te,p(e("input",{"onUpdate:modelValue":o[2]||(o[2]=_=>s.reg_final_date=_),type:"date",class:"w-full p-2 border rounded",required:""},null,512),[[b,s.reg_final_date]])]),e("div",se,[oe,e("button",{type:"button",onClick:o[3]||(o[3]=_=>l("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},le={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},ne={class:"card-bg p-4 md:p-8"},de=e("h2",{class:"text-xl font-bold mb-4"},"ডিলেট পরীক্ষা",-1),ce={class:"flex justify-end mt-4"},re={__name:"DeleteExamModal",props:{exam:{type:Object,required:!0}},emits:["close","deleted"],setup(u,{emit:n}){const l=n,a=u,s=v(),c=async()=>{await s.deleteExam(a.exam.id),l("deleted"),l("close")};return(i,t)=>(d(),r("div",le,[e("div",ne,[de,e("p",null,[$(" আপনি কি ("),e("b",null,f(u.exam.name),1),$(") ডিলিট করতে চান? ")]),e("div",ce,[e("button",{onClick:t[0]||(t[0]=o=>l("close")),class:"bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"}," না "),e("button",{onClick:c,class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," ডিলেট ")])])]))}},ie={class:"my-container space-y-2"},_e=e("h1",{class:"title-lg"},"পরীক্ষা তালিকা",-1),ue={key:0,class:"flex justify-center items-center"},me=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),pe=[me],be={key:1,class:"overflow-x-auto"},xe={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},he=e("thead",null,[e("tr",{class:"bg-gray-200 text-gray-700 text-sm leading-normal"},[e("th",{class:"py-3 px-2 text-left"},"#"),e("th",{class:"py-3 px-2 text-left"},"নাম"),e("th",{class:"py-3 px-2 text-left"},"রেজিস্ট্রেশনের শেষ তারিখ"),e("th",{class:"py-3 px-2 text-left"},"রেজিস্ট্রেশনের চূড়ান্ত তারিখ"),e("th",{class:"py-3 px-2 text-center"},"একশন")])],-1),fe={class:"text-gray-600 text-sm font-light"},ye={class:"py-3 px-2 text-left whitespace-nowrap"},ve={class:"flex items-center"},ge={class:"mr-2"},we={class:"font-medium"},$e={class:"py-3 px-2 text-left"},ke={class:"title-md"},Ee={class:"py-3 px-2 text-left"},Ce={class:"title-md"},Me={class:"py-3 px-2 text-left"},je={class:"title-md"},De={class:"py-3 px-2 text-center"},Se={class:"flex item-center justify-center gap-4"},Ve=["onClick"],qe=e("i",{class:"fas fa-edit"},null,-1),Ue=[qe],Ae=["onClick"],Be=e("i",{class:"fas fa-trash"},null,-1),Ne=[Be],Le={key:1},Fe=e("td",{colspan:"5",class:"text-center text-red-500 py-4"},"No exams found",-1),Oe=[Fe],ze={__name:"ExamList",setup(u){const n=v(),l=x(!1),a=x(!1),s=x(!1),c=x(null),i=x(!0),t=()=>l.value=!0,o=async()=>{l.value=!1,await n.fetchExams()},_=y=>{c.value=y,a.value=!0},C=async()=>{a.value=!1,await n.fetchExams()},M=y=>{c.value=y,s.value=!0},j=()=>s.value=!1;return q(async()=>{try{await n.fetchExams()}finally{i.value=!1}}),(y,Te)=>(d(),r("div",ie,[e("div",{class:"flex justify-between items-center"},[_e,e("button",{class:"btn-2",onClick:t},"নতুন যুক্ত করুন")]),i.value?(d(),r("div",ue,pe)):(d(),r("div",be,[e("table",xe,[he,e("tbody",fe,[h(n).exams.length?(d(!0),r(U,{key:0},A(h(n).exams,(m,D)=>(d(),r("tr",{key:m.id,class:"border-b border-gray-200 hover:bg-gray-100"},[e("td",ye,[e("div",ve,[e("div",ge,[e("p",we,f(D+1),1)])])]),e("td",$e,[e("p",ke,f(m.name),1)]),e("td",Ee,[e("p",Ce,f(m.reg_last_date),1)]),e("td",Me,[e("p",je,f(m.reg_final_date),1)]),e("td",De,[e("div",Se,[e("button",{onClick:S=>_(m),class:"text-blue-600 hover:text-blue-800"},Ue,8,Ve),e("button",{onClick:S=>M(m),class:"text-red-600 hover:text-red-800"},Ne,8,Ae)])])]))),128)):(d(),r("tr",Le,Oe))])])])),l.value?(d(),g(K,{key:2,onClose:o,onSaved:h(n).fetchExams},null,8,["onSaved"])):w("",!0),a.value?(d(),g(ae,{key:3,exam:c.value,onClose:C,onUpdated:h(n).fetchExams},null,8,["exam","onUpdated"])):w("",!0),s.value?(d(),g(re,{key:4,exam:c.value,onClose:j,onDeleted:h(n).fetchExams},null,8,["exam","onDeleted"])):w("",!0)]))}};export{ze as default};
