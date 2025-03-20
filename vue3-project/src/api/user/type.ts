// 登录接口需要携带参数ts数据类型
export interface loginFormData{
    username:string,
    password:string
}
// 登录接口返回数据类型中data选项的数据类型
export interface dataType{
    token?:string|null
}
// 登录接口返回数据类型
export interface loginResponseData{
    status:number,
    data?:userInfoData,
    msg?:string
}
// 服务返回用户信息中data选项的数据类型
export interface userInfoData{
    _id:string|null,
    username:string,
    name?:string,
    password:string,
    phone?:string,
    role_id?:string,
    create_time?:number,
    token?:string,
    __v?:number,
    role?:userRoleData
}
// 角色数据类型
interface userRoleData{
    _id?:string,
    name:string,
    menus:string[],
    create_timer?:number,
    __v?:string,
    auth_time?:number,
    auth_name?:string

}
// 服务器返回用户信息数据类型
export interface userInfoResponseData{
    status:number,
    data:userInfoData
}
// 校验与修改密码携带参数类型
export interface pwdData{
    userId:string,
    password:string
}
// 校验原密码返回值类型
export interface checkPwdResponseData{
    status:number,
    data?:userInfoData,
    msg?:string
}
// 获取所有用户返回数据列表类型
export interface userAllResponseData{
    status:number,
    data?:userInfoData[],
    msg?:string
}
// 获取用户列表接口返回数据类型
export interface userListResponseData{
    status:number,
    data?:userListData,
    msg?:string
}
// 用户列表中data的数据类型
export interface userListData{
    data:userInfoData[],
    total:number,
    roles:[]
}
// 获取用户列表发生请求携带参数数据类型
export interface userListFormData{
    page:number,
    size:number
}