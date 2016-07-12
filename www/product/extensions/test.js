define(function () {
    return function (app) {
        app.test || (app.test = {});
        app.test.hello = function () {
            console.log('hello');
        }
    }
});