
import foot_view  from  "../views/footer_view.html"
import profile_view from "../views/profile.html"
const render = ()=>{
    $(".wrap").html(profile_view);
    $("#foot").html(foot_view);
}
export default {render};
