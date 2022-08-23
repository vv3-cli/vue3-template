import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import legacy from "@vitejs/plugin-legacy";
import { createHtmlPlugin } from "vite-plugin-html";
// https://vitejs.dev/config/
export default ({ mode }) => {
    // 获取打包时间 给js css 加上
    const time = new Date().getTime();
    // 第二个参数为读取env环境目录
    const env = loadEnv(mode, resolve(__dirname, "build"));
    // console.log("当前环境--->" + env.VITE_APP_ENV);
    console.log(env);
    console.log(mode);

    return defineConfig({
        envDir: resolve(__dirname, "build"),
        plugins: [
            vue(),
            legacy({
                targets: ["Android > 39", "> 1%", "last 2 versions", "not IE 11"]
            }),
            createHtmlPlugin()
        ],
        base: "./",
        resolve: {
            // 取一个别名
            alias: {
                "@": resolve(__dirname, "src")
            }
        },
        build: {
            // 生产环境去除console minify terserOptions
            minify: "terser",
            target: "es2015",
            terserOptions: {
                compress: {
                    drop_console: mode !== "production" ? true : false,
                    drop_debugger: true
                }
            },
            // 生产环境关闭源码调试功能
            devSourcemap: mode !== "production" ? true : false,

            // prod 关闭sourcemap
            sourcemap: mode !== "production" ? true : false,
            rollupOptions: {
                output: {
                    chunkFileNames: `static/js/${time}-[hash].js`,
                    entryFileNames: `static/js/${time}-[hash].js`,
                    assetFileNames(chunkInfo) {
                        console.log(chunkInfo);
                        // 打包分类路径 图片 images   字体 fonts   其他
                        if (/\.(png|jpg|gif|svg)/.test(RegExp(chunkInfo.name))) {
                            return "static/images/[hash].[ext]";
                        } else if (/\.(woff|woff2|eot|ttf|otf)/.test(RegExp(chunkInfo.name))) {
                            return "static/fonts/[hash].[ext]";
                        } else if (/\.(css|less|scss)/.test(RegExp(chunkInfo.name))) {
                            return `static/css/${time}-[hash].[ext]`;
                        }
                        return "static/other/[hash].[ext]";
                    },

                    // assetFileNames: extname
                    manualChunks(id) {
                        // console.log(id);
                        if (id.includes("node_modules")) {
                            return id.toString().split("node_modules/")[1].split("/")[0].toString();
                        }
                    }
                }
            }
        },
        server: {
            host: "0.0.0.0",
            port: "9527",
            open: true,
            proxy: {
                "/api": {
                    target: "https://mock.apifox.cn",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, "")
                }
            }
        }
    });
};
