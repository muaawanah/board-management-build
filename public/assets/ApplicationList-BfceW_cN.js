import{r as a,B as G,g as E,A as m,y as H,o as n,c as l,a as e,t as o,h as y,z as x,d as i,w as F,s as f,v as P,D as j,f as v,C as J,F as I,b as K,n as O}from"./index-VD548OWL.js";import{_ as Q}from"./ApplicationStatusModal-CmqG4oVi.js";import{u as W}from"./application-BOHJRsV1.js";import{u as X}from"./exam-BqYQIQ25.js";import{u as Y}from"./zamat-D1sucjFi.js";const tt={class:"space-y-2 px-6 py-4"},et={class:"md:flex justify-between items-center"},st={class:""},ot={class:"title-lg"},dt={class:"md:flex divide-x md:divide-black text-sm"},nt={class:"md:pr-2"},lt={class:"md:px-2"},at={class:"md:pl-2"},rt={class:"card-bg p-4 grid md:grid-cols-3"},ct={class:"relative"},ut=e("i",{class:"fas fa-search"},null,-1),_t=[ut],ht={class:"relative"},xt=e("i",{class:"fas fa-search"},null,-1),mt=[xt],yt=e("option",{value:""},"- সকল মারহালা -",-1),it=["value"],ft={key:0,class:"flex justify-center items-center"},vt=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-600"},null,-1),gt=[vt],bt={key:1,class:"overflow-x-auto bg-white shadow-md rounded-lg"},wt={class:"min-w-full table-auto"},kt=e("thead",{class:"bg-gray-400 text-white uppercase text-sm leading-normal"},[e("tr",null,[e("th",{class:"py-3 px-4 text-left"},"ক্র"),e("th",{class:"py-3 px-4 text-center"},"তারিখ"),e("th",{class:"py-3 px-4 text-center"},"নিবন্ধন নং"),e("th",{class:"py-3 px-4 text-left"},"ইলহাক ও মাদরাসার নাম"),e("th",{class:"py-3 px-4 text-left"},"অঞ্চল"),e("th",{class:"py-3 px-4 text-left"},"মারহালা"),e("th",{class:"py-3 px-4 text-center"},"শিক্ষার্থী সংখ্যা"),e("th",{class:"py-3 px-4 text-right"},"টাকা"),e("th",{class:"py-3 px-4 text-center"},"পেমেন্ট মেথড"),e("th",{class:"py-3 px-4 text-center"},"পেমেন্ট স্ট্যাটাস"),e("th",{class:"py-3 px-4 text-center"},"Actions")])],-1),pt={class:"text-gray-700 text-sm font-light"},At={class:"py-3 px-4 text-left"},St={class:"py-3 px-4 text-center"},Ct={class:"py-3 px-4 text-center"},Dt={class:"py-3 px-4 text-left"},Mt={class:"py-3 px-4 text-left"},Lt={class:"py-3 px-4 text-left"},Vt={class:"py-3 px-4 text-center"},zt={class:"py-3 px-4 text-right"},Bt={class:"py-3 px-4 text-center"},Nt={class:"py-3 px-4 text-center"},Ut={class:"py-3 px-4 text-center"},Et={class:"flex items-center justify-end gap-2"},Ft=["onClick"],Pt={key:1},jt=e("td",{colspan:"11",class:"text-center text-red-500 py-6"},"No applications found",-1),It=[jt],Ht={__name:"ApplicationList",setup(Kt){const g=X(),b=Y(),d=W(),w=a(!0),k=a(null),u=a(""),h=a(""),_=a(""),p=a(0),A=a(0),S=a(0),R=a(!0),C=G(()=>[...d.applications].sort((s,r)=>new Date(r.created_at)-new Date(s.created_at)));E(async()=>{try{await d.fetchApplications(),await g.fetchLastExam(),await b.fetchZamats()}finally{w.value=!1}});const T=s=>{k.value=s,d.showStatusModal=!0},D=()=>{d.showStatusModal=!1},Z=async()=>{await d.fetchApplications(),D()},$=()=>{const s={};return h.value&&(s.zamat_id=h.value),u.value&&(s.institute_code=u.value),_.value&&(s.application_id=_.value),s},c=async()=>{const s=$();await d.fetchApplications(s)};return m([h],c),m(_,s=>{s||c()}),m(u,s=>{s||c()}),E(async()=>{try{await d.fetchApplicationCounts(),p.value=d.totalApplications,A.value=d.pendingApplications,S.value=d.paidApplications}catch(s){console.error("Error fetching application counts:",s)}finally{R.value=!1}}),(s,r)=>{var L;const M=H("RouterLink");return n(),l("div",tt,[e("div",et,[e("div",st,[e("h1",ot,o((L=y(g).exam)==null?void 0:L.name)+"-এর নিবন্ধন তালিকা",1),e("div",dt,[e("div",nt,[x(" মোট নিবন্ধন: "),e("span",null,o(p.value)+" টি",1)]),e("div",lt,[x(" পেন্ডিং নিবন্ধন: "),e("span",null,o(A.value)+" টি",1)]),e("div",at,[x(" পেইড নিবন্ধন: "),e("span",null,o(S.value)+" টি",1)])])]),i(M,{to:{name:"ApplicationForm"},class:"btn-2"},{default:F(()=>[x("নতুন নিবন্ধন যুক্ত করুন")]),_:1})]),e("div",rt,[e("div",ct,[f(e("input",{"onUpdate:modelValue":r[0]||(r[0]=t=>_.value=t),type:"text",class:"input-1 w-full text-black px-3 py-1",placeholder:"নিবন্ধন নং",onKeyup:j(c,["enter"])},null,544),[[P,_.value]]),_.value?(n(),l("button",{key:0,onClick:c,class:"absolute right-3 top-2"},_t)):v("",!0)]),e("div",ht,[f(e("input",{"onUpdate:modelValue":r[1]||(r[1]=t=>u.value=t),type:"text",class:"input-1 w-full text-black px-3 py-1",placeholder:"ইলহাক নং",onKeyup:j(c,["enter"])},null,544),[[P,u.value]]),u.value?(n(),l("button",{key:0,onClick:c,class:"absolute right-3 top-2"},mt)):v("",!0)]),f(e("select",{"onUpdate:modelValue":r[2]||(r[2]=t=>h.value=t),class:"text-black input-1 px-2 py-1"},[yt,(n(!0),l(I,null,K(y(b).zamats,t=>(n(),l("option",{key:t.id,value:t.id},o(t.name),9,it))),128))],512),[[J,h.value]])]),w.value?(n(),l("div",ft,gt)):(n(),l("div",bt,[e("table",wt,[kt,e("tbody",pt,[C.value.length?(n(!0),l(I,{key:0},K(C.value,(t,q)=>{var V,z,B,N,U;return n(),l("tr",{key:t.id,class:"border-b border-gray-200 hover:bg-gray-100 font-medium"},[e("td",At,o(q+1),1),e("td",St,o(new Date(t==null?void 0:t.created_at).toLocaleDateString("bn-BD")),1),e("td",Ct,o(t==null?void 0:t.id),1),e("td",Dt,o((V=t==null?void 0:t.institute)==null?void 0:V.institute_code)+" - "+o((z=t==null?void 0:t.institute)==null?void 0:z.name),1),e("td",Mt,o((B=t==null?void 0:t.area)==null?void 0:B.name),1),e("td",Lt,o((N=t==null?void 0:t.zamat)==null?void 0:N.name),1),e("td",Vt,o((U=t==null?void 0:t.students)==null?void 0:U.length)+" জন",1),e("td",zt,o(t==null?void 0:t.total_amount),1),e("td",Bt,o(t==null?void 0:t.payment_method),1),e("td",Nt,[e("span",{class:O([{"text-yellow-600 bg-yellow-200":(t==null?void 0:t.payment_status)==="Pending","text-green-600 bg-green-200":(t==null?void 0:t.payment_status)==="Paid","text-red-600 bg-red-200":(t==null?void 0:t.payment_status)==="Failed"},"py-1 px-2 rounded-full text-xs"])},o(t==null?void 0:t.payment_status),3)]),e("td",Ut,[e("div",Et,[i(M,{to:{name:"ApplicationShow",params:{id:t.id}},class:"btn-2"},{default:F(()=>[x("দেখুন")]),_:2},1032,["to"]),(t==null?void 0:t.payment_status)==="Pending"?(n(),l("button",{key:0,onClick:Rt=>T(t.id),class:"btn-contrast"}," গ্রহণ ",8,Ft)):v("",!0)])])])}),128)):(n(),l("tr",Pt,It))])])])),i(Q,{show:y(d).showStatusModal,"application-id":k.value,onClose:D,onDataUpdated:Z},null,8,["show","application-id"])])}}};export{Ht as default};
