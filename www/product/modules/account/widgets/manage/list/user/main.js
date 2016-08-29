define([
    'text!./index.html',
    'ver!account-manage-form-user'
], function (tpl, userForm) {
    return {
        template: tpl,
        defaults: {
            autoResize: true,
            autoAction: true,
            backendInterface: {
                query: ':user.query'
            },
            url: {
                query: 'g:[this].registrationBook.query'
            }
        },
        staticModel: function (app) {
            return {
                mainList: app.store.source({
                    data: [{
                        id: 1,
                        name: '张三'
                    }, {
                        id: 2,
                        name: '李四'
                    }],
                    page: 1
                })
            }
        },
        listen: function () {
            this.listenTo([['addView', 'saved'], [this, 'modelBound']], function (data) {
                this._query();
            });
        },
        _query: function(filter) {
            this.model('mainList').filter(filter || []);
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
            this.viewWindow('addView', userForm, null, app.configProvider.modal('sm'));
        },
        modifyHandler: function () { },
        removeHandler: function () { },
        enableHandler: function () { },
        disableHandler: function () { },
        resetPasswordHandler: function () { },
    };
});
