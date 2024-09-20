import{E as r,G as n}from"./index-B_n6mduh.js";const c=r("application",{state:()=>({applications:[],application:null,loading:!1,error:null,showStatusModal:!1}),actions:{async fetchApplications(){var i,s;this.loading=!0;try{const t=await n.get("/applications");this.applications=t.data}catch(t){this.error=((s=(i=t.response)==null?void 0:i.data)==null?void 0:s.message)||"Failed to fetch applications"}finally{this.loading=!1}},async fetchApplication(i,s={}){var t,a;this.loading=!0;try{const e=await n.get(`/applications/${i}`,{params:s});this.application=e.data}catch(e){this.error=((a=(t=e.response)==null?void 0:t.data)==null?void 0:a.message)||"Failed to fetch application"}finally{this.loading=!1}},async fetchPublicApplication(i,s){var t,a;this.loading=!0,this.application=null;try{const e=await n.get("/applications/public-show",{params:{application_id:i,institute_code:s}});this.application=e.data}catch(e){this.error=((a=(t=e.response)==null?void 0:t.data)==null?void 0:a.message)||"Failed to fetch public application"}finally{this.loading=!1}},async createApplication(i){var s,t;this.loading=!0;try{const a=await n.post("/applications",i);return this.applications.push(a.data.application),this.application=a.data.application,a.data.application}catch(a){throw this.error=((t=(s=a.response)==null?void 0:s.data)==null?void 0:t.message)||"Failed to create application",a}finally{this.loading=!1}},async updateApplication(i,s){var t,a;this.loading=!0;try{const e=await n.put(`/applications/${i}`,s),o=this.applications.findIndex(p=>p.id===i);o!==-1&&(this.applications[o]=e.data)}catch(e){this.error=((a=(t=e.response)==null?void 0:t.data)==null?void 0:a.message)||"Failed to update application"}finally{this.loading=!1}},async deleteApplication(i){var s,t;this.loading=!0;try{await n.delete(`/applications/${i}`),this.applications=this.applications.filter(a=>a.id!==i)}catch(a){this.error=((t=(s=a.response)==null?void 0:s.data)==null?void 0:t.message)||"Failed to delete application"}finally{this.loading=!1}},async updatePaymentStatus(i,s){var t,a;this.loading=!0;try{const e=await n.put(`/applications/${i}/update-payment-status`,{payment_status:s}),o=this.applications.findIndex(p=>p.id===i);o!==-1&&(this.applications[o].payment_status=e.data.payment_status)}catch(e){this.error=((a=(t=e.response)==null?void 0:t.data)==null?void 0:a.message)||"Failed to update payment status"}finally{this.loading=!1}},async bkashCreatePayment(i,s={}){var t,a;try{return(await n.post(`/applications/${i}/bkash-create-payment`,s)).data}catch(e){this.error=((a=(t=e.response)==null?void 0:t.data)==null?void 0:a.message)||"Failed to create bkash payment"}},async bkashExecutePayment(i,s={}){var t,a;this.loading=!0;try{return await n.post(`/applications/${i}/bkash-execute-payment`,s)}catch(e){this.error=((a=(t=e.response)==null?void 0:t.data)==null?void 0:a.message)||"Failed to execute bkash payment"}finally{this.loading=!1}},findApplicationById(i){return this.applications.find(s=>parseInt(s.id)===parseInt(i))}}});export{c as u};
