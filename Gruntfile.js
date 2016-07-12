
'use strict';

module.exports = function (grunt) {

    var options = require('./www/custom-version-1/configs/build.js');

    grunt.initConfig({
        veronica: options
    });

    grunt.loadNpmTasks('grunt-veronica');

    grunt.registerTask('default', ['veronica']);

};
