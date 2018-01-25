/**
 * 格式化时间
 * @param fmt
 * @returns {*}
 * @constructor
 */
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


function validateForm(formId){
    var b = $("#"+formId).bootstrapValidator('validate');
    return $("#"+formId).data('bootstrapValidator').isValid();
}
function resetValidateForm(formId){
    $("#"+formId).bootstrapValidator('resetForm', true);
    var formValidationData = $("#"+formId).data('formValidation');
    if(formValidationData){
    	formValidationData.resetForm();
    }else{
    	$("#"+formId)[0].reset();
    }
}
$(function(){
	$(".form-reset-btn").click(function(){
		$("form.form-horizontal").each(function(){
			this.reset();
		});
	});
});
/**
 * 截取url中的param参数
 * @param name 参数key
 * @returns
 */
function getUrlParam(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var m = window.location.search;
	var r = m.substr(1).match(reg); 
	if (r != null) return decodeURI(r[2]); return null; 
}

function rowStyle(row, index) {
    var classes = ['', 'info'];
        return {
            classes: classes[index % 2]
        };
}

function pickerDate(startTimeId , endTimeId){
	var startTime1 = $('#'+startTimeId).val();
	var startTime2 = $('#'+endTimeId).val();
	if(!startTime1){
		startTime1 = new Date().Format("yyyy-MM-dd")+' 00:00:00';
	}
	if(!startTime2){
		startTime2 = new Date().Format("yyyy-MM-dd")+' 23:59:59';
	}
  	$('#'+startTimeId).daterangepicker({
    	"timePicker":true,
        "singleDatePicker": true,
        "timePickerIncrement":1,
        "timePicker12Hour":false,
        format: 'YYYY-MM-DD HH:mm:ss',
        timePickerSeconds:true,
        startDate:startTime1
    });
   
     $('#'+endTimeId).daterangepicker({
    	"timePicker":true,
        "singleDatePicker": true,
        "timePickerIncrement":1,
        "timePicker12Hour":false,
        format: 'YYYY-MM-DD HH:mm:ss',
        timePickerSeconds:true,
        startDate:startTime2
    });
}
