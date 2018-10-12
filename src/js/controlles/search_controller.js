
import search_view  from  "../views/search_view.html";
import foot_view  from  "../views/footer_view.html";
const render = ()=>{
    $(".wrap").html(search_view);
    $("#foot").html(foot_view);
}
export default {render};
