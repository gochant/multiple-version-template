define(function () {
    return function (app) {
        var meta = {
            name: 'core',
            path: './product/modules/${name}/widgets',
            multilevel: true
        };

        app.module.add(meta.name, meta);
    }

});