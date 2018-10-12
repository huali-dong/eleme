

import index_controller  from  "../js/controlles/index_controlles";
import order_controller  from  "../js/controlles/order_controller";
import profile_controller  from  "../js/controlles/profile_controller";
import search_controller  from  "../js/controlles/search_controller";

const routes = {
    "#index" : index_controller,
    "#order" : order_controller,
    "#profile" : profile_controller,
    "#searchs" : search_controller
}

export default routes;