import{J as o,K as a}from"./index-C0Q3J3C0.js";const d=o("center",{state:()=>({centers:[],center:null,loading:!1,error:null}),actions:{async fetchCenters(r={}){var t,s;this.loading=!0;try{const e=await a.get("/centers",{params:r});this.centers=e.data}catch(e){this.error=((s=(t=e.response)==null?void 0:t.data)==null?void 0:s.message)||"Failed to fetch centers"}finally{this.loading=!1}},async fetchCenter(r){var t,s;this.loading=!0;try{const e=await a.get(`/centers/${r}`);this.center=e.data}catch(e){this.error=((s=(t=e.response)==null?void 0:t.data)==null?void 0:s.message)||"Failed to fetch center"}finally{this.loading=!1}},async createCenter(r){var t,s;this.loading=!0;try{const e=await a.post("/centers",r);this.centers.push(e.data)}catch(e){this.error=((s=(t=e.response)==null?void 0:t.data)==null?void 0:s.message)||"Failed to create center"}finally{this.loading=!1}},async updateCenter(r,t){var s,e;this.loading=!0;try{const n=await a.put(`/centers/${r}`,t),i=this.centers.findIndex(c=>c.id===r);i!==-1&&(this.centers[i]=n.data)}catch(n){this.error=((e=(s=n.response)==null?void 0:s.data)==null?void 0:e.message)||"Failed to update center"}finally{this.loading=!1}},async deleteCenter(r){var t,s;this.loading=!0;try{await a.delete(`/centers/${r}`),this.centers=this.centers.filter(e=>e.id!==r)}catch(e){this.error=((s=(t=e.response)==null?void 0:t.data)==null?void 0:s.message)||"Failed to delete center"}finally{this.loading=!1}},findNameById(r){const t=this.centers.find(s=>parseInt(s.id)===parseInt(r));return(t==null?void 0:t.name)||""}}});export{d as u};
