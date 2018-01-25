var currentTab;
var composeCount = 0;
var mainHeight = 100;
//initilize tabs
$(function () {

    //mainHeight = $(document.body).height() - 45;
    mainHeight = 1000;
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        // 获取已激活的标签页的名称
        var activeTab = $(e.target).text();
        // 获取前一个激活的标签页的名称
        var previousTab = $(e.relatedTarget).text();
        $(".active-tab span").html(activeTab);
        $(".previous-tab span").html(previousTab);
    });
    registerCloseEvent();
});

//this method will demonstrate how to add tab dynamically
function registerComposeButtonEvent(menuid,subtitle,url,icon) {
    if(!existTab(menuid)){
        var tabId = "compose" + composeCount; //this is id on tab content div where the
        composeCount = composeCount + 1; //increment compose count

        $('.nav-tabs').append('<li><a href="#' + menuid + '"  data-toggle="tab"><button class="close closeTab" type="button" >×</button>'+subtitle+'</a></li>');
        //$('.tab-content').append('<div class="tab-pane fade" id="' + menuid + '"></div>');
        $('.tab-content').append('<div role="tabpanel" height="100%" width="100%" class="tab-pane" id="' + menuid + '"><iframe src="' + url + '" width="100%" id="ifm'+ menuid +'" '+
                                    ' frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="yes" allowtransparency="yes" onload="this.height=0;var fdh=(this.Document?this.Document.body.scrollHeight:this.contentDocument.body.offsetHeight)+500;this.height=fdh;"></iframe></div>');

        showTab(menuid);
        registerCloseEvent();
    }else{
        $('#ifm'+menuid).attr('src', $('#ifm'+menuid).attr('src'));
        showTab(menuid);
    }
}

function resizeIframe(obj){
    var mainheight = $(obj).contents().find('body').height()+100;
    $(obj).height(mainheight);
    alert(mainheight);
}
function existTab(menuid){
    if($("#"+menuid).length>0){
        return true;
    }
    return false;
}

//this method will register event on close icon on the tab..
function registerCloseEvent() {

    $(".closeTab").click(function () {

        //there are multiple elements which has .closeTab icon so close the tab whose close icon is clicked
        var tabContentId = $(this).parent().attr("href");
        $(this).parent().parent().remove(); //remove li of tab
        $(tabContentId).remove(); //remove respective tab content
        $('#myTab a:last').tab('show'); // Select first tab
    });
}

//shows the tab with passed content div id..paramter tabid indicates the div where the content resides
function showTab(tabId) {
    $('#myTab a[href="#' + tabId + '"]').tab('show');
}
//return current active tab
function getCurrentTab() {
    return currentTab;
}

//This function will create a new tab here and it will load the url content in tab content div.
function craeteNewTabAndLoadUrl(parms, url, loadDivSelector) {
    //$("" + loadDivSelector).html('<iframe frameborder=1 width="100%" height="800" src="'+url+'">IFRAME</iframe>');
    $("" + loadDivSelector).load(url, function (response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error getting details ! ";
            $("" + loadDivSelector).html(msg + xhr.status + " " + xhr.statusText);
            $("" + loadDivSelector).html("Load Ajax Content Here...");
        }
    });

}

//this will return element from current tab
//example : if there are two tabs having  textarea with same id or same class name then when $("#someId") whill return both the text area from both tabs
//to take care this situation we need get the element from current tab.
function getElement(selector) {
    var tabContentId = $currentTab.attr("href");
    return $("" + tabContentId).find("" + selector);

}


function removeCurrentTab() {
    var tabContentId = $currentTab.attr("href");
    $currentTab.parent().remove(); //remove li of tab
    $('#myTab a:last').tab('show'); // Select first tab
    $(tabContentId).remove(); //remove respective tab content
}