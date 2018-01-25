/**
 * 时间空间初始化
 * @param id
 */
function initDateRangePlugin(id){
  //时间插件
  $(id).html(moment().subtract('hours', 1).format('YYYY-MM-DD HH:mm:ss') + ' 至 ' + moment().format('YYYY-MM-DD HH:mm:ss'));
  $(id).daterangepicker(
      {
        showDropdowns : true,
        showWeekNumbers : false, //是否显示第几周
        timePicker : true, //是否显示小时和分钟
        timePickerSeconds: true,
        timePickerIncrement : 1, //时间的增量，单位为分钟
        timePicker12Hour : false, //是否使用12小时制来显示时间
        ranges : {
        },
        opens : 'right', //日期选择框的弹出位置
        buttonClasses : [ 'btn btn-default' ],
        applyClass : 'btn-small btn-primary blue',
        cancelClass : 'btn-small',
        format : 'YYYY-MM-DD HH:mm:ss', //控件中from和to 显示的日期格式
        separator : '至',
        locale : {
          applyLabel : '确定',
          cancelLabel : '清空',
          fromLabel : '起始时间',
          toLabel : '结束时间',
          customRangeLabel : '自定义',
          daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
          monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
            '七月', '八月', '九月', '十月', '十一月', '十二月' ],
          firstDay : 1
        }
      }, function(start, end, label) {//格式化日期显示框
        $('#id').html(start.format('YYYY-MM-DD HH:mm:ss') + ' 至 ' + end.format('YYYY-MM-DD HH:mm:ss'));
      });
  $(id).on('cancel.daterangepicker',function(ev, picker) {

    $(id).val("");

  });
}