import{y as h,r as p,h as f,z as u,o as e,c as s,a as t,d as n,w as i,i as r,F as x,b as y,A as m,t as l}from"./index-C0Q3J3C0.js";const b={class:"my-container space-y-2"},g={class:"flex justify-between items-center"},v=t("h1",{class:"title-lg"},"নোটিশ তালিকা",-1),w={key:0,class:"flex justify-center items-center"},N=t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),k=[N],L={key:1,class:"overflow-x-auto"},S={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},B=t("thead",null,[t("tr",{class:"bg-gray-200 text-gray-700 text-sm leading-normal"},[t("th",{class:"py-3 px-2 text-left"},"#"),t("th",{class:"py-3 px-2 text-left"},"তারিখ"),t("th",{class:"py-3 px-2 text-left"},"টাইটেল"),t("th",{class:"py-3 px-2 text-center"},"একশন")])],-1),D={class:"text-gray-600 text-sm font-light"},j={class:"py-3 px-2 text-left whitespace-nowrap"},A={class:"flex items-center"},V={class:"mr-2"},C={class:"font-medium"},E={class:"py-3 px-2 text-left"},F={class:"title-md"},R={class:"py-3 px-2 text-left"},z={class:"title-md line-clamp-1"},M={class:"py-3 px-2 text-center"},T={class:"flex item-center justify-center gap-4"},q=t("i",{class:"fas fa-edit"},null,-1),G=t("p",null,"সম্পাদনা",-1),H=t("i",{class:"fas fa-edit"},null,-1),I=t("p",null,"দেখুন",-1),J={key:1},K=t("td",{colspan:"5",class:"text-center text-red-500 py-4"},"No notices found",-1),O=[K],X={__name:"NoticeList",setup(P){const a=h(),d=p(!0);return f(async()=>{try{await a.fetchNotices()}finally{d.value=!1}}),(Q,U)=>{const c=u("RouterLink");return e(),s("div",b,[t("div",g,[v,n(c,{to:{name:"NoticeAdd"},class:"btn-2"},{default:i(()=>[m("নতুন যুক্ত করুন")]),_:1})]),d.value?(e(),s("div",w,k)):(e(),s("div",L,[t("table",S,[B,t("tbody",D,[r(a).notices.length?(e(!0),s(x,{key:0},y(r(a).notices,(o,_)=>(e(),s("tr",{key:o.id,class:"border-b border-gray-200 hover:bg-gray-100"},[t("td",j,[t("div",A,[t("div",V,[t("p",C,l(_+1),1)])])]),t("td",E,[t("p",F,l(new Date(o.publish_date).toLocaleDateString("bn-BD")),1)]),t("td",R,[t("p",z,l(o.title||"N/A"),1)]),t("td",M,[t("div",T,[n(c,{to:{name:"NoticeEdit",params:{id:o.id}},class:"btn-3"},{default:i(()=>[q,G]),_:2},1032,["to"]),n(c,{to:{name:"NoticeShow",params:{id:o.id}},class:"btn-2"},{default:i(()=>[H,I]),_:2},1032,["to"])])])]))),128)):(e(),s("tr",J,O))])])]))])}}};export{X as default};
