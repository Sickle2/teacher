function clearTicketAddForm(){
    $('#addTicketMemberUuid').val('');
    $('#addTicketActType').val('');
    $('#addTicketRuleName').val('');
    $('#addTicketConfigUuid').val('');
    $('#addRuleProductBizNo').val('');
    $('#addRuleProductName').val('');
}
function ticketAdd() {
    // 查询活动信息
    clearTicketAddForm();
    var $table = $('#table');
    $table.bootstrapTable('resetView');
}
function validAddTicketForm(){
    var b = $('#add-ticket-form').bootstrapValidator('validate');
    return $('#add-ticket-form').data('bootstrapValidator').isValid();
}
$('#confirm-ticket-btn').click(function() {
    if (!validAddTicketForm()) {
        return false;
    }

    var status = confirm("确认提交?");
    if (status) {
    } else {
        return false;
    }
    $.ajax({
        type: 'POST',
        url: ticketAddUri + '?stamp=' + new Date().getTime(),
        data: $("#add-ticket-form").serialize(),
        dataType: 'json',
        success: function (result) {
            if (result.status == '1') {
                window.location.href=querySendIicketListUri;
            } else {
                alert('添加失败!' + result.des);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('添加失败!');
        }

    });
});
$('#btn-search-user').click(function() {
    var userName=$("#addTicketUserName").val();
    if (userName=='') {
        alert("请输入用户登录名");
        return false;
    }
    $.ajax({
        type: 'POST',
        url: queryByUserNameUri + '?stamp=' + new Date().getTime(),
        data: {userName:userName},
        dataType: 'json',
        success: function (result) {
            if (result.status == '1') {
                $("#addTicketRealName").val(result.data['realName']);
                $("#addTicketMoblie").val(result.data['phone']);
            } else {
                alert(result.des);
                $("#addTicketRealName").val('');
                $("#addTicketMoblie").val('');
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('添加失败!');
        }

    });
});
    $('#btn-search-ticket').click(function() {
        var addTicketConfigBizNo=$("#addTicketConfigBizNo").val();
        if (addTicketConfigBizNo=='') {
            alert("请输入兑换券编码");
            return false;
        }
        $.ajax({
            type: 'POST',
            url: queryTicketByBizNo + '?stamp=' + new Date().getTime(),
            data: {ticketBizNo:addTicketConfigBizNo},
            dataType: 'json',
            success: function (result) {
                if (result.status == '1') {
                    var statusText = '';
                    if(result.data.status != 1){
                        //商品为未上架 或 已下架状态，需要提示。
                        if(result.data.status == 0){
                            statusText = '未上架';
                        } else if(result.data.status == 2){
                            statusText = '已下架';
                        }
                        if(confirm("该商品为"+statusText+"状态，是否确认发放？")){
                            $("#addTicketProductBizNo").val(result.data['bizNo']);
                            $("#addTicketProductName").val(result.data['productName']);
                        } else {
                            $('#addTicketProductBizNo,#addTicketProductName,#addTicketConfigBizNo').val('');
                        }
                    } else {
                        $("#addTicketProductBizNo").val(result.data['bizNo']);
                        $("#addTicketProductName").val(result.data['productName']);
                    }
                } else {
                    alert(result.des);
                    $("#addTicketProductBizNo").val('');
                    $("#addTicketProductName").val('');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert('添加失败!');
            }

        });
    });

function restAddTicketForm(){
    $('input').val('');
    $('select').prop('selectedIndex', 0);
}