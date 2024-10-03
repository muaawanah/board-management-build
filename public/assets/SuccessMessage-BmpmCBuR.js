import{h as U,_ as H}from"./html2pdf-B2BvQ-7S.js";import{l as J,E as K,g as O,o as l,c as a,a as t,h as s,t as n,f as u,z as i,n as Q,F as W,b as X,G as Y}from"./index-VD548OWL.js";import{u as Z}from"./application-BOHJRsV1.js";import{f as tt}from"./index-DRrsUpCq.js";const st={class:"my-container py-4 space-y-4"},et={class:"card-bg md:p-8 p-4 items-center print:hidden space-y-4"},nt={key:0,class:"flex justify-center items-center text-3xl text-green-600 py-8"},ot={key:1,class:"flex justify-center items-center text-3xl text-red-500 py-8"},lt=t("h1",{class:"title-lg text-green-600"},"আপনার নিবন্ধনটি সংরক্ষিত হয়েছে",-1),at={class:"flex gap-4 justify-center font-bold"},it={key:2,class:"flex flex-col items-center space-y-4"},ct={class:"text-center text-lg"},dt={class:"font-bold text-sky-600"},rt=t("span",{class:"font-bold text-pink-600"},"বিকাশ",-1),_t=t("img",{src:H,alt:""},null,-1),pt=[_t],ut=t("div",{class:"text-red-500 text-3xl font-bold text-center print:hidden"}," ভবিষ্যতের জন্য নিচের তথ্যগুলো অবশ্যই সংরক্ষণ করুন। ",-1),ht={key:0,class:"flex justify-center items-center"},mt=t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),gt=[mt],yt={key:1,class:"card-bg p-4 md:p-8 space-y-4"},ft={id:"pdf-section",class:"space-y-4"},bt={class:"space-y-4"},xt={class:"flex flex-col justify-center items-center"},vt=t("div",{class:""},[t("img",{src:Y,alt:"logo",class:"max:h-[100px]"}),t("hr",{class:"py-2"})],-1),kt={class:"title-md text-center"},wt=t("h1",{class:"title-lg text-center"},"নিবন্ধনের বিস্তারিত",-1),jt=t("div",{class:"flex gap-2"},null,-1),It={class:"grid md:grid-cols-2 gap-1"},Pt={class:"flex gap-4 bg-gray-100 p-2 rounded-md"},St=t("b",null,"নিবন্ধন নং:",-1),Ct={class:"flex gap-4 bg-gray-100 p-2 rounded-md"},Dt=t("b",null,"নিবন্ধনের তারিখ:",-1),Ft={class:"bg-gray-100 p-2 rounded-md"},Mt=t("b",null,"অঞ্চল :",-1),Bt={class:"bg-gray-100 p-2 rounded-md"},Rt=t("b",null,"ইলহাক নাম্বার:",-1),zt={class:"bg-gray-100 p-2 rounded-md"},Et=t("b",null,"শিক্ষা প্রতিষ্ঠানের নাম:",-1),Nt={class:"bg-gray-100 p-2 rounded-md"},Tt=t("b",null,"মারহালা:",-1),Vt={class:"bg-gray-100 p-2 rounded-md"},qt=t("b",null,"গ্রুপ:",-1),At={class:"bg-gray-100 p-2 rounded-md"},Lt=t("b",null,"সেন্টার:",-1),$t={class:"bg-gray-100 p-2 rounded-md"},Gt=t("b",null,"টাকার পরিমাণ:",-1),Ut=t("hr",null,null,-1),Ht={class:"space-y-4"},Jt=t("div",{class:"flex justify-center"},[t("h2",{class:"title-lg"},"শিক্ষার্থীদের তথ্য")],-1),Kt={class:"grid md:grid-cols-2 gap-4"},Ot={class:"flex items-center justify-center"},Qt={class:"bg-sky-200 p-2 rounded-full px-3"},Wt=t("strong",null,"নাম:",-1),Xt=t("strong",null,"পিতার নাম:",-1),Yt=t("strong",null,"জন্ম তারিখ:",-1),Zt=t("strong",null,"ঠিকান:",-1),ts=t("button",{onclick:"window.print()",class:"btn-2"},"প্রিন্ট করুন",-1),ss={key:2},es=t("p",null,"নিবন্ধনের তথ্য লোড করতে ব্যর্থ হয়েছে।",-1),ns=[es],ds={__name:"SuccessMessage",setup(os){const q=o=>tt(new Date(o),"dd-MMM-yyyy"),p=Z(),A=J(),{success:h,error:m}=A.query,{loading:L,application:e}=K(p);O(()=>{const o=localStorage.getItem("applicationId"),d=localStorage.getItem("instituteId");d&&p.fetchPublicApplication(o,d)});const $=async()=>{if(e.value.id){const o=await p.bkashCreatePayment(e.value.id);o.success&&(localStorage.setItem("ReturnTo","SuccessMessage"),window.location=o.bkashURL)}else console.log(e.value)},G=()=>{var c;const o=document.getElementById("pdf-section"),r={margin:1,filename:`application-details-${((c=e.value)==null?void 0:c.id)||"unknown"}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}};U().from(o).set(r).save()};return(o,d)=>{var r,c,g,y,f,b,x,v,k,w,j,I,P,S,C,D,F,M,B,R,z,E,N,T;return l(),a("div",st,[t("div",et,[s(h)?(l(),a("div",nt,n(s(h)),1)):u("",!0),s(m)?(l(),a("div",ot,n(s(m)),1)):u("",!0),t("div",null,[lt,t("div",at,[t("p",null,"নিবন্ধন নং: "+n((r=s(e))==null?void 0:r.id),1),t("p",null,"ইলহাক নং: "+n((g=(c=s(e))==null?void 0:c.institute)==null?void 0:g.id),1)])]),((y=s(e))==null?void 0:y.payment_status)==="Pending"?(l(),a("div",it,[t("p",ct,[t("span",dt,n((f=s(e))==null?void 0:f.total_amount),1),i(" টাকা আপনাকে অবশ্যই পরিশোধ করতে হবে। আপনি "),rt,i(" পেমেন্ট করতে পারেন। ")]),t("button",{type:"button",onClick:$,class:"w-52 px-4 py-2 border-2 rounded-lg hover:border-pink-600"},pt)])):u("",!0)]),ut,s(L)?(l(),a("div",ht,gt)):s(e)?(l(),a("div",yt,[t("div",ft,[t("div",bt,[t("div",xt,[vt,t("h4",kt,n((x=(b=s(e))==null?void 0:b.exam)==null?void 0:x.name),1),wt,jt]),t("div",It,[t("div",Pt,[St,t("p",null,n(s(e).id),1)]),t("div",Ct,[Dt,t("p",null,n(q(s(e).created_at)),1)]),t("div",Ft,[Mt,t("p",null,n((k=(v=s(e))==null?void 0:v.area)==null?void 0:k.name),1)]),t("div",Bt,[Rt,t("p",null,n((j=(w=s(e))==null?void 0:w.institute)==null?void 0:j.id),1)]),t("div",zt,[Et,t("p",null,n((P=(I=s(e))==null?void 0:I.institute)==null?void 0:P.name),1)]),t("div",Nt,[Tt,t("p",null,n((C=(S=s(e))==null?void 0:S.zamat)==null?void 0:C.name),1)]),t("div",Vt,[qt,t("p",null,n((F=(D=s(e))==null?void 0:D.group)==null?void 0:F.name),1)]),t("div",At,[Lt,t("p",null,n((B=(M=s(e))==null?void 0:M.center)==null?void 0:B.name),1)]),t("div",$t,[Gt,t("p",null,[i(n((R=s(e))==null?void 0:R.total_amount)+" টাকা ",1),t("span",{class:Q([{"text-yellow-600 bg-yellow-200":((z=s(e))==null?void 0:z.payment_status)==="Pending","text-green-600 bg-green-200":((E=s(e))==null?void 0:E.payment_status)==="Paid","text-red-600 bg-red-200":((N=s(e))==null?void 0:N.payment_status)==="Failed"},"py-1 px-2 rounded-full text-xs"])},n((T=s(e))==null?void 0:T.payment_status),3)])])])]),Ut,t("div",Ht,[Jt,t("div",Kt,[(l(!0),a(W,null,X(s(e).students,(_,V)=>(l(),a("div",{key:V,class:"bg-gray-100 p-4 rounded-md flex gap-4"},[t("div",Ot,[t("div",Qt,n(V+1),1)]),t("div",null,[t("p",null,[Wt,i(" "+n(_.name),1)]),t("p",null,[Xt,i(" "+n(_.father_name),1)]),t("p",null,[Yt,i(" "+n(_.date_of_birth),1)]),t("p",null,[Zt,i(" "+n(_.address),1)])])]))),128))])])]),t("div",{class:"flex justify-center gap-4 print:hidden"},[ts,t("button",{onClick:G,class:"btn-contrast"},"PDF ডাউনলোড করুন")])])):(l(),a("div",ss,ns))])}}};export{ds as default};
