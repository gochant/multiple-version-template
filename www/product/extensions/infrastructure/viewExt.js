define([
    'assets/runtime'
], function (pug) {

    window.pug = pug;

    return function (app) {
        var _ = app.core._;
        var $ = app.core.$;
        var kendo = app.core.kendo || window.kendo;

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
                    app.request.getBundle.apply(me, promises).done(function () {
                        var args = Array.prototype.slice.call(arguments, 0, len);
                        _.each(args, function (resp, i) {
                            var config = configs[i];
                            if (config.map) {
                                var map = config.map;
                                if (!_.isArray(map)) {
                                    map = [map];
                                }
                                _.each(map, function (m, i) {
                                    var val = app.core.util.getter(resp, m.from);
                                    if (m.parse) {
                                        var parse = _.bind(m.parse, me);
                                        val = parse(val);
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
                    validate: function (e) {
                        var formName = e.sender.element.attr('data-form-name');
                        var invalidLen = e.sender.element.find('.k-invalid').length;
                        var $target = $('.invalid-tag[data-for=' + formName + ']');
                        if (invalidLen === 0) {
                            $target.text(invalidLen).removeClass('fadeInRight').addClass('animated fadeOutRight');
                        }else{
                            $target.text(invalidLen).removeClass('fadeOutRight').addClass('animated fadeInRight');
                        }
                    }
                });
            }
        }


        // window

        var oldWindowInstance = app.view.base._windowInstance;
        app.view.base._windowInstance = function ($el, options, view) {

            if (options.type === 'modal') {
                var wnd = {
                    element: $el,
                    config: options,
                    close: function () {
                        this.element.modal('hide');
                    },
                    destroy: function () {
                    },
                    center: function () {
                    },
                    /**
                     * 打开对话框
                     */
                    open: function () {
                        this.element.modal('show');
                    },
                    rendered: function (view) {

                    },
                    setOptions: function (opt) {
                    }
                };

                if (options.destroyedOnClose) {
                    $el.modal().on('hidden.bs.modal', function () {
                        view._destroyWindow(options.name);
                    });
                }

                wnd.core = $el.data('bs.modal');

                return wnd;
            }
            if (options.type === 'dialog') {
                return oldWindowInstance.call(this, $el, options, view);
            }

            var dlgOptions = options.options;

            dlgOptions.modal = true;
            $el.kendoWindow(dlgOptions);
            var dlg = $el.data('kendoWindow');
            if (options.destroyedOnClose) {
                dlg.bind('close', function () {
                    view._destroyWindow(options.name);
                });
            }
            if (options.full) {
                dlg.bind('open', function () {
                    dlg.maximize();
                });
            }
            dlg.rendered = function (view) {
                this.element.find('.fn-s-loading').remove();
            }

            dlg.config = options;
            dlg.core = dlg;

            return dlg;

        }


        // mvvm


        app.view.base._bind = function () {
            var me = this;

            if (this.options.bindBlock) {
                this.$el.find('.data-bind-block').each(function (i, el) {
                    kendo.unbind($(el));
                    kendo.bind($(el), me.viewModel);
                });
            } else {
                kendo.unbind(this.$el);
                kendo.bind(this.$el, me.viewModel);
            }
        }

        app.view.base.instance = function (el) {
            return kendo.widgetInstance(this.$(el));
        }

        app.view.base._customDestroy = function () {
            // 销毁该组件下的kendo控件
            if (window.kendo) {
                _.each(this.$('[data-role]'), function (el) {
                    var inst = kendo.widgetInstance($(el));
                    inst && inst.destroy();
                });
            }

            kendo.unbind(this.$el);
        }

        app.view.base._createViewModel = function (data) {
            return kendo.observable(data);
        };

        app.view.base.delegateModelEvents = function (vm) {
            vm || (vm = this.model());
            var me = this;
            if (me.modelChanged) {
                vm.bind('change', function (e) {
                    var handler = me.modelChanged[e.field];
                    if (handler == null) {
                        handler = me.modelChanged['defaults'] || $.noop;
                    }

                    me._invoke(handler, vm, e);
                });
            }

        };

        // render


        var oldRenderTemplate = app.view.base._renderTemplate;
        app.view.base._renderTemplate = function (template) {
            if (_.isFunction(template)) {
                this.options.templateEngine = 'pug';
            }
            return oldRenderTemplate.apply(this, Array.prototype.slice.call(arguments));
        }

        app.view.base.getContextModelDefine = function () {
            return app.modelProvider[this.options._source];
        }

        app.view.base.getModelDefine = function () {
            var contextModel = this.getContextModelDefine();
            return contextModel && contextModel[this.options.modelName];
        }

        var oldExecuteTemplate = app.view.base._executeTemplate;
        app.view.base._executeTemplate = function (compiled) {

            if (this.options.templateEngine === 'pug') {
                var result = compiled(_.extend({}, {
                    // mixin: app.pugMixin,
                    // output: app.pugOutput,
                    options: this.options,
                    globalModel: app.modelProvider,
                    contextModel: this.getContextModelDefine(),
                    model: this.getModelDefine()
                }));
                //app.pugOutput.html = '';
                return result;
            }

            return oldExecuteTemplate.apply(this, Array.prototype.slice.call(arguments));
        }

    };
});