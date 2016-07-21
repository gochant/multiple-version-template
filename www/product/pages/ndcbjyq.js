define(function () {
    return {
        '_ndcbjyq_common': {
            widgets: [
                'core-frame-view-header@#header@core',
                'core-frame-nav-global@#nav-global@core',
                'ndcbjyq-frame-nav-side@#sidebar@ndcbjyq',
                'empty@#nav-sub',
                'empty@#nav-three',
                'empty@#content'
            ],
            inherits: []
        },
        '_ndcbjyq_workdeck_common': {
            widgets: [
                'ndcbjyq-workdeck-nav-main@#nav-sub@ndcbjyq'
            ],
            inherits: ['_ndcbjyq_common']
        },
        'ndcbjyq_workdeck_handle': {
            widgets: [
                'ndcbjyq-workdeck-view-handle@#content@ndcbjyq'
            ],
            inherits: ['_ndcbjyq_workdeck_common']
        },
        '_ndcbjyq_query_common': {
            widgets: [
                'ndcbjyq-query-nav-main@#nav-sub@ndcbjyq'
            ],
            inherits: ['_ndcbjyq_common']
        },
        '_ndcbjyq_query_right_common': {
            widgets: [
                'ndcbjyq-query-nav-right@#nav-three@ndcbjyq'
            ],
            inherits: ['_ndcbjyq_query_common']
        },
        'ndcbjyq_query_right_register': {
            widgets: [
                'ndcbjyq-query-list-registration_book@#content@ndcbjyq'
            ],
            inherits: ['_ndcbjyq_query_right_common']
        },
        'ndcbjyq_query_right_contractor': {
            widgets: [
                'ndcbjyq-query-list-contractor@#content@ndcbjyq'
            ],
            inherits: ['_ndcbjyq_query_right_common']
        },
        '_ndcbjyq_query_circulation_common': {
            widgets: [
                'ndcbjyq-query-nav-circulation@#nav-three@ndcbjyq'
            ],
            inherits: ['_ndcbjyq_query_common']
        },
        'ndcbjyq_query_circulation_contract': {
            widgets: [
                'ndcbjyq-query-list-circulation_contract@#content@ndcbjyq'
            ],
            inherits: ['_ndcbjyq_query_circulation_common']
        },
        '_ndcbjyq_map_common': {
            widgets: [
            ],
            inherits: ['_ndcbjyq_common']
        },
        'ndcbjyq_map_home': {
            widgets: [
                'ndcbjyq-map-view-home@#content@ndcbjyq'
            ],
            inherits: ['_ndcbjyq_map_common']
        }
    };
});