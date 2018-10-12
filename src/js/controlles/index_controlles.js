

 import indexTemplate  from  "../views/index_views.html";
 import productTemplate  from  "../views/product_list.html";
 import foot_controller  from  "../controlles/foot_controller";
 import indexMsg  from  "../model/index_model";
 const render = () => {
        // console.log(indexTemplate);
        
       let _template =Handlebars.compile(indexTemplate);
       let _html = _template();
        $("#box").html(_html);
        // console.log(footTemplate);
       foot_controller.render();
       getMsg();
        
}


const getMsg = async ()=>{
        const msg = await indexMsg.product_list();
        // console.log(msg);
        const msgArray =msg.items;//得到数据数组
        // console.log(msgArray[0].restaurant.name);
        //将字符串处理成编译函数
        const _Msg = Handlebars.compile(productTemplate);
        
        const _MsgHtml = _Msg({msgArray});
        $("#product").html(_MsgHtml);

}
export default{ render };