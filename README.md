# 项目

> Vue模板，用于作为PC项目的基础配置项目。

## 开发说明

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### 开发环境端口

见[webpack配置文件index.js](./config/index.js)中的`dev.port`,默认值为`8081`;

### 技术栈、依赖库

见:[package.json](./package.json) 中的`dependencies`。
_新增依赖需要跟负责人确认之后，才可安装_

### 项目开发要求

- 提交代码前，必须保证符合ESLint代码规范

## Eslint

### Eslint开关

`config/index.js`中`config.dev.useEslint`的值

- `true`为开启Eslint代码检查
- `false`为关闭Eslint代码检查

### 规则

见:[.eslintrc.js](./.eslintrc.js)

## Mock

### Mock开关

`config/dev.env.js`、`config/prod.env.js`中`process.env.MOCK`的值

- `true`为开启Mock
- `false`为关闭Mock

### Mock官网、api

[http://mockjs.com/](http://mockjs.com/)

### 版本

- 2.0.2
    1. `vue`: "^2.6.10" => "^2.6.11"
    2. `vue-template-compiler`: "^2.6.10" => "^2.6.11"
    3. 添加`@babel/runtime`插件
    4. 添加`babel/runtime-corejs2`插件
    5. `uglifyjs-webpack-plugin`: "^2.2.0" => "^1.0.0-rc.0",解决打包后报错问题

## 参考文献

[vue，react 配置 commitlint 和 eslint 钩子](https://segmentfault.com/a/1190000015798675?utm_source=tag-newest)
[webpack+vue+Eslint+husky+lint-staged 统一项目编码规范](https://www.cnblogs.com/momo798/p/10876691.html)
[升级到Babel 7](https://babeljs.io/docs/en/v7-migration)
