import{u as se}from"./class-CBCYlJYE.js";import{u as re}from"./role-7JurnY40.js";import{d as ue,u as de,r as o,a as ie,i as me,o as i,c as C,b as t,w as n,f as d,F as U,s as F,k as S,h as _,g as pe,B as _e,E as ve,q as fe,v as B}from"./index-DkugqgKa.js";const ge={class:"dialog-footer"},ye=ue({__name:"Class",setup(ce){let v=se(),y=re(),V=de(),M=o([]),O=o([]),R=o(""),L=o(""),k=o([]),x=o([]);const I=()=>{var l;(l=y.roles)!=null&&l.length?(O.value=y.roles,T()):y.roleList().then(()=>{O.value=y.roles,T()})},T=()=>{O.value.forEach(l=>{l.name=="教师"?R.value=l._id:l.name=="学管"&&(L.value=l._id)})},P=()=>{V.users.length?(M.value=V.users,$()):V.getUserAll().then(()=>{M.value=V.users,$()})},$=()=>{M.value.forEach(l=>{l.role_id==R.value?k.value.push(l):l.role_id==L.value&&x.value.push(l)})},j=(l,e,m,c)=>{let s=k.value.find(u=>u._id==m);return s==null?void 0:s.name},G=(l,e,m,c)=>{let s=x.value.find(u=>u._id==m);return s==null?void 0:s.name},q=o([]),H=l=>{E(),v.getClassById(l).then(e=>{r.value=e})},J=l=>{_e.confirm("确定要删除此条数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{v.deleteClass(l).then(()=>{ve({type:"success",message:"删除成功"}),p()})}).catch(()=>{})},p=()=>{v.getClassList({page:b.value,size:w.value,searchMap:f.value}).then(l=>{q.value=v.classes,D.value=l==null?void 0:l.total})},b=o(1),w=o(5),D=o(0),f=o({teacher_id:"",manager_id:""}),K=l=>{w.value=l,p()},Q=l=>{b.value=l,p()},W=()=>{b.value=1,p()},E=()=>{g.value=!0,r.value={_id:null,classname:"",teacher_id:"",manager_id:""},fe(()=>{var l;(l=z.value)==null||l.resetFields()})},N=o(),X=l=>{l&&l.resetFields()},g=o(!1),r=o({_id:null,classname:"",teacher_id:"",manager_id:""}),z=o(),Y=ie({classname:[{required:!0,message:"请输入班级名称",trigger:"blur"}],teacher_id:[{required:!0,message:"请选择授课教师",trigger:"change"}],manager_id:[{required:!0,message:"请选择学管",trigger:"change"}]}),Z=l=>{l&&l.validate(e=>{e&&v.addClass(r.value).then(()=>{g.value=!1,p()})})},ee=l=>{l&&l.validate(e=>{e?v.updateClass(r.value).then(()=>{g.value=!1,p()}):console.log("error submit!")})};return me(()=>{I(),P(),p()}),(l,e)=>{const m=d("el-option"),c=d("el-select"),s=d("el-form-item"),u=d("el-button"),A=d("el-form"),h=d("el-table-column"),le=d("el-table"),ae=d("el-pagination"),te=d("el-input"),ne=d("el-dialog");return i(),C("div",null,[t(A,{inline:!0,model:f.value,class:"demo-form-inline",style:{margin:"20px 0"},ref_key:"searchFormRef",ref:N},{default:n(()=>[t(s,{style:{width:"300px"},prop:"teacher_id"},{default:n(()=>[t(c,{modelValue:f.value.teacher_id,"onUpdate:modelValue":e[0]||(e[0]=a=>f.value.teacher_id=a),placeholder:"根据教师查询",clearable:""},{default:n(()=>[(i(!0),C(U,null,F(S(k),a=>(i(),B(m,{label:a.name,value:a._id,key:a._id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{style:{width:"300px"},prop:"manager_id"},{default:n(()=>[t(c,{modelValue:f.value.manager_id,"onUpdate:modelValue":e[1]||(e[1]=a=>f.value.manager_id=a),placeholder:"根据学管查询",clearable:""},{default:n(()=>[(i(!0),C(U,null,F(S(x),a=>(i(),B(m,{label:a.name,value:a._id,key:a._id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,null,{default:n(()=>[t(u,{type:"primary",onClick:W},{default:n(()=>e[11]||(e[11]=[_("查询")])),_:1}),t(u,{type:"primary",onClick:E},{default:n(()=>e[12]||(e[12]=[_("添加班级")])),_:1}),t(u,{onClick:e[2]||(e[2]=a=>X(N.value))},{default:n(()=>e[13]||(e[13]=[_("重置")])),_:1})]),_:1})]),_:1},8,["model"]),t(le,{data:q.value,style:{width:"100%",height:"380px"}},{default:n(()=>[t(h,{label:"序号",type:"index",width:"80"}),t(h,{label:"班级名称",prop:"classname"}),t(h,{label:"授课教师",formatter:j,prop:"teacher_id"}),t(h,{label:"学管",prop:"manager_id",formatter:G}),t(h,{label:"Operations"},{default:n(a=>[t(u,{size:"small",onClick:oe=>H(a.row._id)},{default:n(()=>e[14]||(e[14]=[_(" 编辑 ")])),_:2},1032,["onClick"]),t(u,{size:"small",type:"danger",onClick:oe=>J(a.row._id)},{default:n(()=>e[15]||(e[15]=[_(" 删除 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),t(ae,{"current-page":b.value,"onUpdate:currentPage":e[3]||(e[3]=a=>b.value=a),"page-size":w.value,"onUpdate:pageSize":e[4]||(e[4]=a=>w.value=a),"page-sizes":[5,10,15,20],layout:"total, sizes, prev, pager, next, jumper",total:D.value,onSizeChange:K,onCurrentChange:Q},null,8,["current-page","page-size","total"]),t(ne,{modelValue:g.value,"onUpdate:modelValue":e[10]||(e[10]=a=>g.value=a),title:"添加/编辑班级",width:"500"},{footer:n(()=>[pe("div",ge,[t(u,{type:"primary",onClick:e[8]||(e[8]=a=>r.value._id==null?Z(z.value):ee(z.value))},{default:n(()=>e[16]||(e[16]=[_(" 确定 ")])),_:1}),t(u,{onClick:e[9]||(e[9]=a=>g.value=!1)},{default:n(()=>e[17]||(e[17]=[_("取消")])),_:1})])]),default:n(()=>[t(A,{model:r.value,ref_key:"classFormRef",ref:z,"label-width":"100px","label-position":"right",style:{width:"400px"},rules:Y},{default:n(()=>[t(s,{label:"班级名称",prop:"classname"},{default:n(()=>[t(te,{modelValue:r.value.classname,"onUpdate:modelValue":e[5]||(e[5]=a=>r.value.classname=a)},null,8,["modelValue"])]),_:1}),t(s,{label:"授课教师",prop:"teacher_id"},{default:n(()=>[t(c,{modelValue:r.value.teacher_id,"onUpdate:modelValue":e[6]||(e[6]=a=>r.value.teacher_id=a),placeholder:"请选择授课教师"},{default:n(()=>[(i(!0),C(U,null,F(S(k),a=>(i(),B(m,{label:a.name,value:a._id,key:a._id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"学管",prop:"manager_id"},{default:n(()=>[t(c,{modelValue:r.value.manager_id,"onUpdate:modelValue":e[7]||(e[7]=a=>r.value.manager_id=a),placeholder:"请选择学管"},{default:n(()=>[(i(!0),C(U,null,F(S(x),a=>(i(),B(m,{label:a.name,value:a._id,key:a._id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}});export{ye as default};
