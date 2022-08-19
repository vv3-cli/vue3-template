开始




``` 
npm  install 

npm run start

```
关于环境
环境变量 
VITE_APP_API_URLVITE_APP_ENV=test
VITE_APP_API_URL = https://api.juejin.cn
VITE_APP_PUBLIC_PATH = ./

build 文件夹中env开头设置环境 
1. 本地开发
  ○ 执行命令    npm run start
  ○ 环境目录    .env.dev.local    
2. 测试环境
  ○ 执行命令   npm run build:test
  ○ 环境文件  .env.development
3. 正式环境
  ○ 执行命令   npm run build
  ○ 环境文件  .env.production
4. 预发布环境  ：
  ○ 执行命令   npm run build:stag
  ○ 环境文件  .env.staging 
获取环境变量
1. vite.config.js
//获取VITE_APP_PUBLIC_PATH  第二个参数为读取env环境目录 
const {VITE_APP_PUBLIC_PATH} =loadEnv(mode, resolve(__dirname, "build"));
2. js代码中
//获取VITE_APP_API_URL 
const {VITE_APP_API_URL } = import.meta.env