import{K as o,L as n}from"./index-DKYzgkfE.js";const u=o("student",{state:()=>({students:[],student:null,loading:!1,error:null}),actions:{async fetchStudents(a={}){var s,e;this.loading=!0;try{const t=await n.get("/students",{params:a});this.students=t.data}catch(t){this.error=((e=(s=t.response)==null?void 0:s.data)==null?void 0:e.message)||"Failed to fetch students"}finally{this.loading=!1}},async fetchStudent(a){var s,e;this.loading=!0;try{const t=await n.get(`/students/${a}`);this.student=t.data}catch(t){this.error=((e=(s=t.response)==null?void 0:s.data)==null?void 0:e.message)||"Failed to fetch student"}finally{this.loading=!1}},async createStudent(a){var s,e;this.loading=!0;try{const t=await n.post("/students",a);this.students.push(t.data)}catch(t){this.error=((e=(s=t.response)==null?void 0:s.data)==null?void 0:e.message)||"Failed to create student"}finally{this.loading=!1}},async updateStudent(a,s){var e,t;this.loading=!0;try{const d=await n.put(`/students/${a}`,s),r=this.students.findIndex(i=>i.id===a);r!==-1&&(this.students[r]=d.data)}catch(d){this.error=((t=(e=d.response)==null?void 0:e.data)==null?void 0:t.message)||"Failed to update student"}finally{this.loading=!1}},async deleteStudent(a){var s,e;this.loading=!0;try{await n.delete(`/students/${a}`),this.students=this.students.filter(t=>t.id!==a)}catch(t){this.error=((e=(s=t.response)==null?void 0:s.data)==null?void 0:e.message)||"Failed to delete student"}finally{this.loading=!1}}}});export{u};
