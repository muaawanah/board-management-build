import{E as d,G as n}from"./index-B_n6mduh.js";const l=d("institute",{state:()=>({institutes:[],pagination:{total:0,per_page:15,current_page:1,last_page:1},institute:null,loading:!1,error:null}),getters:{areas(i){return i.institutes.reduce((s,e)=>{const t=e.area.id,r=e.area.name;let a=s.find(o=>o.id===t);return a||(a={id:t,name:r,institutes:[]},s.push(a)),a.institutes.push({id:e.id,name:e.name,institute_code:e.institute_code}),s},[])}},actions:{async fetchInstitutes(i={}){var s,e;this.loading=!0;try{const t=await n.get("/institutes",{params:i});this.institutes=t.data.data||t.data,this.pagination={total:t.data.total||this.institutes.length,per_page:t.data.per_page||this.institutes.length,current_page:t.data.current_page||1,last_page:t.data.last_page||1}}catch(t){this.error=((e=(s=t.response)==null?void 0:s.data)==null?void 0:e.message)||"Failed to fetch institutes"}finally{this.loading=!1}},async fetchInstitute(i){var s,e;this.loading=!0;try{const t=await n.get(`/institutes/${i}`);this.institute=t.data}catch(t){this.error=((e=(s=t.response)==null?void 0:s.data)==null?void 0:e.message)||"Failed to fetch institute"}finally{this.loading=!1}},async findInstituteByCode(i){var s,e;if(i){this.loading=!0;try{const t=await n.get(`/institute-by-code/${i}`);return this.institute=t.data,this.institute}catch(t){this.error=((e=(s=t.response)==null?void 0:s.data)==null?void 0:e.message)||"Failed to fetch institute"}finally{this.loading=!1}}},async createInstitute(i){var s,e;this.loading=!0;try{const t=await n.post("/institutes",i);this.institutes.push(t.data)}catch(t){this.error=((e=(s=t.response)==null?void 0:s.data)==null?void 0:e.message)||"Failed to create institute"}finally{this.loading=!1}},async updateInstitute(i,s){var e,t;this.loading=!0;try{const r=await n.put(`/institutes/${i}`,s),a=this.institutes.findIndex(o=>o.id===i);a!==-1&&(this.institutes[a]=r.data)}catch(r){this.error=((t=(e=r.response)==null?void 0:e.data)==null?void 0:t.message)||"Failed to update institute"}finally{this.loading=!1}},async deleteInstitute(i){var s,e;this.loading=!0;try{await n.delete(`/institutes/${i}`),this.institutes=this.institutes.filter(t=>t.id!==i)}catch(t){this.error=((e=(s=t.response)==null?void 0:s.data)==null?void 0:e.message)||"Failed to delete institute"}finally{this.loading=!1}}}});export{l as u};
