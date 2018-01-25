var _menus = {"menus":[
    {"menuid":"1","icon":"icon-sys","menuname":"项目管理",
        "menus":[
            {"menuid":"1-1","menuname":"订单管理","icon":"icon-nav","url":"order/list.vm"},
            {"menuid":"1-2","menuname":"课程管理","icon":"icon-nav","url":"subject/list.vm"}
        ]
    }
]};

function InitLeftMenu() {
    var html = '';
    $.each(_menus.menus, function(i, n) {
        var menulist ='';
        menulist +='<li class=" treeview"><a href="#"><i class="fa fa-anchor"></i><span>';
        menulist +='</span> <i class="fa fa-angle-left pull-right"></i>';
        menulist += n.menuname + '</a><ul class="treeview-menu">';
        $.each(n.menus, function(j, o) {
            menulist +='<li>';
            menulist +='<a href="javascript:void(0);" onclick="addTab(\''+ o.menuid +'\',\''+o.menuname+'\',\''+o.url+'\',\'\');">';
            menulist +='<i class="fa fa-circle-o"></i>'+o.menuname;
            menulist +='</a>';
            menulist +='</li>';
        });
        menulist += '</ul>></li>';
        html += menulist;
    });
    $('.sidebar-menu').html(html);
}
function addTab(menuid,subtitle,url,icon){
    registerComposeButtonEvent(menuid,subtitle,url,icon);
}

/**
 * 菜单排序
 * @param data
 */
//function sortMenu(data){
//
//    var dataArray = new Array();
//    var key = "sort";
//    var parentJsonArray = new Array();
//
//    // 一级菜单排序
//    for(var i=0,il=data.length;i < il;i++){
//
//        if(data[i]["pId"] == "0"){
//            parentJsonArray.push(data[i]);
//        }
//    }
//    var parentJsonArray_T = JsonSort(parentJsonArray,key);
//
//    // 二级菜单排序
//    var subJsonArray_C = new Array();
//    for(var i=0,il=parentJsonArray_T.length;i < il;i++){
//        var subJsonArray = new Array();
//        for(var j=0,jl=data.length;j < jl;j++) {
//            if (parentJsonArray_T[i]["id"] == data[j]["pId"]) {
//                subJsonArray.push(data[j]);
//            }
//        }
//        var subJsonArray_T = new Array();
//        if(subJsonArray.length > 0){
//            subJsonArray_T = JsonSort(subJsonArray,key);
//        }
//        subJsonArray_C = subJsonArray_C.concat(subJsonArray_T);
//    }
//
//    dataArray = dataArray.concat(parentJsonArray_T);
//    dataArray = dataArray.concat(subJsonArray_C);
//    return dataArray;
//}