<template>
    <div class="header">
        <a href="#">
            <img src="@/assets/vue.svg" class="logo" width="25px" />
            <span class="title">RBAC学员管理系统</span>
        </a>
        <!-- 下拉菜单 -->
        <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">
                {{ userStore.user?.username
                }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="a">修改密码</el-dropdown-item>
                    <el-dropdown-item command="b">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <span class="date">{{ currentTime }}</span>
        <el-dialog v-model="dialogFormVisible" title="修改密码" width="500">
            <el-form
                :model="userForm"
                :rules="rules"
                ref="userFormRef"
                label-width="100px"
                label-position="right"
                style="width: 400px">
                <el-form-item label="原始密码" prop="oldPass">
                    <el-input v-model="userForm.oldPass" type="password" />
                </el-form-item>
                <el-form-item label="新密码" prop="pass">
                    <el-input v-model="userForm.pass" type="password" />
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input v-model="userForm.checkPass" type="password" />
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button
                        type="primary"
                        @click="onSubmit(userFormRef)">
                        提交
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>
<script setup lang="ts">
    import { ArrowDown } from "@element-plus/icons-vue";
    import { formateTime } from "@/utils/dateUtils";
    import { nextTick, onMounted, onUnmounted, reactive, ref } from "vue";
    import {  type FormInstance, type FormRules } from "element-plus";
    // 引入路由对象
    import { useRouter } from "vue-router";
    let $router = useRouter();
    // 引入用户小仓库
    import useUserStore from "@/store/modules/user";
    import { reqCheckPwd, reqUpdatePwd } from "@/api/user";
    let userStore = useUserStore();
    // 定义一个响应式ref对象数据，控制修改密码弹窗是否展示
    let dialogFormVisible = ref(false);
    // 收集表单中输入框输入的内容对象
    const userForm = reactive({
        oldPass: "", //原始面貌
        pass: "", // 新密码
        checkPass: "", //确认密码
    });
    // 表单ref对象
    const userFormRef = ref<FormInstance>();
    // 自定义校验规则，用于发送Ajax请求校验原密码是否正确
    const validateOldPass = (_rule: any, value: any, callback: any) => {
        reqCheckPwd({
            userId: userStore.user?._id as string,
            password: value,
        }).then((response) => {
            if (response.status == 0) {
                callback();
            } else {
                callback(new Error(response.msg));
            }
        });
    };
    // 自定义校验规则，用于校验确认密码和新密码是否一致
    const validatePass = (_rule: any, value: any, callback: any) => {
        if (value != userForm.pass) {
            callback(new Error("两次输入密码不一致"));
        } else {
            callback();
        }
    };
    // 表单校验规则
    const rules = reactive<FormRules>({
        oldPass: [
            { required: true, validator: validateOldPass, trigger: "blur" },
        ],
        pass: [
            { required: true, message: "请输入新密码", trigger: "blur" },
            {
                min: 4,
                message: "请输入4位以上长度的密码",
                trigger: ["blur", "change"],
            },
        ],
        checkPass: [
            { required: true, validator: validatePass, trigger: "blur" },
        ],
    });

    // 打开修改密码弹窗
    const openDialog = ()=>{
        dialogFormVisible.value = true
        // 当dom元素加载完毕后执行此方法
        nextTick(()=>{
            // 重置表单
            userFormRef.value?.resetFields()
        })
    }
    // 提交按钮
    const onSubmit = async (formEl: FormInstance | undefined) => {
        if (!formEl) return;
        await formEl.validate(async (valid, _fields) => {
            if (valid) {
                reqUpdatePwd({userId:userStore.user?._id as string,password:userForm.pass}).then(response=>{
                    if(response.status == 0){
                        // 修改密码成功，需要将仓库中存储的用户信息清空，所以调用退出登录方法
                        handleLogout()
                        // 关闭弹窗
                        dialogFormVisible.value = false
                    }
                })
            } else {
                
            }
        });
    };

    const handleCommand = (command: string | number | object) => {
        switch (command) {
            case "a":
                // 修改密码
                openDialog()
                break;
            case "b":
                // 退出登录
                handleLogout();
                break;

            default:
                break;
        }
    };
    // 退出登录
    const handleLogout = () => {
        userStore.removeUser();
        if (!userStore.user) {
            $router.replace("/login");
        }
    };
    // 获取当前系统时间
    let currentTime = ref<string>("");
    // 定时器id
    let timer: any = null;
    // 每隔一秒获取一下当前系统时间
    let getTime = () => {
        timer = setInterval(() => {
            currentTime.value = formateTime(Date.now());
        }, 1000);
    };
    onMounted(() => {
        getTime();
    });
    onUnmounted(() => {
        clearInterval(timer);
        timer = null;
    });
</script>

<style scoped>
    .logo {
        vertical-align: middle;
        padding: 0 10px 0 40px;
    }
    .title {
        position: absolute;
        color: white;
    }
    .el-dropdown {
        float: right;
        margin-right: 40px;
        height: 50px;
        line-height: 50px;
    }
    .el-dropdown-link {
        color: #fff;
        cursor: pointer;
    }
    .date {
        float: right;
        color: #fff;
        margin-right: 50px;
    }
</style>
