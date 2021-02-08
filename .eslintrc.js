// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: 'babel-eslint',
        // "sourceType": "module"
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
        'comma-dangle': [2, 'only-multiline'],

        /* --- VUE <template> ---*/
        // HTML属性的引号样式 使用双引号
        "vue/html-quotes": ["error", "double"],
        // HTML缩进为4个空格
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        // 不允许属性中等号周围有空格
        "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
        // 自定义属性命名样式 总是使用双引号
        "vue/attribute-hyphenation": ["error", "always", {
            "ignore": []
        }],
        // 属性之间不允许多个空格
        "vue/no-multi-spaces": ["error", {
            "ignoreProperties": false
        }],
        // v-on 统一使用简写(@)
        "vue/v-on-style": ["error", "shorthand"],
        // v-bind 统一使用简写(:)
        "vue/v-bind-style": ["error", "shorthand"],
        // 禁止在模板中使用this
        "vue/this-in-template": ["error", "never"],
        // 每行的最大属性数,当开始标记在一行中时，每行的最大属性数为3，当开始标记位于多行中时，每行的最大属性数为1
        "vue/max-attributes-per-line": ["error", {
            "singleline": 3,
            "multiline": {
                "max": 1,
                "allowFirstLine": false
            }
        }],
        // 闭括号换行符 在单行元素中，禁止在右括号前换行。在多行元素中，要求在右方括号前换行
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "always"
        }],
        // 组件名 统一使用短横线命名
        "vue/component-name-in-template-casing": ["error", "kebab-case", {
            "registeredComponentsOnly": true,
            "ignores": []
        }],

        /* --- VUE <script> --- */
        // prop 统一使用驼峰式命名
        "vue/prop-name-casing": ["error", "camelCase"],
    },
}