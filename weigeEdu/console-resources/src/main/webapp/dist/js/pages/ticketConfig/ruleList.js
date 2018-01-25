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
            '<button type="button" class="btn bg-orange margin" onclick="enbale(\''+row['uuid']+'\',1)">禁用</button> ',
        ].join(''));
    }
    return $('<div/>').append($button).html();
}
function dateTimeFormatter(value,row,index) {
    var time=new Date(value);
    return time.Format("yyyy年MM月dd日");
}
function actTypeFormatter(value,row,index) {
    if('1'==value){
        return '市场活动';
    }else if('2'==value){
        return '渠道活动';
    }else if('3'==value){
        return '消费金融';
    }
    return value;
}
function sendTypeFormatter(value,row,index) {
    if('1'==value){
        return '实时';
    }else if('2'==value){
        return '事后';
    }
    return value;
}
function investSingleFormatter(value,row,index) {
    return '('+changeNull(row['minInvestSingle'])+','+changeNull(row['maxInvestSingle'])+')元';
}
function investSingleFormatterY(value,row,index) {
    return '('+changeNull(row['minInvestSingleY'])+','+changeNull(row['maxInvestSingleY'])+')元';
}
function investFormatter(value,row,index) {
    return '('+changeNull(row['minInvest'])+','+changeNull(row['maxInvest'])+')元';
}
function investFormatterY(value,row,index) {
    return '('+changeNull(row['minInvestY'])+','+changeNull(row['maxInvestY'])+')元';
}
function lxFormatter(value,row,index) {
    return '('+changeNull(row['minLxNum'])+','+changeNull(row['maxLxNum'])+')人';
}
function lxInvestFormatter(value,row,index) {
    return '('+changeNull(row['lxMinInvestA'])+','+changeNull(row['lxMaxInvestA'])+')元';
}
function lxFirstInvestFormatter(value,row,index) {
    return '(投资：'+changeNull(row['lxFirstMinInvest'])+',年化：'+changeNull(row['lxFirstMinInvestY'])+')元';
}
function changeNull(value){
    if(value==null){
        return 0;
    }
    return value;
}
function exchangeTicketRuleTableList(params) {
    // data you need
    console.log(params.data);
    var sort=params.data.sort;
    var orders=params.data.order;
    if(undefined == sort){
        sort="createTime";
        orders="desc";
    }
    $ .ajax({
        type : 'POST',
        url : ruleListUri+'?stamp='
        +new Date().getTime()+'&sort='+sort+'&orders='+orders+'&limit='
        +params.data.limit+'&offset='+params.data.offset,
        data : $("#search-exchange-rule-form").serialize(),
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
    $ .ajax({
        type : 'POST',
        url : ruleEnableUri+'?stamp='
        +new Date().getTime()+'&uuid=' + uuid + '&status=' + status,
        dataType : 'json',
        success : function(result){
            if(status==0){
                alert('启用成功！');
            }else{
                alert('禁用成功！');
            }
            $("#search-exchange-rule-btn").click();
        },
        error:function (XMLHttpRequest, textStatus, errorThrown){
            alert( '获得失败!' );
        }
    });
}
$("#search-exchange-rule-btn").click(function(){
    $("#exchangeTicketRuleTable").bootstrapTable('refresh', null);
});