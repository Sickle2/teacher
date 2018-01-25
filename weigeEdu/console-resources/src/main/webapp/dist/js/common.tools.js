
/*************************************这个从数据库查询数据，填充下拉框的工具js--beging**************************************************/


/**
 * 从数据库查询分组的集合
 * @param id
 */
function constructPrdClamsGroupCombobox(id) {

    var html = '';
    $.ajax({
        url: basePath + '/common/queryPrdClamsGroupList.do',
        type: "post",
        data: {},
        dataType: "json",
        success: function (result, textStatus) {
            html = '<option value="" selected>请选择...</option>';
            $.each(result, function (index, value) {
                html += '<option value="' + value.code + '">' + value.name + '</option>';
            });
            $(id).append(html);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        },
        complete: function (XMLHttpRequest, textStatus) {
        }
    });
}

/**
 * 从数据库查询贵金属种类的集合
 * @param id
 */
function constructNobleMetalTypeListCombobox(id) {

    var html = '';
    $.ajax({
        url: basePath + '/common/queryNobleMetalTypeList.do',
        type: "post",
        data: {},
        dataType: "json",
        success: function (result, textStatus) {
            html = '<option value="" selected>请选择...</option>';
            $.each(result, function (index, value) {
                html += '<option value="' + value.code + '">' + value.name + '</option>';
            });
            $(id).append(html);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        },
        complete: function (XMLHttpRequest, textStatus) {
        }
    });
}

    /**
     * 从数据库中查询合同分类组
     * @param id
     */
    function constructContractCategoryListCombobox(id) {

        var html = '';
        $.ajax({
            url: basePath + '/common/queryContractCategoryList.do',
            type: "post",
            data: {},
            dataType: "json",
            success: function (result, textStatus) {
                html = '<option value="" selected>请选择...</option>';
                $.each(result, function (index, value) {
                    html += '<option value="' + value.code + '">' + value.name + '</option>';
                });
                $(id).append(html);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            },
            complete: function (XMLHttpRequest, textStatus) {
            }
        });
    }

/**
 * 从数据库中查询数据字典
 * @param id
 */
function constructContractDataDictListCombobox(id,selectType) {

    var html = '';
    $.ajax({
        url: basePath + '/common/queryDataDictList.do',
        type: "post",
        data: {"selectType":selectType},
        dataType: "json",
        success: function (result, textStatus) {
            html = '<option value="" selected>请选择...</option>';
            $.each(result, function (index, value) {
                html += '<option value="' + value.code + '">' + value.name + '</option>';
            });
            $(id).append(html);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        },
        complete: function (XMLHttpRequest, textStatus) {
        }
    });
}

/**
 * 查询标签列表
 * @param id
 */
function constructContractPrdLabelListCombobox(id) {

    var html = '';
    $.ajax({
        url: basePath + '/common/queryPrdLabelList.do',
        type: "post",
        data: {},
        dataType: "json",
        success: function (result, textStatus) {
            html = '';
            $.each(result, function (index, value) {
                html += '<option value="' + value.code + '">' + value.name + '</option>';
            });
            $(id).append(html);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        },
        complete: function (XMLHttpRequest, textStatus) {
        }
    });
}

