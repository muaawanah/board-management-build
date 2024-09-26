import{G as l,H as r}from"./index-DmWwmszD.js";const h=l("exam",{state:()=>({exams:[],exam:null,loading:!1,error:null}),actions:{async fetchExams(){var s,e;this.loading=!0;try{const a=await r.get("/exams");this.exams=a.data}catch(a){this.error=((e=(s=a.response)==null?void 0:s.data)==null?void 0:e.message)||"Failed to fetch exams"}finally{this.loading=!1}},async fetchExam(s){var e,a;this.loading=!0;try{const t=await r.get(`/exams/${s}`);this.exam=t.data}catch(t){this.error=((a=(e=t.response)==null?void 0:e.data)==null?void 0:a.message)||"Failed to fetch exam"}finally{this.loading=!1}},async fetchLastExam(){var s,e;this.loading=!0;try{const a=await r.get("/exams/last");this.exam=a.data}catch(a){this.error=((e=(s=a.response)==null?void 0:s.data)==null?void 0:e.message)||"Failed to fetch exam"}finally{this.loading=!1}},async createExam(s){var e,a;this.loading=!0;try{const t=await r.post("/exams",s);this.exams.push(t.data)}catch(t){this.error=((a=(e=t.response)==null?void 0:e.data)==null?void 0:a.message)||"Failed to create exam"}finally{this.loading=!1}},async updateExam(s,e){var a,t;this.loading=!0;try{const i=await r.put(`/exams/${s}`,e),o=this.exams.findIndex(n=>n.id===s);o!==-1&&(this.exams[o]=i.data)}catch(i){this.error=((t=(a=i.response)==null?void 0:a.data)==null?void 0:t.message)||"Failed to update exam"}finally{this.loading=!1}},async deleteExam(s){var e,a;this.loading=!0;try{await r.delete(`/exams/${s}`),this.exams=this.exams.filter(t=>t.id!==s)}catch(t){this.error=((a=(e=t.response)==null?void 0:e.data)==null?void 0:a.message)||"Failed to delete exam"}finally{this.loading=!1}}}});export{h as u};
