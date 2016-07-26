define([
], function () {
    return function (app) {
        var jQuery = app.core.$;
        var _ = app.core._;

        $(document).on('click', '.dropdown.mega .dropdown-menu', function (e) {
            e.stopPropagation();
        });

        // zone selector jq plugin
        (function ($) {

            var kendo = window.kendo;
            var ui = kendo.ui;
            var Widget = ui.Widget;

            var MyWidget = Widget.extend({

                init: function (element, options) {
                    Widget.fn.init.call(this, element, options);
                    this.template = kendo.template(this.options.template, {
                        variable: 'data',
                        useWithBlock: false,
                        //  interpolate: /{{([\s\S]+?)}}/g,

                    });
                    this._bindEvents();
                    this.fetch(this.options.requestKey);
                },
                options: {
                    name: "ZoneSelector",
                    url: '',
                    template: '',
                    requestKey: null,
                    keyLimitLength: 16,
                    responseHandler: function (resp1, resp2, requestKey, currentKey) {
                        var levelMap = {
                            '国家': '省',
                            '省': '城市',
                            '市': '区县',
                            '县': '乡镇街道',
                            '镇': '村',
                            '村': '组'
                        };
                        if (resp1.success && resp2.success) {
                            var data = this.data() || {};
                            data.requestKey = requestKey;
                            data.currentKey = currentKey;
                            data.currentText = resp2.data.currentZone.RootFullName;
                            data.nav = _.compact(_.map(resp2.data.headZone.reverse(), function (item) {
                                var text = levelMap[item.Kind];
                                if (text != null) {
                                    return {
                                        parentKey: item.Key,
                                        text: levelMap[item.Kind]
                                    }
                                }
                              
                            }));

                            data.list = _.map(resp1.data.Sub, function (item) {
                                return {
                                    key: item.Key,
                                    text: item.Value,
                                    longText: item.RootFullName
                                };
                            });

                            this.data(data);
                        }
                    }
                },
                data: function (data) {
                    if (data != null) {
                        this._data = _.extend(this._data, data);
                        this.refresh();
                    }
                    return this._data;
                },
                _bindEvents: function () {
                    var me = this;

                    this.element
                        .on('click', '.fn-list-item', function (e) {
                            e.stopPropagation();
                            var $el = $(e.target).closest('.fn-list-item');
                            var currentKey = $el.attr('data-key');
                            var currentText = $el.attr('data-text');

                            if (currentKey.length < me.options.keyLimitLength) {
                                var requestKey = currentKey;

                                me.fetch(requestKey, currentKey);
                            } else {
                                me.data({
                                    currentKey: currentKey,
                                    currentText: currentText
                                });
                            }
                        })
                        .on('click', '.fn-nav-item', function (e) {
                            var $el = $(e.target).closest('.fn-nav-item');
                            var requestKey = $el.attr('data-parent-key');
                            var currentKey = me.data().currentKey;

                            me.fetch(requestKey, currentKey);

                        })
                        .on('click', '.fn-ok', function (e) {
                            me.trigger('selected', {
                                key: me.data().currentKey,
                                text: me.data().currentText
                            });
                        });
                },
                fetch: function (requestKey, currentKey) {
                    var me = this;
                    var url = this.options.url;
                    var headerUrl = this.options.headerUrl;

                    if (currentKey == null) {
                        currentKey = requestKey;
                    }

                    if (requestKey == null) return;

                    app.request.getBundle($.getJSON(url, {
                        key: requestKey
                    }), $.ajax({
                        url: headerUrl,
                        dataType: 'json',
                        xhrFields: {
                            withCredentials: true
                        },
                        data: {
                            zoneCode: currentKey
                        }
                    }))
                    .done(function (resp1, resp2) {
                        me.options.responseHandler.call(me, resp1, resp2, requestKey, currentKey);
                    });
                },
                refresh: function () {
                    this.element.html(this.template(this.data()));
                }

            });

            ui.plugin(MyWidget);

        })(jQuery);
    }
});
