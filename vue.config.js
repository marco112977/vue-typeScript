// path依赖
const path = require('path')

// 查找文件方法
const resolve = dir => {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => {
        // 别名配置
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
    },
    // SASS配置
    css: {
        loaderOptions: {
            sass: {
                data: '@import "@/style/app.scss";'
            }
        }
    },
}