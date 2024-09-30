import{G as l,H as t}from"./index-DxqKlCjx.js";const h=l("area",{state:()=>({areas:[],area:null,loading:!1,error:null}),actions:{async fetchAreas(){var r,s;this.loading=!0;try{const a=await t.get("/areas");return this.areas=a.data,this.areas}catch(a){this.error=((s=(r=a.response)==null?void 0:r.data)==null?void 0:s.message)||"Failed to fetch areas"}finally{this.loading=!1}},async fetchArea(r){var s,a;this.loading=!0;try{const e=await t.get(`/areas/${r}`);this.area=e.data}catch(e){this.error=((a=(s=e.response)==null?void 0:s.data)==null?void 0:a.message)||"Failed to fetch area"}finally{this.loading=!1}},async createArea(r){var s,a;this.loading=!0;try{const e=await t.post("/areas",r);this.areas.push(e.data)}catch(e){this.error=((a=(s=e.response)==null?void 0:s.data)==null?void 0:a.message)||"Failed to create area"}finally{this.loading=!1}},async updateArea(r,s){var a,e;this.loading=!0;try{const i=await t.put(`/areas/${r}`,s),o=this.areas.findIndex(n=>n.id===r);o!==-1&&(this.areas[o]=i.data)}catch(i){this.error=((e=(a=i.response)==null?void 0:a.data)==null?void 0:e.message)||"Failed to update area"}finally{this.loading=!1}},async deleteArea(r){var s,a;this.loading=!0;try{await t.delete(`/areas/${r}`),this.areas=this.areas.filter(e=>e.id!==r)}catch(e){this.error=((a=(s=e.response)==null?void 0:s.data)==null?void 0:a.message)||"Failed to delete area"}finally{this.loading=!1}}}});export{h as u};
