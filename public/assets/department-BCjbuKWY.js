import{J as o,K as r}from"./index-VD548OWL.js";const l=o("department",{state:()=>({departments:[],department:null,loading:!1,error:null}),actions:{async fetchDepartments(){var s,a;this.loading=!0;try{const e=await r.get("/departments");this.departments=e.data}catch(e){this.error=((a=(s=e.response)==null?void 0:s.data)==null?void 0:a.message)||"Failed to fetch departments"}finally{this.loading=!1}},async fetchDepartment(s){var a,e;this.loading=!0;try{const t=await r.get(`/departments/${s}`);this.department=t.data}catch(t){this.error=((e=(a=t.response)==null?void 0:a.data)==null?void 0:e.message)||"Failed to fetch department"}finally{this.loading=!1}},async createDepartment(s){var a,e;this.loading=!0;try{const t=await r.post("/departments",s);this.departments.push(t.data)}catch(t){this.error=((e=(a=t.response)==null?void 0:a.data)==null?void 0:e.message)||"Failed to create department"}finally{this.loading=!1}},async updateDepartment(s,a){var e,t;this.loading=!0;try{const n=await r.put(`/departments/${s}`,a),i=this.departments.findIndex(d=>d.id===s);i!==-1&&(this.departments[i]=n.data)}catch(n){this.error=((t=(e=n.response)==null?void 0:e.data)==null?void 0:t.message)||"Failed to update department"}finally{this.loading=!1}},async deleteDepartment(s){var a,e;this.loading=!0;try{await r.delete(`/departments/${s}`),this.departments=this.departments.filter(t=>t.id!==s)}catch(t){this.error=((e=(a=t.response)==null?void 0:a.data)==null?void 0:e.message)||"Failed to delete department"}finally{this.loading=!1}}}});export{l as u};
