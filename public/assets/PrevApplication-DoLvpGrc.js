import{g as Q,A as W,r as g,o as X,l as Y,a as i,c,b as t,i as U,v as $,d as s,t as o,j as u,q as d,y as Z,F as tt,m as st,n as et,p as ot,B as nt}from"./index-Bo8EQg3O.js";import{h as lt,_ as at}from"./html2pdf-BYdUkKML.js";import{u as it}from"./application-HhjKo7bn.js";import{f as ct}from"./index-DRrsUpCq.js";const dt={class:"my-container space-y-4 my-4"},rt={class:"card-bg p-4 md:p-8 items-center space-y-4 print:hidden"},_t=t("h4",{class:"title-lg"},"পূর্বের নিবন্ধন পত্র দেখুন",-1),pt={class:"grid gap-4 md:grid-cols-2 w-full"},ut={class:""},mt=t("label",{for:""},"নিবন্ধন নাম্বার",-1),ht={class:""},gt=t("label",{for:""},"ইলহাক নাম্বার",-1),yt={class:"card-bg p-4 md:p-8"},vt={key:0,class:"flex justify-center items-center text-3xl text-green-600 py-8"},ft={key:1,class:"flex justify-center items-center text-3xl text-red-500 py-8"},bt={key:2,class:"flex flex-col items-center space-y-4"},xt={class:"text-center text-lg"},kt={class:"font-bold text-sky-600"},wt=t("span",{class:"font-bold text-pink-600"},"বিকাশ",-1),Pt=t("img",{src:at,alt:""},null,-1),jt=[Pt],Ct={key:0,class:"flex justify-center items-center"},Ft=t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),Dt=[Ft],At={key:1,class:"card-bg p-4 md:p-8 space-y-4"},Rt={id:"pdf-section",class:"space-y-4"},Vt={class:"space-y-4"},Bt={class:"flex flex-col justify-center items-center"},It=t("div",{class:""},[t("img",{src:nt,alt:"logo",class:"max:h-[100px]"}),t("hr",{class:"py-2"})],-1),Mt={class:"title-md text-center"},St=t("h1",{class:"title-lg text-center"},"নিবন্ধনের বিস্তারিত",-1),Lt=t("div",{class:"flex gap-2"},null,-1),Nt={class:"grid md:grid-cols-2 gap-1"},Tt={class:"flex gap-4 bg-gray-100 p-2 rounded-md"},qt=t("b",null,"নিবন্ধন নং:",-1),Ut={class:"flex gap-4 bg-gray-100 p-2 rounded-md"},$t=t("b",null,"নিবন্ধনের তারিখ:",-1),zt={class:"bg-gray-100 p-2 rounded-md"},Et=t("b",null,"অঞ্চল :",-1),Gt={class:"bg-gray-100 p-2 rounded-md"},Ht=t("b",null,"শিক্ষা প্রতিষ্ঠানের নাম:",-1),Jt={class:"bg-gray-100 p-2 rounded-md"},Kt=t("b",null,"মারহালা:",-1),Ot={class:"bg-gray-100 p-2 rounded-md"},Qt=t("b",null,"গ্রুপ:",-1),Wt={class:"bg-gray-100 p-2 rounded-md"},Xt=t("b",null,"সেন্টার:",-1),Yt={class:"bg-gray-100 p-2 rounded-md"},Zt=t("b",null,"টাকার পরিমাণ:",-1),ts={class:"bg-gray-100 p-2 rounded-md"},ss=t("b",null,"পেমেন্টের মাধ্যম:",-1),es=t("hr",null,null,-1),os={class:"space-y-4"},ns=t("div",{class:"flex justify-center"},[t("h2",{class:"title-lg"},"শিক্ষার্থীদের তথ্য")],-1),ls={class:"grid md:grid-cols-2 gap-4"},as={class:"flex items-center justify-center"},is={class:"bg-sky-200 p-2 rounded-full px-3"},cs=t("strong",null,"নাম:",-1),ds=t("strong",null,"পিতার নাম:",-1),rs=t("strong",null,"জন্ম তারিখ:",-1),_s=t("strong",null,"ঠিকান:",-1),ps={class:"flex justify-center gap-4 print:hidden"},us={key:2,class:"text-center text-red-500"},ms=t("p",null,"আপনার তথ্যের ভিত্তিতে কোন নিবন্ধন পত্র পাওয়া যায়নি",-1),hs=[ms],gs={class:"flex mt-4"},ks={__name:"PrevApplication",setup(ys){const z=n=>ct(new Date(n),"dd-MMM-yyyy"),p=it(),E=Q(),{application:e,loading:G}=W(p),{success:y,error:v}=E.query,m=g(null),h=g(null),f=g(!1),H=async(n,l)=>{f.value=!0;try{await p.fetchPublicApplication(n,l)}catch(r){console.error("Failed to load public application:",r)}},J=()=>{H(m.value,h.value)},K=async()=>{if(e.value.id){const n=await p.bkashCreatePayment(e.value.id);n.success&&(localStorage.setItem("ReturnTo","PrevApplication"),window.location=n.bkashURL)}else console.log(e.value)};X(()=>{p.application=null});const O=()=>{var _;const n=document.getElementById("pdf-section"),r={margin:1,filename:`application-details-${((_=e.value)==null?void 0:_.id)||"unknown"}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}};lt().from(n).set(r).save()};return(n,l)=>{var _,b,x,k,w,P,j,C,F,D,A,R,V,B,I,M,S,L,N,T;const r=Y("RouterLink");return i(),c("div",dt,[t("div",rt,[_t,t("div",pt,[t("div",ut,[mt,U(t("input",{"onUpdate:modelValue":l[0]||(l[0]=a=>m.value=a),type:"number",class:"input-1",placeholder:"নিবন্ধন নাম্বার"},null,512),[[$,m.value]])]),t("div",ht,[gt,U(t("input",{"onUpdate:modelValue":l[1]||(l[1]=a=>h.value=a),type:"text",class:"input-1",placeholder:"ইলহাক নাম্বার"},null,512),[[$,h.value]])])]),t("div",{class:"flex justify-center"},[t("button",{type:"button",onClick:J,class:"btn-2"},"সাবমিট")])]),t("div",yt,[s(y)?(i(),c("div",vt,o(s(y)),1)):u("",!0),s(v)?(i(),c("div",ft,o(s(v)),1)):u("",!0),((_=s(e))==null?void 0:_.payment_status)==="Pending"?(i(),c("div",bt,[t("p",xt,[t("span",kt,o((b=s(e))==null?void 0:b.total_amount),1),d(" টাকা আপনাকে অবশ্যই পরিশোধ করতে হবে। আপনি "),wt,d(" পেমেন্ট করতে পারেন। ")]),t("button",{type:"button",onClick:K,class:"w-52 px-4 py-2 border-2 rounded-lg hover:border-pink-600"},jt)])):u("",!0)]),s(G)?(i(),c("div",Ct,Dt)):s(e)?(i(),c("div",At,[t("div",Rt,[t("div",Vt,[t("div",Bt,[It,t("h4",Mt,o((k=(x=s(e))==null?void 0:x.exam)==null?void 0:k.name),1),St,Lt]),t("div",Nt,[t("div",Tt,[qt,t("p",null,o(s(e).id),1)]),t("div",Ut,[$t,t("p",null,o(z(s(e).created_at)),1)]),t("div",zt,[Et,t("p",null,o((P=(w=s(e))==null?void 0:w.area)==null?void 0:P.name),1)]),t("div",Gt,[Ht,t("p",null,o((C=(j=s(e))==null?void 0:j.institute)==null?void 0:C.name),1)]),t("div",Jt,[Kt,t("p",null,o((D=(F=s(e))==null?void 0:F.zamat)==null?void 0:D.name),1)]),t("div",Ot,[Qt,t("p",null,o((R=(A=s(e))==null?void 0:A.group)==null?void 0:R.name),1)]),t("div",Wt,[Xt,t("p",null,o((B=(V=s(e))==null?void 0:V.center)==null?void 0:B.name),1)]),t("div",Yt,[Zt,t("p",null,[d(o((I=s(e))==null?void 0:I.total_amount)+" টাকা ",1),t("span",{class:Z([{"text-yellow-600 bg-yellow-200":((M=s(e))==null?void 0:M.payment_status)==="Pending","text-green-600 bg-green-200":((S=s(e))==null?void 0:S.payment_status)==="Paid","text-red-600 bg-red-200":((L=s(e))==null?void 0:L.payment_status)==="Failed"},"py-1 px-2 rounded-full text-xs"])},o((N=s(e))==null?void 0:N.payment_status),3)])]),t("div",ts,[ss,t("p",null,o((T=s(e))==null?void 0:T.payment_method),1)])])]),es,t("div",os,[ns,t("div",ls,[(i(!0),c(tt,null,st(s(e).students,(a,q)=>(i(),c("div",{key:q,class:"bg-gray-100 p-4 rounded-md flex gap-4"},[t("div",as,[t("div",is,o(q+1),1)]),t("div",null,[t("p",null,[cs,d(" "+o(a.name),1)]),t("p",null,[ds,d(" "+o(a.father_name),1)]),t("p",null,[rs,d(" "+o(a.date_of_birth),1)]),t("p",null,[_s,d(" "+o(a.address),1)])])]))),128))])])]),t("div",ps,[t("button",{onClick:l[2]||(l[2]=a=>n.window.print()),class:"btn-2"},"প্রিন্ট করুন"),t("button",{onClick:O,class:"btn-contrast"},"PDF ডাউনলোড করুন")])])):f.value?(i(),c("div",us,hs)):u("",!0),t("div",gs,[et(r,{to:{name:"PublicFunctions"},class:"btn-3"},{default:ot(()=>[d("পিছনে যান")]),_:1})])])}}};export{ks as default};
