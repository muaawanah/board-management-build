import{u as v}from"./zamat--3t1L25n.js";import{L as Z,r as _,h as w,o as s,c as l,a as t,s as C,v as y,C as D,F as $,b as k,t as h,x as j,B as A,A as M,f as b,i as S,M as g}from"./index-C0Q3J3C0.js";import{u as V}from"./department-BefIzjjs.js";const B={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},N={class:"card-bg md:p-8 p-4 md:w-1/2"},E=t("h2",{class:"text-xl font-bold mb-4"},"মারহালা যুক্ত করুন",-1),L={class:"mb-4"},U=t("label",{class:"block mb-2"},"ডিপার্টমেন্ট",-1),F=t("option",{disabled:"",value:""},"Select Department",-1),O=["value"],T={class:"mb-4"},G=t("label",{class:"block mb-2"},"নাম",-1),H={class:"flex justify-center gap-4"},I=t("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),J={__name:"AddZamatModal",emits:["close","saved"],setup(p,{emit:c}){const a=c,n=Z({name:"",department_id:null}),o=v(),i=V(),r=_([]);w(async()=>{await i.fetchDepartments(),r.value=i.departments});const m=async()=>{await o.createZamat(n),a("saved"),a("close")};return(f,d)=>(s(),l("div",B,[t("div",N,[E,t("form",{onSubmit:C(m,["prevent"])},[t("div",L,[U,y(t("select",{"onUpdate:modelValue":d[0]||(d[0]=e=>n.department_id=e),class:"w-full p-2 border rounded",required:""},[F,(s(!0),l($,null,k(r.value,e=>(s(),l("option",{key:e.id,value:e.id},h(e.name),9,O))),128))],512),[[D,n.department_id]])]),t("div",T,[G,y(t("input",{"onUpdate:modelValue":d[1]||(d[1]=e=>n.name=e),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[j,n.name]])]),t("div",H,[I,t("button",{type:"button",onClick:d[2]||(d[2]=e=>a("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},K={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},P={class:"card-bg md:p-8 p-4 md:w-1/2"},Q=t("h2",{class:"text-xl font-bold mb-4"},"মারহালা সম্পাদনা",-1),R={class:"mb-4"},W=t("label",{class:"block mb-2"},"ডিপার্টমেন্ট",-1),X=t("option",{disabled:"",value:""},"Select Department",-1),Y=["value"],tt={class:"mb-4"},et=t("label",{class:"block mb-2"},"নাম",-1),st={class:"flex justify-center gap-4"},at=t("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),ot={__name:"EditZamatModal",props:{zamat:Object},emits:["close","updated"],setup(p,{emit:c}){const a=c,n=p,o=Z({name:"",department_id:null}),i=v(),r=V(),m=_([]);A(()=>n.zamat,d=>{o.name=d.name||"",o.department_id=d.department_id||null},{immediate:!0}),w(async()=>{await r.fetchDepartments(),m.value=r.departments});const f=async()=>{await i.updateZamat(n.zamat.id,o),a("updated"),a("close")};return(d,e)=>(s(),l("div",K,[t("div",P,[Q,t("form",{onSubmit:C(f,["prevent"])},[t("div",R,[W,y(t("select",{"onUpdate:modelValue":e[0]||(e[0]=u=>o.department_id=u),class:"w-full p-2 border rounded",required:""},[X,(s(!0),l($,null,k(m.value,u=>(s(),l("option",{key:u.id,value:u.id},h(u.name),9,Y))),128))],512),[[D,o.department_id]])]),t("div",tt,[et,y(t("input",{"onUpdate:modelValue":e[1]||(e[1]=u=>o.name=u),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[j,o.name]])]),t("div",st,[at,t("button",{type:"button",onClick:e[2]||(e[2]=u=>a("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},nt={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},lt={class:"card-bg p-4 md:p-8"},dt=t("h2",{class:"text-xl font-bold mb-4"},"ডিলেট মারহালা",-1),ct={class:"flex justify-end mt-4"},it={__name:"DeleteZamatModal",props:{zamat:{type:Object,required:!0}},emits:["close","deleted"],setup(p,{emit:c}){const a=c,n=p,o=v(),i=async()=>{await o.deleteZamat(n.zamat.id),a("deleted"),a("close")};return(r,m)=>(s(),l("div",nt,[t("div",lt,[dt,t("p",null,[M("আপনি কি ("),t("b",null,h(p.zamat.name),1),M(") ডিলিট করতে চান?")]),t("div",ct,[t("button",{onClick:m[0]||(m[0]=f=>a("close")),class:"bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"}," না "),t("button",{onClick:i,class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," ডিলেট ")])])]))}},rt={class:"my-container space-y-2"},mt={class:"flex justify-between items-center"},ut=t("h1",{class:"title-lg"},"মারহালা তালিকা",-1),_t={key:0,class:"flex justify-center items-center"},pt=t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),bt=[pt],ht={key:1,class:"overflow-x-auto"},ft={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},yt={class:"bg-gray-200 text-gray-700 text-sm leading-normal"},vt=t("th",{class:"py-3 px-2 text-left"},"#",-1),xt=t("th",{class:"py-3 px-2 text-left"},"নাম",-1),gt=t("th",{class:"py-3 px-2 text-left"},"বিভাগ",-1),wt={class:"text-gray-600 text-sm font-light"},$t={class:"py-3 px-2 text-left whitespace-nowrap"},kt={class:"flex items-center"},zt={class:"mr-2"},Mt={class:"font-medium"},St={class:"py-3 px-2 text-left"},Zt={class:"title-md"},Ct={class:"py-3 px-2 text-left"},Dt={class:"title-md"},jt={key:1},Vt=t("td",{colspan:"5",class:"text-center text-red-500 py-4"},"No zamats found",-1),qt=[Vt],Et={__name:"ZamatList",setup(p){const c=v(),a=_(!1),n=_(!1),o=_(!1),i=_(null),r=_(!0),m=async()=>{a.value=!1,await c.fetchZamats()},f=async()=>{n.value=!1,await c.fetchZamats()},d=()=>o.value=!1;return w(async()=>{try{await c.fetchZamats()}finally{r.value=!1}}),(e,u)=>(s(),l("div",rt,[t("div",mt,[ut,b("",!0)]),r.value?(s(),l("div",_t,bt)):(s(),l("div",ht,[t("table",ft,[t("thead",null,[t("tr",yt,[vt,xt,gt,b("",!0)])]),t("tbody",wt,[S(c).zamats.length?(s(!0),l($,{key:0},k(S(c).zamats,(x,q)=>{var z;return s(),l("tr",{key:x.id,class:"border-b border-gray-200 hover:bg-gray-100"},[t("td",$t,[t("div",kt,[t("div",zt,[t("p",Mt,h(q+1),1)])])]),t("td",St,[t("p",Zt,h(x.name),1)]),t("td",Ct,[t("p",Dt,h(((z=x.department)==null?void 0:z.name)||"N/A"),1)]),b("",!0)])}),128)):(s(),l("tr",jt,qt))])])])),a.value?(s(),g(J,{key:2,class:"z-40",onClose:m})):b("",!0),n.value?(s(),g(ot,{key:3,class:"z-40",zamat:i.value,onClose:f},null,8,["zamat"])):b("",!0),o.value?(s(),g(it,{key:4,class:"z-40",zamat:i.value,onClose:d},null,8,["zamat"])):b("",!0)]))}};export{Et as default};
