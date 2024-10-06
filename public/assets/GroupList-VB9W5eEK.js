import{u as w}from"./group-XYZ-mRtT.js";import{L as j,r as m,h as k,o as e,c as o,a as t,s as C,v as x,C as V,F as y,b as g,t as b,x as D,B as N,A as G,f as p,i as S,M as $}from"./index-C0Q3J3C0.js";import{u as q}from"./zamat--3t1L25n.js";const Z={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},E={class:"card-bg md:p-8 p-4 md:w-1/2"},L=t("h2",{class:"text-xl font-bold mb-4"},"গ্রুপ যুক্ত করুন",-1),U={class:"mb-4"},F=t("label",{class:"block mb-2"},"মারহালা",-1),O=t("option",{disabled:"",value:""},"Select Zamat",-1),T=["value"],H={class:"mb-4"},I=t("label",{class:"block mb-2"},"নাম",-1),J={class:"flex justify-center gap-4"},K=t("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),P={__name:"AddGroupModal",emits:["close","saved"],setup(h,{emit:c}){const a=c,n=j({name:"",zamat_id:null}),l=w(),i=q(),r=m([]);k(async()=>{await i.fetchZamats(),r.value=i.zamats});const u=async()=>{await l.createGroup(n),a("saved"),a("close")};return(f,d)=>(e(),o("div",Z,[t("div",E,[L,t("form",{onSubmit:C(u,["prevent"])},[t("div",U,[F,x(t("select",{"onUpdate:modelValue":d[0]||(d[0]=s=>n.zamat_id=s),class:"w-full p-2 border rounded",required:""},[O,(e(!0),o(y,null,g(r.value,s=>(e(),o("option",{key:s.id,value:s.id},b(s.name),9,T))),128))],512),[[V,n.zamat_id]])]),t("div",H,[I,x(t("input",{"onUpdate:modelValue":d[1]||(d[1]=s=>n.name=s),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[D,n.name]])]),t("div",J,[K,t("button",{type:"button",onClick:d[2]||(d[2]=s=>a("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},Q={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},R={class:"card-bg md:p-8 p-4 md:w-1/2"},W=t("h2",{class:"text-xl font-bold mb-4"},"গ্রুপ সম্পাদনা",-1),X={class:"mb-4"},Y=t("label",{class:"block mb-2"},"মারহালা",-1),tt=t("option",{disabled:"",value:""},"Select Zamat",-1),et=["value"],st={class:"mb-4"},ot=t("label",{class:"block mb-2"},"নাম",-1),at={class:"flex justify-center gap-4"},lt=t("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),nt={__name:"EditGroupModal",props:{group:Object},emits:["close","updated"],setup(h,{emit:c}){const a=c,n=h,l=j({name:"",zamat_id:null}),i=w(),r=q(),u=m([]);N(()=>n.group,d=>{l.name=d.name||"",l.zamat_id=d.zamat_id||null},{immediate:!0}),k(async()=>{await r.fetchZamats(),u.value=r.zamats});const f=async()=>{await i.updateGroup(n.group.id,l),a("updated"),a("close")};return(d,s)=>(e(),o("div",Q,[t("div",R,[W,t("form",{onSubmit:C(f,["prevent"])},[t("div",X,[Y,x(t("select",{"onUpdate:modelValue":s[0]||(s[0]=_=>l.zamat_id=_),class:"w-full p-2 border rounded",required:""},[tt,(e(!0),o(y,null,g(u.value,_=>(e(),o("option",{key:_.id,value:_.id},b(_.name),9,et))),128))],512),[[V,l.zamat_id]])]),t("div",st,[ot,x(t("input",{"onUpdate:modelValue":s[1]||(s[1]=_=>l.name=_),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[D,l.name]])]),t("div",at,[lt,t("button",{type:"button",onClick:s[2]||(s[2]=_=>a("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},dt={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},ct={class:"card-bg p-4 md:p-8"},it=t("h2",{class:"text-xl font-bold mb-4"},"ডিলেট গ্রুপ",-1),rt={class:"flex justify-end mt-4"},ut={__name:"DeleteGroupModal",props:{group:{type:Object,required:!0}},emits:["close","deleted"],setup(h,{emit:c}){const a=c,n=h,l=w(),i=async()=>{await l.deleteGroup(n.group.id),a("deleted"),a("close")};return(r,u)=>(e(),o("div",dt,[t("div",ct,[it,t("p",null,[G("আপনি কি ("),t("b",null,b(h.group.name),1),G(") ডিলিট করতে চান?")]),t("div",rt,[t("button",{onClick:u[0]||(u[0]=f=>a("close")),class:"bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"}," না "),t("button",{onClick:i,class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," ডিলেট ")])])]))}},_t={class:"my-container space-y-2"},pt={class:"flex justify-between items-center"},mt=t("h1",{class:"title-lg"},"গ্রুপ তালিকা",-1),bt={key:0,class:"flex justify-center items-center"},ht=t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),ft=[ht],yt={key:1,class:"overflow-x-auto"},vt={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},xt={class:"bg-gray-200 text-gray-700 text-sm leading-normal"},gt=t("th",{class:"py-3 px-2 text-left"},"#",-1),wt=t("th",{class:"py-3 px-2 text-left"},"মারহালা",-1),$t=t("th",{class:"py-3 px-2 text-left"},"নাম",-1),kt=t("th",{class:"py-3 px-2 text-left"},"অঞ্চল",-1),zt={class:"text-gray-600 text-sm font-light"},Mt={class:"py-3 px-2 text-left whitespace-nowrap"},Gt={class:"flex items-center"},St={class:"mr-2"},jt={class:"font-medium"},Ct={class:"py-3 px-2 text-left"},Vt={class:"title-md"},Dt={class:"py-3 px-2 text-left"},qt={class:"title-md"},At={class:"py-3 px-2 text-left"},Bt={class:"flex justify-start items-center"},Nt={key:0,class:"title-md pr-2"},Zt={class:"title-md"},Et={key:1},Lt=t("td",{colspan:"5",class:"text-center text-red-500 py-4"},"No groups found",-1),Ut=[Lt],Ht={__name:"GroupList",setup(h){const c=w(),a=m(!1),n=m(!1),l=m(!1),i=m(null),r=m(!0),u=async()=>{a.value=!1,await c.fetchGroups()},f=async()=>{n.value=!1,await c.fetchGroups()},d=()=>l.value=!1;return k(async()=>{try{await c.fetchGroups()}finally{r.value=!1}}),(s,_)=>(e(),o("div",_t,[t("div",pt,[mt,p("",!0)]),r.value?(e(),o("div",bt,ft)):(e(),o("div",yt,[t("table",vt,[t("thead",null,[t("tr",xt,[gt,wt,$t,kt,p("",!0)])]),t("tbody",zt,[S(c).groups.length?(e(!0),o(y,{key:0},g(S(c).groups,(v,A)=>{var z;return e(),o("tr",{key:v.id,class:"border-b border-gray-200 hover:bg-gray-100"},[t("td",Mt,[t("div",Gt,[t("div",St,[t("p",jt,b(A+1),1)])])]),t("td",Ct,[t("p",Vt,b(((z=v.zamat)==null?void 0:z.name)||"N/A"),1)]),t("td",Dt,[t("p",qt,b(v.name),1)]),t("td",At,[t("div",Bt,[(e(!0),o(y,null,g(v.areas,(M,B)=>(e(),o(y,{key:M.id},[B?(e(),o("span",Nt,",")):p("",!0),t("p",Zt,b(M.name),1)],64))),128))])]),p("",!0)])}),128)):(e(),o("tr",Et,Ut))])])])),a.value?(e(),$(P,{key:2,class:"z-40",onClose:u})):p("",!0),n.value?(e(),$(nt,{key:3,class:"z-40",group:i.value,onClose:f},null,8,["group"])):p("",!0),l.value?(e(),$(ut,{key:4,class:"z-40",group:i.value,onClose:d},null,8,["group"])):p("",!0)]))}};export{Ht as default};
