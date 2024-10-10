import{J as p,K as o}from"./index-BLqg7Ylw.js";const u=p("group",{state:()=>({groups:[],group:null,loading:!1,error:null}),actions:{async fetchGroups(t=null){var r,s;this.loading=!0;const e=t?"/groups?zamat_id="+t:"/groups";try{const a=await o.get(e);this.groups=a.data}catch(a){this.error=((s=(r=a.response)==null?void 0:r.data)==null?void 0:s.message)||"Failed to fetch groups"}finally{this.loading=!1}},async fetchGroup(t){var e,r;this.loading=!0;try{const s=await o.get(`/groups/${t}`);this.group=s.data}catch(s){this.error=((r=(e=s.response)==null?void 0:e.data)==null?void 0:r.message)||"Failed to fetch group"}finally{this.loading=!1}},async createGroup(t){var e,r;this.loading=!0;try{const s=await o.post("/groups",t);this.groups.push(s.data)}catch(s){this.error=((r=(e=s.response)==null?void 0:e.data)==null?void 0:r.message)||"Failed to create group"}finally{this.loading=!1}},async updateGroup(t,e){var r,s;this.loading=!0;try{const a=await o.put(`/groups/${t}`,e),i=this.groups.findIndex(n=>n.id===t);i!==-1&&(this.groups[i]=a.data)}catch(a){this.error=((s=(r=a.response)==null?void 0:r.data)==null?void 0:s.message)||"Failed to update group"}finally{this.loading=!1}},async deleteGroup(t){var e,r;this.loading=!0;try{await o.delete(`/groups/${t}`),this.groups=this.groups.filter(s=>s.id!==t)}catch(s){this.error=((r=(e=s.response)==null?void 0:e.data)==null?void 0:r.message)||"Failed to delete group"}finally{this.loading=!1}},findNameById(t){const e=this.groups.find(r=>parseInt(r.id)===parseInt(t));return(e==null?void 0:e.name)||""}}});export{u};
