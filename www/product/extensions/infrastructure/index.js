define([
    './loading',
    './mvvm',
    './kendo',
    './notify',
    './source',
    './render'
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

        var originalDefaultListen = app.view.base._defaultListen;
        app.view.base._defaultListen = function () {
            originalDefaultListen.apply(this, Array.prototype.slice.call(arguments));
            this.listenTo(this, 'rendered', function () {
                var me = this;
                if (this.options.read) {
                    var configs = this._invoke(this.options.read);
                    if (!_.isArray(configs)) {
                        configs = [configs];
                    }
                    var promises = _.map(configs, function (config) {
                        return app.request.getJSONCross(me.url(config.url), config.params);
                    });

                    var len = promises.length;
                    app.request.getBundle.apply(me, promises).done(function() {
                        var args = Array.prototype.slice.call(arguments, 0, len);
                        _.each(args, function(resp, i) {
                            var config = configs[i];
                            if (config.map) {
                                var map = config.map;
                                if (!_.isArray(map)) {
                                    map = [map];
                                }
                                _.each(map, function(m, i) {
                                    var val = app.core.util.getter(resp, m.from);
                                    if (m.parse) {
                                        var parse = _.bind(m.parse, me);
                                        if (_.isArray(val)) {
                                            val = _.map(val, parse);
                                        } else {
                                            val = parse(val);
                                        }
                                    }
                                    me.model().set(m.to, val);
                                });
                                
                            }
                            
                        });
                    });
                }
            });
        }

        var originalActiveUi = app.view.base._activeUI;
        app.view.base._activeUI = function () {
            originalActiveUi.apply(this, Array.prototype.slice.call(arguments));

            if ($.fn.kendoValidator) {
                this.$('.data-validate-form').kendoValidator({
                    errorTemplate: '<span title="#=message#"><i class="fa fa-exclamation-circle"></i></span>',
                    validate: function (e, ee, eee) {
                        debugger;
                    }
                });
            }
        }

        app.ext || (app.ext = {});

        app.ext.str = function () {
            return Math.random().toString(36).substring(7);
        }

        app.ext.dynamicTab = function ($dom) {
            var $dynamic = $dom.find('.nav[data-dynamic]');

            $dynamic.each(function (i, el) {
                var $nav = $(el);
                var group = $nav.attr('data-dynamic');

                var $content = $dom.find('[data-dynamic=' + group + ']');

                var $tabs = $nav.find('[data-toggle=tab]');
                var $panels = $content.find('.tab-pane');
                $tabs.each(function (i, tab) {
                    var rstr = app.ext.str();
                    $(tab).attr('href', '#' + rstr);
                    $($panels.get(i)).attr('id', rstr);
                });
            });

        }

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

        app.configProvider || (app.configProvider = {});

        app.configProvider.fullModal = function () {
            return {
                type: 'modal',
                template: $('#tpl-modal-full').html()
            }
        }

        app.configProvider.normalModal = function () {
            return {
                type: 'modal',
                template: $('#tpl-modal').html()
            };
        }

        app.parseProvider || (app.parseProvider = {});

        app.parseProvider.kvParse = function (item) {
            return {
                name: item.Value,
                value: item.Key
            }
        }
    }
});
