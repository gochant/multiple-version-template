define([
    './index.tpl'
], function (tpl) {
    return {
        template: tpl,
        defaults: {
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
                        parse: app.parseProvider.kvParse
                    }, {
                        from: 'data.creds',
                        to: 'CredTypeList',
                        parse: app.parseProvider.kvParse
                    }, {
                        from: 'data.rels',
                        to: 'RelList',
                        parse: app.parseProvider.kvParse
                    }, {
                        from: 'data.commentKv',
                        to: 'CommentList',
                        parse: app.parseProvider.kvParse
                    }]
                };
            }
        },
        initAttr: function () {
            this.model({ data: {} }, false);
        },
        rendered: function () {
            var me = this;
        }
    };
});
