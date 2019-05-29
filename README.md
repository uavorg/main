# UAVStack 官网

访问地址：https://uavorg.github.io/main/#/

## 目录结构

```
source                      //开发源码
update.js                   //周更内容数据
update.bat                  //周更提交脚本
static/，*.js,main.html     //静态网页
```

## 修改周更内容
1. 修改 update.js  周更内容
2. 双击 update.bat 提交
## 开发源码目录结构
```
source/
  yarn-error.lock
  yarn.lock
  README.md
  package.json // 模块依赖说明和配置信息
  .gitignore
  node_modules/ // 依赖包
  public/
    index.html
    favicon.ico
    mainfest.json
  src/
    actions/ // 存放 actionCreater
    components/ // 存放 组件
        App/
            index.js
        Home/ // 主页
            index.js
            partial/ // 组成部分
                Banner/
                    assets/ // 静态文件
                        Banner.css
                        bannerBac.jpg
                    index.js
                ...
        ...
        shared/ // 共享组件
            Header/
            ...
    config/
    i18n/ // 存放国际化文档
        en_US.js
        zh_CN.js
    lib/ // 工具函数
        storage.js
        ...
    reducers/ // 存放 Reducer
        index.js //
    index.css // 全局 css
    index.js // 入口文件
    registerServiceWorker.js
```

## 源码开发步骤

1. 安装 node v8.11.3
2. git clone https://github.com/uavorg/main.git
3. cd source
4. npm install 生成安装包
5. yarn start 开启调试服务
6. yarn build 生成静态资源

## 技术点

- React：组件化
- Redux：数据管理
- ES6：模块化及其他语法
- Webpack：模块打包
- ESLint：代码检查
- Prettier：代码格式化
- React Router：路由
- React Intl：国际化
- Git：版本管理
- Yarn：包管理
- Immutable：不可变数据