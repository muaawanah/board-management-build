import{m as M,E as j,g as z,h as C,z as N,o as d,c as a,i as e,a as t,t as o,n as V,d as E,w as I,A as L}from"./index-C0Q3J3C0.js";import{u as R}from"./student-Dip0UgIu.js";import{f as T}from"./index-DRrsUpCq.js";const A={class:"my-container space-y-4"},F={key:0,class:"flex justify-center items-center"},G=t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),q=[G],H={key:1,class:"space-y-4 bg-white shadow-lg rounded-lg p-4 md:p-8"},J={class:"space-y-4"},K=t("div",{class:"flex justify-center"},[t("h2",{class:"title-lg"},"শিক্ষার্থীর তথ্য")],-1),O={class:"grid md:grid-cols-2 gap-1"},P={class:"bg-gray-100 p-2 rounded-md"},Q=t("b",null,"রেজিস্ট্রেশন নাম্বার:",-1),U={class:"bg-gray-100 p-2 rounded-md"},W=t("b",null,"শিক্ষার্থীর নাম:",-1),X={class:"bg-gray-100 p-2 rounded-md"},Y=t("b",null,"পিতার নাম:",-1),Z={class:"bg-gray-100 p-2 rounded-md"},$=t("b",null,"জন্ম তারিখ:",-1),tt={class:"bg-gray-100 p-2 rounded-md"},st=t("b",null,"শিক্ষার্থীর ধরণ:",-1),et={class:"bg-gray-100 p-2 rounded-md"},ot=t("b",null,"শিক্ষার্থীর ঠিকানা:",-1),nt={class:"bg-gray-100 p-2 rounded-md"},dt=t("b",null,"শিক্ষা প্রতিষ্ঠানের নাম:",-1),at={class:"bg-gray-100 p-2 rounded-md"},lt=t("b",null,"মারহালা:",-1),ct={class:"bg-gray-100 p-2 rounded-md"},rt=t("b",null,"গ্রুপ:",-1),it={class:"bg-gray-100 p-2 rounded-md"},_t=t("b",null,"পরীক্ষার অঞ্চল:",-1),ut={class:"bg-gray-100 p-2 rounded-md"},ht=t("b",null,"পরীক্ষার কেন্দ্র:",-1),pt={class:"flex justify-center gap-4"},mt={key:2,class:"text-center text-red-500"},gt=t("p",null,"Student not found.",-1),bt=[gt],wt={__name:"StudentShow",setup(yt){const x=n=>T(new Date(n),"dd-MMM-yyyy"),l=R(),S=M().params.id,{student:s,loading:k}=j(l),w=async()=>{try{await l.fetchStudent(S)}catch(n){console.error("Failed to load student:",n)}},B=z(()=>s.value.gender==="male"?"ছাত্র":"ছাত্রী");return C(w),(n,vt)=>{var c,r,i,_,u,h,p,m,g,b,y,f,v;const D=N("router-link");return d(),a("div",A,[e(k)?(d(),a("div",F,q)):e(s)?(d(),a("div",H,[t("div",J,[K,t("div",O,[t("div",P,[Q,t("p",null,o(e(s).registration_number),1)]),t("div",U,[W,t("p",null,o(e(s).name),1)]),t("div",X,[Y,t("p",null,o(e(s).father_name),1)]),t("div",Z,[$,t("p",null,o(x(e(s).date_of_birth)),1)]),t("div",tt,[st,t("p",null,o(B.value),1)]),t("div",et,[ot,t("p",null,o((c=e(s))==null?void 0:c.address),1)]),t("div",nt,[dt,t("p",null,o((i=(r=e(s))==null?void 0:r.institute)==null?void 0:i.name),1)]),t("div",at,[lt,t("p",null,o((u=(_=e(s))==null?void 0:_.zamat)==null?void 0:u.name),1)]),t("div",ct,[rt,t("p",null,o(((p=(h=e(s))==null?void 0:h.group)==null?void 0:p.name)||"প্রযোজ্য নয়"),1)]),t("div",it,[_t,t("p",null,o((g=(m=e(s))==null?void 0:m.area)==null?void 0:g.name),1)]),t("div",ut,[ht,t("p",null,[t("span",{class:V({"text-red-500":!((y=(b=e(s))==null?void 0:b.center)!=null&&y.name)})},o(((v=(f=e(s))==null?void 0:f.center)==null?void 0:v.name)||"নির্বাচন করা নেই"),3)])])])]),t("div",pt,[E(D,{to:{name:"StudentList"},class:"btn-2"},{default:I(()=>[L("Back to List")]),_:1})])])):(d(),a("div",mt,bt))])}}};export{wt as default};
