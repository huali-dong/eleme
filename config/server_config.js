
const proxy = require("http-proxy-middleware");//配置代理服务器，解决跨域问题、同源策略是指什么，同源是域名、协议、端口号全部都要相同
const server_config = {
    host : "localhost",
    port : 8080,
    livereload :true,
    middleware : [
        proxy("/eleme",{
            target : "https://h5.ele.me",
            changeOrigin : true,
            pathRewrite : {
                '^/eleme' : " ",
            }
        })
        // proxy("/api",{
        //     target :"http://localhost:3000",
        //     changeOrigin : true,
        // })
    ]
}

module.exports = server_config;