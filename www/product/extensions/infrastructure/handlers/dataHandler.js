define(function () {

    return function (app) {
        var _ = app.core._;
        var kendo = app.core.kendo || window.kendo;

        app.dataHandler || (app.dataHandler = {});

        app.dataHandler.pickEnumName = function (selectedValue, enumList) {
            var selected = _.find(enumList, function (item) {
                return item.value === selectedValue;
            });
            return selected ? selected.name : null;
        }

    };
});
