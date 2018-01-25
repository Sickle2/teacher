function addUpdateTitleImage(){
    var num = $('#title-images-div').children('div').length;
    if (num>5){
        alert("已经达到最大上传图片上限,目前上限:"+num);
        return false
    }
    var imageUploadId = 'titleimageupload'+num;
    var imageFromId = 'my-title-form'+num;
    var imageDivId = 'titleDivPreview'+num;
    var uploadImageDiv = '<div id="'+imageDivId+'" class="col-xs-4">'+
        '<img id="'+imageFromId+'" src="http://www.melvon.cn/cloud.png" style="width: 200px; height: 200px;" alt="">'+
        '<input style="display: none;" id="'+imageUploadId+'" name="'+imageUploadId+'" onchange="PreviewImage(this,\''+imageFromId+'\',\''+imageDivId+'\');" size="8" type="file">'+
        '<a href="javascript:;" onclick="deluploadimage(\''+imageUploadId+'\',\''+imageFromId+'\');">删除</a>'+
        '</div>';
    $("#title-images-div").append(uploadImageDiv);
    $("#"+imageFromId).click(function() {
        $("#"+imageUploadId).click();
    });
}

function addUpdateDetailImage(){
    var num = $('#detail-images-div').children('div').length;
    //if (num>2){
    //    alert("已经达到最大上传图片上限,目前上限:"+num);
    //    return false
    //}
    var imageUploadId = 'detailimageupload'+num;
    var imageFromId = 'my-detail-form'+num;
    var imageDivId = 'detailDivPreview'+num;
    var uploadImageDiv = '<div id="'+imageDivId+'" class="col-xs-4">'+
        '<img id="'+imageFromId+'" src="http://www.melvon.cn/cloud.png" style="width: 200px; height: 200px;" alt="">'+
        '<input style="display: none;" id="'+imageUploadId+'" name="'+imageUploadId+'" onchange="PreviewImage(this,\''+imageFromId+'\',\''+imageDivId+'\');" size="8" type="file">'+
        '<a href="javascript:;" onclick="deluploadimage(\''+imageUploadId+'\',\''+imageFromId+'\');">删除</a>'+
        '</div>';
    $("#detail-images-div").append(uploadImageDiv);
    $("#"+imageFromId).click(function() {
        $("#"+imageUploadId).attr("value","");
        $("#"+imageUploadId).click();
    });
}



function deluploadimage (fileuploadid,imgHead){
    var status = confirm("确认删除?");
    if(!status){
        return false;
    }
    $("#"+fileuploadid).attr("value","");
    document.getElementById(fileuploadid).value="";
    document.getElementById(imgHead).setAttribute("src","http://www.melvon.cn/cloud.png");

}