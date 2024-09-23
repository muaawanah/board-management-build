import{f as H,r as g,s as w,o as J,x as K,a as i,c as o,b as e,t as n,d as _,q as p,i as r,v as h,y as P,w as Q,z as C,F as m,m as v,j as y,e as W}from"./index-DDuwzY18.js";import{u as Y}from"./application-q22JF7XT.js";import{u as ee}from"./exam-CA52_oIc.js";import{u as te}from"./institute-CTY5MPyn.js";import{u as se}from"./area-D3RczJB-.js";import{u as ae}from"./zamat-q7u1FqO9.js";import{u as le}from"./group-BmEBaFxL.js";import{u as ie}from"./center-Bd2DlqSa.js";import{u as oe}from"./fee-BDk3VoQ_.js";import{t as ne}from"./date-Cwd8pd0-.js";const de={class:"mx-4"},ue={class:"md:p-8 p-4 card-bg space-y-2"},ce={class:"flex gap-4 justify-center items-center"},re={class:"flex flex-col items-center space-y-2"},_e={class:"title-xl"},pe={class:"flex flex-wrap gap-2 text-center"},me={class:"md:text-base text-sm"},ve=e("div",{class:"px-6 bg-sky-700 rounded-full pt-1"},[e("h2",{class:"title-lg text-white"},"নিবন্ধন পত্র")],-1),he={class:"flex justify-center items-center"},fe={class:"flex gap-2 justify-center items-center bg-gray-100 p-4 rounded-lg"},be={class:"text-red-500"},ge=e("i",{class:"fas fa-search"},null,-1),ye={class:"grid md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-md"},xe={class:"col-start-1"},ke=e("label",{class:"block text-gray-700"},"অঞ্চল নির্বাচন করুন",-1),Ve=e("option",{value:"",disabled:""},"Select Area",-1),Se=["value"],Ue=e("label",{class:"block text-gray-700"},"মাদরাসা নির্বাচন করুন",-1),we=["disabled"],Ce=e("option",{value:"",disabled:""},"Select Institute",-1),ze=["value"],je=e("label",{class:"block text-gray-700"},"মারহালা নির্বাচন করুন",-1),De=e("option",{value:"",disabled:""},"Select Marhala",-1),Me=["label"],Ae=["value"],Fe=e("label",{class:"block text-gray-700"},"গ্রুপ নির্বাচন করুন (যদি থাকে)",-1),Be=["disabled"],Ee=e("option",{value:"",disabled:""},"Select Group",-1),Le=["value"],qe={key:0},Ne=e("label",{class:"block text-gray-700"},"কেন্দ্র নির্বাচন করুন",-1),Ge=["disabled"],Ie=e("option",{value:"",disabled:""},"Select Center",-1),Oe=["value"],Te={class:"space-y-2"},Re=W('<div class="flex justify-center"><h4 class="title-lg">শিক্ষার্থীদের তথ্য</h4></div><div class="hidden md:grid md:grid-cols-12 bg-gray-100 py-2 px-2 text-center divide-x-2 font-medium"><div class="text-center">ক্র</div><div class="col-span-2 text-center">শিক্ষার্থীর নাম</div><div class="col-span-2">পিতার নাম</div><div class="col-span-2"> জন্ম তারিখ <span class="text-xs">(জন্ম নিবন্ধন অনুসারে)</span></div><div class="col-span-4">ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা)</div><div>ডিলিট</div></div>',2),Xe={class:"grid md:grid-cols-12 gap-4 border rounded p-2"},Ze={class:"flex items-center justify-center"},$e={class:"text-lg font-semibold mb-2 px-3 py-1 bg-gray-100 rounded-full"},He={class:"md:col-span-2 grid gap-2"},Je=e("div",{class:"md:hidden flex font-medium"},"শিক্ষার্থীর নাম:",-1),Ke=["onUpdate:modelValue"],Pe=["onUpdate:modelValue"],Qe={class:"md:col-span-2 grid gap-2"},We=e("div",{class:"md:hidden flex font-medium"},"পিতার নাম:",-1),Ye=["onUpdate:modelValue"],et=["onUpdate:modelValue"],tt={class:"md:col-span-2"},st=e("p",{class:"md:hidden flex font-medium"},"জন্ম তারিখ (জন্ম নিবন্ধন অনুসারে)",-1),at=["onUpdate:modelValue"],lt={class:"md:col-span-4"},it=e("p",{class:"md:hidden flex font-medium"},"ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা)",-1),ot=["onUpdate:modelValue"],nt={class:"flex justify-end md:justify-center items-start"},dt=["onClick"],ut=e("i",{class:"fas fa-trash-alt"},null,-1),ct=[ut],rt=e("i",{class:"fas fa-plus"},null,-1),_t=e("hr",{class:"my-4"},null,-1),pt={key:0,class:"flex flex-col items-center space-y-2"},mt={class:"flex flex-col items-center"},vt={class:"text-xl text-green-600"},ht=["disabled"],ft={class:"flex justify-center"},bt={key:0,class:"text-xl text-green-600"},gt={key:1,class:"text-xl text-red-600"},Mt={__name:"ApplicationForm",setup(yt){const q=H(),l=ee(),N=oe(),G=Y(),f=te(),A=ie(),B=se(),E=ae(),F=le(),z=g(!1),x=g(""),j=g(""),D=g(""),k=g(""),s=g({exam_id:"",zamat_id:"",institute_id:"",area_id:"",group_id:"",gender:"",center_id:"",students:[{registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",date_of_birth:"",address:""}],payment_method:"Online",total_amount:0}),I=async()=>{var a;f.institutes=[],F.groups=[],A.centers=[],N.fee={},await l.fetchLastExam(),s.value.exam_id=(a=l==null?void 0:l.exam)==null?void 0:a.id,await B.fetchAreas(),await E.fetchZamats()};w(()=>s.value.area_id,async a=>{a&&await f.fetchInstitutes({area_id:a,per_page:"all"})}),w(()=>s.value.zamat_id,async a=>{a&&(s.value.group_id="",await F.fetchGroups(a))}),w(()=>s.value.zamat_id,async a=>{a&&L()}),w(()=>s.value.group_id,async a=>{a&&L()}),w(D,()=>{k.value=""});const L=async()=>{A.fetchCenters({zamat_id:s.value.zamat_id,group_id:s.value.group_id,gender:s.value.gender})};J(I);const O=()=>{s.value.students.push({registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",date_of_birth:"",address:""})},T=a=>{confirm("ডিলিট নিশ্চিত করুন")&&s.value.students.splice(a,1)},R=()=>{s.value={exam_id:"",zamat_id:"",institute_id:"",area_id:"",group_id:"",gender:"",center_id:"",students:[{registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",date_of_birth:"",address:""}],payment_method:"Online",total_amount:0}},X=async()=>{var a,d;z.value=!0,x.value="",j.value="";try{s.value.total_amount=M.value*(((d=(a=s==null?void 0:s.value)==null?void 0:a.students)==null?void 0:d.length)||0),await G.createApplication(s.value),j.value="আপনার নিবন্ধন সফলভাবে জমা হয়েছে।",R(),q.push("/applications")}catch{x.value="নিবন্ধন জমা দিতে ব্যর্থ হয়েছে।"}finally{z.value=!1}},Z=a=>{x.value=a},M=K(()=>{var b,V,S,U;let a=((b=l==null?void 0:l.exam)==null?void 0:b.registration_fee)||0;const d=ne();return d>((V=l==null?void 0:l.exam)==null?void 0:V.reg_final_date)?(Z("নিবন্ধন গ্রহণ বন্ধ রয়েছে"),a=0):(d>((S=l==null?void 0:l.exam)==null?void 0:S.reg_last_date)&&(a+=((U=l==null?void 0:l.exam)==null?void 0:U.late_fee)||0),a)}),$=async()=>{s.value.area_id="",s.value.institute_id="",f.institutes=[],k.value="";const a=await f.findInstituteByCode(D.value);a?(f.institutes[0]=a,s.value.area_id=a.area_id,s.value.institute_id=a.id):k.value="খুঁজে পাওয়া যায় নি!"};return(a,d)=>{var b,V,S,U;return i(),o("div",de,[e("div",ue,[e("div",ce,[e("div",re,[e("h2",_e,n((V=(b=_(l))==null?void 0:b.exam)==null?void 0:V.name),1),e("div",pe,[e("p",me,[p(" নিবন্ধনের শেষ তারিখ "),e("b",null,n(new Date((S=_(l).exam)==null?void 0:S.reg_last_date).toLocaleDateString("bn-BD")),1),p(" ইং। বিলম্ব ফি সহ নিবন্ধনের চূড়ান্ত তারিখ "),e("b",null,n(new Date((U=_(l).exam)==null?void 0:U.reg_final_date).toLocaleDateString("bn-BD")),1),p(" ইং। ")])]),ve])]),e("div",he,[e("div",fe,[r(e("input",{"onUpdate:modelValue":d[0]||(d[0]=t=>D.value=t),type:"search",class:P(["input-1 text-center",{"border-red-500":!!k.value}]),placeholder:"ইলহাক নাম্বার"},null,2),[[h,D.value]]),e("div",be,n(k.value),1),e("button",{onClick:$,type:"button",class:"btn-2"},[ge,p(" খুঁজুন ")])])]),e("form",{onSubmit:Q(X,["prevent"]),class:"space-y-4"},[e("div",ye,[e("div",xe,[ke,r(e("select",{"onUpdate:modelValue":d[1]||(d[1]=t=>s.value.area_id=t),class:"input-1"},[Ve,(i(!0),o(m,null,v(_(B).areas,t=>(i(),o("option",{key:t.id,value:t.id},n(t.name),9,Se))),128))],512),[[C,s.value.area_id]])]),e("div",null,[Ue,r(e("select",{"onUpdate:modelValue":d[2]||(d[2]=t=>s.value.institute_id=t),class:"input-1",disabled:!s.value.area_id},[Ce,(i(!0),o(m,null,v(_(f).institutes,t=>(i(),o("option",{key:t.id,value:t.id},n(t.institute_code)+" - "+n(t.name),9,ze))),128))],8,we),[[C,s.value.institute_id]])]),e("div",null,[je,r(e("select",{"onUpdate:modelValue":d[3]||(d[3]=t=>s.value.zamat_id=t),class:"input-1"},[De,(i(!0),o(m,null,v(_(E).departments,t=>(i(),o("optgroup",{label:t.name,key:t.id},[(i(!0),o(m,null,v(t.zamats,c=>(i(),o("option",{key:c.id,value:c.id},n(c.name),9,Ae))),128))],8,Me))),128))],512),[[C,s.value.zamat_id]])]),e("div",null,[Fe,r(e("select",{"onUpdate:modelValue":d[4]||(d[4]=t=>s.value.group_id=t),class:"input-1",disabled:!s.value.zamat_id},[Ee,(i(!0),o(m,null,v(_(F).groups,t=>(i(),o("option",{key:t.id,value:t.id},[p(n(t.name)+" (",1),(i(!0),o(m,null,v(t.areas,(c,u)=>(i(),o(m,{key:c.id},[u?(i(),o("span",qe,", ")):y("",!0),e("span",null,n(c.name),1)],64))),128)),p(") ")],8,Le))),128))],8,Be),[[C,s.value.group_id]])]),y("",!0),e("div",null,[Ne,r(e("select",{"onUpdate:modelValue":d[6]||(d[6]=t=>s.value.center_id=t),class:"input-1",disabled:!s.value.zamat_id},[Ie,(i(!0),o(m,null,v(_(A).centers,t=>{var c;return i(),o("option",{key:t.id,value:t==null?void 0:t.institute_id},n((c=t==null?void 0:t.institute)==null?void 0:c.name),9,Oe)}),128))],8,Ge),[[C,s.value.center_id]])])]),e("div",Te,[Re,(i(!0),o(m,null,v(s.value.students,(t,c)=>(i(),o("div",{key:c},[e("div",Xe,[e("div",Ze,[e("div",$e,n(c+1),1)]),e("div",He,[Je,r(e("input",{"onUpdate:modelValue":u=>t.name=u,type:"text",class:"input-1",required:"",placeholder:"বাংলায়"},null,8,Ke),[[h,t.name]]),r(e("input",{"onUpdate:modelValue":u=>t.name_arabic=u,dir:"rtl",type:"text",class:"input-1",placeholder:"العربية"},null,8,Pe),[[h,t.name_arabic]])]),e("div",Qe,[We,r(e("input",{"onUpdate:modelValue":u=>t.father_name=u,required:"",type:"text",class:"input-1",placeholder:"বাংলায়"},null,8,Ye),[[h,t.father_name]]),r(e("input",{"onUpdate:modelValue":u=>t.father_name_arabic=u,dir:"rtl",type:"text",class:"input-1",placeholder:"العربية"},null,8,et),[[h,t.father_name_arabic]])]),e("div",tt,[st,r(e("input",{"onUpdate:modelValue":u=>t.date_of_birth=u,required:"",type:"date",class:"input-1"},null,8,at),[[h,t.date_of_birth]])]),e("div",lt,[it,r(e("input",{"onUpdate:modelValue":u=>t.address=u,type:"text",class:"input-1",placeholder:"গ্রাম, ডাকঘর, থানা, জেলা"},null,8,ot),[[h,t.address]])]),e("div",nt,[e("button",{type:"button",onClick:u=>T(c),class:"btn-4 py-2"},ct,8,dt)])])]))),128)),e("div",{class:"flex justify-center"},[e("button",{type:"button",onClick:O,class:"btn-contrast"},[rt,p(" আরেকজন যুক্ত করুন ")])])]),_t,M.value?(i(),o("div",pt,[e("div",mt,[e("div",null," প্রতি শিক্ষার্থীর ফি: "+n(_(l).exam.registration_fee)+" টাকা। বিলম্ব ফি (প্রযোজ্য ক্ষেত্রে): "+n(_(l).exam.late_fee)+" টাকা। ",1),e("div",vt,[p(" শিক্ষার্থীর সংখ্যা:"),e("b",null,n(s.value.students.length),1),p(" X "),e("b",null,n(M.value),1),p(" টাকা = "),e("b",null,n(s.value.students.length*M.value)+" টাকা",1)])]),y("",!0),e("button",{type:"submit",disabled:z.value,class:"btn-2"},n(z.value?"সাবমিট হচ্ছে...":"সাবমিট করুন"),9,ht)])):y("",!0),e("div",ft,[j.value?(i(),o("div",bt,n(j.value),1)):y("",!0),x.value?(i(),o("div",gt,n(x.value),1)):y("",!0)])],32)])])}}};export{Mt as default};
