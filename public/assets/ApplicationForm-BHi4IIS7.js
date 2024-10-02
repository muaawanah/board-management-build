import{k as P,r as k,z as C,g as Q,A as W,o as l,c as i,a as e,t as r,i as p,y as m,q as c,v as h,n as ee,p as I,C as L,B as w,F as f,b,f as g,j as te}from"./index-BX3jB4bk.js";import{u as se}from"./application-EL2WTidp.js";import{u as ae}from"./exam-B08JBtki.js";import{u as oe}from"./institute-Br4993-N.js";import{u as le}from"./area-uFF2xYP2.js";import{u as ie}from"./zamat-C0QQRPE1.js";import{u as ne}from"./group-Cf5iGiPb.js";import{u as de}from"./center-C6oC2VD3.js";import{u as re}from"./fee-raLZv9xx.js";import{t as ce}from"./date-Cwd8pd0-.js";const ue={class:"mx-4"},_e={class:"md:p-8 p-4 card-bg space-y-2"},pe={class:"flex gap-4 justify-center items-center"},me={class:"flex flex-col items-center space-y-2"},ve={class:"title-xl"},he={class:"flex flex-wrap gap-2 text-center"},fe={class:"md:text-base text-sm"},be=e("div",{class:"px-6 bg-sky-700 rounded-full pt-1"},[e("h2",{class:"title-lg text-white"},"নিবন্ধন পত্র")],-1),ye={class:"flex justify-center items-center"},ge={class:"flex gap-2 justify-center items-center bg-gray-100 p-4 rounded-lg"},xe={class:"text-red-500"},ke=e("i",{class:"fas fa-search"},null,-1),Ve={class:"grid md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-md"},Ue={class:"col-start-1"},Se=e("label",{class:"block text-gray-700"},"অঞ্চল নির্বাচন করুন",-1),Ce=e("option",{value:"",disabled:""},"Select Area",-1),we=["value"],ze=e("label",{class:"block text-gray-700"},"মাদরাসা নির্বাচন করুন",-1),De=["disabled"],$e=e("option",{value:"",disabled:""},"Select Institute",-1),je=["value"],Be=e("label",{class:"block text-gray-700"},"মারহালা নির্বাচন করুন",-1),Me=e("option",{value:"",disabled:""},"Select Marhala",-1),Ae=["label"],Fe=["value"],qe=e("label",{class:"block text-gray-700"},"গ্রুপ নির্বাচন করুন (যদি থাকে)",-1),Ee=["disabled"],Ie=e("option",{value:"",disabled:""},"Select Group",-1),Le=["value"],Ke={key:0},Ne=e("label",{class:"block text-gray-700"},"কেন্দ্র নির্বাচন করুন",-1),Oe=["disabled"],Ye=e("option",{value:"",disabled:""},"Select Center",-1),Ge=["value"],Te={class:"space-y-2"},Re=te('<div class="flex justify-center"><h4 class="title-lg">শিক্ষার্থীদের তথ্য</h4></div><div class="hidden md:grid md:grid-cols-12 bg-gray-100 py-2 px-2 text-center divide-x-2 font-medium"><div class="text-center">ক্র</div><div class="col-span-2 text-center">শিক্ষার্থীর নাম</div><div class="col-span-2">পিতার নাম</div><div class="col-span-2"> জন্ম তারিখ <span class="text-xs">(জন্ম নিবন্ধন অনুসারে)</span></div><div class="col-span-2">পারার বিবরণ <span class="text-xs">(হিফজের ক্ষেত্রে)</span></div><div class="col-span-2">ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা)</div><div>ডিলিট</div></div>',2),Xe={class:"grid md:grid-cols-12 gap-4 border rounded p-2"},Ze={class:"flex items-center justify-center"},He={class:"text-lg font-semibold mb-2 px-3 py-1 bg-gray-100 rounded-full"},Je={class:"md:col-span-2 grid gap-2"},Pe=e("div",{class:"md:hidden flex font-medium"},"শিক্ষার্থীর নাম:",-1),Qe=["onUpdate:modelValue"],We=["onUpdate:modelValue"],et={class:"md:col-span-2 grid gap-2"},tt=e("div",{class:"md:hidden flex font-medium"},"পিতার নাম:",-1),st=["onUpdate:modelValue"],at=["onUpdate:modelValue"],ot={class:"md:col-span-2"},lt=e("p",{class:"md:hidden flex font-medium"},"জন্ম তারিখ (জন্ম নিবন্ধন অনুসারে)",-1),it={class:"flex relative"},nt={key:0,class:"absolute left-2 top-3"},dt=e("i",{class:"fa fa-check-circle text-green-500"},null,-1),rt=[dt],ct=["onUpdate:modelValue","onBlur","onKeyup"],ut=["onChange","onUpdate:modelValue"],_t={class:"md:col-span-2"},pt=e("p",{class:"md:hidden flex font-medium"},"পারার বিববরণ (হিফজের ক্ষেত্রে)",-1),mt=["onUpdate:modelValue"],vt={class:"md:col-span-2"},ht=e("p",{class:"md:hidden flex font-medium"},"ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা)",-1),ft=["onUpdate:modelValue"],bt={class:"flex justify-end md:justify-center items-start"},yt=["onClick"],gt=e("i",{class:"fas fa-trash-alt"},null,-1),xt=[gt],kt=e("i",{class:"fas fa-plus"},null,-1),Vt=e("hr",{class:"my-4"},null,-1),Ut={key:0,class:"flex flex-col items-center space-y-2"},St={class:"flex flex-col items-center"},Ct={class:"text-xl text-green-600"},wt=["disabled"],zt={class:"flex justify-center"},Dt={key:0,class:"text-xl text-green-600"},$t={key:1,class:"text-xl text-red-600"},Ot={__name:"ApplicationForm",setup(jt){const K=P(),n=ae(),N=re(),O=se(),x=oe(),B=de(),A=le(),F=ie(),M=ne(),z=k(!1),V=k(""),D=k(""),$=k(""),U=k(""),a=k({exam_id:"",zamat_id:"",institute_id:"",area_id:"",group_id:"",gender:"",center_id:"",students:[{registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",date_of_birth:"",para:"",address:""}],payment_method:"Offline",total_amount:0}),Y=async()=>{var s;x.institutes=[],M.groups=[],B.centers=[],N.fee={},await n.fetchLastExam(),a.value.exam_id=(s=n==null?void 0:n.exam)==null?void 0:s.id,await A.fetchAreas(),await F.fetchZamats()};C(()=>a.value.area_id,async s=>{s&&await x.fetchInstitutes({area_id:s,per_page:"all"})}),C(()=>a.value.zamat_id,async s=>{s&&(a.value.group_id="",await M.fetchGroups(s))}),C(()=>a.value.zamat_id,async s=>{s&&q()}),C(()=>a.value.group_id,async s=>{s&&q()}),C($,()=>{U.value=""});const q=async()=>{B.fetchCenters({zamat_id:a.value.zamat_id,group_id:a.value.group_id,gender:a.value.gender})};Q(Y);const G=()=>{a.value.students.push({registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",date_of_birth:"",para:"",address:""})},T=s=>{confirm("ডিলিট নিশ্চিত করুন")&&a.value.students.splice(s,1)},R=()=>{a.value={exam_id:"",zamat_id:"",institute_id:"",area_id:"",group_id:"",gender:"",center_id:"",students:[{registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",input_dob:"",date_of_birth:"",para:"",address:""}],payment_method:"Offline",total_amount:0}},X=async()=>{var s,o;z.value=!0,V.value="",D.value="";try{a.value.total_amount=j.value*(((o=(s=a==null?void 0:a.value)==null?void 0:s.students)==null?void 0:o.length)||0),await O.createApplication(a.value),D.value="আপনার নিবন্ধন সফলভাবে জমা হয়েছে।",R(),K.push("/applications")}catch{V.value="নিবন্ধন জমা দিতে ব্যর্থ হয়েছে।"}finally{z.value=!1}},Z=s=>{V.value=s},j=W(()=>{var _,v,y,S;let s=parseInt(((_=n==null?void 0:n.exam)==null?void 0:_.registration_fee)||0);const o=ce();return o>((v=n==null?void 0:n.exam)==null?void 0:v.reg_final_date)?(Z("নিবন্ধন গ্রহণ বন্ধ রয়েছে"),s=0):(o>((y=n==null?void 0:n.exam)==null?void 0:y.reg_last_date)&&(s+=parseInt(((S=n==null?void 0:n.exam)==null?void 0:S.late_fee)||0)),s)}),H=async()=>{a.value.area_id="",a.value.institute_id="",x.institutes=[],U.value="";const s=await x.findInstituteByCode($.value);s?(x.institutes[0]=s,a.value.area_id=s.area_id,a.value.institute_id=s.id):U.value="খুঁজে পাওয়া যায় নি!"},E=s=>{if(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(s.input_dob)){const[_,v,y]=s.input_dob.split("/");s.date_of_birth=`${y}-${v}-${_}`}else s.date_of_birth="",s.input_dob=""},J=s=>{if(s.date_of_birth&&/^\d{4}-\d{2}-\d{2}$/.test(s.date_of_birth)){const[o,_,v]=s.date_of_birth.split("-");s.input_dob=`${v}/${_}/${o}`}else s.input_dob=""};return(s,o)=>{var _,v,y,S;return l(),i("div",ue,[e("div",_e,[e("div",pe,[e("div",me,[e("h2",ve,r((v=(_=p(n))==null?void 0:_.exam)==null?void 0:v.name),1),e("div",he,[e("p",fe,[m(" নিবন্ধনের শেষ তারিখ "),e("b",null,r(new Date((y=p(n).exam)==null?void 0:y.reg_last_date).toLocaleDateString("bn-BD")),1),m(" ইং। বিলম্ব ফি সহ নিবন্ধনের চূড়ান্ত তারিখ "),e("b",null,r(new Date((S=p(n).exam)==null?void 0:S.reg_final_date).toLocaleDateString("bn-BD")),1),m(" ইং। ")])]),be])]),e("div",ye,[e("div",ge,[c(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>$.value=t),type:"search",class:ee(["input-1 text-center",{"border-red-500":!!U.value}]),placeholder:"ইলহাক নাম্বার"},null,2),[[h,$.value]]),e("div",xe,r(U.value),1),e("button",{onClick:H,type:"button",class:"btn-2"},[ke,m(" খুঁজুন ")])])]),e("form",{onSubmit:I(X,["prevent"]),onKeydown:o[9]||(o[9]=L(I(()=>{},["prevent"]),["enter"])),class:"space-y-4"},[e("div",Ve,[e("div",Ue,[Se,c(e("select",{"onUpdate:modelValue":o[1]||(o[1]=t=>a.value.area_id=t),class:"input-1"},[Ce,(l(!0),i(f,null,b(p(A).areas,t=>(l(),i("option",{key:t.id,value:t.id},r(t.name),9,we))),128))],512),[[w,a.value.area_id]])]),e("div",null,[ze,c(e("select",{"onUpdate:modelValue":o[2]||(o[2]=t=>a.value.institute_id=t),class:"input-1",disabled:!a.value.area_id},[$e,(l(!0),i(f,null,b(p(x).institutes,t=>(l(),i("option",{key:t.id,value:t.id},r(t.institute_code)+" - "+r(t.name),9,je))),128))],8,De),[[w,a.value.institute_id]])]),e("div",null,[Be,c(e("select",{"onUpdate:modelValue":o[3]||(o[3]=t=>a.value.zamat_id=t),class:"input-1"},[Me,(l(!0),i(f,null,b(p(F).departments,t=>(l(),i("optgroup",{label:t.name,key:t.id},[(l(!0),i(f,null,b(t.zamats,u=>(l(),i("option",{key:u.id,value:u.id},r(u.name),9,Fe))),128))],8,Ae))),128))],512),[[w,a.value.zamat_id]])]),e("div",null,[qe,c(e("select",{"onUpdate:modelValue":o[4]||(o[4]=t=>a.value.group_id=t),class:"input-1",disabled:!a.value.zamat_id},[Ie,(l(!0),i(f,null,b(p(M).groups,t=>(l(),i("option",{key:t.id,value:t.id},[m(r(t.name)+" (",1),(l(!0),i(f,null,b(t.areas,(u,d)=>(l(),i(f,{key:u.id},[d?(l(),i("span",Ke,", ")):g("",!0),e("span",null,r(u.name),1)],64))),128)),m(") ")],8,Le))),128))],8,Ee),[[w,a.value.group_id]])]),g("",!0),e("div",null,[Ne,c(e("select",{"onUpdate:modelValue":o[6]||(o[6]=t=>a.value.center_id=t),class:"input-1",disabled:!a.value.zamat_id},[Ye,(l(!0),i(f,null,b(p(B).centers,t=>{var u;return l(),i("option",{key:t.id,value:t==null?void 0:t.institute_id},r((u=t==null?void 0:t.institute)==null?void 0:u.name),9,Ge)}),128))],8,Oe),[[w,a.value.center_id]])])]),e("div",Te,[Re,(l(!0),i(f,null,b(a.value.students,(t,u)=>(l(),i("div",{key:u},[e("div",Xe,[e("div",Ze,[e("div",He,r(u+1),1)]),e("div",Je,[Pe,c(e("input",{"onUpdate:modelValue":d=>t.name=d,type:"text",class:"input-1",required:"",placeholder:"বাংলায়"},null,8,Qe),[[h,t.name]]),c(e("input",{"onUpdate:modelValue":d=>t.name_arabic=d,dir:"rtl",type:"text",class:"input-1",placeholder:"العربية"},null,8,We),[[h,t.name_arabic]])]),e("div",et,[tt,c(e("input",{"onUpdate:modelValue":d=>t.father_name=d,required:"",type:"text",class:"input-1",placeholder:"বাংলায়"},null,8,st),[[h,t.father_name]]),c(e("input",{"onUpdate:modelValue":d=>t.father_name_arabic=d,dir:"rtl",type:"text",class:"input-1",placeholder:"العربية"},null,8,at),[[h,t.father_name_arabic]])]),e("div",ot,[lt,e("div",it,[t.date_of_birth?(l(),i("div",nt,rt)):g("",!0),c(e("input",{"onUpdate:modelValue":d=>t.input_dob=d,required:"",type:"text",placeholder:"DD/MM/YYYY",class:"input-1 border-r-0 rounded-r-none text-center",onBlur:d=>E(t),onKeyup:L(d=>E(t),["enter"])},null,40,ct),[[h,t.input_dob]]),c(e("input",{onChange:d=>J(t),"onUpdate:modelValue":d=>t.date_of_birth=d,required:"",type:"date",class:"input-1 w-10 px-2 rounded-l-none"},null,40,ut),[[h,t.date_of_birth]])])]),e("div",_t,[pt,c(e("input",{"onUpdate:modelValue":d=>t.para=d,type:"text",class:"input-1",placeholder:"পারার বিবরণ"},null,8,mt),[[h,t.para]])]),e("div",vt,[ht,c(e("input",{"onUpdate:modelValue":d=>t.address=d,type:"text",class:"input-1",placeholder:"গ্রাম, ডাকঘর, থানা, জেলা"},null,8,ft),[[h,t.address]])]),e("div",bt,[e("button",{type:"button",onClick:d=>T(u),class:"btn-4 py-2"},xt,8,yt)])])]))),128)),e("div",{class:"flex justify-center"},[e("button",{type:"button",onClick:G,class:"btn-contrast"},[kt,m(" আরেকজন যুক্ত করুন ")])])]),Vt,j.value?(l(),i("div",Ut,[e("div",St,[e("div",null," প্রতি শিক্ষার্থীর ফি: "+r(p(n).exam.registration_fee)+" টাকা। বিলম্ব ফি (প্রযোজ্য ক্ষেত্রে): "+r(p(n).exam.late_fee)+" টাকা। ",1),e("div",Ct,[m(" শিক্ষার্থীর সংখ্যা:"),e("b",null,r(a.value.students.length),1),m(" X "),e("b",null,r(j.value),1),m(" টাকা = "),e("b",null,r(a.value.students.length*j.value)+" টাকা",1)])]),g("",!0),e("button",{type:"submit",disabled:z.value,class:"btn-2"},r(z.value?"সাবমিট হচ্ছে...":"সাবমিট করুন"),9,wt)])):g("",!0),e("div",zt,[D.value?(l(),i("div",Dt,r(D.value),1)):g("",!0),V.value?(l(),i("div",$t,r(V.value),1)):g("",!0)])],32)])])}}};export{Ot as default};
