function createUserList(){
    return{
        status:0,
        data: [
            {
              "token": 'Admin Token',
              "_id": "641280fdc5ff3cb994002003",
              "username": "test1",
              "name": "测试用户1",
              "password": "1234",
              "phone": "13112345678",
              "role_id": "640ec59a9f6e3402f8edd4ec",
              "create_time": 1678934269969,
              "__v": 0,
              "role": {
                "_id": "640ec59a9f6e3402f8edd4ec",
                "name": "管理员",
                "menus": [
                  "/home",
                  "/user",
                  "/role",
                  "/school",
                  "/majors",
                  "/student",
                  "/class"
                ],
                "create_time": 1678689690752,
                "__v": 0,
                "auth_time": 1678952409061,
                "auth_name": "test1"
              },
            },
            {
              token: 'System Token',
              "_id": "64098cc6984047a6c854b303",
              "username": "admin",
              "password": "admin",
              "create_time": 1678347462193,
              "__v": 0,
              "role": {
                "menus": []
              }
            },
          ],
      
    }
}
// 对外暴露数据，提供登录接口
export default[
    // 登录接口
    {
        url:'/mock/login',
        method:'post',
        // 前端请求提交过来的数据
        response:({body})=>{
            // 获取前端提交过来的用户名和密码
            const  {username,password} = body
            // 调用上面的createUserList方法获取到用户数组，然后进行判断前端提交过来的用户是否在数组中存在
            const checkUser = createUserList().data.find(item=>item.username==username && item.password == password)
            // 如果没匹配上
            if(!checkUser){
                return {status:1,msg:'用户名或密码错误！'}
            }
            // 匹配上了,从匹配上的对象中将token解构出来
            const { token } = checkUser
            // 将数据响应给前端
            return {status:0,data:{token}}
        }
    },
    // 获取用户信息的接口
    {
        url:'/mock/user/info',
        method:'get',
        response:(request)=>{
            // 获取前端请求时请求头中携带的token
            const token = request.headers.token
            // 到数组中进行查询
            const checkUser = createUserList().data.find(item=>item.token == token)
            if(!checkUser){
                return {status:1,data:{message:'获取用户信息失败'}}
            }
            return {status:0,data:{...checkUser}}
        }
    }
]



