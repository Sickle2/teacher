/**
 * log out operation
 */
function logout(){
    top.location.href = 'http://bmswgate.9888keji.com/loginOut.shtml';
}

var btnList = new Array();

/**
 * init btn role
 * @param pageBtnList
 */
function initBtnRole(pageBtnList){
    pageBtnList.each(function(){

        var btnId = $(this).attr('id');
        var btnName = $(this).attr('name');
        var btnClass = $(this).attr('class');
        var tabProperties = $(this).attr('data-toggle');
        var flg = false;

        if(btnName != "refresh" && btnName != "toggle" && btnName != "navigation" && btnClass != "btn btn-default dropdown-toggle" && btnClass != "applyBtn btn btn-default btn-small btn-primary blue" && btnClass != "cancelBtn btn btn-default btn-small" && tabProperties != "tab"){
            if(btnId){
                for (var i=0;i < btnList.length;i++)
                {
                    //alert("btnId ：" + btnId + "   btnList[i] : "+btnList[i]+"  btnId == btnList[i] :"+(btnId == btnList[i]))
                    if(btnId == btnList[i]){
                        flg = true;
                    }
                }
            }

            if(!flg){
                $(this).remove();
            }
        }
    });
}