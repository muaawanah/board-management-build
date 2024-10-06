import{r as m,B as f,h as K,z as R,o as n,c as l,a as e,t as s,i as _,A as c,d as v,w as N,v as g,x as V,D as z,f as b,C as T,F as B,b as U,n as F}from"./index-C0Q3J3C0.js";import{_ as Z}from"./ApplicationStatusModal-bgQgynJZ.js";import{u as $}from"./application-BiZX3T2O.js";import{u as q}from"./exam-DD8W41k4.js";import{u as G}from"./zamat--3t1L25n.js";const H={class:"space-y-2 px-6 py-4"},J={class:"md:flex justify-between items-center"},O={class:""},Q={class:"title-lg"},W={class:"md:flex divide-x md:divide-black text-sm"},X={class:"md:pr-2"},Y={class:"md:px-2"},p={class:"md:pl-2"},tt={class:"card-bg p-4 grid md:grid-cols-3"},et={class:"relative"},st=e("i",{class:"fas fa-search"},null,-1),dt=[st],ot={class:"relative"},nt=e("i",{class:"fas fa-search"},null,-1),lt=[nt],rt=e("option",{value:""},"- সকল মারহালা -",-1),_t=["value"],ct={key:0,class:"flex justify-center items-center"},ut=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-600"},null,-1),at=[ut],ht={key:1,class:"overflow-x-auto bg-white shadow-md rounded-lg"},xt={class:"min-w-full table-auto"},mt=e("thead",{class:"bg-gray-400 text-white uppercase text-sm leading-normal"},[e("tr",null,[e("th",{class:"py-3 px-4 text-left"},"ক্র"),e("th",{class:"py-3 px-4 text-center"},"তারিখ"),e("th",{class:"py-3 px-4 text-center"},"নিবন্ধন নং"),e("th",{class:"py-3 px-4 text-left"},"ইলহাক ও মাদরাসার নাম"),e("th",{class:"py-3 px-4 text-left"},"অঞ্চল"),e("th",{class:"py-3 px-4 text-left"},"মারহালা"),e("th",{class:"py-3 px-4 text-center"},"শিক্ষার্থী সংখ্যা"),e("th",{class:"py-3 px-4 text-right"},"টাকা"),e("th",{class:"py-3 px-4 text-center"},"পেমেন্ট মেথড"),e("th",{class:"py-3 px-4 text-center"},"পেমেন্ট স্ট্যাটাস"),e("th",{class:"py-3 px-4 text-center"},"ইউজার"),e("th",{class:"py-3 px-4 text-center"},"Actions")])],-1),yt={class:"text-gray-700 text-sm font-light"},ft={class:"py-3 px-4 text-left"},vt={class:"py-3 px-4 text-center"},gt={class:"py-3 px-4 text-center"},bt={class:"py-3 px-4 text-left"},wt=e("strong",{class:""},"কেন্দ্র: ",-1),it={class:"py-3 px-4 text-left"},kt={class:"py-3 px-4 text-left"},At={class:"py-3 px-4 text-center"},St={class:"py-3 px-4 text-right"},Ct={class:"py-3 px-4 text-center"},Dt={class:"py-3 px-4 text-center"},Mt={class:"py-3 px-4 text-left"},Lt=e("strong",{class:""},"প্রেরণ: ",-1),Nt=e("hr",null,null,-1),Vt=e("strong",{class:""},"গ্রহণ: ",-1),zt={class:"py-3 px-4 text-center"},Bt={class:"flex items-center justify-end gap-2"},Ut=["onClick"],Ft={key:1},Pt=e("td",{colspan:"11",class:"text-center text-red-500 py-6"},"No applications found",-1),jt=[Pt],qt={__name:"ApplicationList",setup(Et){const w=q(),i=G(),o=$(),k=m(null),u=m(""),x=m(""),a=m(""),y=m(!0),P=d=>{k.value=d,o.showStatusModal=!0},A=()=>{o.showStatusModal=!1},j=async()=>{await o.fetchApplications(),A()},E=()=>{const d={};return x.value&&(d.zamat_id=x.value),u.value&&(d.institute_code=u.value),a.value&&(d.application_id=a.value),d},r=async()=>{y.value=!0;const d=E();await o.fetchApplications(d),y.value=!1};return f([x],r),f(a,d=>{d||r()}),f(u,d=>{d||r()}),K(async()=>{w.fetchLastExam(),i.fetchZamats(),o.fetchApplicationCounts(),r()}),(d,h)=>{var C,D,M,L;const S=R("RouterLink");return n(),l("div",H,[e("div",J,[e("div",O,[e("h1",Q,s((C=_(w).exam)==null?void 0:C.name)+"-এর নিবন্ধন তালিকা",1),e("div",W,[e("div",X,[c(" মোট নিবন্ধন: "),e("span",null,s((D=_(o))==null?void 0:D.totalApplications)+" টি",1)]),e("div",Y,[c(" পেন্ডিং নিবন্ধন: "),e("span",null,s((M=_(o))==null?void 0:M.pendingApplications)+" টি",1)]),e("div",p,[c(" পেইড নিবন্ধন: "),e("span",null,s((L=_(o))==null?void 0:L.paidApplications)+" টি",1)])])]),v(S,{to:{name:"ApplicationForm"},class:"btn-2"},{default:N(()=>[c("নতুন নিবন্ধন যুক্ত করুন")]),_:1})]),e("div",tt,[e("div",et,[g(e("input",{"onUpdate:modelValue":h[0]||(h[0]=t=>a.value=t),type:"text",class:"input-1 w-full text-black px-3 py-1",placeholder:"নিবন্ধন নং",onKeyup:z(r,["enter"])},null,544),[[V,a.value]]),a.value?(n(),l("button",{key:0,onClick:r,class:"absolute right-3 top-2"},dt)):b("",!0)]),e("div",ot,[g(e("input",{"onUpdate:modelValue":h[1]||(h[1]=t=>u.value=t),type:"text",class:"input-1 w-full text-black px-3 py-1",placeholder:"ইলহাক নং",onKeyup:z(r,["enter"])},null,544),[[V,u.value]]),u.value?(n(),l("button",{key:0,onClick:r,class:"absolute right-3 top-2"},lt)):b("",!0)]),g(e("select",{"onUpdate:modelValue":h[2]||(h[2]=t=>x.value=t),class:"text-black input-1 px-2 py-1"},[rt,(n(!0),l(B,null,U(_(i).zamats,t=>(n(),l("option",{key:t.id,value:t.id},s(t.name),9,_t))),128))],512),[[T,x.value]])]),y.value?(n(),l("div",ct,at)):(n(),l("div",ht,[e("table",xt,[mt,e("tbody",yt,[_(o).applications.length?(n(!0),l(B,{key:0},U(_(o).applications,(t,I)=>(n(),l("tr",{key:t.id,class:"border-b border-gray-200 hover:bg-gray-100 font-medium"},[e("td",ft,s(I+1),1),e("td",vt,s(new Date(t==null?void 0:t.application_date).toLocaleDateString("bn-BD")),1),e("td",gt,s(t==null?void 0:t.id),1),e("td",bt,[e("div",null,s(t==null?void 0:t.institute_code_name),1),e("div",null,[wt,e("span",{class:F(t!=null&&t.center_name?"":"text-red-500")},s((t==null?void 0:t.center_name)||"নির্বাচন করা নেই"),3)])]),e("td",it,s(t==null?void 0:t.area_name),1),e("td",kt,s(t==null?void 0:t.zamat_name),1),e("td",At,s(t==null?void 0:t.student_count)+" জন",1),e("td",St,s(t==null?void 0:t.total_amount),1),e("td",Ct,s(t==null?void 0:t.payment_method),1),e("td",Dt,[e("span",{class:F([{"text-yellow-600 bg-yellow-200":(t==null?void 0:t.payment_status)==="Pending","text-green-600 bg-green-200":(t==null?void 0:t.payment_status)==="Paid","text-red-600 bg-red-200":(t==null?void 0:t.payment_status)==="Failed"},"py-1 px-2 rounded-full text-xs"])},s(t==null?void 0:t.payment_status),3)]),e("td",Mt,[e("div",null,[Lt,c(s((t==null?void 0:t.submitted_by_name)||"N/A"),1)]),Nt,e("div",null,[Vt,c(s((t==null?void 0:t.approved_by_name)||"N/A"),1)])]),e("td",zt,[e("div",Bt,[v(S,{to:{name:"ApplicationShow",params:{id:t.id}},class:"btn-2"},{default:N(()=>[c(" দেখুন ")]),_:2},1032,["to"]),(t==null?void 0:t.payment_status)==="Pending"?(n(),l("button",{key:0,onClick:It=>P(t.id),class:"btn-contrast"}," গ্রহণ ",8,Ut)):b("",!0)])])]))),128)):(n(),l("tr",Ft,jt))])])])),v(Z,{show:_(o).showStatusModal,"application-id":k.value,onClose:A,onDataUpdated:j},null,8,["show","application-id"])])}}};export{qt as default};
