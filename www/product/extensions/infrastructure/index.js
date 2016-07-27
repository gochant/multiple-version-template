define([
    './loading',
    './mvvm',
    './kendo',
    './notify',
    './source'
], function () {
    var args = Array.prototype.slice.call(arguments);
    return function (app) {
        app.use(args);

        // 配置

        // 禁用全局缓存
        $.ajaxSetup({ cache: false });


        // 通知系统

        app.notify.autoReport = function () {
            $(document).ajaxSuccess(function (e, xhr, f, resp) {
                var respType = ["", "info", "success", "warn", "error"];
                if (resp && resp.type != null) {

                    var msg = resp.msg;  // 后台返回信息

                    // 未验证或授权
                    if (!resp.success) {
                        // 用户信息丢失，强制刷新
                        if (resp.data === 'UserNotFound') {
                            app.notify.warn('会话过期，请重新登录');
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 1000);
                        }
                        if (resp.data === 'Unauthorized') {
                            app.notify.warn('对不起，您没有访问该功能的权限！');
                        }

                        // 将错误组织成信息
                        if (_.isArray(resp.data)) {
                            msg += '：' + _.map(resp.data, function (error) {
                                return error.Message;
                            }).join('<br />');
                        }

                        console.log(resp.data);
                    }

                    if (resp.type !== 0) {
                        app.notify[respType[resp.type]](msg);
                    }
                }
            }).ajaxError(function (e, xhr, f, resp) {
                console.error(xhr.responseTex);
            });
        }

        app.notify.autoReport();


        // 框架增强

        // url provider
        function getProp(obj, desc) {
            var arr = desc.split(".");
            while (arr.length && (obj = obj[arr.shift()]));
            return obj;
        }
        var originalUrl = app.view.base.url;
        app.view.base.url = function (url) {
            var result = originalUrl.call(this, url);
            if (result.indexOf('g:') > -1) {
                var prop = result.replace('g:', '').replace('[this]', this.options._source);
                result = getProp(app.urlProvider, prop);
            }
            return result;
        }

        app.ext || (app.ext = {});

        app.ext.str = function () {
            return Math.random().toString(36).substring(7);
        }

        app.ext.dynamicTab = function ($dom) {
            var $dynamic = $dom.find('.nav[data-dynamic]');

            $dynamic.each(function(i, el) {
                var $nav = $(el);
                var group = $nav.attr('data-dynamic');

                var $content = $dom.find('[data-dynamic=' + group + ']');

                var $tabs = $nav.find('[data-toggle=tab]');
                var $panels = $content.find('.tab-pane');
                $tabs.each(function(i, tab) {
                    var rstr = app.ext.str();
                    $(tab).attr('href', '#' + rstr);
                    $($panels.get(i)).attr('id', rstr);
                });
            });
   
        }
    }
});
