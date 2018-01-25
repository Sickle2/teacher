/**
 * 将date类型的时期转换成yyyy-MM-dd
 * @param value
 * @returns {*}
 */
function dateFormatter(value){
  if (value == null) {
    return "";
  }
  var dateVal = new Date(value);
  var year = dateVal.getFullYear();
  var month = dateVal.getMonth() + 1;
  var date = dateVal.getDate();
  var hour = dateVal.getHours();
  var minute = dateVal.getMinutes();
  var second = dateVal.getSeconds();
  // commonTime = dateVal.toString();
  commonTime = year + "-" + month + "-" + date;
  return commonTime;
}

/**
 * 将date类型的时期转换成yyyy-MM-dd mm:hh:ss
 * @param value
 * @returns {*}
 */
function datetimeFormatter(value){
  if (value == null) {
    return "";
  }
  var dateVal = new Date(value);
  var year = dateVal.getFullYear();
  var month = dateVal.getMonth() + 1;
  var date = dateVal.getDate();
  var hour = dateVal.getHours();
  var minute = dateVal.getMinutes();
  var second = dateVal.getSeconds();

  commonTime = year + "-" + (month<10?('0'+month):month) + "-" + (date<10?('0'+date):date)+" "+(hour<10?('0'+hour):hour)+":"+(minute<10?('0'+minute):minute)+":"+(second<10?('0'+second):second);

  //commonTime = year + "-" + (month<10?('0'+month):month) + "-" + (date<10?('0'+date):date);
  return commonTime;
}

/**
 * 转化为select2需要的[1,2,3]格式的
 * @param value
 * @returns {Array|*}
 */
function dateSelect2Formatter(value) {
  if(value==null){
    return "";
  }
  return value.split(",");
}