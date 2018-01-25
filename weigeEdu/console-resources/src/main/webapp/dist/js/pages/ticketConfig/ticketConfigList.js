function ticketConfigStatus(value,row,index) {
    if(value){
        return '无效';
    }else{
        return '有效';
    }
}
function ticketConfigAction(value,row,index) {
    var $button;
    if(row.deleted){
        var $button = $([
            '<button type="button" class="btn bg-olive margin" onclick="enbale(\''+row['uuid']+'\',0)">启用</button> ',
        ].join(''));
    }else{
        var $button = $([
            '<button type="button" class="btn bg-orange margin" onclick="enbale(\''+row['uuid']+'\',1)">删除</button> ',
        ].join(''));
    }
    return $('<div/>').append($button).html();
}
function dateTimeFormatter(value,row,index) {
    var time=new Date(value);
    return time.Format("yyyy年MM月dd日");
}
function exchangeTicketConfigTableList(params) {
    // data you need
    console.log(params.data);
    $ .ajax({
        type : 'POST',
        url : ticketListUri+'?stamp='
        +new Date().getTime()+'&sort='+params.data.sort+'&order='+params.data.order+'&limit='
        +params.data.limit+'&offset='+params.data.offset,
        data : $("#search-ticket-config-form").serialize(),
        dataType : 'json',
        success : function(result){
            params.success(result);
            params.complete();
        },
        error:function (XMLHttpRequest, textStatus, errorThrown){
            alert( '获得失败!' );
        }

    });
}
function enbale(uuid,status) {
    // data you need
    if(confirm("确认删除吗？删除后不可恢复！")){
        $ .ajax({
            type : 'POST',
            url : ticketEnableUri+'?stamp='
            +new Date().getTime()+'&uuid=' + uuid + '&status=' + status,
            dataType : 'json',
            success : function(result){
                alert(result.statusdes);
                $("#search-ticket-config-btn").click();
            },
            error:function (XMLHttpRequest, textStatus, errorThrown){
                alert( '获得失败!' );
            }

        });
    }

}
$("#search-ticket-config-btn").click(function(){
    $("#exchangeTicketConfigTable").bootstrapTable('refresh', null);
});