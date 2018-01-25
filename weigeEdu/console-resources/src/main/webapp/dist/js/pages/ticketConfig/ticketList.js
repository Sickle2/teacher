$('#startTime1, #endTime1').daterangepicker({
    "singleDatePicker": true,
    "timePickerIncrement":1,
    "timePicker12Hour":false,
    format: 'YYYY-MM-DD'
});

$('#createTimeStartStr').change(function(){
    if( $('#createTimeEndStr').val()!=''&& $('#createTimeStartStr').val()>= $('#createTimeEndStr').val()){
        $('#createTimeStartStr').val('');
        alert('开始日期要小于结束日期');
    }
});

$('#createTimeEndStr').change(function(){
    if( $('#createTimeStartStr').val()!=''&& $('#createTimeStartStr').val()>= $('#createTimeEndStr').val()){
        $('#createTimeEndStr').val('');
        alert('结束日期要大于开始日期');
    }
});

function ticketConfigStatus(value,row,index) {
    if(value){
        return '已使用';
    }else{
        var curentTime=new Date();
        if(curentTime.getTime()>row["endTime"]){
            return '已过期';
        }
        return '未使用';
    }
}
function ticketConfigAction(value,row,index) {
    var $button;
    if(row.status){
        var $button = $([
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
function exchangeTicketTableList(params) {
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
        url : ticketListUri+'?stamp='
        +new Date().getTime()+'&sort='+sort+'&orders='+orders+'&limit='
        +params.data.limit+'&offset='+params.data.offset,
        data : $("#search-exchange-ticket-form").serialize(),
        dataType : 'json',
        async : false,
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
	if(confirm("确认删除吗？")){
		 $ .ajax({
		        type : 'POST',
		        url : ticketEnableUri+'?stamp='
		        +new Date().getTime()+'&uuid=' + uuid + '&status=' + status,
		        dataType : 'json',
		        success : function(result){
		            alert(result.statusdes);
		            $("#search-exchange-ticket-btn").click();
		        },
		        error:function (XMLHttpRequest, textStatus, errorThrown){
		            alert( '获得失败!' );
		        }

		    });
	}
   
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
    }else if('3'==value){
        return '手工';
    }else if('4'==value){
        return '手工批量';
    }
    return value;
}
$("#search-exchange-ticket-btn").click(function(){
    $("#exchangeTicketTable").bootstrapTable('refresh', null);
});
$("#search-exchange-ticket-reset").click(function(){
	$("#search-exchange-ticket-form")[0].reset();
});