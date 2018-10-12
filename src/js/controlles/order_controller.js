

import order_view  from  "../views/order_view.html"
import foot_view  from  "../views/footer_view.html"
const  render = ()=> {
    $(".wrap").html(order_view);
    $("#foot").html(foot_view);
}
export default { render };