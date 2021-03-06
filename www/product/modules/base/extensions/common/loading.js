define([
], function () {

    return function (app) {

        // 全局页面加载控制

        function pageLoading(msg) {
            var $dom = $('#glb_loading');
            msg === 'hide' ? $dom.hide() : $dom.show().html(msg);
        }

        app.sandbox.on('pageLoading', function() {
            pageLoading();
        });

        app.sandbox.on('pageLoaded', function() {
            pageLoading('hide');
        });

        // 全局 ajax 加载控制

        $(document).ajaxStart(function () {
            $('#ajax_loading').show();
        }).ajaxComplete(function () {
            $('#ajax_loading').hide();
        });

    }
});
