import{k as y,f as N,g,r,o as k,l as V,a as d,c as p,b as e,t as w,j as D,i as v,v as m,n as _,p as C,d as R,q as B}from"./index-C5EGzjYi.js";import{_ as L}from"./TextEditor-D5RVtTF4.js";const M={class:"my-container space-y-4 card-bg p-4 md:p-8"},S=e("h1",{class:"title-lg text-center"},"নোটিশ সম্পাদনা করুন",-1),U={class:"space-y-4"},j={key:0,class:"text-red-500 text-center"},E=e("label",{for:"title",class:"block text-sm font-medium text-gray-700"},"টাইটেল",-1),I=e("label",{for:"description",class:"block text-sm font-medium text-gray-700"},"বিবরণ",-1),T=e("label",{for:"publishDate",class:"block text-sm font-medium text-gray-700"},"প্রকাশের তারিখ",-1),q={class:"flex justify-between gap-4"},$=["disabled"],G={__name:"NoticeEdit",setup(z){const o=y(),f=N(),u=g(),l=r(""),i=r(""),n=r(""),s=r(""),b=async()=>{s.value="";try{const a=u.params.id;await o.fetchNotice(a);const t=o.notice;t?(l.value=t.title,i.value=t.description,n.value=t.publish_date):s.value="নোটিশ পাওয়া যায়নি।"}catch{s.value=o.error||"নোটিশ লোড করতে ব্যর্থ হয়েছে।"}};k(()=>{b()});const h=async()=>{if(s.value="",!l.value||!i.value||!n.value){s.value="অনুগ্রহ করে সবগুলো ফিল্ড পূরণ করুন।";return}try{const a=u.params.id;await o.updateNotice(a,{title:l.value,description:i.value,publish_date:n.value}),f.push("/notices")}catch{s.value=o.error||"নোটিশ আপডেট করতে ব্যর্থ হয়েছে।"}};return(a,t)=>{const x=V("RouterLink");return d(),p("div",M,[S,e("div",U,[s.value?(d(),p("div",j,w(s.value),1)):D("",!0),e("div",null,[E,v(e("input",{type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=c=>l.value=c),class:"input-1",placeholder:"নোটিশের টাইটেল দিন"},null,512),[[m,l.value]])]),e("div",null,[I,_(L,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=c=>i.value=c),id:"description",placeholder:"নোটিশের বিবরণ দিন"},null,8,["modelValue"])]),e("div",null,[T,v(e("input",{type:"date",id:"publishDate","onUpdate:modelValue":t[2]||(t[2]=c=>n.value=c),class:"input-1"},null,512),[[m,n.value]])]),e("div",q,[_(x,{to:{name:"NoticeList"},class:"btn-3"},{default:C(()=>[B("নোটিশ তালিকা")]),_:1}),e("button",{onClick:h,class:"btn-2",disabled:R(o).loading},"সংরক্ষণ",8,$)])])])}}};export{G as default};
