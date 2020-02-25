// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
    },
    env: {
        browser: true,
    },
    globals: {
        $: true,
        vueVm: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard',
    ],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        quotes: 'off',
        // 强制一致缩进，可配置空格数量数，或者'tab' 'indent': ['warn', 4],
        indent: ['warn', 4],
        // 禁止出现多个空格
        'no-multi-spaces': 'off',
        // 要求或禁止函数圆括号之前有一个空格
        'space-before-function-paren': 'off',
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        semi: [2, 'always'], // 使用分号结尾
        'no-multi-spaces': 'off',
        'operator-linebreak': 'off',
        'one-var': 0, // 连续声明
        'no-debugger': 2, // 禁止使用debugger
        // 禁止使用var，要求使用 let 或 const
        'no-var': 0,
    },
}