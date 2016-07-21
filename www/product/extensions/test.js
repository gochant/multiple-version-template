define(function () {
    return function (app) {
        app.test || (app.test = {});
        app.test.hello = function () {
            console.log('hello');
        }
        //app.sandbox.on('pageLoading', function () {
        //    requestAnimationFrame(function () {
        //        $('#main').css('opacity', 0);
        //    });
        //});
        //app.sandbox.on('pageLoaded', function () {
        //    requestAnimationFrame(function () {
        //        $('#main').css('opacity', 1);
        //    });
        //});
    }
});