define(function () {
    return {
        '_ndcbjyq_common': {
            widgets: [
                'core-frame-view-header@#header@core',
                'ndcbjyq-frame-sidebar@#sidebar@ndcbjyq'
            ],
            inherits: []
        },
        '_ndcbjyq_workdeck_common': {
            widgets: [
                'ndcbjyq-workdeck-subnav@#nav-sub@ndcbjyq'
            ],
            inherits: ['_ndcbjyq_common']
        },
        'ndcbjyq_workdeck_handle': {
            widgets: [
                'ndcbjyq-workdeck-all_handle@.v-render-body@ndcbjyq'
            ],
            inherits: ['_ndcbjyq_workdeck_common']
        },
        '_ndcbjyq_query_common': {
            widgets: [
                'ndcbjyq-query-nav-main@#nav-sub@ndcbjyq'
            ],
            inherits: ['_ndcbjyq_common']
        },
        'ndcbjyq_query_right_register': {
            widgets: [
                'ndcbjyq-query-nav-right@#nav-three@ndcbjyq',
                'ndcbjyq-query-list-register@#content@ndcbjyq'
            ],
            inherits: ['_ndcbjyq_query_common']
        }
    };
});