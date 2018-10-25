// https://eslint.org/docs/user-guide/configuring
// "off" 或者 0：关闭规则。
// "warn" 或者 1：打开规则，并且作为一个警告（不影响exit code）。
// "error" 或者 2：打开规则，并且作为一个错误（exit code将会是1）。
module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
    },
    env: {
        browser: true,
    },
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: ['plugin:vue/essential', 'airbnb-base'],
    // required to lint *.vue files
    plugins: [
    'vue',
  ],
    // check if imports actually resolve
    settings: {
        'import/resolver': {
            webpack: {
                config: 'build/webpack.base.conf.js',
            },
        },
    },
    // add your custom rules here
    rules: {
        indent: ['off', 4, {
            SwitchCase: 1
        }],
        "no-unused-vars": [0, {
            "vars": "all",
            "args": "none",
            "ignoreRestSiblings": false
        }],
        "no-param-reassign": 2,
        // 不允许对 function 的参数进行重新赋值
        "no-param-reassign": [0, {
            'props': true
        }],
        "consistent-return":0,
        "prefer-template": 0,
        "no-irregular-whitespace": 0,
        "arrow-body-style": 0,
        "no-console": 0,
        "no-restricted-syntax": 0,
        "no-eval": 0,
        "operator-linebreak": 0,
        "no-mixed-operators": 0,
        "no-restricted-globals": 0,
        "prefer-destructuring": 0,
        "allowAfterThis": true,
        "no-underscore-dangle": 0,
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            js: 'never',
            vue: 'never',
        }],
        "quotes": [1, "single"],
        'max-len': [1, {
            code: 350
        }],
        "no-extend-native": 0,
        'no-plusplus': 'off',
        "as-needed": [0, {
            "requireForBlockBody": false
        }],
        "space-unary-ops": [
           0, {
                "words": true,
                "nonwords": false,
                "overrides": {
                    "new": false,
                    "++": true
                }
       }],
        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        'no-param-reassign': 0,
        // allow optionalDependencies

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'space-before-function-paren': 0, // 函数定义时括号前面要不要有空格
        'eol-last': 0, // 文件以单一的换行符结束
        'no-extra-semi': 0, // 可以多余的冒号
        semi: 0, // 语句可以不需要分号结尾
        eqeqeq: 0, // 必须使用全等
        'one-var': 0, // 连续声明
        'no-undef': 0, // 可以 有未定义的变量
        "func-names": 0,
        'import/imports-first': 0,
        'import/newline-after-import': 0,
        'import/no-dynamic-require': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default': 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'import/extensions': 0,
    },
}
