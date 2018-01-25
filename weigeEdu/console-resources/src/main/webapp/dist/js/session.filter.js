//ajax完成时回调函数
$(document).ajaxComplete(function(event, xhr, settings) {
    //从http头信息取出 在filter定义的sessionstatus，判断是否是 timeout
    if (xhr.getResponseHeader("sessionstatus") == "timeout" || xhr.getResponseHeader("sessionstatus") == "rolefalure") {
        window.top.logout();
    }
});