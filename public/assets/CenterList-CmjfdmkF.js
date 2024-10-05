import{u as M}from"./center-GlMrWtpQ.js";import{r as y,B as q,h as V,o as e,c as s,a as t,s as B,v as w,C,F as h,b as x,t as u,i as S,A as z,f,L as Z,M as j}from"./index-Bg3J5TkX.js";import{u as E}from"./institute-DU9N27Xk.js";import{u as G}from"./zamat-CEJ2NzWs.js";import{u as I}from"./group-BLQ3hy2Z.js";const L={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},F={class:"card-bg md:p-8 p-4 md:w-1/2"},O=t("h2",{class:"text-xl font-bold mb-4"},"মারকাজ যুক্ত করুন",-1),T={class:"mb-4"},H=t("label",{class:"block mb-2"},"মারহালা",-1),J=t("option",{disabled:"",value:""},"Select Zamat",-1),K=["value"],P={class:"mb-4"},Q=t("label",{class:"block mb-2"},"গ্রুপ",-1),R=t("option",{disabled:"",value:""},"Select Group",-1),W=["value"],X={key:0},Y={class:"mb-4"},tt=t("label",{class:"block mb-2"},"ইনস্টিটিউট",-1),et={class:"grid gap-4"},st=["onUpdate:modelValue"],ot=t("option",{disabled:"",value:""},"Select Institute",-1),lt=["value"],nt=["onClick"],at=t("hr",{class:"my-6"},null,-1),it={class:"flex justify-center gap-4"},dt=t("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),ct={__name:"AddCenterModal",emits:["close","saved"],setup(k,{emit:_}){const d=_,l=y({institute_ids:[],zamat_id:null,group_id:null,gender:null});q(()=>l.value.zamat_id,async()=>{await m.fetchGroups(l.value.zamat_id)});const i=M(),p=E(),b=G(),m=I();V(async()=>{await b.fetchZamats(),await p.fetchInstitutes({per_page:"all",is_center:1})});const v=async()=>{await i.createCenter(l.value),d("saved"),d("close")};return(g,r)=>(e(),s("div",L,[t("div",F,[O,t("form",{onSubmit:B(v,["prevent"])},[t("div",T,[H,w(t("select",{"onUpdate:modelValue":r[0]||(r[0]=o=>l.value.zamat_id=o),class:"w-full p-2 border rounded",required:""},[J,(e(!0),s(h,null,x(S(b).zamats,o=>(e(),s("option",{key:o.id,value:o.id},u(o.name),9,K))),128))],512),[[C,l.value.zamat_id]])]),t("div",P,[Q,w(t("select",{"onUpdate:modelValue":r[1]||(r[1]=o=>l.value.group_id=o),class:"w-full p-2 border rounded"},[R,(e(!0),s(h,null,x(S(m).groups,o=>(e(),s("option",{key:o.id,value:o.id},[z(u(o.name)+" (",1),(e(!0),s(h,null,x(o.areas,(c,$)=>(e(),s(h,{key:c.id},[$?(e(),s("span",X,", ")):f("",!0),t("span",null,u(c.name),1)],64))),128)),z(") ")],8,W))),128))],512),[[C,l.value.group_id]])]),t("div",Y,[tt,t("div",et,[(e(!0),s(h,null,x(l.value.institute_ids.length,o=>(e(),s("div",{key:o,class:"flex items-center gap-4"},[w(t("select",{"onUpdate:modelValue":c=>l.value.institute_ids[o-1]=c,class:"w-full p-2 border rounded",required:""},[ot,(e(!0),s(h,null,x(S(p).institutes,c=>(e(),s("option",{key:c.id,value:c.id},u(c.institute_code)+" - "+u(c.name),9,lt))),128))],8,st),[[C,l.value.institute_ids[o-1]]]),t("i",{onClick:c=>l.value.institute_ids.splice(o-1,1),class:"fas fa-trash cursor-pointer text-red-600"},null,8,nt)]))),128)),t("i",{onClick:r[2]||(r[2]=o=>l.value.institute_ids.push("")),class:"fas fa-plus-circle cursor-pointer text-sky-600"})])]),f("",!0),at,t("div",it,[dt,t("button",{type:"button",onClick:r[4]||(r[4]=o=>d("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},rt={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},ut={class:"card-bg md:p-8 p-4 md:w-1/2"},_t=t("h2",{class:"text-xl font-bold mb-4"},"মারকাজ সম্পাদনা",-1),pt={class:"mb-4"},mt=t("label",{class:"block mb-2"},"ইনস্টিটিউট",-1),ht=t("option",{disabled:"",value:""},"Select Institute",-1),bt=["value"],vt={class:"mb-4"},ft=t("label",{class:"block mb-2"},"মারহালা",-1),yt=t("option",{disabled:"",value:""},"Select Zamat",-1),xt=["value"],gt={class:"mb-4"},$t=t("label",{class:"block mb-2"},"গ্রুপ",-1),kt=t("option",{disabled:"",value:""},"Select Group",-1),wt=["value"],Ct={class:"flex justify-center gap-4"},St=t("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),zt={__name:"EditCenterModal",props:{center:Object},emits:["close","updated"],setup(k,{emit:_}){const d=_,l=k,i=Z({institute_id:null,zamat_id:null,group_id:null,gender:"male"}),p=M(),b=E(),m=G(),v=I(),g=y([]),r=y([]),o=y([]);q(()=>l.center,$=>{i.institute_id=$.institute_id||null,i.zamat_id=$.zamat_id||null,i.group_id=$.group_id||null,i.gender=$.gender||null},{immediate:!0}),V(async()=>{await b.fetchInstitutes(),await m.fetchZamats(),await v.fetchGroups(),g.value=b.institutes,r.value=m.zamats,o.value=v.groups});const c=async()=>{await p.updateCenter(l.center.id,i),d("updated"),d("close")};return($,a)=>(e(),s("div",rt,[t("div",ut,[_t,t("form",{onSubmit:B(c,["prevent"])},[t("div",pt,[mt,w(t("select",{"onUpdate:modelValue":a[0]||(a[0]=n=>i.institute_id=n),class:"w-full p-2 border rounded",required:""},[ht,(e(!0),s(h,null,x(g.value,n=>(e(),s("option",{key:n.id,value:n.id},u(n.name),9,bt))),128))],512),[[C,i.institute_id]])]),t("div",vt,[ft,w(t("select",{"onUpdate:modelValue":a[1]||(a[1]=n=>i.zamat_id=n),class:"w-full p-2 border rounded",required:""},[yt,(e(!0),s(h,null,x(r.value,n=>(e(),s("option",{key:n.id,value:n.id},u(n.name),9,xt))),128))],512),[[C,i.zamat_id]])]),t("div",gt,[$t,w(t("select",{"onUpdate:modelValue":a[2]||(a[2]=n=>i.group_id=n),class:"w-full p-2 border rounded"},[kt,(e(!0),s(h,null,x(o.value,n=>(e(),s("option",{key:n.id,value:n.id},u(n.name),9,wt))),128))],512),[[C,i.group_id]])]),f("",!0),t("div",Ct,[St,t("button",{type:"button",onClick:a[4]||(a[4]=n=>d("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},Mt={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},jt={class:"card-bg p-4 md:p-8"},Vt=t("h2",{class:"text-xl font-bold mb-4"},"ডিলেট মারহালা",-1),At={class:"flex justify-end mt-4"},Ut={__name:"DeleteCenterModal",props:{center:{type:Object,required:!0}},emits:["close","deleted"],setup(k,{emit:_}){const d=_,l=k,i=M(),p=async()=>{await i.deleteCenter(l.center.id),d("deleted"),d("close")};return(b,m)=>{var v,g;return e(),s("div",Mt,[t("div",jt,[Vt,t("p",null,[z("আপনি কি ("),t("b",null,u((g=(v=k.center)==null?void 0:v.institute)==null?void 0:g.name),1),z(") ডিলিট করতে চান?")]),t("div",At,[t("button",{onClick:m[0]||(m[0]=r=>d("close")),class:"bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"}," না "),t("button",{onClick:p,class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," ডিলেট ")])])])}}},Dt={class:"my-container space-y-2"},Nt=t("h1",{class:"title-lg"},"মারকাজ তালিকা",-1),qt={key:0,class:"flex justify-center items-center"},Bt=t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),Et=[Bt],Gt={key:1,class:"overflow-x-auto"},It={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},Zt={class:"bg-gray-200 text-gray-700 text-sm leading-normal"},Lt=t("th",{class:"py-3 px-2 text-left"},"#",-1),Ft=t("th",{class:"py-3 px-2 text-left"},"মারহালা",-1),Ot=t("th",{class:"py-3 px-2 text-left"},"গ্রুপ",-1),Tt=t("th",{class:"py-3 px-2 text-left"},"মারকাজের নাম",-1),Ht=t("th",{class:"py-3 px-2 text-center print:hidden"},"একশন",-1),Jt={class:"text-gray-600 text-sm font-light"},Kt={class:"py-3 px-2 text-left whitespace-nowrap"},Pt={class:"flex items-center"},Qt={class:"mr-2"},Rt={class:"font-medium"},Wt={class:"py-3 px-2 text-left"},Xt={class:"title-md"},Yt={class:"py-3 px-2 text-left"},te={class:"title-md"},ee={class:"py-3 px-2 text-left"},se={class:"title-md"},oe={class:"py-3 px-2 text-center print:hidden"},le={class:"flex item-center justify-center gap-4"},ne=["onClick"],ae=t("i",{class:"fas fa-edit"},null,-1),ie=[ae],de={key:1},ce=t("td",{colspan:"5",class:"text-center text-red-500 py-4"},"No centers found",-1),re=[ce],ve={__name:"CenterList",setup(k){const _=M(),d=y(!1),l=y(!1),i=y(!1),p=y(null),b=y(!0),m=()=>d.value=!0,v=async()=>{d.value=!1,await _.fetchCenters()},g=c=>{p.value=c,l.value=!0},r=async()=>{l.value=!1,await _.fetchCenters()},o=()=>i.value=!1;return V(async()=>{try{await _.fetchCenters()}finally{b.value=!1}}),(c,$)=>(e(),s("div",Dt,[t("div",{class:"flex justify-between items-center"},[Nt,t("button",{class:"btn-2",onClick:m},"নতুন যুক্ত করুন")]),b.value?(e(),s("div",qt,Et)):(e(),s("div",Gt,[t("table",It,[t("thead",null,[t("tr",Zt,[Lt,Ft,Ot,Tt,Ht,f("",!0)])]),t("tbody",Jt,[S(_).centers.length?(e(!0),s(h,{key:0},x(S(_).centers,(a,n)=>{var A,U,D,N;return e(),s("tr",{key:a.id,class:"border-b border-gray-200 hover:bg-gray-100"},[t("td",Kt,[t("div",Pt,[t("div",Qt,[t("p",Rt,u(n+1),1)])])]),t("td",Wt,[t("p",Xt,u((A=a==null?void 0:a.zamat)==null?void 0:A.name),1)]),t("td",Yt,[t("p",te,u(((U=a==null?void 0:a.group)==null?void 0:U.name)||"N/A"),1)]),t("td",ee,[t("p",se,u((D=a.institute)==null?void 0:D.institute_code)+" - "+u(((N=a.institute)==null?void 0:N.name)||"N/A"),1)]),f("",!0),t("td",oe,[t("div",le,[t("button",{onClick:ue=>g(a),class:"text-blue-600 hover:text-blue-800"},ie,8,ne),f("",!0)])])])}),128)):(e(),s("tr",de,re))])])])),d.value?(e(),j(ct,{key:2,class:"z-40",onClose:v})):f("",!0),l.value?(e(),j(zt,{key:3,class:"z-40",center:p.value,onClose:r},null,8,["center"])):f("",!0),i.value?(e(),j(Ut,{key:4,class:"z-40",center:p.value,onClose:o},null,8,["center"])):f("",!0)]))}};export{ve as default};
