import{u as g}from"./exam-a9zIXADQ.js";import{H as k,a as r,c as u,b as e,w as E,i,v as c,s as V,q as w,t as b,r as x,o as j,d as h,F as q,m as U,I as v,j as y}from"./index-BGqkStvN.js";const S={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},B={class:"card-bg md:p-8 p-4 md:w-1/2"},L=e("h2",{class:"text-xl font-bold mb-4"},"পরীক্ষা যুক্ত করুন",-1),A={class:"mb-4"},N=e("label",{class:"block mb-2"},"নাম",-1),F={class:"mb-4"},O=e("label",{class:"block mb-2"},"রেজিস্ট্রেশনের শেষ তারিখ",-1),T={class:"mb-4"},H=e("label",{class:"block mb-2"},"রেজিস্ট্রেশনের চূড়ান্ত তারিখ",-1),I={class:"mb-4"},z=e("label",{class:"block mb-2"},"রেজিস্ট্রেশন ফি",-1),G={class:"mb-4"},J=e("label",{class:"block mb-2"},"বিলম্ব ফি",-1),K={class:"flex justify-center gap-4"},P=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),Q={__name:"AddExamModal",emits:["close","saved"],setup(f,{emit:n}){const a=n,l=k({name:"",reg_last_date:"",reg_final_date:"",registration_fee:"",late_fee:""}),o=g(),_=async()=>{try{await o.createExam(l),a("saved"),a("close")}catch(p){console.error("Error saving exam:",p)}};return(p,t)=>(r(),u("div",S,[e("div",B,[L,e("form",{onSubmit:E(_,["prevent"])},[e("div",A,[N,i(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>l.name=s),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[c,l.name]])]),e("div",F,[O,i(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>l.reg_last_date=s),type:"date",class:"w-full p-2 border rounded",required:""},null,512),[[c,l.reg_last_date]])]),e("div",T,[H,i(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>l.reg_final_date=s),type:"date",class:"w-full p-2 border rounded",required:""},null,512),[[c,l.reg_final_date]])]),e("div",I,[z,i(e("input",{"onUpdate:modelValue":t[3]||(t[3]=s=>l.registration_fee=s),type:"number",class:"w-full p-2 border rounded",required:""},null,512),[[c,l.registration_fee]])]),e("div",G,[J,i(e("input",{"onUpdate:modelValue":t[4]||(t[4]=s=>l.late_fee=s),type:"number",class:"w-full p-2 border rounded",required:""},null,512),[[c,l.late_fee]])]),e("div",K,[P,e("button",{type:"button",onClick:t[5]||(t[5]=s=>a("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},R={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},W={class:"card-bg md:p-8 p-4 md:w-1/2"},X=e("h2",{class:"text-xl font-bold mb-4"},"পরীক্ষা সম্পাদনা",-1),Y={class:"mb-4"},Z=e("label",{class:"block mb-2"},"নাম",-1),ee={class:"mb-4"},te=e("label",{class:"block mb-2"},"রেজিস্ট্রেশনের শেষ তারিখ",-1),se={class:"mb-4"},oe=e("label",{class:"block mb-2"},"রেজিস্ট্রেশনের চূড়ান্ত তারিখ",-1),le={class:"mb-4"},ae=e("label",{class:"block mb-2"},"রেজিস্ট্রেশন ফি",-1),ne={class:"mb-4"},de=e("label",{class:"block mb-2"},"বিলম্ব ফি",-1),re={class:"flex justify-center gap-4"},ie=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),ce={__name:"EditExamModal",props:{exam:Object},emits:["close","updated"],setup(f,{emit:n}){const a=n,l=f,o=k({name:"",reg_last_date:"",reg_final_date:"",registration_fee:"",late_fee:""});V(()=>l.exam,t=>{o.name=t.name||"",o.reg_last_date=t.reg_last_date||"",o.reg_final_date=t.reg_final_date||"",o.registration_fee=t.registration_fee||"",o.late_fee=t.late_fee||""},{immediate:!0});const _=g(),p=async()=>{try{await _.updateExam(l.exam.id,o),a("updated"),a("close")}catch(t){console.error("Error updating exam:",t)}};return(t,s)=>(r(),u("div",R,[e("div",W,[X,e("form",{onSubmit:E(p,["prevent"])},[e("div",Y,[Z,i(e("input",{"onUpdate:modelValue":s[0]||(s[0]=d=>o.name=d),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[c,o.name]])]),e("div",ee,[te,i(e("input",{"onUpdate:modelValue":s[1]||(s[1]=d=>o.reg_last_date=d),type:"date",class:"w-full p-2 border rounded",required:""},null,512),[[c,o.reg_last_date]])]),e("div",se,[oe,i(e("input",{"onUpdate:modelValue":s[2]||(s[2]=d=>o.reg_final_date=d),type:"date",class:"w-full p-2 border rounded",required:""},null,512),[[c,o.reg_final_date]])]),e("div",le,[ae,i(e("input",{"onUpdate:modelValue":s[3]||(s[3]=d=>o.registration_fee=d),type:"number",class:"w-full p-2 border rounded",required:""},null,512),[[c,o.registration_fee]])]),e("div",ne,[de,i(e("input",{"onUpdate:modelValue":s[4]||(s[4]=d=>o.late_fee=d),type:"number",class:"w-full p-2 border rounded",required:""},null,512),[[c,o.late_fee]])]),e("div",re,[ie,e("button",{type:"button",onClick:s[5]||(s[5]=d=>a("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},_e={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},ue={class:"card-bg p-4 md:p-8"},pe=e("h2",{class:"text-xl font-bold mb-4"},"ডিলেট পরীক্ষা",-1),me={class:"flex justify-end mt-4"},be={__name:"DeleteExamModal",props:{exam:{type:Object,required:!0}},emits:["close","deleted"],setup(f,{emit:n}){const a=n,l=f,o=g(),_=async()=>{await o.deleteExam(l.exam.id),a("deleted"),a("close")};return(p,t)=>(r(),u("div",_e,[e("div",ue,[pe,e("p",null,[w(" আপনি কি ("),e("b",null,b(f.exam.name),1),w(") ডিলিট করতে চান? ")]),e("div",me,[e("button",{onClick:t[0]||(t[0]=s=>a("close")),class:"bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"}," না "),e("button",{onClick:_,class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," ডিলেট ")])])]))}},fe={class:"my-container space-y-2"},xe=e("h1",{class:"title-lg"},"পরীক্ষা তালিকা",-1),he={key:0,class:"flex justify-center items-center"},ye=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),ge=[ye],ve={key:1,class:"overflow-x-auto"},$e={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},we=e("thead",null,[e("tr",{class:"bg-gray-200 text-gray-700 text-sm leading-normal"},[e("th",{class:"py-3 px-2 text-left"},"#"),e("th",{class:"py-3 px-2 text-left"},"নাম"),e("th",{class:"py-3 px-2 text-left"},"নিবন্ধনের শেষ তারিখ"),e("th",{class:"py-3 px-2 text-left"},"নিবন্ধনের চূড়ান্ত তারিখ"),e("th",{class:"py-3 px-2 text-left"},"নিবন্ধন ফি"),e("th",{class:"py-3 px-2 text-left"},"বর্ধিত ফি"),e("th",{class:"py-3 px-2 text-center"},"একশন")])],-1),ke={class:"text-gray-600 text-sm font-light"},Ee={class:"py-3 px-2 text-left whitespace-nowrap"},De={class:"flex items-center"},Me={class:"mr-2"},Ce={class:"font-medium"},Ve={class:"py-3 px-2 text-left"},je={class:"title-md"},qe={class:"py-3 px-2 text-left"},Ue={class:"title-md"},Se={class:"py-3 px-2 text-left"},Be={class:"title-md"},Le={class:"py-3 px-2 text-left"},Ae={class:"title-md"},Ne={class:"py-3 px-2 text-left"},Fe={class:"title-md"},Oe={class:"py-3 px-2 text-center"},Te={class:"flex item-center justify-center gap-4"},He=["onClick"],Ie=e("i",{class:"fas fa-edit"},null,-1),ze=[Ie],Ge={key:1},Je=e("td",{colspan:"7",class:"text-center text-red-500 py-4"},"No exams found",-1),Ke=[Je],Xe={__name:"ExamList",setup(f){const n=g(),a=x(!1),l=x(!1),o=x(!1),_=x(null),p=x(!0),t=()=>a.value=!0,s=async()=>{a.value=!1,await n.fetchExams()},d=$=>{_.value=$,l.value=!0},D=async()=>{l.value=!1,await n.fetchExams()},M=()=>o.value=!1;return j(async()=>{try{await n.fetchExams()}finally{p.value=!1}}),($,Pe)=>(r(),u("div",fe,[e("div",{class:"flex justify-between items-center"},[xe,e("button",{class:"btn-2",onClick:t},"নতুন যুক্ত করুন")]),p.value?(r(),u("div",he,ge)):(r(),u("div",ve,[e("table",$e,[we,e("tbody",ke,[h(n).exams.length?(r(!0),u(q,{key:0},U(h(n).exams,(m,C)=>(r(),u("tr",{key:m.id,class:"border-b border-gray-200 hover:bg-gray-100"},[e("td",Ee,[e("div",De,[e("div",Me,[e("p",Ce,b(C+1),1)])])]),e("td",Ve,[e("p",je,b(m.name),1)]),e("td",qe,[e("p",Ue,b(new Date(m.reg_last_date).toLocaleDateString("bn-BD"))+" ইং",1)]),e("td",Se,[e("p",Be,b(new Date(m.reg_final_date).toLocaleDateString("bn-BD"))+" ইং",1)]),e("td",Le,[e("p",Ae,b(m.registration_fee)+" টাকা",1)]),e("td",Ne,[e("p",Fe,b(m.late_fee)+" টাকা",1)]),e("td",Oe,[e("div",Te,[e("button",{onClick:Qe=>d(m),class:"text-blue-600 hover:text-blue-800"},ze,8,He),y("",!0)])])]))),128)):(r(),u("tr",Ge,Ke))])])])),a.value?(r(),v(Q,{key:2,onClose:s,onSaved:h(n).fetchExams},null,8,["onSaved"])):y("",!0),l.value?(r(),v(ce,{key:3,exam:_.value,onClose:D,onUpdated:h(n).fetchExams},null,8,["exam","onUpdated"])):y("",!0),o.value?(r(),v(be,{key:4,exam:_.value,onClose:M,onDeleted:h(n).fetchExams},null,8,["exam","onDeleted"])):y("",!0)]))}};export{Xe as default};
