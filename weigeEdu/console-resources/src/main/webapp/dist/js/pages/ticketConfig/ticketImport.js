/*
$('#confirm-ticket-import-btn').click(function() {
    var status = confirm("确认提交?");
    if (!status) {
        return false;
    }
    $("#batch-add-ticket-form").submit();
});
*/

// reset-ticket-import-btn
$('#reset-ticket-import-btn').click(function() {
	$("#batch-add-ticket-form").removeData('bootstrapValidator');
	resetValidateForm("batch-add-ticket-form");
	$('#table').bootstrapTable('refresh');
});

$(function(){
	var des = getUrlParam("des");
	if(des){
		$("#importdes").text(des);
	}
});

//查询提交，刷新表格数据
function submitForm(){
    $('#table').bootstrapTable('refresh');
    return false;
}
//异步加载表格数据
function ajaxRequest(params) {
	var pa='&sort='+params.data.sort+'&order='+params.data.order+'&limit='
    +params.data.limit+'&offset='+params.data.offset
    $("#batch-add-ticket-form").ajaxSubmit({
    	type: 'post',
    	dataType: 'json',
        url: basePath+'/exchangeTicket/batchSendTicketList?stamp='+new Date().getTime()+pa ,
        async: false,
        success: function(result){
        	if(result.status == '1'){
        		params.success(result);
                params.complete();
        	}else if(result.status == '3'){
        		params.success(result);
                params.complete();
        	}else{
        		alert(result.des);
        		
        	}
        	
        },
        error: function(XmlHttpRequest, textStatus, errorThrown){
        	alert("导入失败");  
        }
    });
}

//异步加载表格数据
function submitSendForm(params) {
	if($("#submitSign").val() != "0"){
	    alert("正在发放中,请勿重复提交!");
	    return ;
	}
	var status = confirm("确认提交?");
    if (!status) {
        return false;
    }
    $("#submitSign").val("1");
    // alert("已提交数据,正在处理中...");
    $("#batch-add-ticket-form").ajaxSubmit({
    	type: 'post',
    	dataType: 'json',
        url: basePath+'/exchangeTicket/batchSendTicket?stamp='+new Date().getTime(),
        async: false,
        success: function(result){
        	$("#submitSign").val("0");
        	if(result.status == '1'){
        		alert(result.des)
        		window.location.href=basePath+"/exchangeTicket/ticket";
        	}else{
        		alert(result.des);
        	}
        	
        },
        error: function(XmlHttpRequest, textStatus, errorThrown){
        	$("#submitSign").val("0");
        	alert("导入失败");  
        }
    });
	
}

