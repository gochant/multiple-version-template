define([
    'text!./index.html',
    'ver!sample-manage-form-user@sample'
], function (tpl, userForm) {
    return {
        template: tpl,
        defaults: {
            autoResize: true,
            autoAction: true,
        },
        stores: {
            'list': {
                from: '@@user'
            }
        },
        listen: function () {
            this.listenTo([['addView', 'saved'], [this, 'modelBound']], function (data) {
                this._query();
            });
        },
        _query: function (filter) {
            this.store().get().filter(filter || []);
        },
        refreshHandler: function () {
            this._query();
        },
        queryHandler: function (e, app) {
            var keyword = app.domUtil.getSearchBoxValue($(e.target));

            this._query({
                field: 'username',
                operator: 'contains',
                value: keyword
            });
        },
        addHandler: function (e, app) {
            var dlg = this.viewWindow('addView', userForm, null, app.optionsProvider.get('window.modal')('sm'));
            dlg.open();
        },
        modifyHandler: function () {
        },
        removeHandler: function () {
            this.store().remove()
        },
        enableHandler: function () {
        },
        disableHandler: function () {
        },
        resetPasswordHandler: function () {
        },
    };
});
