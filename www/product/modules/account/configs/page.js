define(function () {
    return function (app) {
        var page = {
            '_account_common': {
                widgets: [
                    'account-frame-view-header=>#header',
                    'account-frame-nav-side=>#sidebar'
                ],
                inherits: []
            },
            'account_manage_user': {
                widgets: [
                    'account-manage-list-user=>#content'
                ],
                inherits: ['_account_common']
            }
        }

        app.page.add(page);
    }
});