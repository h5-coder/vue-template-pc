# 项目

> A Vue.js template project

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

见[webpack配置文件index.js](./config/index.js)中的`dev.port`,默认值为`8081`;

### 技术栈、依赖库

见:[package.json](./package.json) 中的`dependencies`。
_新增依赖需要跟负责人确认之后，才可安装_

### 项目开发要求

- 提交代码前，必须保证符合ESLint代码规范

## Eslint

### eslint开关

`config/index.js`中`config.dev.useEslint`的值

- `true`为开启Eslint代码检查
- `false`为关闭Eslint代码检查

### 规则

见:[.eslintrc.js](./.eslintrc.js)

## Mock

### mock开关

`config/dev.env.js`、`config/prod.env.js`中`process.env.MOCK`的值

- `true`为开启mock
- `false`为关闭mock

### mock官网、api

[http://mockjs.com/](http://mockjs.com/)

### 步骤
