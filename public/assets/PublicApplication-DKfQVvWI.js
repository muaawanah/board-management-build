import{l as H,r as k,B as C,h as J,g as Q,z as W,o,c as l,a as e,t as c,i as m,A as p,v as r,x as h,n as ee,s as te,C as w,F as f,b,f as x,d as se,w as ae,k as oe,D as le}from"./index-Bg3J5TkX.js";import{u as ie}from"./application-DdY-R0ip.js";import{u as ne}from"./exam-Dr413bi5.js";import{u as de}from"./institute-DU9N27Xk.js";import{u as ce}from"./area-Cetf-21q.js";import{u as re}from"./zamat-CEJ2NzWs.js";import{u as ue}from"./group-BLQ3hy2Z.js";import{u as _e}from"./center-GlMrWtpQ.js";import{u as pe}from"./fee-rBhbS4Qm.js";import{t as me}from"./date-Cs-xe4uq.js";const ve={class:"my-container py-6"},he={class:"md:p-8 p-4 card-bg space-y-2"},fe={class:"flex gap-4 justify-center items-center"},be={class:"flex flex-col items-center space-y-2"},ge={class:"title-xl"},xe={class:"flex flex-wrap gap-2 text-center"},ye={class:"md:text-base text-sm"},ke=e("div",{class:"px-6 bg-sky-700 rounded-full pt-1"},[e("h2",{class:"title-lg text-white"},"নিবন্ধন পত্র")],-1),Ve={class:"flex justify-center items-center"},Se={class:"flex gap-2 justify-center items-center bg-gray-100 p-4 rounded-lg"},Ue={class:"text-red-500"},Ce=e("i",{class:"fas fa-search"},null,-1),we={class:"grid md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-md"},De={class:"col-start-1"},ze=e("label",{class:"block text-gray-700"},"অঞ্চল নির্বাচন করুন",-1),$e=e("option",{value:"",disabled:""},"Select Area",-1),Me=["value"],Be=e("label",{class:"block text-gray-700"},"মাদরাসা নির্বাচন করুন",-1),je=["disabled"],Ae=e("option",{value:"",disabled:""},"Select Institute",-1),Ie=["value"],Fe=e("label",{class:"block text-gray-700"},"মারহালা নির্বাচন করুন",-1),Le=e("option",{value:"",disabled:""},"Select Marhala",-1),Ee=["label"],Ne=["value"],qe=e("label",{class:"block text-gray-700"},"গ্রুপ নির্বাচন করুন (যদি থাকে)",-1),Oe=["disabled"],Ye=e("option",{value:"",disabled:""},"Select Group",-1),Ge=["value"],Ke={key:0},Re=e("label",{class:"block text-gray-700"},"কেন্দ্র নির্বাচন করুন",-1),Pe=["disabled"],Te=e("option",{value:"",disabled:""},"Select Center",-1),Xe=["value"],Ze={class:"space-y-2"},He=oe('<div class="flex justify-center"><h4 class="title-lg">শিক্ষার্থীদের তথ্য</h4></div><div class="hidden md:grid md:grid-cols-12 bg-gray-100 py-2 px-2 text-center divide-x-2 font-medium"><div class="text-center">ক্র</div><div class="col-span-2 text-center">শিক্ষার্থীর নাম</div><div class="col-span-2">পিতার নাম</div><div class="col-span-2"> জন্ম তারিখ <br><span class="text-xs">(জন্ম নিবন্ধন অনুসারে)</span></div><div class="col-span-2"> পারার বিবরণ <br><span class="text-xs">(হিফজের ক্ষেত্রে)</span></div><div class="col-span-2"> ঠিকানা <br><span class="text-xs">(গ্রাম, ডাকঘর, থানা, জেলা)</span></div><div>ডিলিট</div></div>',2),Je={class:"grid md:grid-cols-12 gap-4 border rounded p-2"},Qe={class:"flex items-center justify-center"},We={class:"text-lg font-semibold mb-2 px-3 py-1 bg-gray-100 rounded-full"},et={class:"md:col-span-2 grid gap-2"},tt=e("div",{class:"md:hidden flex font-medium"},"শিক্ষার্থীর নাম:",-1),st=["onUpdate:modelValue"],at=["onUpdate:modelValue"],ot={class:"md:col-span-2 grid gap-2"},lt=e("div",{class:"md:hidden flex font-medium"},"পিতার নাম:",-1),it=["onUpdate:modelValue"],nt=["onUpdate:modelValue"],dt={class:"md:col-span-2"},ct=e("p",{class:"md:hidden flex font-medium"},"জন্ম তারিখ (জন্ম নিবন্ধন অনুসারে)",-1),rt={class:"flex relative"},ut={key:0,class:"absolute left-2 top-3"},_t=e("i",{class:"fa fa-check-circle text-green-500"},null,-1),pt=[_t],mt=["onUpdate:modelValue","onBlur","onKeyup"],vt=["onChange","onUpdate:modelValue"],ht={class:"md:col-span-2"},ft=e("p",{class:"md:hidden flex font-medium"},"পারার বিববরণ (হিফজের ক্ষেত্রে)",-1),bt=["onUpdate:modelValue"],gt={class:"md:col-span-2"},xt=e("p",{class:"md:hidden flex font-medium"},"ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা)",-1),yt=["onUpdate:modelValue"],kt={class:"flex justify-end md:justify-center items-start"},Vt=["onClick"],St=e("i",{class:"fas fa-trash-alt"},null,-1),Ut=[St],Ct=e("i",{class:"fas fa-plus"},null,-1),wt=e("hr",{class:"my-4"},null,-1),Dt={key:0,class:"flex flex-col items-center space-y-2"},zt={class:"flex flex-col items-center"},$t={class:"text-xl text-green-600"},Mt=["disabled"],Bt={class:"flex justify-center"},jt={key:0,class:"text-xl text-green-600"},At={key:1,class:"text-xl text-red-600"},It={class:"flex mt-4"},Tt={__name:"PublicApplication",setup(Ft){const N=H(),i=ne(),q=pe(),O=ie(),y=de(),B=_e(),A=ce(),I=re(),j=ue(),D=k(!1),V=k(""),z=k(""),$=k(""),S=k(""),a=k({exam_id:"",zamat_id:"",institute_id:"",area_id:"",group_id:"",gender:"",center_id:"",students:[{registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",date_of_birth:"",address:""}],payment_method:"Offline",total_amount:0}),Y=async()=>{var s;y.institutes=[],j.groups=[],B.centers=[],q.fee={},await i.fetchLastExam(),a.value.exam_id=(s=i==null?void 0:i.exam)==null?void 0:s.id,await A.fetchAreas(),await I.fetchZamats()};C(()=>a.value.area_id,async s=>{s&&await y.fetchInstitutes({area_id:s,per_page:"all"})}),C(()=>a.value.zamat_id,async s=>{s&&(a.value.group_id="",await j.fetchGroups(s))}),C(()=>a.value.zamat_id,async s=>{s&&F()}),C(()=>a.value.group_id,async s=>{s&&F()}),C($,()=>{S.value=""});const F=async()=>{B.fetchCenters({zamat_id:a.value.zamat_id,group_id:a.value.group_id,gender:a.value.gender})};J(Y);const G=()=>{a.value.students.push({registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",date_of_birth:"",para:"",address:""})},K=s=>{confirm("ডিলিট নিশ্চিত করুন")&&a.value.students.splice(s,1)},R=()=>{a.value={exam_id:"",zamat_id:"",institute_id:"",area_id:"",group_id:"",gender:"",center_id:"",students:[{registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",date_of_birth:"",address:""}],payment_method:"Offline",total_amount:0}},P=async()=>{var s,n;D.value=!0,V.value="",z.value="";try{a.value.total_amount=M.value*(((n=(s=a==null?void 0:a.value)==null?void 0:s.students)==null?void 0:n.length)||0);const _=await O.createApplication(a.value);localStorage.setItem("applicationId",_.id),localStorage.setItem("instituteCode",_.institute.institute_code),z.value="আপনার নিবন্ধন সফলভাবে জমা হয়েছে।",R(),N.push({name:"SuccessMessage"})}catch{V.value="নিবন্ধন জমা দিতে ব্যর্থ হয়েছে।"}finally{D.value=!1}},T=s=>{V.value=s},M=Q(()=>{var _,v,g,U;let s=parseInt(((_=i==null?void 0:i.exam)==null?void 0:_.registration_fee)||0);const n=me();return n>((v=i==null?void 0:i.exam)==null?void 0:v.reg_final_date)?(T("নিবন্ধন গ্রহণ বন্ধ রয়েছে"),s=0):(n>((g=i==null?void 0:i.exam)==null?void 0:g.reg_last_date)&&(s+=parseInt(((U=i==null?void 0:i.exam)==null?void 0:U.late_fee)||0)),s)}),X=async()=>{a.value.area_id="",a.value.institute_id="",y.institutes=[],S.value="";const s=await y.findInstituteByCode($.value);s?(y.institutes[0]=s,a.value.area_id=s.area_id,a.value.institute_id=s.id):S.value="খুঁজে পাওয়া যায় নি!"},L=s=>{if(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(s.input_dob)){const[_,v,g]=s.input_dob.split("/");s.date_of_birth=`${g}-${v}-${_}`}else s.date_of_birth="",s.input_dob=""},Z=s=>{if(s.date_of_birth&&/^\d{4}-\d{2}-\d{2}$/.test(s.date_of_birth)){const[n,_,v]=s.date_of_birth.split("-");s.input_dob=`${v}/${_}/${n}`}else s.input_dob=""};return(s,n)=>{var v,g,U,E;const _=W("RouterLink");return o(),l("div",ve,[e("div",he,[e("div",fe,[e("div",be,[e("h2",ge,c((g=(v=m(i))==null?void 0:v.exam)==null?void 0:g.name),1),e("div",xe,[e("p",ye,[p(" নিবন্ধনের শেষ তারিখ "),e("b",null,c(new Date((U=m(i).exam)==null?void 0:U.reg_last_date).toLocaleDateString("bn-BD")),1),p(" । বিলম্ব ফি সহ নিবন্ধনের চূড়ান্ত তারিখ "),e("b",null,c(new Date((E=m(i).exam)==null?void 0:E.reg_final_date).toLocaleDateString("bn-BD")),1),p(" । ")])]),ke])]),e("div",Ve,[e("div",Se,[r(e("input",{"onUpdate:modelValue":n[0]||(n[0]=t=>$.value=t),type:"search",class:ee(["input-1 text-center",{"border-red-500":!!S.value}]),placeholder:"ইলহাক নাম্বার"},null,2),[[h,$.value]]),e("div",Ue,c(S.value),1),e("button",{onClick:X,type:"button",class:"btn-2"},[Ce,p(" খুঁজুন ")])])]),e("form",{onSubmit:te(P,["prevent"]),class:"space-y-4"},[e("div",we,[e("div",De,[ze,r(e("select",{"onUpdate:modelValue":n[1]||(n[1]=t=>a.value.area_id=t),class:"input-1"},[$e,(o(!0),l(f,null,b(m(A).areas,t=>(o(),l("option",{key:t.id,value:t.id},c(t.name),9,Me))),128))],512),[[w,a.value.area_id]])]),e("div",null,[Be,r(e("select",{"onUpdate:modelValue":n[2]||(n[2]=t=>a.value.institute_id=t),class:"input-1",disabled:!a.value.area_id},[Ae,(o(!0),l(f,null,b(m(y).institutes,t=>(o(),l("option",{key:t.id,value:t.id},c(t.institute_code)+" - "+c(t.name),9,Ie))),128))],8,je),[[w,a.value.institute_id]])]),e("div",null,[Fe,r(e("select",{"onUpdate:modelValue":n[3]||(n[3]=t=>a.value.zamat_id=t),class:"input-1"},[Le,(o(!0),l(f,null,b(m(I).departments,t=>(o(),l("optgroup",{label:t.name,key:t.id},[(o(!0),l(f,null,b(t.zamats,u=>(o(),l("option",{key:u.id,value:u.id},c(u.name),9,Ne))),128))],8,Ee))),128))],512),[[w,a.value.zamat_id]])]),e("div",null,[qe,r(e("select",{"onUpdate:modelValue":n[4]||(n[4]=t=>a.value.group_id=t),class:"input-1",disabled:!a.value.zamat_id},[Ye,(o(!0),l(f,null,b(m(j).groups,t=>(o(),l("option",{key:t.id,value:t.id},[p(c(t.name)+" (",1),(o(!0),l(f,null,b(t.areas,(u,d)=>(o(),l(f,{key:u.id},[d?(o(),l("span",Ke,", ")):x("",!0),e("span",null,c(u.name),1)],64))),128)),p(") ")],8,Ge))),128))],8,Oe),[[w,a.value.group_id]])]),x("",!0),e("div",null,[Re,r(e("select",{"onUpdate:modelValue":n[6]||(n[6]=t=>a.value.center_id=t),class:"input-1",disabled:!a.value.zamat_id},[Te,(o(!0),l(f,null,b(m(B).centers,t=>{var u;return o(),l("option",{key:t.id,value:t==null?void 0:t.institute_id},c((u=t==null?void 0:t.institute)==null?void 0:u.name),9,Xe)}),128))],8,Pe),[[w,a.value.center_id]])])]),e("div",Ze,[He,(o(!0),l(f,null,b(a.value.students,(t,u)=>(o(),l("div",{key:u},[e("div",Je,[e("div",Qe,[e("div",We,c(u+1),1)]),e("div",et,[tt,r(e("input",{"onUpdate:modelValue":d=>t.name=d,type:"text",class:"input-1",required:"",placeholder:"বাংলায়"},null,8,st),[[h,t.name]]),r(e("input",{"onUpdate:modelValue":d=>t.name_arabic=d,dir:"rtl",type:"text",class:"input-1",placeholder:"العربية"},null,8,at),[[h,t.name_arabic]])]),e("div",ot,[lt,r(e("input",{"onUpdate:modelValue":d=>t.father_name=d,required:"",type:"text",class:"input-1",placeholder:"বাংলায়"},null,8,it),[[h,t.father_name]]),r(e("input",{"onUpdate:modelValue":d=>t.father_name_arabic=d,dir:"rtl",type:"text",class:"input-1",placeholder:"العربية"},null,8,nt),[[h,t.father_name_arabic]])]),e("div",dt,[ct,e("div",rt,[t.date_of_birth?(o(),l("div",ut,pt)):x("",!0),r(e("input",{"onUpdate:modelValue":d=>t.input_dob=d,required:"",type:"text",placeholder:"DD/MM/YYYY",class:"input-1 border-r-0 rounded-r-none text-center",onBlur:d=>L(t),onKeyup:le(d=>L(t),["enter"])},null,40,mt),[[h,t.input_dob]]),r(e("input",{onChange:d=>Z(t),"onUpdate:modelValue":d=>t.date_of_birth=d,required:"",type:"date",class:"input-1 w-10 px-2 rounded-l-none"},null,40,vt),[[h,t.date_of_birth]])])]),e("div",ht,[ft,r(e("input",{"onUpdate:modelValue":d=>t.para=d,type:"text",class:"input-1",placeholder:"পারার বিবরণ"},null,8,bt),[[h,t.para]])]),e("div",gt,[xt,r(e("input",{"onUpdate:modelValue":d=>t.address=d,type:"text",class:"input-1",placeholder:"গ্রাম, ডাকঘর, থানা, জেলা"},null,8,yt),[[h,t.address]])]),e("div",kt,[e("button",{type:"button",onClick:d=>K(u),class:"btn-4 py-2"},Ut,8,Vt)])])]))),128)),e("div",{class:"flex justify-center"},[e("button",{type:"button",onClick:G,class:"btn-contrast"},[Ct,p(" আরেকজন যুক্ত করুন ")])])]),wt,M.value?(o(),l("div",Dt,[e("div",zt,[e("div",null," প্রতি শিক্ষার্থীর ফি: "+c(m(i).exam.registration_fee)+" টাকা। বিলম্ব ফি (প্রযোজ্য ক্ষেত্রে): "+c(m(i).exam.late_fee)+" টাকা। ",1),e("div",$t,[p(" শিক্ষার্থীর সংখ্যা:"),e("b",null,c(a.value.students.length),1),p(" X "),e("b",null,c(M.value),1),p(" টাকা = "),e("b",null,c(a.value.students.length*M.value)+" টাকা",1)])]),x("",!0),e("button",{type:"submit",disabled:D.value,class:"btn-2"},c(D.value?"সাবমিট হচ্ছে...":"সাবমিট করুন"),9,Mt)])):x("",!0),e("div",Bt,[z.value?(o(),l("div",jt,c(z.value),1)):x("",!0),V.value?(o(),l("div",At,c(V.value),1)):x("",!0)])],32)]),e("div",It,[se(_,{to:{name:"PublicFunctions"},class:"btn-3"},{default:ae(()=>[p("পিছনে যান")]),_:1})])])}}};export{Tt as default};
