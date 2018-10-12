

const list = require("./list.json");

module.exports = ()=>{
    return {
        //相当于提供了http://localhost:3000 /list
        list : list
    }
}