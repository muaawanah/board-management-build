import{G as o,H as n}from"./index-DxqKlCjx.js";const m=o("zamat",{state:()=>({zamats:[],zamat:null,loading:!1,error:null}),getters:{departments(s){return s.zamats.reduce((t,a)=>{const e=a.department.id,i=a.department.name;let r=t.find(d=>d.id===e);return r||(r={id:e,name:i,zamats:[]},t.push(r)),r.zamats.push({id:a.id,name:a.name,is_active:a.is_active,created_at:a.created_at,updated_at:a.updated_at}),t},[])}},actions:{async fetchZamats(){var s,t;this.loading=!0;try{const a=await n.get("/zamats");this.zamats=a.data}catch(a){this.error=((t=(s=a.response)==null?void 0:s.data)==null?void 0:t.message)||"Failed to fetch zamats"}finally{this.loading=!1}},async fetchZamat(s){var t,a;this.loading=!0;try{const e=await n.get(`/zamats/${s}`);this.zamat=e.data}catch(e){this.error=((a=(t=e.response)==null?void 0:t.data)==null?void 0:a.message)||"Failed to fetch zamat"}finally{this.loading=!1}},async createZamat(s){var t,a;this.loading=!0;try{const e=await n.post("/zamats",s);this.zamats.push(e.data)}catch(e){this.error=((a=(t=e.response)==null?void 0:t.data)==null?void 0:a.message)||"Failed to create zamat"}finally{this.loading=!1}},async updateZamat(s,t){var a,e;this.loading=!0;try{const i=await n.put(`/zamats/${s}`,t),r=this.zamats.findIndex(d=>d.id===s);r!==-1&&(this.zamats[r]=i.data)}catch(i){this.error=((e=(a=i.response)==null?void 0:a.data)==null?void 0:e.message)||"Failed to update zamat"}finally{this.loading=!1}},async deleteZamat(s){var t,a;this.loading=!0;try{await n.delete(`/zamats/${s}`),this.zamats=this.zamats.filter(e=>e.id!==s)}catch(e){this.error=((a=(t=e.response)==null?void 0:t.data)==null?void 0:a.message)||"Failed to delete zamat"}finally{this.loading=!1}},findNameById(s){const t=this.zamats.find(a=>parseInt(a.id)===parseInt(s));return(t==null?void 0:t.name)||""}}});export{m as u};
