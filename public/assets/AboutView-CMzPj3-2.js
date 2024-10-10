import{_ as m,r as h,o as l,c as a,a as e,F as d,b,n as g,t as n,d as v,w as p,e as w,f as y,T as k,u as S,g as $,h as T,i as u}from"./index-MlIbSbKR.js";import{u as V}from"./institute-BDQGJ1k1.js";const j={class:"w-full space-y-4"},C={class:"w-full flex justify-center items-center print:hidden"},I={class:"flex p-2 rounded-lg gap-2 bg-gray-200 justify-center items-center"},A=["onClick"],B={key:0},L={__name:"TabView",props:{tabs:{required:!0}},setup(c){const o=h(c.tabs[0].id);return(_,x)=>(l(),a("div",j,[e("div",C,[e("div",I,[(l(!0),a(d,null,b(c.tabs,r=>(l(),a("button",{key:r.id,type:"button",class:g(["px-4 pt-2 pb-1.5 rounded-lg border",{"bg-white":o.value===r.id}]),onClick:s=>o.value=r.id},n(r.label),11,A))),128))])]),v(k,{name:"fade",mode:"out-in"},{default:p(()=>[(l(),a("div",{key:o.value,class:"w-full"},[(l(!0),a(d,null,b(c.tabs,r=>(l(),a(d,{key:r.id},[o.value===r.id?(l(),a("div",B,[w(_.$slots,r.id,{},void 0,!0)])):y("",!0)],64))),128))]))]),_:3})]))}},M=m(L,[["__scopeId","data-v-73c934aa"]]),N={class:"my-container max-w-3xl my-4 min-h-[calc(100vh_-_200px)]"},U=["innerHTML"],F={key:1,class:"flex justify-center items-center p-12 text-gray-400 text-xl animate-pulse"},H={class:"table-auto w-full text-left"},q={class:"border px-4 py-2"},z={class:"border px-4 py-2"},D={key:0,class:"flex justify-center items-center p-12 text-gray-400 text-xl animate-pulse"},E={class:"table-auto w-full text-left"},G={class:"border px-4 py-2"},J={class:"border px-4 py-2"},K={key:0,class:"flex justify-center items-center p-12 text-gray-400 text-xl animate-pulse"},O={__name:"AboutView",setup(c){const i=S(),o=V(),_=[{id:"one",label:"আমাদের সম্পর্কে"},{id:"two",label:"তানযীমভুক্ত মাদরাসা তালিকা"},{id:"three",label:"মারকায মাদরাসা তালিকা"}],x=$(()=>o.institutes.filter(r=>r.is_center));return T(()=>{i.fetchAboutUs(),o.fetchInstitutes({per_page:"all",is_active:1})}),(r,s)=>(l(),a("div",N,[v(M,{tabs:_,class:"card-bg p-8 md:p-12 space-y-4 w-full"},{one:p(()=>{var t,f;return[s[1]||(s[1]=e("h2",{class:"title-xl mb-6 text-center"},"আমাদের সম্পর্কে",-1)),(t=u(i).aboutUs)!=null&&t.about_us?(l(),a("div",{key:0,innerHTML:(f=u(i).aboutUs)==null?void 0:f.about_us},null,8,U)):(l(),a("div",F,s[0]||(s[0]=[e("div",{class:"loader"},null,-1)])))]}),two:p(()=>[s[4]||(s[4]=e("h2",{class:"title-xl mb-6 text-center"},"তানযীমভুক্ত মাদরাসা",-1)),e("table",H,[s[2]||(s[2]=e("thead",{class:"bg-gray-100"},[e("tr",null,[e("th",{class:"border px-4 py-2"},"ইলহাক"),e("th",{class:"border px-4 py-2"},"মাদরাসার নাম ও ঠিকানা")])],-1)),e("tbody",null,[(l(!0),a(d,null,b(u(o).institutes,t=>(l(),a("tr",{key:t.id},[e("td",q,n(t==null?void 0:t.institute_code),1),e("td",z,n(t==null?void 0:t.name),1)]))),128))])]),u(o).institutes.length?y("",!0):(l(),a("div",D,s[3]||(s[3]=[e("div",{class:"loader"},null,-1)])))]),three:p(()=>[s[7]||(s[7]=e("h2",{class:"title-xl mb-6 text-center"},"মারকায মাদরাসা",-1)),e("table",E,[s[5]||(s[5]=e("thead",{class:"bg-gray-100"},[e("tr",null,[e("th",{class:"border px-4 py-2"},"ইলহাক"),e("th",{class:"border px-4 py-2"},"মারকায মাদরাসার নাম")])],-1)),e("tbody",null,[(l(!0),a(d,null,b(x.value,t=>(l(),a("tr",{key:t.id},[e("td",G,n(t==null?void 0:t.institute_code),1),e("td",J,n(t==null?void 0:t.name),1)]))),128))])]),x.value.length?y("",!0):(l(),a("div",K,s[6]||(s[6]=[e("div",{class:"loader"},null,-1)])))]),_:1})]))}},R=m(O,[["__scopeId","data-v-f62c0fb4"]]);export{R as default};
