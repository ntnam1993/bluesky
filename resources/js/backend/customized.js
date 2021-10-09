$(function () {
    date_range_picker();
    single_range();
    date_range_full();

    //Check All Record By table
    $("#check_all").click(function () {
        $(".check").prop('checked', $(this).prop('checked'));
    });

});

/**
 * Reset Input
 * **/

function resetInput(element){
    $(element).parents('.reset-input').find('input').val('');
    $(element).parents('.reset-input').find('select').val('');
}

/**
 * Date rang single
 * @type {*|jQuery|HTMLElement}
 */
function single_range(){
    "use strict";
    var sing_date = $('.date_range_single');
    sing_date.daterangepicker({
        autoUpdateInput: false,
        singleDatePicker: true,
        "locale": {
            "format": "DD/MM/YYYY",
            "applyLabel": "Chọn",
            "cancelLabel": "Hủy",
            "daysOfWeek": [
                "CN",
                "T2",
                "T3",
                "T4",
                "T5",
                "T6",
                "T7"
            ],
            "monthNames": [
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12"
            ]
        }
    });

    sing_date.on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY'));
    });

    sing_date.on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });
}

/**
 * ==============================
 * Date full
 * @type {*|jQuery|HTMLElement}
 */
function date_range_full(){
    "use strict";
    var date_range_full = $('.date_range_full');
    date_range_full.daterangepicker({
        autoUpdateInput: false,
        alwaysShowCalendars: true,
        showCustomRangeLabel: true,
        autoApply: true,
    });

    date_range_full.on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
    });

    date_range_full.on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });
}

function date_range_picker(){
    date_range = $('.date_range');
    date_range.daterangepicker({
        autoUpdateInput: false,
        "alwaysShowCalendars": true,
        "showCustomRangeLabel": false,
        "autoApply" : true,
        "locale": {
            format: "DD/MM/YYYY",
            applyLabel: "Chọn",
            cancelLabel: "Hủy",
            daysOfWeek: [
                "CN",
                "T2",
                "T3",
                "T4",
                "T5",
                "T6",
                "T7"
            ],
            "monthNames": [
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12"
            ]
        },
    });
    date_range.on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
    });

    date_range.on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });
}