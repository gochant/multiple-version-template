define(function () {

    return function (app) {
        var _ = app.core._;

        app.uiUtil || (app.uiUtil = {});

        app.uiUtil.dynamicTab = function ($dom) {
            var $dynamic = $dom.find('.nav[data-dynamic-tab]');

            $dynamic.each(function (i, el) {
                var $nav = $(el);
                var group = $nav.attr('data-dynamic-tab');

                var $content = $dom.find('[data-dynamic-tab=' + group + ']');

                var $tabs = $nav.find('[data-toggle=tab]');
                var $panels = $content.find('.tab-pane');
                $tabs.each(function (i, tab) {
                    var rstr = app.coreUtil.randomString();
                    var $thePane = $($panels.get(i));
                    var $theTab = $(tab);

                    $theTab.attr('href', '#' + rstr);
                    $thePane.attr('id', rstr);

                });
            });
        }

    };
});
