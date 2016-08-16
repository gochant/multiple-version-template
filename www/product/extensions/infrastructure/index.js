define([
    'veronica-ui',
    './loading',
    './viewBase/core',
    './viewBase/ajax',
    './viewBase/modelDefine',
    './viewBase/render',
    './viewBase/window',
    './viewExt/form',
    //'./kendo',
    //'./notify',
    //'./source',
    './utils/coreUtil',
    './utils/dataUtil',
    './utils/storeUtil',
    './utils/modelUtil',
    './utils/uiUtil',
    './providers/configProvider',
    './providers/parseProvider'
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


        app.ext || (app.ext = {});

        app.request.getJSONCross = function (url, data) {
            return $.ajax({
                url: url,
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                data: data
            });
        }
    }
});
