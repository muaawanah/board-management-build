import{y as b,r as n,c as r,a as e,t as h,f as y,q as d,v as u,d as p,w as g,i as k,z as N,o as m,A as V,x as w}from"./index-BLqg7Ylw.js";import{_ as D}from"./TextEditor-TYvNTT92.js";const C={class:"my-container max-w-lg mx-auto space-y-4 card-bg p-4 md:p-8"},B=e("h1",{class:"title-lg text-center"},"নতুন নোটিশ যোগ করুন",-1),L={class:"space-y-4"},R={key:0,class:"text-red-500 text-center"},S=e("label",{for:"title",class:"block text-sm font-medium text-gray-700"},"টাইটেল",-1),U=e("label",{for:"description",class:"block text-sm font-medium text-gray-700"},"বিবরণ",-1),A=e("label",{for:"publishDate",class:"block text-sm font-medium text-gray-700"},"প্রকাশের তারিখ",-1),M={class:"flex justify-between gap-4"},T=["disabled"],E={__name:"NoticeAdd",setup(j){const c=b(),v=w(),a=n(""),l=n(""),i=n(""),s=n(""),_=async()=>{if(s.value="",!a.value||!l.value||!i.value){s.value="অনুগ্রহ করে সবগুলো ফিল্ড পূরণ করুন।";return}try{await c.createNotice({title:a.value,description:l.value,publish_date:i.value}),v.push("/notices")}catch{s.value=c.error||"নোটিশ যোগ করতে ব্যর্থ হয়েছে।"}};return(x,t)=>{const f=N("RouterLink");return m(),r("div",C,[B,e("div",L,[s.value?(m(),r("div",R,h(s.value),1)):y("",!0),e("div",null,[S,d(e("input",{type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),class:"input-1",placeholder:"নোটিশের টাইটেল দিন"},null,512),[[u,a.value]])]),e("div",null,[U,p(D,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=o=>l.value=o),id:"description",placeholder:"নোটিশের বিবরণ দিন"},null,8,["modelValue"])]),e("div",null,[A,d(e("input",{type:"date",id:"publishDate","onUpdate:modelValue":t[2]||(t[2]=o=>i.value=o),class:"input-1"},null,512),[[u,i.value]])]),e("div",M,[p(f,{to:{name:"NoticeList"},class:"btn-3"},{default:g(()=>[V("নোটিশ তালিকা")]),_:1}),e("button",{onClick:_,class:"btn-2",disabled:k(c).loading},"সংরক্ষণ",8,T)])])])}}};export{E as default};
