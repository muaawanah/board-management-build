import{H as T,o as P,a as i,c,b as e,w as L,i as u,v as C,y as z,F as w,m as S,t as b,d as E,D as $,q as x,s as X,r as y,x as I,I as A,j as q,A as D}from"./index-_YQyFPma.js";import{u as V}from"./institute-CZSAXtQZ.js";import{u as F}from"./area-CjfcXp_v.js";const Y={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},Z={class:"card-bg md:p-8 p-4 md:w-1/2"},ee=e("h2",{class:"text-xl font-bold mb-4"},"মাদরাসা নিবন্ধন করুন",-1),te={class:"mb-4"},se=e("label",{class:"block mb-2"},"নাম",-1),oe={class:"mb-4"},le=e("label",{class:"block mb-2"},"ফোন",-1),ne={class:"mb-4"},ae=e("label",{class:"block mb-2"},"এলাকা",-1),ie=["value"],ce={class:"mb-4"},de=e("label",{class:"block mb-2"},"পরীক্ষার কেন্দ্র কিনা?",-1),re={class:"inline-flex items-center"},ue={class:"inline-flex items-center ml-4"},_e={class:"flex justify-center gap-4"},pe=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),me={__name:"AddInstituteModal",emits:["close","saved"],setup(g,{emit:_}){const r=_,n=T({name:"",phone:"",area_id:null,is_active:!0,is_center:!1}),o=V(),m=F();P(async()=>{await m.fetchAreas()});const h=async()=>{await o.createInstitute(n),r("saved"),r("close")};return(p,t)=>(i(),c("div",Y,[e("div",Z,[ee,e("form",{onSubmit:L(h,["prevent"])},[e("div",te,[se,u(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>n.name=s),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[C,n.name]])]),e("div",oe,[le,u(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>n.phone=s),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[C,n.phone]])]),e("div",ne,[ae,u(e("select",{"onUpdate:modelValue":t[2]||(t[2]=s=>n.area_id=s),class:"w-full p-2 border rounded",required:""},[(i(!0),c(w,null,S(E(m).areas,s=>(i(),c("option",{key:s.id,value:s.id},b(s.name),9,ie))),128))],512),[[z,n.area_id]])]),e("div",ce,[de,e("div",null,[e("label",re,[u(e("input",{type:"radio","onUpdate:modelValue":t[3]||(t[3]=s=>n.is_center=s),value:!0,class:"mr-2"},null,512),[[$,n.is_center]]),x(" হ্যাঁ ")]),e("label",ue,[u(e("input",{type:"radio","onUpdate:modelValue":t[4]||(t[4]=s=>n.is_center=s),value:!1,class:"mr-2"},null,512),[[$,n.is_center]]),x(" না ")])])]),e("div",_e,[pe,e("button",{type:"button",onClick:t[5]||(t[5]=s=>r("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},be={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},ve={class:"card-bg md:p-8 p-4 md:w-1/2"},he=e("h2",{class:"text-xl font-bold mb-4"},"মাদরাসা নিবন্ধন সম্পাদনা",-1),xe={class:"mb-4"},fe=e("label",{class:"block mb-2"},"নাম",-1),ye={class:"mb-4"},ge=e("label",{class:"block mb-2"},"ফোন",-1),$e={class:"mb-4"},ke=e("label",{class:"block mb-2"},"এলাকা",-1),we=e("option",{value:"",disabled:""},"এলাকা নির্বাচন করুন",-1),Me=["value"],Ce={class:"mb-4"},Se=e("label",{class:"block mb-2"},"এটি কি একটিভ আছে?",-1),Ve={class:"inline-flex items-center"},Ue={class:"inline-flex items-center ml-4"},je={class:"mb-4"},Ie=e("label",{class:"block mb-2"},"পরীক্ষার কেন্দ্র কিনা?",-1),Ae={class:"inline-flex items-center"},qe={class:"inline-flex items-center ml-4"},De={class:"flex justify-center gap-4"},Pe=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),ze={__name:"EditInstituteModal",props:{institute:Object},emits:["close","updated"],setup(g,{emit:_}){const r=_,n=g,o=T({name:"",phone:"",area_id:null,is_active:!0,is_center:!0}),m=V(),h=F();P(async()=>{await h.fetchAreas()}),X(()=>n.institute,t=>{o.name=t.name||"",o.phone=t.phone||"",o.area_id=t.area_id||null,o.is_active=t.is_active,o.is_center=t.is_center},{immediate:!0});const p=async()=>{await m.updateInstitute(n.institute.id,o),r("updated"),r("close")};return(t,s)=>(i(),c("div",be,[e("div",ve,[he,e("form",{onSubmit:L(p,["prevent"])},[e("div",xe,[fe,u(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>o.name=a),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[C,o.name]])]),e("div",ye,[ge,u(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>o.phone=a),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[C,o.phone]])]),e("div",$e,[ke,u(e("select",{"onUpdate:modelValue":s[2]||(s[2]=a=>o.area_id=a),class:"w-full p-2 border rounded",required:""},[we,(i(!0),c(w,null,S(E(h).areas,a=>(i(),c("option",{key:a.id,value:a.id},b(a.name),9,Me))),128))],512),[[z,o.area_id]])]),e("div",Ce,[Se,e("div",null,[e("label",Ve,[u(e("input",{type:"radio","onUpdate:modelValue":s[3]||(s[3]=a=>o.is_active=a),value:"1",class:"mr-2",name:"active"},null,512),[[$,o.is_active]]),x(" হ্যাঁ ")]),e("label",Ue,[u(e("input",{type:"radio","onUpdate:modelValue":s[4]||(s[4]=a=>o.is_active=a),value:"0",class:"mr-2",name:"active"},null,512),[[$,o.is_active]]),x(" না ")])])]),e("div",je,[Ie,e("div",null,[e("label",Ae,[u(e("input",{type:"radio","onUpdate:modelValue":s[5]||(s[5]=a=>o.is_center=a),value:"1",class:"mr-2",name:"center"},null,512),[[$,o.is_center]]),x(" হ্যাঁ ")]),e("label",qe,[u(e("input",{type:"radio","onUpdate:modelValue":s[6]||(s[6]=a=>o.is_center=a),value:"0",class:"mr-2",name:"center"},null,512),[[$,o.is_center]]),x(" না ")])])]),e("div",De,[Pe,e("button",{type:"button",onClick:s[7]||(s[7]=a=>r("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},Ee={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},Be={class:"card-bg p-4 md:p-8"},Te=e("h2",{class:"text-xl font-bold mb-4"},"ডিলেট মাদরাসা",-1),Le={class:"flex justify-end mt-4"},Fe={__name:"DeleteInstituteModal",props:{institute:{type:Object,required:!0}},emits:["close","deleted"],setup(g,{emit:_}){const r=_,n=g,o=V(),m=async()=>{await o.deleteInstitute(n.institute.id),r("deleted"),r("close")};return(h,p)=>(i(),c("div",Ee,[e("div",Be,[Te,e("p",null,[x("আপনি কি ("),e("b",null,b(g.institute.name),1),x(") ডিলিট করতে চান?")]),e("div",Le,[e("button",{onClick:p[0]||(p[0]=t=>r("close")),class:"bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"}," না "),e("button",{onClick:m,class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," ডিলেট ")])])]))}},Oe={class:"space-y-2 p-4"},He={class:"flex justify-between items-center"},Ne=e("h1",{class:"title-lg"},"মাদরাসা তালিকা",-1),Re={class:"flex items-center gap-4"},Ge=e("label",{for:"pageSize",class:"text-sm"},"ডাটা সংখ্যা:",-1),Je=e("option",{value:"15"},"15",-1),Ke=e("option",{value:"25"},"25",-1),Qe=e("option",{value:"50"},"50",-1),We=e("option",{value:"100"},"100",-1),Xe=["value"],Ye={key:0,class:"flex justify-center items-center"},Ze=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),et=[Ze],tt={key:1,class:"overflow-x-auto"},st={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},ot=e("thead",null,[e("tr",{class:"bg-gray-200 text-gray-700 text-sm leading-normal"},[e("th",{class:"py-3 px-2 text-left"},"#"),e("th",{class:"py-3 px-2 text-left"},"নাম"),e("th",{class:"py-3 px-2 text-left"},"ফোন"),e("th",{class:"py-3 px-2 text-left"},"এলাকা"),e("th",{class:"py-3 px-2 text-center"},"কেন্দ্র কিনা"),e("th",{class:"py-3 px-2 text-center"},"সক্রিয়"),e("th",{class:"py-3 px-2 text-center"},"একশন")])],-1),lt={class:"text-gray-600 text-sm font-light"},nt={class:"py-3 px-2 text-left whitespace-nowrap"},at={class:"flex items-center"},it={class:"mr-2"},ct={class:"font-medium"},dt={class:"py-3 px-2 text-left"},rt={class:"title-md"},ut={class:"py-3 px-2 text-left"},_t={class:"py-3 px-2 text-left"},pt={class:"py-3 px-2 text-center"},mt={class:"py-3 px-2 text-center"},bt={class:"py-3 px-2 text-center"},vt={class:"flex item-center justify-center gap-4"},ht=["onClick"],xt=e("i",{class:"fas fa-edit"},null,-1),ft=[xt],yt=["onClick"],gt=e("i",{class:"fas fa-trash"},null,-1),$t=[gt],kt={key:1},wt=e("td",{colspan:"8",class:"text-center text-red-500 py-4"},"No institutes found",-1),Mt=[wt],Ct={class:"flex justify-between items-center mt-4"},St=["disabled"],Vt={class:"flex space-x-1"},Ut=["onClick"],jt={key:1,class:"px-2 py-1"},It=["disabled"],Pt={__name:"InstituteList",setup(g){const _=V(),r=y(!1),n=y(!1),o=y(!1),m=y(null),h=y(!0),p=y(15),t=y(1),s=()=>r.value=!0,a=async()=>{r.value=!1,await _.fetchInstitutes()},O=d=>{m.value=d,n.value=!0},H=async()=>{n.value=!1,await _.fetchInstitutes()},N=d=>{m.value=d,o.value=!0},R=()=>o.value=!1,U=I(()=>Math.ceil(_.institutes.length/p.value)),B=I(()=>{const d=(t.value-1)*p.value,f=d+p.value;return _.institutes.slice(d,f)}),G=()=>{t.value<U.value&&(t.value+=1)},J=()=>{t.value>1&&(t.value-=1)},K=d=>{t.value=d},Q=I(()=>{const d=U.value,f=t.value,l=5;if(d<=l)return Array.from({length:d},(M,W)=>W+1);const v=[],k=Math.max(1,f-Math.floor(l/2)),j=Math.min(d,f+Math.floor(l/2));k>1&&(v.push(1),k>2&&v.push("..."));for(let M=k;M<=j;M++)v.push(M);return j<d&&(j<d-1&&v.push("..."),v.push(d)),v});return P(async()=>{try{await _.fetchInstitutes()}finally{h.value=!1}}),(d,f)=>(i(),c("div",Oe,[e("div",He,[Ne,e("div",Re,[Ge,u(e("select",{id:"pageSize","onUpdate:modelValue":f[0]||(f[0]=l=>p.value=l),class:"border rounded px-2 py-1"},[Je,Ke,Qe,We,e("option",{value:E(_).institutes.length},"All",8,Xe)],512),[[z,p.value]]),e("button",{class:"btn-2",onClick:s},"নিবন্ধন করুন")])]),h.value?(i(),c("div",Ye,et)):(i(),c("div",tt,[e("table",st,[ot,e("tbody",lt,[B.value.length?(i(!0),c(w,{key:0},S(B.value,(l,v)=>(i(),c("tr",{key:l.id,class:"border-b border-gray-200 hover:bg-gray-100"},[e("td",nt,[e("div",at,[e("div",it,[e("p",ct,b((t.value-1)*p.value+v+1),1)])])]),e("td",dt,[e("p",rt,b(l.name),1)]),e("td",ut,[e("p",null,b(l.phone),1)]),e("td",_t,[e("p",null,b(l.area?l.area.name:"Unknown Area"),1)]),e("td",pt,[e("span",{class:D([l.is_center?"bg-green-200 text-green-700":"bg-red-200 text-red-700","py-1 px-3 rounded-full text-xs"])},b(l.is_center?"পরীক্ষা কেন্দ্র":"কেন্দ্র নয়"),3)]),e("td",mt,[e("span",{class:D([l.is_active?"bg-green-200 text-green-700":"bg-red-200 text-red-700","py-1 px-3 rounded-full text-xs"])},b(l.is_active?"সক্রিয়":"নিষ্ক্রিয়"),3)]),e("td",bt,[e("div",vt,[e("button",{onClick:k=>O(l),class:"text-blue-600 hover:text-blue-800"},ft,8,ht),e("button",{onClick:k=>N(l),class:"text-red-600 hover:text-red-800"},$t,8,yt)])])]))),128)):(i(),c("tr",kt,Mt))])])])),e("div",Ct,[e("button",{class:"btn-1",disabled:t.value===1,onClick:J},"Prev",8,St),e("div",Vt,[(i(!0),c(w,null,S(Q.value,l=>(i(),c(w,{key:l},[l!=="..."?(i(),c("button",{key:0,class:D({"btn-1":!0,"bg-gray-200":l===t.value,"hover:bg-gray-300":l!==t.value}),onClick:v=>K(l)},b(l),11,Ut)):(i(),c("span",jt,"..."))],64))),128))]),e("button",{class:"btn-1",disabled:t.value===U.value,onClick:G},"Next",8,It)]),r.value?(i(),A(me,{key:2,class:"z-40",onClose:a})):q("",!0),n.value?(i(),A(ze,{key:3,class:"z-40",institute:m.value,onClose:H},null,8,["institute"])):q("",!0),o.value?(i(),A(Fe,{key:4,class:"z-40",institute:m.value,onClose:R},null,8,["institute"])):q("",!0)]))}};export{Pt as default};
