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

                    // ∂ØÃ¨…Ë÷√ form-invalid-tag

                    var $form = $thePane.find('[data-validate-form]');
                    var formName = $form.data('validate-form');
                    if (formName == null || formName === '') {
                        $form.attr('data-validate-form', rstr);
                    }

                    var $formtag = $theTab.find('.form-invalid-tag');
                    var formForName = $formtag.data('for');
                    if (app.coreUtil.isFalsy(formForName)) {
                        $formtag.attr('data-for', rstr);
                    }

                });
            });
        }

    };
});
