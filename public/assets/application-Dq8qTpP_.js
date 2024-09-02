import{D as l,E as n}from"./index-C5EGzjYi.js";const c=l("application",{state:()=>({applications:[],application:null,loading:!1,error:null,showStatusModal:!1}),actions:{async fetchApplications(){var t,s;this.loading=!0;try{const a=await n.get("/applications");this.applications=a.data}catch(a){this.error=((s=(t=a.response)==null?void 0:t.data)==null?void 0:s.message)||"Failed to fetch applications"}finally{this.loading=!1}},async fetchApplication(t,s={}){var a,i;this.loading=!0;try{const e=await n.get(`/applications/${t}`,{params:s});this.application=e.data}catch(e){this.error=((i=(a=e.response)==null?void 0:a.data)==null?void 0:i.message)||"Failed to fetch application"}finally{this.loading=!1}},async fetchPublicApplication(t,s){var a,i;this.loading=!0,this.application=null;try{const e=await n.get("/applications/public-show",{params:{application_id:t,institute_id:s}});this.application=e.data}catch(e){this.error=((i=(a=e.response)==null?void 0:a.data)==null?void 0:i.message)||"Failed to fetch public application"}finally{this.loading=!1}},async createApplication(t){var s,a;this.loading=!0;try{const i=await n.post("/applications",t);this.applications.push(i.data)}catch(i){this.error=((a=(s=i.response)==null?void 0:s.data)==null?void 0:a.message)||"Failed to create application"}finally{this.loading=!1}},async updateApplication(t,s){var a,i;this.loading=!0;try{const e=await n.put(`/applications/${t}`,s),p=this.applications.findIndex(o=>o.id===t);p!==-1&&(this.applications[p]=e.data)}catch(e){this.error=((i=(a=e.response)==null?void 0:a.data)==null?void 0:i.message)||"Failed to update application"}finally{this.loading=!1}},async deleteApplication(t){var s,a;this.loading=!0;try{await n.delete(`/applications/${t}`),this.applications=this.applications.filter(i=>i.id!==t)}catch(i){this.error=((a=(s=i.response)==null?void 0:s.data)==null?void 0:a.message)||"Failed to delete application"}finally{this.loading=!1}},async updatePaymentStatus(t,s){var a,i;this.loading=!0;try{const e=await n.put(`/applications/${t}/update-payment-status`,{payment_status:s}),p=this.applications.findIndex(o=>o.id===t);p!==-1&&(this.applications[p].payment_status=e.data.payment_status)}catch(e){this.error=((i=(a=e.response)==null?void 0:a.data)==null?void 0:i.message)||"Failed to update payment status"}finally{this.loading=!1}},findApplicationById(t){return this.applications.find(s=>parseInt(s.id)===parseInt(t))}}});export{c as u};
