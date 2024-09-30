import{u as w}from"./student-CIC1Mp_q.js";import{u as v}from"./exam-vk4nKz49.js";import{f as k}from"./index-DRrsUpCq.js";import{r as S,o as u,l as L,a as o,c as a,b as t,t as s,d as r,j as c,F as N,m as j,n as M,p as V,q as B}from"./index-DxqKlCjx.js";const C={class:"space-y-2 px-6 py-4"},D={class:"flex justify-between items-center"},E={class:"title-lg"},F={key:0,class:"flex justify-center items-center"},R=t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-600"},null,-1),q=[R],z={key:1,class:"overflow-x-auto bg-white shadow-md rounded-lg"},A={class:"min-w-full table-auto"},T={class:"bg-gray-400 text-white uppercase text-sm leading-normal"},G=t("th",{class:"py-3 px-4 text-left"},"#",-1),H=t("th",{class:"py-3 px-4 text-left"},"শিক্ষার্থীর নাম",-1),I=t("th",{class:"py-3 px-4 text-left"},"রেজি. নং",-1),J=t("th",{class:"py-3 px-4 text-left"},"জন্ম তারিখ",-1),K=t("th",{class:"py-3 px-4 text-left"},"মারহালা",-1),O=t("th",{class:"py-3 px-4 text-left"},"মাদরাসার নাম",-1),P=t("th",{class:"py-3 px-4 text-left"},"অঞ্চল",-1),Q=t("th",{class:"py-3 px-4 text-left"},"মারকাজ",-1),U=t("th",{class:"py-3 px-4 text-center"},"Actions",-1),W={class:"text-gray-700 text-sm font-light"},X={class:"py-3 px-4 text-left"},Y={class:"py-3 px-4 text-left"},Z={class:"py-3 px-4 text-left"},$={class:"py-3 px-4 text-left"},tt={class:"py-3 px-4 text-left"},et={class:"py-3 px-4 text-left"},st={class:"py-3 px-4 text-left"},ot={class:"py-3 px-4 text-left"},at={class:"py-3 px-4 text-center"},ct={class:"flex items-center justify-center gap-2"},it={key:1},rt=t("td",{colspan:"11",class:"text-center text-red-500 py-6"},"No students found",-1),lt=[rt],ft={__name:"StudentList",setup(_t){const y=n=>k(new Date(n),"dd-MMM-yyyy"),l=v(),i=w(),_=S(!0);return u(async()=>{try{await i.fetchStudents(),await l.fetchLastExam()}finally{_.value=!1}}),(n,nt)=>{var p;const b=L("RouterLink");return o(),a("div",C,[t("div",D,[t("h1",E,s((p=r(l).exam)==null?void 0:p.name)+"-এর পরীক্ষার্থী তালিকা",1)]),_.value?(o(),a("div",F,q)):(o(),a("div",z,[t("table",A,[t("thead",T,[t("tr",null,[G,H,c("",!0),I,J,K,O,P,Q,c("",!0),U])]),t("tbody",W,[r(i).students.length?(o(!0),a(N,{key:0},j(r(i).students,(e,g)=>{var h,x,d,f,m;return o(),a("tr",{key:e.id,class:"border-b border-gray-200 hover:bg-gray-100 font-medium"},[t("td",X,s(g+1),1),t("td",Y,s(e==null?void 0:e.name),1),c("",!0),t("td",Z,s(e==null?void 0:e.registration_number),1),t("td",$,s(y(e==null?void 0:e.date_of_birth)),1),t("td",tt,s((h=e==null?void 0:e.zamat)==null?void 0:h.name),1),t("td",et,s((x=e==null?void 0:e.institute)==null?void 0:x.institute_code)+" - "+s((d=e==null?void 0:e.institute)==null?void 0:d.name),1),t("td",st,s((f=e==null?void 0:e.area)==null?void 0:f.name),1),t("td",ot,s((m=e==null?void 0:e.center)==null?void 0:m.name),1),c("",!0),t("td",at,[t("div",ct,[M(b,{to:{name:"StudentShow",params:{id:e.id}},class:"btn-2"},{default:V(()=>[B("দেখুন")]),_:2},1032,["to"])])])])}),128)):(o(),a("tr",it,lt))])])]))])}}};export{ft as default};
