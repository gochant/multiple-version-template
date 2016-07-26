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
        initAttr: function () {
            this.model({
                text: '',
                key: '51'
            }, false);
        },
        rendered: function () {
            var select = this.$('.fn-selector').kendoZoneSelector({
                url: this.url('read'),
                headerUrl: this.url('parents'),
                template: $('#region-selector-pane').html(),
                requestKey: this.model().get('key')
            }).data('kendoZoneSelector');
            var me = this;
            select.bind('selected', function (data) {
                me.model(data);
                me.$('[data-toggle=dropdown]').dropdown('toggle');
            });
        }
    };
});
