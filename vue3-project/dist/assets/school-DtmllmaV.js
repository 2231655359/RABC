import{O as s,P as r}from"./index-DkugqgKa.js";const a=()=>s.get("/manage/school/all"),l=e=>s.post("/manage/school/list",e),c=e=>s.post("/manage/school/add",e),n=e=>s.get(`/manage/school/find?_id=${e}`),u=e=>s.post("/manage/school/update",e),i=e=>s.post("/manage/school/delete",{schoolId:e});let d=r("School",{state:()=>({schools:[]}),actions:{async getSchoolAll(){let e=await a();return e.status==0?(this.schools=e.data,"OK"):Promise.reject(new Error(e.msg))},async getSchoolList(e){var o;let t=await l(e);return t.status==0?(this.schools=(o=t.data)==null?void 0:o.data,t.data):Promise.reject(new Error(t.msg))},async addSchool(e){let t=await c(e);return t.status==0?"OK":Promise.reject(new Error(t.msg))},async getSchoolById(e){let t=await n(e);return t.status==0?t.data:Promise.reject(new Error(t.msg))},async updateSchool(e){let t=await u(e);return t.status==0?"OK":Promise.reject(new Error(t.msg))},async deleteSchool(e){let t=await i(e);return t.status==0?"OK":Promise.reject(new Error(t.msg))}}});export{d as u};
