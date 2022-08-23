// https://www.cnblogs.com/itshare/p/11028299.html
module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module"
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: ["plugin:vue/vue3-essential", "eslint:recommended", "plugin:prettier/recommended"],
    plugins: [
        // 检查html文件中的js代码
        "html"
    ],
    // add your custom rules here
    rules: {
        "prettier/prettier": "error",
        "generator-star-spacing": "off",

        eqeqeq: 2, // 强制使用 === 和 !==
        "default-case": 1, // 要求 switch 语句中有 default 分支
        "no-else-return": 1, // 禁止 if 语句中 return 语句之后有 else 块
        "no-empty-function": 1, // 禁止出现空函数
        "no-multi-spaces": 1, // 禁止使用多个空格
        radix: 1, // 强制在parseInt()使用基数参数
        "init-declarations": ["error", "always"], // 声明变量必须赋值
        "arrow-spacing": [
            "error",
            {
                before: true,
                after: true
            }
        ], // 强制箭头函数的箭头前后使用空格
        // 'no-var': 2, // 禁止使用 var 声明变量
        "object-shorthand": 2, // 要求使用对象方法名和属性名简写
        "prefer-arrow-callback": 2, // 要求回调函数使用箭头函数
        // "prefer-const": 2, // 使用 const 声明那些声明后不再被修改的变量
        "prefer-rest-params": 2, // 要求使用剩余参数而不是 arguments
        "space-before-function-paren": 0, // 函数名称或function关键字与开始参数之间允许有空格
        "array-bracket-spacing": 0, // 数组方括号内必须空格
        "comma-dangle": 2, // 禁止末尾逗号
        "eol-last": 2, // 要求文件末尾存在空行
        "key-spacing": [
            "error",
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        "keyword-spacing": [
            "error",
            {
                before: true,
                after: true
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                max: 1
            }
        ],
        "space-infix-ops": 2, // 操作符周围必须有空格
        "spaced-comment": ["error", "always"], // 注释后面必须跟随至少一个空白
        // "object-curly-spacing": 0,
        "no-unused-expressions": 0
    }
};
