// 实现路由工具

import routes from  './route'

class Router {

   constructor ({initial}){
       this.route= routes;//路由表
        this.initial = initial || "#index";//设置默认路由

   }

   init(){
        this.initialHash();
        this.listenHashChange();
   }
    initialHash (){//初始化hash值
        if(!location.hash){
            location.hash = this.initial
        }
    }

    switch(path){//切换路由的方法，方便在js事件使用
        location.hash = path;
    }
    refresh (){//根据当前的路径来切换路由
            let hash = location.hash;
            // console.log(this.route[hash]);
            if(!this.route[hash]){
                location.hash = this.initial;
                return false;
            }
            this.route[hash].render();
            this.switchTab();
    }

   switchTab(){//切换下面所对应的图标
    $(".nav-link").each(function(){
        if($(this).attr("path")==location.hash){
            $(this).addClass("active");
        }else{
            $(this).removeClass("active");
        }
    })
   }
   listenHashChange (){//监听hash值变化
        window.addEventListener("load",this.refresh.bind(this));
        //当hash值变换的时候会执行此事件
        window.addEventListener("hashchange",this.refresh.bind(this));

   }

}


export default Router

