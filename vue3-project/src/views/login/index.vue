<template>
    <div class="login-container">
        <el-form
            ref="ruleFormRef"
            :model="form"
            :rules="rules"
            label-width="80px"
            class="login-form">
            <h2 class="login-title">登录</h2>
            <el-form-item label="账号" prop="username">
                <el-input v-model="form.username" placeholder="请输入账号" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input
                    v-model="form.password"
                    placeholder="请输入密码"
                    type="password" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit(ruleFormRef)">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup lang="ts">
    import { reactive, ref } from "vue";
    import { ElMessage, type FormInstance, type FormRules } from "element-plus";
    // 引入用户小仓库
    import useUserStore from "@/store/modules/user";
    let userStore = useUserStore()
    // 引入路由对象，进行跳转
    import { useRouter } from "vue-router";
    let $router = useRouter()
    // 表单ref对象
    const ruleFormRef = ref<FormInstance>();
    // 收集表单数据对象
    const form = reactive({
        username: "",
        password: "",
    });
    // 自定义校验规则（账号的校验规则）
    const validateUsername = (_rule: any, value: any, callback: any) => {
        value = value.trim()
        const length = value && value.length
        const reg = /^[a-zA-Z0-9_]+$/
        if(value == ""){
            callback(new Error('请输入账号'))
        }else if(length < 4 || length>12){
            callback(new Error('请输入4到12位直接的账号'))
        }else if(!reg.test(value)){
            callback(new Error('账号只能包含英文字母数字和下划线'))
        }else{
            callback()
        }
    };
    // 表单校验规则
    const rules = reactive<FormRules>({
        password: [
            { required: true, message: "请输入密码", trigger: "blur" },
            {
                min: 4,
                message: "请输入4位以上长度的密码",
                trigger: ["blur", "change"],
            },
        ],
        username:[
            {required:true,validator:validateUsername,trigger:["blur", "change"]},
        ]
    });
    // 登录按钮点击事件回调函数
    const onSubmit = async (formEl: FormInstance | undefined) => {
        if (!formEl) return;
        await formEl.validate(async (valid, fields) => {
            if (valid) {
                try {
                    // 登录成功
                    await userStore.userLogin(form)
                    // 跳转到首页
                    $router.push("/")
                    ElMessage({
                        type:'success',
                        message:'登录成功'
                    })
                } catch (error) {
                    // 登录失败
                    // ElMessage({
                    //     type:'error',
                    //     message:(error as Error).message
                    // })
                }
            } else {
                console.log("error submit!", fields);
            }
        });
    };
</script>

<style scoped>
    .login-container {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("../../assets/bg.png");
        background-size: cover;
        overflow: hidden;
    }
    .login-form {
        width: 350px;
        margin: 160px auto;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 30px;
        border-radius: 20px;
    }
    .login-title {
        text-align: center;
    }
</style>
