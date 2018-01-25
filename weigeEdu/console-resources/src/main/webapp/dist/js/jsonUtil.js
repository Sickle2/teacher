/*
 @function JsonSort 对json排序
 @param json 用来排序的json
 @param key 排序的键值
 */
function JsonSort(json,key){
  for(var j=1,jl=json.length;j < jl;j++){
    var temp = json[j], //第二个对象
        val = temp[key],
        i = j-1;
    while(i >=0 && json[i][key]>val){ //用第二个和第一个比较
      json[i+1] = json[i];
      i = i-1;
    }
    json[i+1] = temp;
  }
  return json;
}