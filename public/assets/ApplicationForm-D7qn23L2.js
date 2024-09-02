import{f as X,r as M,s as S,o as $,x as H,a as o,c as i,b as e,t as n,d as m,q as p,w as J,i as d,y as b,F as v,m as h,z as E,j as F,e as K,v as g}from"./index-D8NEAiqQ.js";import{u as P}from"./application-DzJyLeew.js";import{u as Q}from"./exam-lq2j1cSA.js";import{u as W}from"./institute-Dwhr2Qyd.js";import{u as Y}from"./area-DOKkhdE7.js";import{u as ee}from"./zamat-B31u1QVz.js";import{u as te}from"./group-BkvasB4k.js";import{u as ae}from"./center-BOo_wz-t.js";import{u as se}from"./fee-B-9dd5dK.js";import{t as le}from"./date-Cwd8pd0-.js";const oe={class:"mx-4"},ie={class:"md:p-8 p-4 card-bg space-y-2"},ne={class:"flex gap-4 justify-center items-center"},de={class:"flex flex-col items-center space-y-2"},ue={class:"title-xl"},ce={class:"flex flex-wrap gap-2 text-center"},re={class:"md:text-base text-sm"},_e=e("div",{class:"px-6 bg-sky-700 rounded-full pt-1"},[e("h2",{class:"title-lg text-white"},"আবেদন পত্র")],-1),me={class:"grid md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-md"},pe=e("label",{class:"block text-gray-700"},"এলাকা নির্বাচন করুন",-1),ve=e("option",{value:"",disabled:""},"Select Area",-1),he=["value"],fe=e("label",{class:"block text-gray-700"},"মাদরাসা নির্বাচন করুন",-1),be=["disabled"],ge=e("option",{value:"",disabled:""},"Select Institute",-1),xe=["value"],ye=e("label",{class:"block text-gray-700"},"মারহালা নির্বাচন করুন",-1),Ve=e("option",{value:"",disabled:""},"Select Marhala",-1),ke=["label"],Se=["value"],Ue=e("label",{class:"block text-gray-700"},"গ্রুপ নির্বাচন করুন (যদি থাকে)",-1),we=["disabled"],ze=e("option",{value:"",disabled:""},"Select Group",-1),Me=["value"],je=e("label",{class:"block text-gray-700"},"ধরন নির্বাচন করুন",-1),Ae=e("option",{value:"",disabled:""},"Select Gender",-1),Ce=e("option",{value:"male"},"ছাত্র",-1),De=e("option",{value:"female"},"ছাত্রী",-1),Fe=[Ae,Ce,De],Oe=e("label",{class:"block text-gray-700"},"কেন্দ্র নির্বাচন করুন",-1),Be=["disabled"],Ee=e("option",{value:"",disabled:""},"Select Center",-1),Le=["value"],qe={class:"space-y-2"},Ge=K('<div class="flex justify-center"><h4 class="title-lg">শিক্ষার্থীদের তথ্য</h4></div><div class="hidden md:grid md:grid-cols-12 bg-gray-100 py-2 px-2 text-center divide-x-2 font-medium"><div class="text-center">ক্র</div><div class="col-span-2 text-center">শিক্ষার্থীর নাম</div><div class="col-span-2">পিতার নাম</div><div class="col-span-2"> জন্ম তারিখ <span class="text-xs">(জন্ম নিবন্ধন অনুসারে)</span></div><div class="col-span-4">ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা)</div><div>ডিলিট</div></div>',2),Ne={class:"grid md:grid-cols-12 gap-4 border rounded p-2"},Re={class:"flex items-center justify-center"},Te={class:"text-lg font-semibold mb-2 px-3 py-1 bg-gray-100 rounded-full"},Ze={class:"md:col-span-2 grid gap-2"},Ie=e("div",{class:"md:hidden flex font-medium"},"শিক্ষার্থীর নাম:",-1),Xe=["onUpdate:modelValue"],$e=["onUpdate:modelValue"],He={class:"md:col-span-2 grid gap-2"},Je=e("div",{class:"md:hidden flex font-medium"},"পিতার নাম:",-1),Ke=["onUpdate:modelValue"],Pe=["onUpdate:modelValue"],Qe={class:"md:col-span-2"},We=e("p",{class:"md:hidden flex font-medium"},"জন্ম তারিখ (জন্ম নিবন্ধন অনুসারে)",-1),Ye=["onUpdate:modelValue"],et={class:"md:col-span-4"},tt=e("p",{class:"md:hidden flex font-medium"},"ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা)",-1),at=["onUpdate:modelValue"],st={class:"flex justify-end md:justify-center items-start"},lt=["onClick"],ot=e("i",{class:"fas fa-trash-alt"},null,-1),it=[ot],nt=e("i",{class:"fas fa-plus"},null,-1),dt=e("hr",{class:"my-4"},null,-1),ut={key:0,class:"flex flex-col items-center space-y-2"},ct={class:"flex flex-col items-center"},rt={class:"text-xl text-green-600"},_t={class:"flex flex-col items-center"},mt=e("h4",{class:"title-md"},"টাকা জমা দেয়ার মাধ্যম সিলেক্ট করুন",-1),pt={class:"inline-flex items-center"},vt={class:"inline-flex items-center ml-4"},ht=["disabled"],ft={class:"flex justify-center"},bt={key:0,class:"text-xl text-green-600"},gt={key:1,class:"text-xl text-red-600"},Ct={__name:"ApplicationForm",setup(xt){const L=X(),u=Q(),r=se(),q=P(),j=W(),A=ae(),O=Y(),B=ee(),C=te(),U=M(!1),x=M(""),w=M(""),a=M({exam_id:"",zamat_id:"",institute_id:"",area_id:"",group_id:"",gender:"",center_id:"",students:[{registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",date_of_birth:"",address:""}],payment_method:"Online",total_amount:0}),G=async()=>{var s;j.institutes=[],C.groups=[],A.centers=[],r.fee={},await u.fetchLastExam(),a.value.exam_id=(s=u==null?void 0:u.exam)==null?void 0:s.id,await O.fetchAreas(),await B.fetchZamats()};S(()=>a.value.area_id,async s=>{s&&await j.fetchInstitutes({area_id:s})}),S(()=>a.value.zamat_id,async s=>{s&&(a.value.group_id="",await C.fetchGroups(s),await r.fetchFeeByExamAndZamat(a.value.exam_id,a.value.zamat_id))}),S(()=>a.value.zamat_id,async s=>{s&&a.value.gender&&D()}),S(()=>a.value.gender,async s=>{s&&a.value.gender&&D()}),S(()=>a.value.group_id,async s=>{s&&a.value.gender&&D()});const D=async()=>{A.fetchCenters({zamat_id:a.value.zamat_id,group_id:a.value.group_id,gender:a.value.gender})};$(G);const N=()=>{a.value.students.push({registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",date_of_birth:"",address:""})},R=s=>{a.value.students.splice(s,1)},T=()=>{a.value={exam_id:"",zamat_id:"",institute_id:"",area_id:"",group_id:"",gender:"",center_id:"",students:[{registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",date_of_birth:"",address:""}],payment_method:"Online",total_amount:0}},Z=async()=>{var s,l;U.value=!0,x.value="",w.value="";try{a.value.total_amount=z.value*(((l=(s=a==null?void 0:a.value)==null?void 0:s.students)==null?void 0:l.length)||0),await q.createApplication(a.value),w.value="আপনার আবেদন সফলভাবে জমা হয়েছে।",T(),L.push("/applications")}catch{x.value="আবেদন জমা দিতে ব্যর্থ হয়েছে।"}finally{U.value=!1}},I=s=>{x.value=s},z=H(()=>{var f,y,V,k;let s=((f=r==null?void 0:r.fee)==null?void 0:f.amount)||0;const l=le();return l>((y=u==null?void 0:u.exam)==null?void 0:y.reg_final_date)?(I("আবেদন গ্রহণ বন্ধ রয়েছে"),s=0):(l>((V=u==null?void 0:u.exam)==null?void 0:V.reg_last_date)&&(s+=((k=r==null?void 0:r.fee)==null?void 0:k.late_fee)||0),s)});return(s,l)=>{var f,y,V,k;return o(),i("div",oe,[e("div",ie,[e("div",ne,[e("div",de,[e("h2",ue,n((y=(f=m(u))==null?void 0:f.exam)==null?void 0:y.name),1),e("div",ce,[e("p",re,[p(" আবেদনের শেষ তারিখ "),e("b",null,n(new Date((V=m(u).exam)==null?void 0:V.reg_last_date).toLocaleDateString("bn-BD")),1),p(" । বিলম্ব ফি সহ আবেদনের চূড়ান্ত তারিখ "),e("b",null,n(new Date((k=m(u).exam)==null?void 0:k.reg_final_date).toLocaleDateString("bn-BD")),1),p(" । ")])]),_e])]),e("form",{onSubmit:J(Z,["prevent"]),class:"space-y-4"},[e("div",me,[e("div",null,[pe,d(e("select",{"onUpdate:modelValue":l[0]||(l[0]=t=>a.value.area_id=t),class:"input-1"},[ve,(o(!0),i(v,null,h(m(O).areas,t=>(o(),i("option",{key:t.id,value:t.id},n(t.name),9,he))),128))],512),[[b,a.value.area_id]])]),e("div",null,[fe,d(e("select",{"onUpdate:modelValue":l[1]||(l[1]=t=>a.value.institute_id=t),class:"input-1",disabled:!a.value.area_id},[ge,(o(!0),i(v,null,h(m(j).institutes,t=>(o(),i("option",{key:t.id,value:t.id},n(t.name),9,xe))),128))],8,be),[[b,a.value.institute_id]])]),e("div",null,[ye,d(e("select",{"onUpdate:modelValue":l[2]||(l[2]=t=>a.value.zamat_id=t),class:"input-1"},[Ve,(o(!0),i(v,null,h(m(B).departments,t=>(o(),i("optgroup",{label:t.name,key:t.id},[(o(!0),i(v,null,h(t.zamats,_=>(o(),i("option",{key:_.id,value:_.id},n(_.name),9,Se))),128))],8,ke))),128))],512),[[b,a.value.zamat_id]])]),e("div",null,[Ue,d(e("select",{"onUpdate:modelValue":l[3]||(l[3]=t=>a.value.group_id=t),class:"input-1",disabled:!a.value.zamat_id},[ze,(o(!0),i(v,null,h(m(C).groups,t=>(o(),i("option",{key:t.id,value:t.id},n(t.name),9,Me))),128))],8,we),[[b,a.value.group_id]])]),e("div",null,[je,d(e("select",{"onUpdate:modelValue":l[4]||(l[4]=t=>a.value.gender=t),class:"input-1"},Fe,512),[[b,a.value.gender]])]),e("div",null,[Oe,d(e("select",{"onUpdate:modelValue":l[5]||(l[5]=t=>a.value.center_id=t),class:"input-1",disabled:!a.value.zamat_id||!a.value.gender},[Ee,(o(!0),i(v,null,h(m(A).centers,t=>{var _;return o(),i("option",{key:t.id,value:t==null?void 0:t.institute_id},n((_=t==null?void 0:t.institute)==null?void 0:_.name),9,Le)}),128))],8,Be),[[b,a.value.center_id]])])]),e("div",qe,[Ge,(o(!0),i(v,null,h(a.value.students,(t,_)=>(o(),i("div",{key:_},[e("div",Ne,[e("div",Re,[e("div",Te,n(_+1),1)]),e("div",Ze,[Ie,d(e("input",{"onUpdate:modelValue":c=>t.name=c,type:"text",class:"input-1",required:"",placeholder:"বাংলায়"},null,8,Xe),[[g,t.name]]),d(e("input",{"onUpdate:modelValue":c=>t.name_arabic=c,dir:"rtl",type:"text",class:"input-1",placeholder:"العربية"},null,8,$e),[[g,t.name_arabic]])]),e("div",He,[Je,d(e("input",{"onUpdate:modelValue":c=>t.father_name=c,required:"",type:"text",class:"input-1",placeholder:"বাংলায়"},null,8,Ke),[[g,t.father_name]]),d(e("input",{"onUpdate:modelValue":c=>t.father_name_arabic=c,dir:"rtl",type:"text",class:"input-1",placeholder:"العربية"},null,8,Pe),[[g,t.father_name_arabic]])]),e("div",Qe,[We,d(e("input",{"onUpdate:modelValue":c=>t.date_of_birth=c,required:"",type:"date",class:"input-1"},null,8,Ye),[[g,t.date_of_birth]])]),e("div",et,[tt,d(e("input",{"onUpdate:modelValue":c=>t.address=c,type:"text",class:"input-1",placeholder:"গ্রাম, ডাকঘর, থানা, জেলা"},null,8,at),[[g,t.address]])]),e("div",st,[e("button",{type:"button",onClick:c=>R(_),class:"btn-4 py-2"},it,8,lt)])])]))),128)),e("div",{class:"flex justify-center"},[e("button",{type:"button",onClick:N,class:"btn-contrast"},[nt,p(" আরেকজন যুক্ত করুন ")])])]),dt,z.value?(o(),i("div",ut,[e("div",ct,[e("div",null," প্রতি শিক্ষার্থীর ফি: "+n(m(r).fee.amount)+" টাকা। বিলম্ব ফি (প্রযোজ্য ক্ষেত্রে): "+n(m(r).fee.late_fee)+" টাকা। ",1),e("div",rt,[p(" শিক্ষার্থীর সংখ্যা:"),e("b",null,n(a.value.students.length),1),p(" X "),e("b",null,n(z.value),1),p(" টাকা = "),e("b",null,n(a.value.students.length*z.value)+" টাকা",1)])]),e("div",_t,[mt,e("div",null,[e("label",pt,[d(e("input",{type:"radio","onUpdate:modelValue":l[6]||(l[6]=t=>a.value.payment_method=t),value:"Online",class:"mr-2"},null,512),[[E,a.value.payment_method]]),p(" Online (বিকাশ) ")]),e("label",vt,[d(e("input",{type:"radio","onUpdate:modelValue":l[7]||(l[7]=t=>a.value.payment_method=t),value:"Offline",class:"mr-2"},null,512),[[E,a.value.payment_method]]),p(" Offline (হাতে) ")])])]),e("button",{type:"submit",disabled:U.value,class:"btn-2"},n(U.value?"সাবমিট হচ্ছে...":"সাবমিট করুন"),9,ht)])):F("",!0),e("div",ft,[w.value?(o(),i("div",bt,n(w.value),1)):F("",!0),x.value?(o(),i("div",gt,n(x.value),1)):F("",!0)])],32)])])}}};export{Ct as default};
