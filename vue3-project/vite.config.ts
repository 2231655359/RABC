import { ConfigEnv, defineConfig, loadEnv, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { viteMockServe } from "vite-plugin-mock";
// https://vitejs.dev/config/
export default ({ command,mode }: ConfigEnv):UserConfigExport => {
  // 获取当前环境对象
  let env = loadEnv(mode,process.cwd())
    return {
        plugins: [
          vue(),
          viteMockServe({
            localEnabled:command == "serve"
          })
        ],
        resolve: {
            alias: {
                "@": path.resolve("./src"),
            },
        },
        // 配置代理服务器
        server:{
          proxy:{
            [env.VITE_APP_BASE_API]:{
              target:env.VITE_APP_SERVICE_URL,//目标服务器地址
              changeOrigin:true,//开启代理
              rewrite:(path)=>path.replace(/^\/dev-api/,'') // 开启代理服务之后将路径中的标识(/dev-api)从请求路径中删除
            }
          }
        }
    };
};




