function initSelecter(selecter) {
    $.fn.select2.defaults.set("theme", "bootstrap");

    var placeholder = "请选择";

    selecter.select2({
        placeholder: placeholder,
        width: null,
        allowClear: true
    });
}


function initSelecterTips(selecter,placeholder) {
    $.fn.select2.defaults.set("theme", "bootstrap");

    var placeholder = placeholder;

    selecter.select2({
        placeholder: placeholder,
        width: null,
        allowClear: true
    });
}

