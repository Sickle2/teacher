
/**
 * 打开loading效果
 * @param obj
 */
function openLoading(){
      var html = [
          '<div class="modal modal-primary" tabindex="-2" role="dialog"  id="loading-modal">',
          '<div class="modal-dialog">',
          '<div class="overlay">',
          '<i class="fa fa-refresh fa-spin"></i>',
          '</div>',
          '</div>',
          '</div>'
      ];
    document.write(html.join());
}

/**
 * 移除loading效果
 * @param obj
 */
function destroyLoading(){
  $("#loading-modal").remove();
}