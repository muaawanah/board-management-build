import{r as k,B as w,h as Q,g as W,c as o,a as e,t as r,i as _,A as m,q as c,v,n as ee,m as L,D as O,C,F as f,b,f as y,k as te,o as i,x as ae}from"./index-BLqg7Ylw.js";import{u as se}from"./application-DbSJPYQG.js";import{u as le}from"./exam-T8M7TZRg.js";import{u as oe}from"./institute-CVRxTFsV.js";import{u as ie}from"./area-CXfgImZH.js";import{u as ne}from"./zamat-DwGqno-S.js";import{u as de}from"./group-DZIgRZGp.js";import{u as re}from"./center-CnC4um9S.js";import{u as ce}from"./fee-lC9RkSPd.js";import{f as ue}from"./date-Cs-xe4uq.js";const _e={class:"mx-4"},pe={class:"md:p-8 p-4 card-bg space-y-2"},me={class:"flex gap-4 justify-center items-center"},ve={class:"flex flex-col items-center space-y-2"},he={class:"title-xl"},fe={class:"flex flex-wrap gap-2 text-center"},be={class:"md:text-base text-sm"},xe=e("div",{class:"px-6 bg-sky-700 rounded-full pt-1"},[e("h2",{class:"title-lg text-white"},"নিবন্ধন পত্র")],-1),ye={class:"flex justify-center items-center"},ge={class:"flex gap-2 justify-center items-center bg-gray-100 p-4 rounded-lg"},ke={class:"text-red-500"},Ve=e("i",{class:"fas fa-search"},null,-1),Ue={class:"grid md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-md"},Se={class:"col-start-1"},we=e("label",{class:"block text-gray-700"},"আবেদনের তারিখ",-1),Ce=["max"],De={class:""},$e=e("label",{class:"block text-gray-700"},"অঞ্চল নির্বাচন করুন",-1),ze=e("option",{value:"",disabled:""},"Select Area",-1),Be=["value"],Me=e("label",{class:"block text-gray-700"},"মাদরাসা নির্বাচন করুন",-1),je=["disabled"],qe=e("option",{value:"",disabled:""},"Select Institute",-1),Ae=["value"],Fe=e("label",{class:"block text-gray-700"},"মারহালা নির্বাচন করুন",-1),Ie=e("option",{value:"",disabled:""},"Select Marhala",-1),Ee=["label"],Le=["value"],Oe=e("label",{class:"block text-gray-700"},"গ্রুপ নির্বাচন করুন (যদি থাকে)",-1),Ke=["disabled"],Ne=e("option",{value:"",disabled:""},"Select Group",-1),Ye=["value"],Ge={key:0},Te=e("label",{class:"block text-gray-700"},"কেন্দ্র নির্বাচন করুন",-1),Re=["disabled"],Xe=e("option",{value:"",disabled:""},"Select Center",-1),Ze=["value"],He={class:"space-y-2"},Je=te('<div class="flex justify-center"><h4 class="title-lg">পরীক্ষার্থীদের তথ্য</h4></div><div class="hidden md:grid md:grid-cols-12 bg-gray-100 py-2 px-2 text-center divide-x-2 font-medium"><div class="text-center">ক্র</div><div class="col-span-2 text-center">পরীক্ষার্থীর নাম</div><div class="col-span-2">পিতার নাম</div><div class="col-span-2"> জন্ম তারিখ <span class="text-xs">(জন্ম নিবন্ধন অনুসারে)</span></div><div class="col-span-2">পারার বিবরণ <span class="text-xs">(হিফজের ক্ষেত্রে)</span></div><div class="col-span-2">ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা)</div><div>ডিলিট</div></div>',2),Pe={class:"grid md:grid-cols-12 gap-4 border rounded p-2"},Qe={class:"flex items-center justify-center"},We={class:"text-lg font-semibold mb-2 px-3 py-1 bg-gray-100 rounded-full"},et={class:"md:col-span-2 grid gap-2"},tt=e("div",{class:"md:hidden flex font-medium"},"পরীক্ষার্থীর নাম:",-1),at=["onUpdate:modelValue"],st=["onUpdate:modelValue"],lt={class:"md:col-span-2 grid gap-2"},ot=e("div",{class:"md:hidden flex font-medium"},"পিতার নাম:",-1),it=["onUpdate:modelValue"],nt=["onUpdate:modelValue"],dt={class:"md:col-span-2"},rt=e("p",{class:"md:hidden flex font-medium"},"জন্ম তারিখ (জন্ম নিবন্ধন অনুসারে)",-1),ct={class:"flex relative"},ut={key:0,class:"absolute left-2 top-3"},_t=e("i",{class:"fa fa-check-circle text-green-500"},null,-1),pt=[_t],mt=["onUpdate:modelValue","onBlur","onKeyup"],vt=["onChange","onUpdate:modelValue"],ht={class:"md:col-span-2"},ft=e("p",{class:"md:hidden flex font-medium"},"পারার বিববরণ (হিফজের ক্ষেত্রে)",-1),bt=["onUpdate:modelValue"],xt={class:"md:col-span-2"},yt=e("p",{class:"md:hidden flex font-medium"},"ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা)",-1),gt=["onUpdate:modelValue"],kt={class:"flex justify-end md:justify-center items-start"},Vt=["onClick"],Ut=e("i",{class:"fas fa-trash-alt"},null,-1),St=[Ut],wt=e("i",{class:"fas fa-plus"},null,-1),Ct=e("hr",{class:"my-4"},null,-1),Dt={key:0,class:"flex flex-col items-center space-y-2"},$t={class:"flex flex-col items-center"},zt={class:"text-xl text-green-600"},Bt=["disabled"],Mt={class:"flex justify-center"},jt={key:0,class:"text-xl text-green-600"},qt={key:1,class:"text-xl text-red-600"},Rt={__name:"ApplicationForm",setup(At){const K=ae(),n=le(),N=ce(),Y=se(),g=oe(),M=re(),A=ie(),F=ne(),j=de(),D=k(!1),V=k(""),$=k(""),z=k(""),U=k(""),q=new Date().toISOString().split("T")[0],s=k({application_date:q,exam_id:"",zamat_id:"",institute_id:"",area_id:"",group_id:"",gender:"",center_id:"",students:[{registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",date_of_birth:"",para:"",address:""}],payment_method:"Offline",total_amount:0}),G=async()=>{var a;g.institutes=[],j.groups=[],M.centers=[],N.fee={},await n.fetchLastExam(),s.value.exam_id=(a=n==null?void 0:n.exam)==null?void 0:a.id,await A.fetchAreas(),await F.fetchZamats()};w(()=>s.value.area_id,async a=>{a&&await g.fetchInstitutes({area_id:a,per_page:"all"})}),w(()=>s.value.zamat_id,async a=>{a&&(s.value.group_id="",await j.fetchGroups(a))}),w(()=>s.value.zamat_id,async a=>{a&&I()}),w(()=>s.value.group_id,async a=>{a&&I()}),w(z,()=>{U.value=""});const I=async()=>{M.fetchCenters({zamat_id:s.value.zamat_id,group_id:s.value.group_id,gender:s.value.gender})};Q(G);const T=()=>{s.value.students.push({registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",date_of_birth:"",para:"",address:""})},R=a=>{confirm("ডিলিট নিশ্চিত করুন")&&s.value.students.splice(a,1)},X=()=>{s.value={application_date:q,exam_id:"",zamat_id:"",institute_id:"",area_id:"",group_id:"",gender:"",center_id:"",students:[{registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",input_dob:"",date_of_birth:"",para:"",address:""}],payment_method:"Offline",total_amount:0}},Z=async()=>{var a,l;D.value=!0,V.value="",$.value="";try{s.value.total_amount=B.value*(((l=(a=s==null?void 0:s.value)==null?void 0:a.students)==null?void 0:l.length)||0),await Y.createApplication(s.value),$.value="আপনার নিবন্ধন সফলভাবে জমা হয়েছে।",X(),K.push("/applications")}catch{V.value="নিবন্ধন জমা দিতে ব্যর্থ হয়েছে।"}finally{D.value=!1}},H=a=>{V.value=a},B=W(()=>{var p,h,x,S;let a=parseInt(((p=n==null?void 0:n.exam)==null?void 0:p.registration_fee)||0);const l=ue(new Date(s.value.application_date));return l>((h=n==null?void 0:n.exam)==null?void 0:h.reg_final_date)?(H("নিবন্ধন গ্রহণ বন্ধ রয়েছে"),a=0):(l>((x=n==null?void 0:n.exam)==null?void 0:x.reg_last_date)&&(a+=parseInt(((S=n==null?void 0:n.exam)==null?void 0:S.late_fee)||0)),a)}),J=async()=>{s.value.area_id="",s.value.institute_id="",g.institutes=[],U.value="";const a=await g.findInstituteByCode(z.value);a?(g.institutes[0]=a,s.value.area_id=a.area_id,s.value.institute_id=a.id):U.value="খুঁজে পাওয়া যায় নি!"},E=a=>{if(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(a.input_dob)){const[p,h,x]=a.input_dob.split("/");a.date_of_birth=`${x}-${h}-${p}`}else a.date_of_birth="",a.input_dob=""},P=a=>{if(a.date_of_birth&&/^\d{4}-\d{2}-\d{2}$/.test(a.date_of_birth)){const[l,p,h]=a.date_of_birth.split("-");a.input_dob=`${h}/${p}/${l}`}else a.input_dob=""};return(a,l)=>{var p,h,x,S;return i(),o("div",_e,[e("div",pe,[e("div",me,[e("div",ve,[e("h2",he,r((h=(p=_(n))==null?void 0:p.exam)==null?void 0:h.name),1),e("div",fe,[e("p",be,[m(" নিবন্ধনের শেষ তারিখ "),e("b",null,r(new Date((x=_(n).exam)==null?void 0:x.reg_last_date).toLocaleDateString("bn-BD")),1),m(" ইং। বিলম্ব ফি সহ নিবন্ধনের চূড়ান্ত তারিখ "),e("b",null,r(new Date((S=_(n).exam)==null?void 0:S.reg_final_date).toLocaleDateString("bn-BD")),1),m(" ইং। ")])]),xe])]),e("div",ye,[e("div",ge,[c(e("input",{"onUpdate:modelValue":l[0]||(l[0]=t=>z.value=t),type:"search",class:ee(["input-1 text-center",{"border-red-500":!!U.value}]),placeholder:"ইলহাক নাম্বার"},null,2),[[v,z.value]]),e("div",ke,r(U.value),1),e("button",{onClick:J,type:"button",class:"btn-2"},[Ve,m(" খুঁজুন ")])])]),e("form",{onSubmit:L(Z,["prevent"]),onKeydown:l[10]||(l[10]=O(L(()=>{},["prevent"]),["enter"])),class:"space-y-4"},[e("div",Ue,[e("div",Se,[we,c(e("input",{"onUpdate:modelValue":l[1]||(l[1]=t=>s.value.application_date=t),type:"date",class:"input-1",max:_(q)},null,8,Ce),[[v,s.value.application_date]])]),e("div",De,[$e,c(e("select",{"onUpdate:modelValue":l[2]||(l[2]=t=>s.value.area_id=t),class:"input-1"},[ze,(i(!0),o(f,null,b(_(A).areas,t=>(i(),o("option",{key:t.id,value:t.id},r(t.name),9,Be))),128))],512),[[C,s.value.area_id]])]),e("div",null,[Me,c(e("select",{"onUpdate:modelValue":l[3]||(l[3]=t=>s.value.institute_id=t),class:"input-1",disabled:!s.value.area_id,required:""},[qe,(i(!0),o(f,null,b(_(g).institutes,t=>(i(),o("option",{key:t.id,value:t.id},r(t.institute_code)+" - "+r(t.name),9,Ae))),128))],8,je),[[C,s.value.institute_id]])]),e("div",null,[Fe,c(e("select",{"onUpdate:modelValue":l[4]||(l[4]=t=>s.value.zamat_id=t),class:"input-1",required:""},[Ie,(i(!0),o(f,null,b(_(F).departments,t=>(i(),o("optgroup",{label:t.name,key:t.id},[(i(!0),o(f,null,b(t.zamats,u=>(i(),o("option",{key:u.id,value:u.id},r(u.name),9,Le))),128))],8,Ee))),128))],512),[[C,s.value.zamat_id]])]),e("div",null,[Oe,c(e("select",{"onUpdate:modelValue":l[5]||(l[5]=t=>s.value.group_id=t),class:"input-1",disabled:!s.value.zamat_id},[Ne,(i(!0),o(f,null,b(_(j).groups,t=>(i(),o("option",{key:t.id,value:t.id},[m(r(t.name)+" (",1),(i(!0),o(f,null,b(t.areas,(u,d)=>(i(),o(f,{key:u.id},[d?(i(),o("span",Ge,", ")):y("",!0),e("span",null,r(u.name),1)],64))),128)),m(") ")],8,Ye))),128))],8,Ke),[[C,s.value.group_id]])]),y("",!0),e("div",null,[Te,c(e("select",{"onUpdate:modelValue":l[7]||(l[7]=t=>s.value.center_id=t),class:"input-1",disabled:!s.value.zamat_id,required:""},[Xe,(i(!0),o(f,null,b(_(M).centers,t=>{var u;return i(),o("option",{key:t.id,value:t==null?void 0:t.institute_id},r((u=t==null?void 0:t.institute)==null?void 0:u.name),9,Ze)}),128))],8,Re),[[C,s.value.center_id]])])]),e("div",He,[Je,(i(!0),o(f,null,b(s.value.students,(t,u)=>(i(),o("div",{key:u},[e("div",Pe,[e("div",Qe,[e("div",We,r(u+1),1)]),e("div",et,[tt,c(e("input",{"onUpdate:modelValue":d=>t.name=d,type:"text",class:"input-1",required:"",placeholder:"বাংলায়"},null,8,at),[[v,t.name]]),c(e("input",{"onUpdate:modelValue":d=>t.name_arabic=d,dir:"rtl",type:"text",class:"input-1",placeholder:"العربية"},null,8,st),[[v,t.name_arabic]])]),e("div",lt,[ot,c(e("input",{"onUpdate:modelValue":d=>t.father_name=d,required:"",type:"text",class:"input-1",placeholder:"বাংলায়"},null,8,it),[[v,t.father_name]]),c(e("input",{"onUpdate:modelValue":d=>t.father_name_arabic=d,dir:"rtl",type:"text",class:"input-1",placeholder:"العربية"},null,8,nt),[[v,t.father_name_arabic]])]),e("div",dt,[rt,e("div",ct,[t.date_of_birth?(i(),o("div",ut,pt)):y("",!0),c(e("input",{"onUpdate:modelValue":d=>t.input_dob=d,required:"",type:"text",placeholder:"DD/MM/YYYY",class:"input-1 border-r-0 rounded-r-none text-center",onBlur:d=>E(t),onKeyup:O(d=>E(t),["enter"])},null,40,mt),[[v,t.input_dob]]),c(e("input",{onChange:d=>P(t),"onUpdate:modelValue":d=>t.date_of_birth=d,required:"",type:"date",class:"input-1 w-10 px-2 rounded-l-none"},null,40,vt),[[v,t.date_of_birth]])])]),e("div",ht,[ft,c(e("input",{"onUpdate:modelValue":d=>t.para=d,type:"text",class:"input-1",placeholder:"পারার বিবরণ"},null,8,bt),[[v,t.para]])]),e("div",xt,[yt,c(e("input",{"onUpdate:modelValue":d=>t.address=d,type:"text",class:"input-1",placeholder:"গ্রাম, ডাকঘর, থানা, জেলা"},null,8,gt),[[v,t.address]])]),e("div",kt,[e("button",{type:"button",onClick:d=>R(u),class:"btn-4 py-2"},St,8,Vt)])])]))),128)),e("div",{class:"flex justify-center"},[e("button",{type:"button",onClick:T,class:"btn-contrast"},[wt,m(" আরেকজন যুক্ত করুন ")])])]),Ct,B.value?(i(),o("div",Dt,[e("div",$t,[e("div",null," প্রতি পরীক্ষার্থীর ফি: "+r(_(n).exam.registration_fee)+" টাকা। বিলম্ব ফি (প্রযোজ্য ক্ষেত্রে): "+r(_(n).exam.late_fee)+" টাকা। ",1),e("div",zt,[m(" পরীক্ষার্থীর সংখ্যা:"),e("b",null,r(s.value.students.length),1),m(" X "),e("b",null,r(B.value),1),m(" টাকা = "),e("b",null,r(s.value.students.length*B.value)+" টাকা",1)])]),y("",!0),e("button",{type:"submit",disabled:D.value,class:"btn-2"},r(D.value?"সাবমিট হচ্ছে...":"সাবমিট করুন"),9,Bt)])):y("",!0),e("div",Mt,[$.value?(i(),o("div",jt,r($.value),1)):y("",!0),V.value?(i(),o("div",qt,r(V.value),1)):y("",!0)])],32)])])}}};export{Rt as default};
