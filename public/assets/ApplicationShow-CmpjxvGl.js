import{m as G,E as $,h as q,z as H,o as a,c as n,i as s,a as t,t as o,n as I,A as M,F as J,b as K,d as P,w as O,f as Q,G as W}from"./index-DvLSUkTy.js";import{u as X}from"./application-D-0WBsw5.js";import{_ as Y}from"./ApplicationStatusModal-CVbd3Vqs.js";const Z={class:"my-container space-y-4"},tt={key:0,class:"flex justify-center items-center"},st=t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),et=[st],ot={key:1,class:"card-bg p-4 md:p-8 space-y-4"},at={class:"space-y-4"},nt={class:"space-y-4"},lt={class:"flex flex-col justify-center items-center"},ct=t("div",{class:"hidden print:block"},[t("img",{src:W,alt:"logo",class:"h-[100px]"}),t("hr",{class:"py-2"})],-1),it={class:"title-md text-center"},dt=t("h1",{class:"title-lg text-center"},"নিবন্ধনের বিস্তারিত",-1),rt={class:"space-y-2"},_t=t("hr",null,null,-1),pt={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},ht={class:""},ut=t("b",null,"নিবন্ধন নং:",-1),mt={class:""},yt=t("b",null,"নিবন্ধনের তারিখ:",-1),bt={class:""},xt=t("b",null,"অঞ্চল:",-1),gt=t("hr",null,null,-1),ft={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},vt={class:"space-y-2"},wt={class:"flex gap-4"},kt=t("b",null,"ইলহাক:",-1),Dt=t("b",null,"শিক্ষা প্রতিষ্ঠানের নাম ও ঠিকানা:",-1),At=t("b",null,"কেন্দ্র:",-1),St=t("hr",null,null,-1),Bt={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},Ct={class:""},jt=t("b",null,"মারহালা:",-1),Ft={class:""},Lt=t("b",null,"গ্রুপ:",-1),Nt={class:""},Vt=t("hr",null,null,-1),zt={class:"space-y-4"},It=t("div",{class:"flex justify-center"},[t("h2",{class:"title-lg"},"শিক্ষার্থীদের তথ্য")],-1),Mt={class:"overflow-x-auto"},Pt={class:"table-auto w-full text-left border-collapse"},Et=t("thead",null,[t("tr",{class:"bg-gray-200"},[t("th",{class:"border px-4 py-2"},"#"),t("th",{class:"border px-4 py-2"},"নাম"),t("th",{class:"border px-4 py-2"},"পিতার নাম"),t("th",{class:"border px-4 py-2"},"জন্ম তারিখ"),t("th",{class:"border px-4 py-2"},"পারার বিবরণ"),t("th",{class:"border px-4 py-2"},"ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা)")])],-1),Rt={class:"border px-4 py-2"},Tt={class:"border px-4 py-2"},Ut={class:"border px-4 py-2"},Gt={class:"border px-4 py-2"},$t={class:"border px-4 py-2"},qt={class:"border px-4 py-2"},Ht={class:"flex justify-between gap-4"},Jt=t("button",{onclick:"window.print()",class:"btn-3"},"প্রিন্ট করুন",-1),Kt={key:2,class:"text-center text-red-500"},Ot=t("p",null,"Application not found.",-1),Qt=[Ot],es={__name:"ApplicationShow",setup(Wt){const c=X(),i=G().params.id,{application:e,loading:E}=$(c),d=async()=>{try{await c.fetchApplication(i)}catch(r){console.error("Failed to load application:",r)}};q(d);const R=()=>{c.showStatusModal=!0},T=async()=>{await d()};return(r,Yt)=>{var _,p,h,u,m,y,b,x,g,f,v,w,k,D,A,S,B,C,j,F,L,N,V;const U=H("router-link");return a(),n("div",Z,[s(E)?(a(),n("div",tt,et)):s(e)?(a(),n("div",ot,[t("div",at,[t("div",nt,[t("div",lt,[ct,t("h4",it,o((p=(_=s(e))==null?void 0:_.exam)==null?void 0:p.name),1),dt]),t("div",rt,[_t,t("div",pt,[t("div",ht,[ut,t("p",null,o(s(e).id),1)]),t("div",mt,[yt,t("p",null,o(new Date(s(e).created_at).toLocaleDateString("bn-BD"))+" ইং",1)]),t("div",bt,[xt,t("p",null,o((u=(h=s(e))==null?void 0:h.area)==null?void 0:u.name),1)])]),gt,t("div",ft,[t("div",vt,[t("div",wt,[t("div",null,[kt,t("p",null,o((y=(m=s(e))==null?void 0:m.institute)==null?void 0:y.institute_code),1)]),t("div",null,[Dt,t("p",null,o((x=(b=s(e))==null?void 0:b.institute)==null?void 0:x.name),1)])])]),t("div",null,[At,t("p",null,[t("span",{class:I((f=(g=s(e))==null?void 0:g.center)!=null&&f.name?"":"text-red-500")},o(((w=(v=s(e))==null?void 0:v.center)==null?void 0:w.name)||"নির্বাচন করা নেই"),3)])])]),St,t("div",Bt,[t("div",Ct,[jt,t("p",null,o((D=(k=s(e))==null?void 0:k.zamat)==null?void 0:D.name),1)]),t("div",Ft,[Lt,t("p",null,o(((S=(A=s(e))==null?void 0:A.group)==null?void 0:S.name)||"প্রযোজ্য নয়"),1)]),t("div",Nt,[t("b",null,"টাকার পরিমাণ ("+o((B=s(e))==null?void 0:B.payment_method)+"):",1),t("p",null,[M(o((C=s(e))==null?void 0:C.total_amount)+" টাকা ",1),t("span",{class:I([{"text-yellow-600 bg-yellow-200":((j=s(e))==null?void 0:j.payment_status)==="Pending","text-green-600 bg-green-200":((F=s(e))==null?void 0:F.payment_status)==="Paid","text-red-600 bg-red-200":((L=s(e))==null?void 0:L.payment_status)==="Failed"},"py-1 px-2 rounded-full text-xs"])},o((N=s(e))==null?void 0:N.payment_status),3)])])])])]),Vt,t("div",zt,[It,t("div",Mt,[t("table",Pt,[Et,t("tbody",null,[(a(!0),n(J,null,K(s(e).students,(l,z)=>(a(),n("tr",{key:z,class:""},[t("td",Rt,o(z+1),1),t("td",Tt,o(l.name),1),t("td",Ut,o(l.father_name),1),t("td",Gt,o(new Date(l.date_of_birth).toLocaleDateString("bn-BD"))+" ইং ",1),t("td",$t,o(l.para||"প্রযোজ্য নয়"),1),t("td",qt,o(l.address),1)]))),128))])])])])]),t("div",Ht,[P(U,{to:{name:"ApplicationList"},class:"btn-2"},{default:O(()=>[M("তালিকায় যান")]),_:1}),Jt,((V=s(e))==null?void 0:V.payment_status)==="Pending"?(a(),n("button",{key:0,onClick:R,class:"btn-contrast"}," নিবন্ধন গ্রহণ ")):Q("",!0)])])):(a(),n("div",Kt,Qt)),P(Y,{applicationId:s(i),onDataUpdated:T},null,8,["applicationId"])])}}};export{es as default};
