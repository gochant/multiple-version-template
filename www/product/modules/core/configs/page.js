define(function () {
    return function (app) {
        var page = {
            '_common': {
                widgets: [
                    'core-frame-header@framework=>#header',
                    'framework-site_sidebar@framework=>#sidebar'
                ]
            }
        }

        app.page.add(page);
    }
});