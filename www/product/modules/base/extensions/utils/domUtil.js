define(function () {

    return function (app) {
        var _ = app.core._;

        app.domUtil || (app.domUtil = {});

        app.domUtil.getSearchBoxValue = function ($target) {
            var $input = $target.closest('.input-group').find('.form-control');
            return $input.val();
        }

    };
});
