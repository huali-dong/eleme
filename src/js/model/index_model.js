

const product_list = ()=> {
    return  $.ajax({
        url:"/eleme/restapi/shopping/v3/restaurants?latitude=40.117618&longitude=116.250627&offset=20&limit=20&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=48a0208b095f4985b842dd267207900d&terminal=h5",
        success : function(msg){
            return msg;
        }
    })

    // return $.ajax({
    //              url: '/api/pro/list',
    //              success: (res) => {
    //                  return res;
    //              }
    // })
}

module.exports = {
    product_list
}

