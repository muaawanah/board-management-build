import{y as l,r as d,h as _,z as u,o as t,c as s,a as e,i as a,F as h,b as y,d as m,w as p,t as c}from"./index-C8PMwhwn.js";const f={class:"my-container my-10"},g={class:"card-bg p-4 md:p-8"},b=e("div",{class:"flex justify-between items-center"},[e("h1",{class:"title-lg"},"নোটিশ তালিকা")],-1),v={key:0,class:"flex justify-center items-center"},x=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),k=[x],L={key:1},w={class:"space-y-4"},N={class:"flex justify-between items-center"},B={class:"title-md"},D={class:"text-sm text-gray-500"},S=["innerHTML"],j={key:1},M=e("p",{class:"text-center text-red-500 py-4"},"কোন নোটিশ পাওয়া যায়নি",-1),C=[M],T={__name:"NoticePublicList",setup(F){const n=l(),i=d(!0);return _(async()=>{try{await n.fetchNotices()}finally{i.value=!1}}),(H,P)=>{const r=u("RouterLink");return t(),s("div",f,[e("div",g,[b,i.value?(t(),s("div",v,k)):(t(),s("div",L,[e("ul",w,[a(n).notices.length?(t(!0),s(h,{key:0},y(a(n).notices,o=>(t(),s("li",{key:o.id,class:"p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"},[m(r,{to:{name:"NoticePublic",params:{id:o.id}}},{default:p(()=>[e("div",N,[e("h2",B,c(o.title||"N/A"),1),e("span",D,c(new Date(o.publish_date).toLocaleDateString("bn-BD"))+" ইং",1)]),e("div",{class:"text-gray-700 mt-2 line-clamp-1",innerHTML:o.description},null,8,S)]),_:2},1032,["to"])]))),128)):(t(),s("li",j,C))])]))])])}}};export{T as default};
