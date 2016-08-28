define([
    'text!./index.html'
], function (tpl) {
    return {
        template: tpl,
        defaults: {
            autoResize: true,
            autoAction: true,
            url: {
                query: 'g:[this].registrationBook.query'
            }
        },
        staticModel: function (app) {
            return {
                mainList: app.store.source({
                    data: [{
                        Id: 1,
                        Name: '张三'
                    }, {
                        Id: 2,
                        Name: '李四'
                    }],
                    page: 1
                })
            }
        },
        listen: function () {
            this.listenTo(this, 'modelBound', function () {
                this.model('mainList').read();
            })
        },
        refreshHandler: function () { },
        addHandler: function () {
            debugger;
            this.htmlWindow('test');
        },
        modifyHandler: function () { },
        removeHandler: function () { },
        enableHandler: function () { },
        disableHandler: function () { },
        resetPasswordHandler: function () { },
    };
});
