import{L as B,h as I,o as a,c as d,a as e,s as E,v as c,x as M,C as $,F as V,b as C,t as _,i as x,I as k,A as f,B as A,r as h,M as j,f as S,n as N,k as H}from"./index-DvLSUkTy.js";import{u as U}from"./institute-C5fG94RP.js";import{u as z}from"./area-BeJajSQu.js";const J={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},K={class:"card-bg md:p-8 p-4 md:w-1/2"},Q=e("h2",{class:"text-xl font-bold mb-4"},"মাদরাসা নিবন্ধন করুন",-1),W={class:"mb-4"},X=e("label",{class:"block mb-2"},"নাম",-1),Y={class:"mb-4"},Z=e("label",{class:"block mb-2"},"ফোন",-1),ee={class:"mb-4"},te=e("label",{class:"block mb-2"},"অঞ্চল",-1),se=["value"],oe={class:"mb-4"},le=e("label",{class:"block mb-2"},"পরীক্ষার কেন্দ্র কিনা?",-1),ne={class:"inline-flex items-center"},ae={class:"inline-flex items-center ml-4"},ie={class:"flex justify-center gap-4"},de=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),ce={__name:"AddInstituteModal",emits:["close","saved"],setup(y,{emit:u}){const r=u,i=B({name:"",phone:"",area_id:null,is_active:!0,is_center:!1}),o=U(),m=z();I(async()=>{await m.fetchAreas()});const b=async()=>{await o.createInstitute(i),r("saved"),r("close")};return(p,s)=>(a(),d("div",J,[e("div",K,[Q,e("form",{onSubmit:E(b,["prevent"])},[e("div",W,[X,c(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>i.name=t),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[M,i.name]])]),e("div",Y,[Z,c(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>i.phone=t),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[M,i.phone]])]),e("div",ee,[te,c(e("select",{"onUpdate:modelValue":s[2]||(s[2]=t=>i.area_id=t),class:"w-full p-2 border rounded",required:""},[(a(!0),d(V,null,C(x(m).areas,t=>(a(),d("option",{key:t.id,value:t.id},_(t.name),9,se))),128))],512),[[$,i.area_id]])]),e("div",oe,[le,e("div",null,[e("label",ne,[c(e("input",{type:"radio","onUpdate:modelValue":s[3]||(s[3]=t=>i.is_center=t),value:!0,class:"mr-2"},null,512),[[k,i.is_center]]),f(" হ্যাঁ ")]),e("label",ae,[c(e("input",{type:"radio","onUpdate:modelValue":s[4]||(s[4]=t=>i.is_center=t),value:!1,class:"mr-2"},null,512),[[k,i.is_center]]),f(" না ")])])]),e("div",ie,[de,e("button",{type:"button",onClick:s[5]||(s[5]=t=>r("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},re={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},ue={class:"card-bg md:p-8 p-4 md:w-1/2"},_e=e("h2",{class:"text-xl font-bold mb-4"},"মাদরাসা নিবন্ধন সম্পাদনা",-1),pe={class:"mb-4"},me=e("label",{class:"block mb-2"},"নাম",-1),be={class:"mb-4"},ve=e("label",{class:"block mb-2"},"ফোন",-1),he={class:"mb-4"},xe=e("label",{class:"block mb-2"},"অঞ্চল",-1),fe=e("option",{value:"",disabled:""},"অঞ্চল নির্বাচন করুন",-1),ye=["value"],ge={class:"mb-4"},$e=e("label",{class:"block mb-2"},"এটি কি একটিভ আছে?",-1),ke={class:"inline-flex items-center"},we={class:"inline-flex items-center ml-4"},Ve={class:"mb-4"},Ce=e("label",{class:"block mb-2"},"পরীক্ষার কেন্দ্র কিনা?",-1),Se={class:"inline-flex items-center"},Me={class:"inline-flex items-center ml-4"},Ue={class:"flex justify-center gap-4"},je=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),Ae={__name:"EditInstituteModal",props:{institute:Object},emits:["close","updated"],setup(y,{emit:u}){const r=u,i=y,o=B({name:"",phone:"",area_id:null,is_active:!0,is_center:!0}),m=U(),b=z();I(async()=>{await b.fetchAreas()}),A(()=>i.institute,s=>{o.name=s.name||"",o.phone=s.phone||"",o.area_id=s.area_id||null,o.is_active=s.is_active,o.is_center=s.is_center},{immediate:!0});const p=async()=>{await m.updateInstitute(i.institute.id,o),r("updated"),r("close")};return(s,t)=>(a(),d("div",re,[e("div",ue,[_e,e("form",{onSubmit:E(p,["prevent"])},[e("div",pe,[me,c(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>o.name=n),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[M,o.name]])]),e("div",be,[ve,c(e("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>o.phone=n),type:"text",class:"w-full p-2 border rounded"},null,512),[[M,o.phone]])]),e("div",he,[xe,c(e("select",{"onUpdate:modelValue":t[2]||(t[2]=n=>o.area_id=n),class:"w-full p-2 border rounded",required:""},[fe,(a(!0),d(V,null,C(x(b).areas,n=>(a(),d("option",{key:n.id,value:n.id},_(n.name),9,ye))),128))],512),[[$,o.area_id]])]),e("div",ge,[$e,e("div",null,[e("label",ke,[c(e("input",{type:"radio","onUpdate:modelValue":t[3]||(t[3]=n=>o.is_active=n),value:!0,class:"mr-2",name:"active"},null,512),[[k,o.is_active]]),f(" হ্যাঁ ")]),e("label",we,[c(e("input",{type:"radio","onUpdate:modelValue":t[4]||(t[4]=n=>o.is_active=n),value:!1,class:"mr-2",name:"active"},null,512),[[k,o.is_active]]),f(" না ")])])]),e("div",Ve,[Ce,e("div",null,[e("label",Se,[c(e("input",{type:"radio","onUpdate:modelValue":t[5]||(t[5]=n=>o.is_center=n),value:!0,class:"mr-2",name:"center"},null,512),[[k,o.is_center]]),f(" হ্যাঁ ")]),e("label",Me,[c(e("input",{type:"radio","onUpdate:modelValue":t[6]||(t[6]=n=>o.is_center=n),value:!1,class:"mr-2",name:"center"},null,512),[[k,o.is_center]]),f(" না ")])])]),e("div",Ue,[je,e("button",{type:"button",onClick:t[7]||(t[7]=n=>r("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},Ie={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},ze={class:"card-bg p-4 md:p-8"},qe=e("h2",{class:"text-xl font-bold mb-4"},"ডিলেট মাদরাসা",-1),De={class:"flex justify-end mt-4"},Ne={__name:"DeleteInstituteModal",props:{institute:{type:Object,required:!0}},emits:["close","deleted"],setup(y,{emit:u}){const r=u,i=y,o=U(),m=async()=>{await o.deleteInstitute(i.institute.id),r("deleted"),r("close")};return(b,p)=>(a(),d("div",Ie,[e("div",ze,[qe,e("p",null,[f("আপনি কি ("),e("b",null,_(y.institute.name),1),f(") ডিলিট করতে চান?")]),e("div",De,[e("button",{onClick:p[0]||(p[0]=s=>r("close")),class:"bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"}," না "),e("button",{onClick:m,class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," ডিলেট ")])])]))}},Be={class:"space-y-2 p-4"},Ee={class:"flex justify-between items-center"},Le=e("h1",{class:"title-lg"},"মাদরাসা তালিকা",-1),Pe={class:"flex items-center gap-4"},Fe=e("label",{for:"pageSize",class:"text-sm"},"ডাটা সংখ্যা:",-1),Oe=H('<option value="15">15</option><option value="25">25</option><option value="50">50</option><option value="100">100</option><option value="all">All</option>',5),Te=[Oe],Re={key:0,class:"flex justify-center items-center"},Ge=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),He=[Ge],Je={key:1,class:"overflow-x-auto"},Ke={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},Qe={class:"bg-gray-200 text-gray-700 text-sm leading-normal"},We=e("th",{class:"py-3 px-2 text-left"},"#",-1),Xe=e("th",{class:"py-3 px-2 text-left"},"ইলহাক",-1),Ye=e("th",{class:"py-3 px-2 text-left"},"নাম",-1),Ze=e("th",{class:"py-3 px-2 text-left"},"ফোন",-1),et={class:"py-3 px-2 text-left"},tt=e("option",{value:""},"-সকল অঞ্চল-",-1),st=["value"],ot={class:"py-3 px-2 text-center"},lt=e("option",{value:""},"-কেন্দ্র কিনা-",-1),nt=e("option",{value:1},"পরীক্ষা কেন্দ্র",-1),at=e("option",{value:0},"কেন্দ্র নয়",-1),it=[lt,nt,at],dt=e("th",{class:"py-3 px-2 text-center print:hidden"},"সক্রিয়",-1),ct=e("th",{class:"py-3 px-2 text-center print:hidden"},"একশন",-1),rt={class:"text-gray-600 text-sm font-light"},ut={class:"py-3 px-2 text-left whitespace-nowrap"},_t={class:"flex items-center"},pt={class:"mr-2"},mt={key:0,class:"font-medium"},bt={key:1,class:"font-medium"},vt={class:"py-3 px-2 text-left"},ht={class:"title-md"},xt={class:"py-3 px-2 text-left"},ft={class:"title-md"},yt={class:"py-3 px-2 text-left"},gt={class:"py-3 px-2 text-left"},$t={class:"py-3 px-2 text-center"},kt={class:"py-3 px-2 text-center print:hidden"},wt={class:"py-3 px-2 text-center print:hidden"},Vt={class:"flex item-center justify-center gap-4"},Ct=["onClick"],St=e("i",{class:"fas fa-edit"},null,-1),Mt=[St],Ut={key:1},jt=e("td",{colspan:"8",class:"text-center text-red-500 py-4"},"No institutes found",-1),At=[jt],It={class:"flex justify-between items-center mt-4"},zt=["disabled"],qt={class:"flex space-x-1"},Dt=["disabled"],Pt={__name:"InstituteList",setup(y){const u=U(),r=z(),i=h(!1),o=h(!1),m=h(!1),b=h(null),p=h(15),s=h(1),t=h(""),n=h(""),L=()=>i.value=!0,P=async()=>{i.value=!1,await w()},F=g=>{b.value=g,o.value=!0},O=async()=>{o.value=!1,await w()},T=()=>m.value=!1,R=()=>{s.value<u.pagination.last_page&&(s.value+=1)},G=()=>{s.value>1&&(s.value-=1)};A(s,async()=>{await w()}),A([p,t,n],()=>{s.value===1?w():s.value=1}),I(async()=>{await w(),await r.fetchAreas()});const w=async()=>{const g={page:s.value,per_page:p.value};t.value&&(g.area_id=t.value),n.value!==""&&(g.is_center=n.value),await u.fetchInstitutes(g)};return(g,v)=>{var q;return a(),d("div",Be,[e("div",Ee,[Le,e("div",Pe,[Fe,c(e("select",{id:"pageSize","onUpdate:modelValue":v[0]||(v[0]=l=>p.value=l),class:"border rounded px-2 py-1"},Te,512),[[$,p.value]]),e("button",{class:"btn-2",onClick:L},"নিবন্ধন করুন")])]),x(u).loading?(a(),d("div",Re,He)):(a(),d("div",Je,[e("table",Ke,[e("thead",null,[e("tr",Qe,[We,Xe,Ye,Ze,e("th",et,[c(e("select",{"onUpdate:modelValue":v[1]||(v[1]=l=>t.value=l)},[tt,(a(!0),d(V,null,C(x(r).areas,l=>(a(),d("option",{key:l.id,value:l.id},_(l.name),9,st))),128))],512),[[$,t.value]])]),e("th",ot,[c(e("select",{"onUpdate:modelValue":v[2]||(v[2]=l=>n.value=l)},it,512),[[$,n.value]])]),dt,ct])]),e("tbody",rt,[(q=x(u).institutes)!=null&&q.length?(a(!0),d(V,{key:0},C(x(u).institutes,(l,D)=>(a(),d("tr",{key:l.id,class:"border-b border-gray-200 hover:bg-gray-100"},[e("td",ut,[e("div",_t,[e("div",pt,[p.value==="all"?(a(),d("p",mt,_(D+1),1)):(a(),d("p",bt,_((s.value-1)*p.value+D+1),1))])])]),e("td",vt,[e("p",ht,_(l.institute_code),1)]),e("td",xt,[e("p",ft,_(l.name),1)]),e("td",yt,[e("p",null,_(l.phone),1)]),e("td",gt,[e("p",null,_(l.area?l.area.name:"Unknown Area"),1)]),e("td",$t,[e("span",{class:N([l.is_center?"bg-green-200 text-green-700":"bg-red-200 text-red-700","py-1 px-3 rounded-full text-xs"])},_(l.is_center?"পরীক্ষা কেন্দ্র":"কেন্দ্র নয়"),3)]),e("td",kt,[e("span",{class:N([l.is_active?"bg-green-200 text-green-700":"bg-red-200 text-red-700","py-1 px-3 rounded-full text-xs"])},_(l.is_active?"সক্রিয়":"নিষ্ক্রিয়"),3)]),e("td",wt,[e("div",Vt,[e("button",{onClick:Nt=>F(l),class:"text-blue-600 hover:text-blue-800"},Mt,8,Ct),S("",!0)])])]))),128)):(a(),d("tr",Ut,At))])])])),e("div",It,[e("button",{class:"btn-1",disabled:s.value===1,onClick:G},"Prev",8,zt),e("div",qt,[c(e("select",{"onUpdate:modelValue":v[3]||(v[3]=l=>s.value=l),class:"btn-1"},[(a(!0),d(V,null,C(x(u).pagination.last_page,l=>(a(),d("option",{key:l},_(l),1))),128))],512),[[$,s.value]])]),e("button",{class:"btn-1",disabled:s.value===x(u).pagination.last_page,onClick:R}," Next ",8,Dt)]),i.value?(a(),j(ce,{key:2,class:"z-40",onClose:P})):S("",!0),o.value?(a(),j(Ae,{key:3,class:"z-40",institute:b.value,onClose:O},null,8,["institute"])):S("",!0),m.value?(a(),j(Ne,{key:4,class:"z-40",institute:b.value,onClose:T},null,8,["institute"])):S("",!0)])}}};export{Pt as default};
