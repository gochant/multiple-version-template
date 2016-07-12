var originBuild = require('../../product/configs/build.js');
var productOptions = originBuild.product.options;

productOptions.clean.custom = productOptions.clean.custom.concat([
    '!' + productOptions.dir + '/custom-version-1'
]);

productOptions.entryPack = productOptions.entryPack.concat([{
    name: './custom-version-1/entries/home',
    include: [
        'veronica', 'jquery', 'underscore',
        'text', 'css', 'ver'
    ]
}]);

productOptions.jsPack.paths = productOptions.jsPack.paths.concat([{
    name: 'module1_ver1',
    origin: './custom-version-1/widgets/module1_ver1'
}]);

module.exports = originBuild;