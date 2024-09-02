import{f as X,r as C,s as S,o as $,x as H,l as J,a as o,c as i,b as e,t as n,d as m,q as p,w as K,i as d,y as f,F as v,m as h,z as E,j,n as Q,p as W,e as Y,v as b}from"./index-D8NEAiqQ.js";import{u as ee}from"./application-DzJyLeew.js";import{u as te}from"./exam-lq2j1cSA.js";import{u as ae}from"./institute-Dwhr2Qyd.js";import{u as se}from"./area-DOKkhdE7.js";import{u as le}from"./zamat-B31u1QVz.js";import{u as oe}from"./group-BkvasB4k.js";import{u as ie}from"./center-BOo_wz-t.js";import{u as ne}from"./fee-B-9dd5dK.js";import{t as de}from"./date-Cwd8pd0-.js";const ue={class:"my-container py-6"},ce={class:"md:p-8 p-4 card-bg space-y-2"},re={class:"flex gap-4 justify-center items-center"},_e={class:"flex flex-col items-center space-y-2"},me={class:"title-xl"},pe={class:"flex flex-wrap gap-2 text-center"},ve={class:"md:text-base text-sm"},he=e("div",{class:"px-6 bg-sky-700 rounded-full pt-1"},[e("h2",{class:"title-lg text-white"},"আবেদন পত্র")],-1),fe={class:"grid md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-md"},be=e("label",{class:"block text-gray-700"},"এলাকা নির্বাচন করুন",-1),ge=e("option",{value:"",disabled:""},"Select Area",-1),xe=["value"],ye=e("label",{class:"block text-gray-700"},"মাদরাসা নির্বাচন করুন",-1),Ve=["disabled"],ke=e("option",{value:"",disabled:""},"Select Institute",-1),Se=["value"],Ue=e("label",{class:"block text-gray-700"},"মারহালা নির্বাচন করুন",-1),we=e("option",{value:"",disabled:""},"Select Marhala",-1),ze=["label"],Ce=["value"],Me=e("label",{class:"block text-gray-700"},"গ্রুপ নির্বাচন করুন (যদি থাকে)",-1),Ae=["disabled"],De=e("option",{value:"",disabled:""},"Select Group",-1),Fe=["value"],je=e("label",{class:"block text-gray-700"},"ধরন নির্বাচন করুন",-1),Le=e("option",{value:"",disabled:""},"Select Gender",-1),Oe=e("option",{value:"male"},"ছাত্র",-1),Be=e("option",{value:"female"},"ছাত্রী",-1),Ee=[Le,Oe,Be],Ne=e("label",{class:"block text-gray-700"},"কেন্দ্র নির্বাচন করুন",-1),qe=["disabled"],Ge=e("option",{value:"",disabled:""},"Select Center",-1),Re=["value"],Pe={class:"space-y-2"},Te=Y('<div class="flex justify-center"><h4 class="title-lg">শিক্ষার্থীদের তথ্য</h4></div><div class="hidden md:grid md:grid-cols-12 bg-gray-100 py-2 px-2 text-center divide-x-2 font-medium"><div class="text-center">ক্র</div><div class="col-span-2 text-center">শিক্ষার্থীর নাম</div><div class="col-span-2">পিতার নাম</div><div class="col-span-2"><p>জন্ম তারিখ</p> <p class="text-xs">(জন্ম নিবন্ধন অনুসারে)</p></div><div class="col-span-4">ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা)</div><div>ডিলিট</div></div>',2),Ze={class:"grid md:grid-cols-12 gap-4 border rounded p-2"},Ie={class:"flex items-center justify-center"},Xe={class:"text-lg font-semibold mb-2 px-3 py-1 bg-gray-100 rounded-full"},$e={class:"md:col-span-2 grid gap-2"},He=e("div",{class:"md:hidden flex font-medium"},"শিক্ষার্থীর নাম:",-1),Je=["onUpdate:modelValue"],Ke=["onUpdate:modelValue"],Qe={class:"md:col-span-2 grid gap-2"},We=e("div",{class:"md:hidden flex font-medium"},"পিতার নাম:",-1),Ye=["onUpdate:modelValue"],et=["onUpdate:modelValue"],tt={class:"md:col-span-2"},at=e("p",{class:"md:hidden flex font-medium"},"জন্ম তারিখ (জন্ম নিবন্ধন অনুসারে)",-1),st=["onUpdate:modelValue"],lt={class:"md:col-span-4"},ot=e("p",{class:"md:hidden flex font-medium"},"ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা)",-1),it=["onUpdate:modelValue"],nt={class:"flex justify-end md:justify-center items-start"},dt=["onClick"],ut=e("i",{class:"fas fa-trash-alt"},null,-1),ct=[ut],rt=e("i",{class:"fas fa-plus"},null,-1),_t=e("hr",{class:"my-4"},null,-1),mt={key:0,class:"flex flex-col items-center space-y-2"},pt={class:"flex flex-col items-center"},vt={class:"text-xl text-green-600"},ht={class:"flex flex-col items-center"},ft=e("h4",{class:"title-md"},"টাকা জমা দেয়ার মাধ্যম সিলেক্ট করুন",-1),bt={class:"inline-flex items-center"},gt={class:"inline-flex items-center ml-4"},xt=["disabled"],yt={key:1,class:"text-xl text-green-600"},Vt={key:2,class:"text-xl text-red-600"},kt={class:"flex mt-4"},Ot={__name:"PublicApplication",setup(St){const N=X(),u=te(),r=ne(),q=ee(),M=ae(),A=ie(),L=se(),O=le(),D=oe(),U=C(!1),g=C(""),w=C(""),a=C({exam_id:"",zamat_id:"",institute_id:"",area_id:"",group_id:"",gender:"",center_id:"",students:[{registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",date_of_birth:"",address:""}],payment_method:"Online",total_amount:0}),G=async()=>{var s;M.institutes=[],D.groups=[],A.centers=[],r.fee={},await u.fetchLastExam(),a.value.exam_id=(s=u==null?void 0:u.exam)==null?void 0:s.id,await L.fetchAreas(),await O.fetchZamats()};S(()=>a.value.area_id,async s=>{s&&await M.fetchInstitutes({area_id:s})}),S(()=>a.value.zamat_id,async s=>{s&&(a.value.group_id="",await D.fetchGroups(s),await r.fetchFeeByExamAndZamat(a.value.exam_id,a.value.zamat_id))}),S(()=>a.value.zamat_id,async s=>{s&&a.value.gender&&F()}),S(()=>a.value.gender,async s=>{s&&a.value.gender&&F()}),S(()=>a.value.group_id,async s=>{s&&a.value.gender&&F()});const F=async()=>{A.fetchCenters({zamat_id:a.value.zamat_id,group_id:a.value.group_id,gender:a.value.gender})};$(G);const R=()=>{a.value.students.push({registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",date_of_birth:"",address:""})},P=s=>{a.value.students.splice(s,1)},T=()=>{a.value={exam_id:"",zamat_id:"",institute_id:"",area_id:"",group_id:"",gender:"",center_id:"",students:[{registration:"",name:"",name_arabic:"",father_name:"",father_name_arabic:"",date_of_birth:"",address:""}],payment_method:"Online",total_amount:0}},Z=async()=>{var s,l;U.value=!0,g.value="",w.value="";try{a.value.total_amount=z.value*(((l=(s=a==null?void 0:a.value)==null?void 0:s.students)==null?void 0:l.length)||0),await q.createApplication(a.value),w.value="আপনার আবেদন সফলভাবে জমা হয়েছে।",T(),N.push("/applications")}catch{g.value="আবেদন জমা দিতে ব্যর্থ হয়েছে।"}finally{U.value=!1}},I=s=>{g.value=s},z=H(()=>{var x,y,V,k;let s=((x=r==null?void 0:r.fee)==null?void 0:x.amount)||0;const l=de();return l>((y=u==null?void 0:u.exam)==null?void 0:y.reg_final_date)?(I("আবেদন গ্রহণ বন্ধ রয়েছে"),s=0):(l>((V=u==null?void 0:u.exam)==null?void 0:V.reg_last_date)&&(s+=((k=r==null?void 0:r.fee)==null?void 0:k.late_fee)||0),s)});return(s,l)=>{var y,V,k,B;const x=J("RouterLink");return o(),i("div",ue,[e("div",ce,[e("div",re,[e("div",_e,[e("h2",me,n((V=(y=m(u))==null?void 0:y.exam)==null?void 0:V.name),1),e("div",pe,[e("p",ve,[p(" আবেদনের শেষ তারিখ "),e("b",null,n(new Date((k=m(u).exam)==null?void 0:k.reg_last_date).toLocaleDateString("bn-BD")),1),p(" । বিলম্ব ফি সহ আবেদনের চূড়ান্ত তারিখ "),e("b",null,n(new Date((B=m(u).exam)==null?void 0:B.reg_final_date).toLocaleDateString("bn-BD")),1),p(" । ")])]),he])]),e("form",{onSubmit:K(Z,["prevent"]),class:"space-y-4"},[e("div",fe,[e("div",null,[be,d(e("select",{"onUpdate:modelValue":l[0]||(l[0]=t=>a.value.area_id=t),class:"input-1"},[ge,(o(!0),i(v,null,h(m(L).areas,t=>(o(),i("option",{key:t.id,value:t.id},n(t.name),9,xe))),128))],512),[[f,a.value.area_id]])]),e("div",null,[ye,d(e("select",{"onUpdate:modelValue":l[1]||(l[1]=t=>a.value.institute_id=t),class:"input-1",disabled:!a.value.area_id},[ke,(o(!0),i(v,null,h(m(M).institutes,t=>(o(),i("option",{key:t.id,value:t.id},n(t.name),9,Se))),128))],8,Ve),[[f,a.value.institute_id]])]),e("div",null,[Ue,d(e("select",{"onUpdate:modelValue":l[2]||(l[2]=t=>a.value.zamat_id=t),class:"input-1"},[we,(o(!0),i(v,null,h(m(O).departments,t=>(o(),i("optgroup",{label:t.name,key:t.id},[(o(!0),i(v,null,h(t.zamats,_=>(o(),i("option",{key:_.id,value:_.id},n(_.name),9,Ce))),128))],8,ze))),128))],512),[[f,a.value.zamat_id]])]),e("div",null,[Me,d(e("select",{"onUpdate:modelValue":l[3]||(l[3]=t=>a.value.group_id=t),class:"input-1",disabled:!a.value.zamat_id},[De,(o(!0),i(v,null,h(m(D).groups,t=>(o(),i("option",{key:t.id,value:t.id},n(t.name),9,Fe))),128))],8,Ae),[[f,a.value.group_id]])]),e("div",null,[je,d(e("select",{"onUpdate:modelValue":l[4]||(l[4]=t=>a.value.gender=t),class:"input-1"},Ee,512),[[f,a.value.gender]])]),e("div",null,[Ne,d(e("select",{"onUpdate:modelValue":l[5]||(l[5]=t=>a.value.center_id=t),class:"input-1",disabled:!a.value.zamat_id||!a.value.gender},[Ge,(o(!0),i(v,null,h(m(A).centers,t=>{var _;return o(),i("option",{key:t.id,value:t==null?void 0:t.institute_id},n((_=t==null?void 0:t.institute)==null?void 0:_.name),9,Re)}),128))],8,qe),[[f,a.value.center_id]])])]),e("div",Pe,[Te,(o(!0),i(v,null,h(a.value.students,(t,_)=>(o(),i("div",{key:_},[e("div",Ze,[e("div",Ie,[e("div",Xe,n(_+1),1)]),e("div",$e,[He,d(e("input",{"onUpdate:modelValue":c=>t.name=c,type:"text",class:"input-1",required:"",placeholder:"বাংলায়"},null,8,Je),[[b,t.name]]),d(e("input",{"onUpdate:modelValue":c=>t.name_arabic=c,dir:"rtl",type:"text",class:"input-1",placeholder:"العربية"},null,8,Ke),[[b,t.name_arabic]])]),e("div",Qe,[We,d(e("input",{"onUpdate:modelValue":c=>t.father_name=c,required:"",type:"text",class:"input-1",placeholder:"বাংলায়"},null,8,Ye),[[b,t.father_name]]),d(e("input",{"onUpdate:modelValue":c=>t.father_name_arabic=c,dir:"rtl",type:"text",class:"input-1",placeholder:"العربية"},null,8,et),[[b,t.father_name_arabic]])]),e("div",tt,[at,d(e("input",{"onUpdate:modelValue":c=>t.date_of_birth=c,required:"",type:"date",class:"input-1"},null,8,st),[[b,t.date_of_birth]])]),e("div",lt,[ot,d(e("input",{"onUpdate:modelValue":c=>t.address=c,type:"text",class:"input-1",placeholder:"গ্রাম, ডাকঘর, থানা, জেলা"},null,8,it),[[b,t.address]])]),e("div",nt,[e("button",{type:"button",onClick:c=>P(_),class:"btn-4 py-2"},ct,8,dt)])])]))),128)),e("div",{class:"flex justify-center"},[e("button",{type:"button",onClick:R,class:"btn-contrast"},[rt,p(" আরেকজন যুক্ত করুন ")])])]),_t,z.value?(o(),i("div",mt,[e("div",pt,[e("div",null," প্রতি শিক্ষার্থীর ফি: "+n(m(r).fee.amount)+" টাকা। বিলম্ব ফি (প্রযোজ্য ক্ষেত্রে): "+n(m(r).fee.late_fee)+" টাকা। ",1),e("div",vt,[p(" শিক্ষার্থীর সংখ্যা:"),e("b",null,n(a.value.students.length),1),p(" X "),e("b",null,n(z.value),1),p(" টাকা = "),e("b",null,n(a.value.students.length*z.value)+" টাকা",1)])]),e("div",ht,[ft,e("div",null,[e("label",bt,[d(e("input",{type:"radio","onUpdate:modelValue":l[6]||(l[6]=t=>a.value.payment_method=t),value:"Online",class:"mr-2"},null,512),[[E,a.value.payment_method]]),p(" Online (বিকাশ) ")]),e("label",gt,[d(e("input",{type:"radio","onUpdate:modelValue":l[7]||(l[7]=t=>a.value.payment_method=t),value:"Offline",class:"mr-2"},null,512),[[E,a.value.payment_method]]),p(" Offline (হাতে) ")])])]),e("button",{type:"submit",disabled:U.value,class:"btn-2"},n(U.value?"সাবমিট হচ্ছে...":"সাবমিট করুন"),9,xt)])):j("",!0),w.value?(o(),i("div",yt,n(w.value),1)):j("",!0),g.value?(o(),i("div",Vt,n(g.value),1)):j("",!0)],32)]),e("div",kt,[Q(x,{to:{name:"PublicFunctions"},class:"btn-3"},{default:W(()=>[p("পিছনে যান")]),_:1})])])}}};export{Ot as default};
