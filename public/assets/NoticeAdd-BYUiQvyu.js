import{k as x,f as h,r as n,l as y,a as r,c as d,b as e,t as g,j as k,i as u,v as p,n as m,p as N,d as V,q as w}from"./index-DDuwzY18.js";import{_ as D}from"./TextEditor-BFvvLeqM.js";const C={class:"my-container max-w-lg mx-auto space-y-4 card-bg p-4 md:p-8"},B=e("h1",{class:"title-lg text-center"},"নতুন নোটিশ যোগ করুন",-1),L={class:"space-y-4"},R={key:0,class:"text-red-500 text-center"},S=e("label",{for:"title",class:"block text-sm font-medium text-gray-700"},"টাইটেল",-1),U=e("label",{for:"description",class:"block text-sm font-medium text-gray-700"},"বিবরণ",-1),j=e("label",{for:"publishDate",class:"block text-sm font-medium text-gray-700"},"প্রকাশের তারিখ",-1),M={class:"flex justify-between gap-4"},T=["disabled"],$={__name:"NoticeAdd",setup(q){const c=x(),v=h(),o=n(""),l=n(""),i=n(""),s=n(""),_=async()=>{if(s.value="",!o.value||!l.value||!i.value){s.value="অনুগ্রহ করে সবগুলো ফিল্ড পূরণ করুন।";return}try{await c.createNotice({title:o.value,description:l.value,publish_date:i.value}),v.push("/notices")}catch{s.value=c.error||"নোটিশ যোগ করতে ব্যর্থ হয়েছে।"}};return(b,t)=>{const f=y("RouterLink");return r(),d("div",C,[B,e("div",L,[s.value?(r(),d("div",R,g(s.value),1)):k("",!0),e("div",null,[S,u(e("input",{type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=a=>o.value=a),class:"input-1",placeholder:"নোটিশের টাইটেল দিন"},null,512),[[p,o.value]])]),e("div",null,[U,m(D,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=a=>l.value=a),id:"description",placeholder:"নোটিশের বিবরণ দিন"},null,8,["modelValue"])]),e("div",null,[j,u(e("input",{type:"date",id:"publishDate","onUpdate:modelValue":t[2]||(t[2]=a=>i.value=a),class:"input-1"},null,512),[[p,i.value]])]),e("div",M,[m(f,{to:{name:"NoticeList"},class:"btn-3"},{default:N(()=>[w("নোটিশ তালিকা")]),_:1}),e("button",{onClick:_,class:"btn-2",disabled:V(c).loading},"সংরক্ষণ",8,T)])])])}}};export{$ as default};
