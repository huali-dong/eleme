const gulp = require("gulp");
const server = require("gulp-webserver");
const sass = require("gulp-sass");
const webpack = require("webpack-stream");
const  del = require("del");
const watch = require("gulp-watch");//监听文件删除或增加，因为gulp.watch方法只能监听文件修改
const config = require("./config");


const {server_config,sass_config,webpack_config} = config;

//输出html
gulp.task("refreshHTML",()=>{
    console.log("html");
    return gulp.src("./src/**/*.html")
            .pipe(gulp.dest("./dest"));
})

//开启一个热更新
gulp.task("server",()=>{
    return gulp.src("dest")
    .pipe(server(server_config));
})


//处理scss文件

gulp.task("refreshScss",()=>{
    console.log("2222");
    return gulp.src("./src/**/*.scss")
            .pipe(sass(sass_config).on("error",sass.logError))
            .pipe(gulp.dest("./dest"))
})



//通过webpack来模块化管理js
    gulp.task("refreshJS",()=>{
        return gulp.src("./src/js/**/*.")
                .pipe(webpack(webpack_config))
                .pipe(gulp.dest("./dest/js"))
    })


    //输出js文件库
    gulp.task("lib",()=>{
        return gulp.src("./src/lib/**/*.*")
                .pipe(gulp.dest("./dest/lib"));
    })

// 监听任务

gulp.task('watch', () => {
    gulp.watch('./src/**/*.html', ['refreshHTML']);
    gulp.watch('./src/**/*', ["refreshJS"]);
    gulp.watch('./src/**/*.scss', ['refreshScss']);
    gulp.watch("./src/lib/**/*.*",["lib"]);
    watch("src/lib",(v)=>{
        if(v.event == "unlink"){
            let _path = v.history[0].replace("\src","\dest");
            del(_path);
        }else{
            gulp.start(["lib"]);
        }
    })
})

//默认任务
gulp.task("default",["refreshHTML","refreshScss","lib","refreshJS","server","watch"],()=>{
    console.log("23");
})