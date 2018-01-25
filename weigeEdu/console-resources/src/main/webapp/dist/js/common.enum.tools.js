var rateTypes=[];//手续费率类型

var paymentTypes=[];//交付类型

var nobleMetalProductStatus=[];//标状态

var nmTakeRecordStatus=[];//提金状态

//提金状态类型
$.ajax({
    url: basePath + '/utils/queryStatus.do',
    type: "post",
    data: {"EnumName": "NmTakeRecord"},
    dataType: "json",
    success: function (result, textStatus) {
        nmTakeRecordStatus = result;
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
    },
    complete: function (XMLHttpRequest, textStatus) {
    }
});


//手续费率类型
$.ajax({
    url: basePath + '/utils/queryType.do',
    type: "post",
    data: {"EnumName": "RateType"},
    dataType: "json",
    success: function (result, textStatus) {
        rateTypes = result;
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
    },
    complete: function (XMLHttpRequest, textStatus) {
    }
});

//交付类型
$.ajax({
    url: basePath + '/utils/queryType.do',
    type: "post",
    data: {"EnumName": "PaymentType"},
    dataType: "json",
    success: function (result, textStatus) {
        paymentTypes = result;
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
    },
    complete: function (XMLHttpRequest, textStatus) {
    }
});

//标状态
$.ajax({
    url: basePath + '/utils/queryStatus.do',
    type: "post",
    data: {"EnumName": "NobleMetaProductStatu"},
    dataType: "json",
    success: function (result, textStatus) {
        nobleMetalProductStatus = result;
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
    },
    complete: function (XMLHttpRequest, textStatus) {
    }
});


/**
 * 获取状态enum常量值，并且转化成select控件中option
 * @param id 控件ID
 * @param enumName [CouponStatus<券状态>]
 * @returns void
 */
function constructStatus(id,enumName){

  var html = '';
  $.ajax({
    url : basePath + '/utils/queryStatus.do',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      html = '<option value="" selected>请选择...</option>';
      $.each(result,function(index,value) {
        html += '<option value="'+value.code+'">'+value.name+'</option>';
      });
      $(id).append(html);
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });
}

/**
 * 获取类型enum常量值，并且转化成select控件中option
 * @param id 控件ID
 * @param enumName [CouponConfigType<券类型>|CouponConfigTypeGiven<券赠与类型>|CouponConfigAmountLimitType<投资使用投资限额类型>|CouponConfigValidType<有效期类型>|CouponType<券类型>|CouponTypeGiven<券赠与类型>|CouponSendType<券发放类型>|GivenType<券转赠类型>]
 * @returns void
 */
function constructType(id,enumName){

  var html = '';
  $.ajax({
    url : basePath + '/utils/queryType.do',
    type : "post",
    data : {"EnumName":enumName},
    dataType : "json",
    success : function(result, textStatus) {
      if(enumName != "RegulationType")
    	  html = '<option value="" selected>请选择...</option>';
      $.each(result,function(index,value) {
        html += '<option value="'+value.code+'">'+value.name+'</option>';
      });
      $(id).append(html);
    },
    error : function(XMLHttpRequest, textStatus, errorThrown) {
    },
    complete : function(XMLHttpRequest, textStatus) {
    }
  });
}