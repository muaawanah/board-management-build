import{k as l,r as d,o as _,l as u,a as t,c as s,b as e,d as i,F as h,m,n as p,p as y,t as c}from"./index-C5EGzjYi.js";const f={class:"my-container my-10"},g={class:"card-bg p-4 md:p-8"},b=e("div",{class:"flex justify-between items-center"},[e("h1",{class:"title-lg"},"নোটিশ তালিকা")],-1),v={key:0,class:"flex justify-center items-center"},x=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),k=[x],L={key:1},N={class:"space-y-4"},w={class:"flex justify-between items-center"},B={class:"title-md"},D={class:"text-sm text-gray-500"},S=["innerHTML"],j={key:1},M=e("p",{class:"text-center text-red-500 py-4"},"কোন নোটিশ পাওয়া যায়নি",-1),C=[M],T={__name:"NoticePublicList",setup(F){const n=l(),a=d(!0);return _(async()=>{try{await n.fetchNotices()}finally{a.value=!1}}),(H,P)=>{const r=u("RouterLink");return t(),s("div",f,[e("div",g,[b,a.value?(t(),s("div",v,k)):(t(),s("div",L,[e("ul",N,[i(n).notices.length?(t(!0),s(h,{key:0},m(i(n).notices,o=>(t(),s("li",{key:o.id,class:"p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"},[p(r,{to:{name:"NoticePublic",params:{id:o.id}}},{default:y(()=>[e("div",w,[e("h2",B,c(o.title||"N/A"),1),e("span",D,c(new Date(o.publish_date).toLocaleDateString("bn-BD"))+" ইং",1)]),e("div",{class:"text-gray-700 mt-2 line-clamp-1",innerHTML:o.description},null,8,S)]),_:2},1032,["to"])]))),128)):(t(),s("li",j,C))])]))])])}}};export{T as default};
