function initDateRangePicker(picker) {
    $(picker).daterangepicker({
            //opens: (App.isRTL() ? 'left' : 'right'),
            format: 'YYYY-MM-DD',
            startDate: moment().subtract('days', 29),
            endDate: moment(),
            minDate: new Date('1990-01-01'),
            maxDate: new Date('2099-12-31')
        },
        function (start, end) {
            $(this.element).find('input[type="text"]').val(start.format('YYYY-MM-DD') + ' 至 ' + end.format('YYYY-MM-DD'));
            $(this.element).find('input[name$="Start"]').val(start.format('YYYY-MM-DD'));
            $(this.element).find('input[name$="End"]').val(end.format('YYYY-MM-DD'));
        }
    );

    $(picker).on("cancel.daterangepicker", function (ev, picker) {
        $(picker).element.find('input').val("");
    });

}
/*
 * 时间范围控件到time的
 */
function initDateTimeRangePicker(picker) {
    $(picker).daterangepicker({
            timePicker: true,
            timePicker24Hour: true,
            timePickerSeconds: true,
            //opens: (App.isRTL() ? 'left' : 'right'),
            format: 'YYYY-MM-DD HH:mm:ss',
            startDate: moment().subtract('days', 29),
            endDate: moment(),
            minDate: new Date('1990-01-01'),
            maxDate: new Date('2099-12-31')
        },
        function (start, end) {
            $(this.element).find('input[type="text"]').val(start.format('YYYY-MM-DD HH:mm:ss') + ' 至 ' + end.format('YYYY-MM-DD HH:mm:ss'));
            $(this.element).find('input[name$="Start"]').val(start.format('YYYY-MM-DD HH:mm:ss'));
            $(this.element).find('input[name$="End"]').val(end.format('YYYY-MM-DD HH:mm:ss'));
        }
    );
    $(picker).on("cancel.daterangepicker", function (ev, picker) {
        $(picker.element).find('input').val("");
    });
}

/*
 * 时间范围控件到月份的
 */
function initYMDateRangePicker(picker) {
    $(picker).daterangepicker({
            timePicker: true,
            timePicker24Hour: true,
            timePickerSeconds: true,
            //opens: (App.isRTL() ? 'left' : 'right'),
            format: 'YYYY-MM',
            startDate: moment().subtract('days', 29),
            endDate: moment(),
            minDate: new Date('1990-01-01'),
            maxDate: new Date('2099-12-31')
        },
        function (start, end) {
            $(this.element).find('input[type="text"]').val(start.format('YYYY-MM') + ' 至 ' + end.format('YYYY-MM'));
            $(this.element).find('input[name$="Start"]').val(start.format('YYYY-MM'));
            $(this.element).find('input[name$="End"]').val(end.format('YYYY-MM'));
        }
    );
    $(picker).on("cancel.daterangepicker", function (ev, picker) {
        $(picker.element).find('input').val("");
    });
}

/*
 * 单个日历控件到time的
 */
function initDateSinglePicker(picker) {
    $(picker).daterangepicker({
            timePicker: false,
            singleDatePicker: true,
            showDropdowns: true,
            format: 'YYYY-MM-DD',
            startDate: moment(),
            endDate: moment(),
            minDate: new Date('1990-01-01'),
            maxDate: new Date('2099-12-31')
        },
        function (start) {
            $(this.element).find('input[type="text"]').val(start.format('YYYY-MM-DD'));
        }
    );
    $(picker).on("cancel.daterangepicker", function (ev, picker) {
        $(picker).element.find('input').val("");
    });
}

/*
 * 单个日历控件到time的
 */
function initDateTimeSinglePicker(picker) {
    $(picker).daterangepicker({
            timePicker: true,
            timePicker24Hour: true,
            timePickerSeconds: true,
            singleDatePicker: true,
            format: 'YYYY-MM-DD HH:mm:ss',
            startDate: moment(),
            endDate: moment(),
            minDate: new Date('1990-01-01'),
            maxDate: new Date('2099-12-31')
        },
        function (start) {
            $(this.element).find('input[type="text"]').val(start.format('YYYY-MM-DD HH:mm:ss'));
        }
    );
    $(picker).on("cancel.daterangepicker", function (ev, picker) {
        $(picker.element).find('input[type="text"]').val("");
    });
}

function initTimeSinglePicker(picker) {
    $(picker).daterangepicker({
            timePicker: true,
            timePicker24Hour: true,
            timePickerSeconds: true,
            singleDatePicker: true,
            format: 'HH:mm:ss',
            startDate: moment(),
            endDate: moment(),
            minDate: new Date('1990-01-01'),
            maxDate: new Date('2099-12-31')
        },
        function (start) {
            $(this.element).find('input[type="text"]').val(start.format('HH:mm:ss'));
        }
    );
    $(picker).on("cancel.daterangepicker", function (ev, picker) {
        $(picker.element).find('input[type="text"]').val("");
    });
}