import{K as U,L as b,M as E,o as r,c as u,a as e,p as C,q as p,v as h,z as A,y as w,t as _,r as f,g as D,i as k,F,b as q,N as v,f as $}from"./index-BX3jB4bk.js";const g=U("examiner",{state:()=>({examiners:[],examiner:null,loading:!1,error:null}),actions:{async fetchExaminers(){var i,o;this.loading=!0;try{const s=await b.get("/examiners");return this.examiners=s.data,this.examiners}catch(s){this.error=((o=(i=s.response)==null?void 0:i.data)==null?void 0:o.message)||"Failed to fetch examiners"}finally{this.loading=!1}},async fetchExaminer(i){var o,s;this.loading=!0;try{const t=await b.get(`/examiners/${i}`);this.examiner=t.data}catch(t){this.error=((s=(o=t.response)==null?void 0:o.data)==null?void 0:s.message)||"Failed to fetch examiner"}finally{this.loading=!1}},async createExaminer(i){var o,s;this.loading=!0;try{const t=await b.post("/examiners",i);this.examiners.push(t.data)}catch(t){this.error=((s=(o=t.response)==null?void 0:o.data)==null?void 0:s.message)||"Failed to create examiner"}finally{this.loading=!1}},async updateExaminer(i,o){var s,t;this.loading=!0;try{const n=await b.put(`/examiners/${i}`,o),d=this.examiners.findIndex(m=>m.id===i);d!==-1&&(this.examiners[d]=n.data)}catch(n){this.error=((t=(s=n.response)==null?void 0:s.data)==null?void 0:t.message)||"Failed to update examiner"}finally{this.loading=!1}},async deleteExaminer(i){var o,s;this.loading=!0;try{await b.delete(`/examiners/${i}`),this.examiners=this.examiners.filter(t=>t.id!==i)}catch(t){this.error=((s=(o=t.response)==null?void 0:o.data)==null?void 0:s.message)||"Failed to delete examiner"}finally{this.loading=!1}}}}),z={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},B={class:"card-bg md:p-8 p-4 md:w-1/2"},L=e("h2",{class:"text-xl font-bold mb-4"},"পরীক্ষক যুক্ত করুন",-1),O={class:"mb-4"},T=e("label",{class:"block mb-2"},"নাম",-1),I={class:"mb-4"},K=e("label",{class:"block mb-2"},"পদবি",-1),G={class:"mb-4"},H=e("label",{class:"block mb-2"},"প্রতিষ্ঠান",-1),J={class:"mb-4"},P=e("label",{class:"block mb-2"},"ফোন",-1),Q={class:"flex justify-center gap-4"},R=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),W={__name:"AddExaminerModal",emits:["close","saved"],setup(i,{emit:o}){const s=o,t=E({name:"",designation:"",institute:"",phone:""}),n=g(),d=async()=>{await n.createExaminer(t),s("saved"),s("close")};return(m,l)=>(r(),u("div",z,[e("div",B,[L,e("form",{onSubmit:C(d,["prevent"])},[e("div",O,[T,p(e("input",{"onUpdate:modelValue":l[0]||(l[0]=a=>t.name=a),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[h,t.name]])]),e("div",I,[K,p(e("input",{"onUpdate:modelValue":l[1]||(l[1]=a=>t.designation=a),type:"text",class:"w-full p-2 border rounded"},null,512),[[h,t.designation]])]),e("div",G,[H,p(e("input",{"onUpdate:modelValue":l[2]||(l[2]=a=>t.institute=a),type:"text",class:"w-full p-2 border rounded"},null,512),[[h,t.institute]])]),e("div",J,[P,p(e("input",{"onUpdate:modelValue":l[3]||(l[3]=a=>t.phone=a),type:"text",class:"w-full p-2 border rounded"},null,512),[[h,t.phone]])]),e("div",Q,[R,e("button",{type:"button",onClick:l[4]||(l[4]=a=>s("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},X={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},Y={class:"card-bg md:p-8 p-4 md:w-1/2"},Z=e("h2",{class:"text-xl font-bold mb-4"},"পরীক্ষক সম্পাদনা করুন",-1),ee={class:"mb-4"},te=e("label",{class:"block mb-2"},"নাম",-1),se={class:"mb-4"},oe=e("label",{class:"block mb-2"},"পদবি",-1),ne={class:"mb-4"},ae=e("label",{class:"block mb-2"},"প্রতিষ্ঠান",-1),le={class:"mb-4"},ie=e("label",{class:"block mb-2"},"ফোন",-1),de={class:"flex justify-center gap-4"},re=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),ce={__name:"EditExaminerModal",props:{examiner:Object},emits:["close","updated"],setup(i,{emit:o}){const s=o,t=i,n=E({name:"",designation:"",institute:"",phone:""}),d=g();A(()=>t.examiner,l=>{n.name=l.name||"",n.designation=l.designation||"",n.institute=l.institute||"",n.phone=l.phone||""},{immediate:!0});const m=async()=>{await d.updateExaminer(t.examiner.id,n),s("updated"),s("close")};return(l,a)=>(r(),u("div",X,[e("div",Y,[Z,e("form",{onSubmit:C(m,["prevent"])},[e("div",ee,[te,p(e("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>n.name=c),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[h,n.name]])]),e("div",se,[oe,p(e("input",{"onUpdate:modelValue":a[1]||(a[1]=c=>n.designation=c),type:"text",class:"w-full p-2 border rounded"},null,512),[[h,n.designation]])]),e("div",ne,[ae,p(e("input",{"onUpdate:modelValue":a[2]||(a[2]=c=>n.institute=c),type:"text",class:"w-full p-2 border rounded"},null,512),[[h,n.institute]])]),e("div",le,[ie,p(e("input",{"onUpdate:modelValue":a[3]||(a[3]=c=>n.phone=c),type:"text",class:"w-full p-2 border rounded"},null,512),[[h,n.phone]])]),e("div",de,[re,e("button",{type:"button",onClick:a[4]||(a[4]=c=>s("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},ue={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},me={class:"card-bg p-4 md:p-8"},pe=e("h2",{class:"text-xl font-bold mb-4"},"ডিলেট পরীক্ষক",-1),he={class:"flex justify-end mt-4"},xe={__name:"DeleteExaminerModal",props:{examiner:{type:Object,required:!0}},emits:["close","deleted"],setup(i,{emit:o}){const s=o,t=i,n=g(),d=async()=>{await n.deleteExaminer(t.examiner.id),s("deleted"),s("close")};return(m,l)=>(r(),u("div",ue,[e("div",me,[pe,e("p",null,[w("আপনি কি ("),e("b",null,_(i.examiner.name),1),w(") ডিলিট করতে চান?")]),e("div",he,[e("button",{onClick:l[0]||(l[0]=a=>s("close")),class:"bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"}," না "),e("button",{onClick:d,class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," ডিলেট ")])])]))}},_e={class:"my-container space-y-2"},be=e("h1",{class:"title-lg"},"পরীক্ষক তালিকা",-1),fe={key:0,class:"flex justify-center items-center"},ye=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),ge=[ye],ve={key:1,class:"overflow-x-auto"},$e={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},we=e("thead",null,[e("tr",{class:"bg-gray-200 text-gray-700 text-sm leading-normal"},[e("th",{class:"py-3 px-2 text-left"},"#"),e("th",{class:"py-3 px-2 text-left"},"নাম"),e("th",{class:"py-3 px-2 text-left"},"পদবি"),e("th",{class:"py-3 px-2 text-left"},"প্রতিষ্ঠান"),e("th",{class:"py-3 px-2 text-left"},"ফোন"),e("th",{class:"py-3 px-2 text-center"},"একশন")])],-1),ke={class:"text-gray-600 text-sm font-light"},Ee={class:"py-3 px-2 text-left whitespace-nowrap"},Ce={class:"flex items-center"},Me={class:"mr-2"},je={class:"font-medium"},Ve={class:"py-3 px-2 text-left"},Ne={class:"title-md"},Se={class:"py-3 px-2 text-left"},Ue={class:"title-md"},Ae={class:"py-3 px-2 text-left"},De={class:"title-md"},Fe={class:"py-3 px-2 text-left"},qe={class:"title-md"},ze={class:"py-3 px-2 text-center"},Be={class:"flex item-center justify-center gap-4"},Le=["onClick"],Oe=e("i",{class:"fas fa-edit"},null,-1),Te=[Oe],Ie=["onClick"],Ke=e("i",{class:"fas fa-trash"},null,-1),Ge=[Ke],He={key:1},Je=e("td",{colspan:"6",class:"text-center text-red-500 py-4"},"No examiners found",-1),Pe=[Je],We={__name:"ExaminerList",setup(i){const o=g(),s=f(!1),t=f(!1),n=f(!1),d=f(null),m=f(!0),l=()=>s.value=!0,a=async()=>{s.value=!1,await o.fetchExaminers()},c=y=>{d.value=y,t.value=!0},M=async()=>{t.value=!1,await o.fetchExaminers()},j=y=>{d.value=y,n.value=!0},V=()=>n.value=!1;return D(async()=>{try{await o.fetchExaminers()}finally{m.value=!1}}),(y,Qe)=>(r(),u("div",_e,[e("div",{class:"flex justify-between items-center"},[be,e("button",{class:"btn-2",onClick:l},"নতুন যুক্ত করুন")]),m.value?(r(),u("div",fe,ge)):(r(),u("div",ve,[e("table",$e,[we,e("tbody",ke,[k(o).examiners.length?(r(!0),u(F,{key:0},q(k(o).examiners,(x,N)=>(r(),u("tr",{key:x.id,class:"border-b border-gray-200 hover:bg-gray-100"},[e("td",Ee,[e("div",Ce,[e("div",Me,[e("p",je,_(N+1),1)])])]),e("td",Ve,[e("p",Ne,_(x.name),1)]),e("td",Se,[e("p",Ue,_(x.designation||"N/A"),1)]),e("td",Ae,[e("p",De,_(x.institute||"N/A"),1)]),e("td",Fe,[e("p",qe,_(x.phone||"N/A"),1)]),e("td",ze,[e("div",Be,[e("button",{onClick:S=>c(x),class:"text-blue-600 hover:text-blue-800"},Te,8,Le),e("button",{onClick:S=>j(x),class:"text-red-600 hover:text-red-800"},Ge,8,Ie)])])]))),128)):(r(),u("tr",He,Pe))])])])),s.value?(r(),v(W,{key:2,class:"z-40",onClose:a})):$("",!0),t.value?(r(),v(ce,{key:3,class:"z-40",examiner:d.value,onClose:M},null,8,["examiner"])):$("",!0),n.value?(r(),v(xe,{key:4,class:"z-40",examiner:d.value,onClose:V},null,8,["examiner"])):$("",!0)]))}};export{We as default};
