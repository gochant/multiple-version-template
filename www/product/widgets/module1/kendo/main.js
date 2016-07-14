define([
    'text!./index.html'
], function (tpl) {
    var kendo = window.kendo;
    return {
        template: tpl,
        initAttr: function () {
            this.model({
                selectedProduct: null,
                isPrimitive: true,
                isVisible: true,
                isEnabled: true,
                primitiveChanged: function () {
                    this.set("selectedProduct", null);
                },
                displaySelectedProduct: function () {
                    var selectedProduct = this.get("selectedProduct");
                    return kendo.stringify(selectedProduct, null, 4);
                },
                onOpen: function () {
                    //            kendoConsole.log("event :: open");
                },
                onChange: function () {
                    //            kendoConsole.log("event :: change (" + this.displaySelectedProduct() + ")");
                },
                onClose: function () {
                    //            kendoConsole.log("event :: close");
                },
                products: new kendo.data.DataSource({
                    transport: {
                        read: {
                            url: "//demos.telerik.com/kendo-ui/service/products",
                            dataType: "jsonp"
                        }
                    }
                })
            }, false);
        }
    };
});
