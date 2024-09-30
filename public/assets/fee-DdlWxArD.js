import{G as f,H as i}from"./index-DxqKlCjx.js";const d=f("fee",{state:()=>({fees:[],fee:null,loading:!1,error:null}),actions:{async fetchFees(){var s,t;this.loading=!0;try{const e=await i.get("/fees");this.fees=e.data}catch(e){this.error=((t=(s=e.response)==null?void 0:s.data)==null?void 0:t.message)||"Failed to fetch fees"}finally{this.loading=!1}},async fetchFee(s,t={}){var e,a;this.loading=!0;try{const r=await i.get(`/fees/${s}`,{params:t});this.fee=r.data}catch(r){this.error=((a=(e=r.response)==null?void 0:e.data)==null?void 0:a.message)||"Failed to fetch fee"}finally{this.loading=!1}},async fetchFeeByExamAndZamat(s,t){var e,a;this.loading=!0;try{const r=await i.get("/fee-by-exam-and-zamat",{params:{exam_id:s,zamat_id:t}});this.fee=r.data}catch(r){this.error=((a=(e=r.response)==null?void 0:e.data)==null?void 0:a.message)||"Failed to fetch fee"}finally{this.loading=!1}},async createFee(s){var t,e;this.loading=!0;try{const a=await i.post("/fees",s);this.fees.push(a.data)}catch(a){this.error=((e=(t=a.response)==null?void 0:t.data)==null?void 0:e.message)||"Failed to create fee"}finally{this.loading=!1}},async updateFee(s,t){var e,a;this.loading=!0;try{const r=await i.put(`/fees/${s}`,t),o=this.fees.findIndex(n=>n.id===s);o!==-1&&(this.fees[o]=r.data)}catch(r){this.error=((a=(e=r.response)==null?void 0:e.data)==null?void 0:a.message)||"Failed to update fee"}finally{this.loading=!1}},async deleteFee(s){var t,e;this.loading=!0;try{await i.delete(`/fees/${s}`),this.fees=this.fees.filter(a=>a.id!==s)}catch(a){this.error=((e=(t=a.response)==null?void 0:t.data)==null?void 0:e.message)||"Failed to delete fee"}finally{this.loading=!1}}}});export{d as u};
