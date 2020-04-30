//图片table文档转json
node_xj = require("xls-to-json");
node_xj({
    input: "history.xls",  // input xls
    output: "package.json" // output json
    //sheet: "sheet1",  // specific sheetname
}, function(err, result) {
    if(err) {
        console.error(err);
    } else {
        console.log(result);
    }
});
