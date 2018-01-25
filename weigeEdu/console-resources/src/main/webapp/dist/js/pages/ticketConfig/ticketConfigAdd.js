function ticketConfigAdd() {
    // 查询活动信息
    $('#productUuid').val('');
    $('#productBizNo').val('');
    $('#productName').val('');
    $('#orgPrice').val('');
    $('#orgBeanPrice').val('');
    $('#orgPointsPrice').val('');
    $('#validityPeriod').val('');
    var $table = $('#table');
    $table.bootstrapTable('resetView');
}

function getProductByBizNo() {
    var productBizNo= $.trim($('#productBizNo').val());
    $('#productBizNo').val(productBizNo);
    if(productBizNo == null || productBizNo == ''){
        return false;
    }
    $ .ajax({
        type: 'POST',
        url: productSearchUri+'?stamp='
        + new Date().getTime() + '&businessNo=' + productBizNo,
        dataType: 'json',
        success: function (result) {
            if(result.status==1){
                if(result.data.status != 1){
                    //未上架或已下架
                    if(confirm("该商品没有上架,是否添加？")){
                        $('#productUuid').val(result.data.uuid);
                        $('#productName').val(result.data.productName);
                        $('#orgPrice').val(result.data.rmbPrice);
                        $('#orgBeanPrice').val(result.data.beanPrice);
                        $('#orgPointsPrice').val(result.data.pointsPrice);
                    } else {
                        $('#productUuid').val('');
                        $('#productBizNo').val('');
                        $('#productName').val('');
                        $('#orgPrice').val('');
                        $('#orgBeanPrice').val('');
                        $('#orgPointsPrice').val('');
                        $('#validityPeriod').val('');
                    }
                } else {
                    $('#productUuid').val(result.data.uuid);
                    $('#productName').val(result.data.productName);
                    $('#orgPrice').val(result.data.rmbPrice);
                    $('#orgBeanPrice').val(result.data.beanPrice);
                    $('#orgPointsPrice').val(result.data.pointsPrice);
                }
            }else{
                alert(result.des);
                $('#productUuid').val('');
                $('#productName').val('');
                $('#orgPrice').val('');
                $('#orgBeanPrice').val('');
                $('#orgPointsPrice').val('');
            }
            $('#validityPeriod').val('');
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('获得失败!');
        }
    });
}

$('#confirm-ticket-config-btn').click(function(){
    if(!validateForm('add-ticket-config-form')){
        return false;
    }
    if($('#productName').val()==''){
        alert('未找到商品信息！');
        return;
    }
    var status = confirm("确认提交?");
    if (status) {
    } else {
        return false;
    }
    $ .ajax({
        type : 'POST',
        url : ticketConfigAddUri+'?stamp='+new Date().getTime(),
        data : $("#add-ticket-config-form").serialize(),
        dataType : 'json',
        success : function(result){
            if(result.status == '1'){
                window.location.href = ticketSearchUri;
            }else{
                alert( '添加失败!' );
            }
        },
        error:function (XMLHttpRequest, textStatus, errorThrown){
            alert( '添加失败!' );
        }

    });
})