define([
    'text!./index.html'
], function (tpl) {
    return {
        template: tpl,
        defaults: {
            url: {
                read: 'g:[this].zone.nav',
                parents: 'g:[this].zone.parents'
            }
        },
        rendered: function () {
            this.$('.breadcrumb').kendoZoneSelector({
                url: this.url('read'),
                headerUrl: this.url('parents'),
                template: $('#region-selector-pane').html(),
                requestKey: '51'
            });
        },
        initAttr: function (app) {
            this.keyName = 'globalZone';
         //   this.attr('key', globalData());
        },
        globalData: function (val) {
            var app = this.options.sandbox.app;
            if (val != null) {
                app.data.set(this.keyName, val);
            }
            return app.data.get(this.keyName);
        },
        subscribe: function () {
            var me = this;
            this.sub('change.' + this.keyName, function (val) {
              //  me.load
            });
        },
        load: function () {
            var app = this.options.sandbox.app;
            var me = this;
            app.request.getJSON(this.url('read'), {
                key: this.attr('key')
            }).done(function (resp) {
                if (resp.success) {
                    me.render();
                }
            });
        }
    };
});
