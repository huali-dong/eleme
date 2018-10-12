

import foot_view from "../views/footer_view.html";

const render = ()=>{
    $("#foot").html(foot_view);
    // console.log($(".nav-link"))
    // $('.nav-link').on('tap',  function() {
    //     let _controllers = [ index_controller,search_controller,order_controller,profile_controller];
    //     console.log($(this).index())
    //     console.log(_controllers[$(this).index()]);
    //     _controllers[$(this).index()].render();
    //     $(this).addClass('active').siblings().removeClass('active');
    // })
}

export default {render};
