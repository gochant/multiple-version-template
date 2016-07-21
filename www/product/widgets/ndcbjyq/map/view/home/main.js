define([
  'require',
  'dojo/dojo',
  'dijit/registry',
  'text!./index.html',
  'css!./index.css'
], function (require, dojo,registry, tpl) {
    return {
        template: tpl,
        rendered: function () {

            require([
              "esri/Map",
              "esri/views/SceneView",
              "esri/widgets/Search",
              "esri/widgets/Search/SearchViewModel",
              'text!./index.html',
              'css!./index.css'
            ], function (Map, SceneView, Search, SearchVM) {
                var map = new Map({
                    basemap: "streets"
                });

                var view = new SceneView({
                    container: "viewDiv",
                    map: map,
                    scale: 50000000,
                    center: [-101.17, 21, 78]
                });

                var searchWidget = new Search({
                    viewModel: new SearchVM({
                        view: view
                    })
                }, "searchDiv");

                searchWidget.startup();
            })
            
        },
        destroy: function () {
            var _ = this.options.sandbox.app.core._;
            _.each(registry.findWidgets(this.$el.get(0)), function (w) {
                try {
                    w.destroyRecursive(true);
                } catch (e) {
                    console.warn(e);
                } 
            });
        }
    };
});
