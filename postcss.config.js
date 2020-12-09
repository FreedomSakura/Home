module.exports = {
    plugins: {
        autoprefixer: {},
    //     "postcss-px-to-viewport": {
    //         viewportWidth: 360,     // 视窗宽度
    //         viewprotHeight: 640,    // 视窗高度
    //         unitPrecision: 5,       // 指定'px'转换为视窗单位值得小数位数
    //         viewportUnit: 'vw',     // 指定需要转换成得视窗单位，建议用vw
    //         selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'],   
    //         // 指定不需要转换的类
    //         minPixelValue: 1,       // 忽略转换的最小像素
    //         mediaQuery: false       // 允许在媒体查询中转换'px'
    //     }
        "postcss-pxtorem": {
            "rootValue": 32,
            "propList": ["*"]
        }
    }
}