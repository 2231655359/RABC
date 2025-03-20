import { createApp } from 'vue'
// import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
import pinia from './store'
// 引入路由拦截文件
import './permission'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// console.log(import.meta.env.VITE_APP_BASE_API)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
