var viewModel = kendo.observable({
    isVisible: true,
    onSave: function(e) {
        kendoConsole.log("event :: save(" + kendo.stringify(e.values, null, 4) + ")");
    },
    products: new kendo.data.DataSource({
        schema: {
            model: {
                id: "ProductID",
                fields: {
                    ProductName: { type: "string" },
                    UnitPrice: { type: "number" }
                }
            }
        },
        batch: true,
        transport: {
            read: {
                url: "//demos.telerik.com/kendo-ui/service/products",
                dataType: "jsonp"
            },
            update: {
                url: "//demos.telerik.com/kendo-ui/service/products/update",
                dataType: "jsonp"
            },
            create: {
                url: "//demos.telerik.com/kendo-ui/service/products/create",
                dataType: "jsonp"
            },
            parameterMap: function(options, operation) {
                if (operation !== "read" && options.models) {
                    return {models: kendo.stringify(options.models)};
                }
            }
        }
    })
});
kendo.bind($("body"), viewModel);
function resizeGrid() {
    
    $('[data-role=grid]').data("kendoGrid").resize();
}

$(window).resize(function () {
    resizeGrid();
});