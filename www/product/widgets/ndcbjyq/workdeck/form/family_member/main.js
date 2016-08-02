define([
    'text!./index.html'
], function (tpl) {
    return {
        template: tpl,
        defaults: {
            autoAction: true,
            modelName: 'familyMember',
            url: {
                dic: 'g:[this].common.personDic'
            },
            read: function (app) {
                return {
                    url: 'dic',
                    params: null,
                    map: [{
                        from: 'data.genderKv',
                        to: 'GenderList',
                        parse: app.parseProvider.kvToSelectList
                    }, {
                        from: 'data.creds',
                        to: 'CredTypeList',
                        parse: app.parseProvider.kvToSelectList
                    }, {
                        from: 'data.rels',
                        to: 'RelList',
                        parse: app.parseProvider.kvToSelectList
                    }, {
                        from: 'data.commentKv',
                        to: 'CommentList',
                        parse: app.parseProvider.kvToSelectList
                    }]
                };
            }
        },
        initAttr: function () {
            this.model({ data: {} }, false);
        },
        rendered: function () {
            var me = this;
        },
        saveHandler: function (e, app) {
            var validator = this.instance(this.$('.data-validate-form'));
            if (validator.validate()) {
                var data = this.model('data').toJSON();

                data = app.modelHandler.calculate(this.getModelDefine(), data, this.model());

                this.trigger('saved', data);
            }
        }
    };
});
