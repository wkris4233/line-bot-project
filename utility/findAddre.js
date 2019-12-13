'use strict';

//引用操作資料庫的物件
const query = require('./asyncDB');

//------------------------------------------
// 由關鍵字查詢院所資料
//------------------------------------------
var fetchAddre = async function(addreKey){
    //存放結果
    let result;
    
    //var addre2 = subString(addreKey,1,CHARINDEX("路",addreKey));
    //addreKey = addreKey.subString(0,(addreKey.indexOf("路")));
    

    //讀取資料庫
    await query('SELECT top 4 FROM "hosp" WHERE hosp."hospAddre" LIKE $1 ',['%'+addreKey+'%'])
        .then((data) => {
            
            if(data.rows.length > 0){
                result = data.rows[0];  //學生資料(物件)
                console.log('****dataFind');
            }else{
                result = -1;  //找不到資料
            }    
        }, (error) => {
            result = -9;  //執行錯誤
            console.log('****err1');
            console.log(addreKey);
        });

    //回傳執行結果
    return result;  
}
//------------------------------------------

//匯出
module.exports = {fetchAddre};
