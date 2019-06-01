module.exports = {
    proxy: {
        '/api': {//将https://sixsix.taoerxue.com.cn映射为/apis
            // 测试代理地址
            target: 'https://sixsix.taoerxue.com.cn',  // 接口域名
            // 正式代理地址
            // target: 'https://newapi.taoerxue.cn',
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/api': ''   //需要rewrite的,
            }              
        }
    }
}