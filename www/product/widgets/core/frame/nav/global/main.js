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
        initAttr: function (app) {
            this.selectSelector = '.fn-selector';
            this.defineAttr({
                name: 'zoneKey',
                source: 'global',
            //    setup: 'init'
            });
            this.defineAttr({
                name: 'zoneLongText',
                source: 'global'
            });
        },
        listen: function () {
            this.listenTo(this, 'attr-changed', function (name, value) {
                if (name === 'zoneLongText') {
                    this.model({
                        text: value
                    });
                }
                if (name === 'zoneKey') {
                    this._resetSelect(value);
                }
            });
        },
        _resetSelect: function (requestKey) {
            var instance = this.instance(this.selectSelector);
            instance.setRequestKey(requestKey);
        },
        _initSelect: function (app) {
            var me = this;
            var select = this.$(this.selectSelector).kendoZoneSelector({
                url: this.url('read'),
                headerUrl: this.url('parents'),
                template: $('#region-selector-pane').html(),
                requestKey: this.attr('zoneKey')
            }).data('kendoZoneSelector');

            select.bind('selected', function (data) {
                me.$('[data-toggle=dropdown]').dropdown('toggle');

                app.data.set('zoneKey', data.key);
                app.data.set('zoneLongText', data.text);
            });
        },
        rendered: function (app) {
            this._initSelect(app);
        }
    };
});
