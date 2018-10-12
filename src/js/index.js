


import route  from  "../router"

import render  from  "./controlles/index_controlles";


render.render();

// 启动路由
const router = new route({ initial: '#/index' });
window.router = router;
router.init();
