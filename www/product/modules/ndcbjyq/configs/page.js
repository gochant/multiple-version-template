define({
    '_ndcbjyq_common': {
        widgets: [
            'base-frame-view-header=>#header',
            'base-frame-nav-global=>#nav-global',
            'ndcbjyq-frame-nav-side=>#sidebar',
            'empty=>#nav-sub',
            'empty=>#nav-three',
            'empty=>#content'
        ],
        inherits: []
    },
    '_ndcbjyq_workdeck_common': {
        widgets: [
            'ndcbjyq-workdeck-nav-main=>#nav-sub'
        ],
        inherits: ['_ndcbjyq_common']
    },
    'ndcbjyq_workdeck_handle': {
        widgets: [
            'ndcbjyq-workdeck-view-handle=>#content'
        ],
        inherits: ['_ndcbjyq_workdeck_common']
    },
    '_ndcbjyq_query_common': {
        widgets: [
            'ndcbjyq-query-nav-main=>#nav-sub'
        ],
        inherits: ['_ndcbjyq_common']
    },
    '_ndcbjyq_query_right_common': {
        widgets: [
            'ndcbjyq-query-nav-right=>#nav-three'
        ],
        inherits: ['_ndcbjyq_query_common']
    },
    'ndcbjyq_query_right_register': {
        widgets: [
            'ndcbjyq-query-list-registration_book=>#content'
        ],
        inherits: ['_ndcbjyq_query_right_common']
    },
    'ndcbjyq_query_right_contractor': {
        widgets: [
            'ndcbjyq-query-list-contractor=>#content'
        ],
        inherits: ['_ndcbjyq_query_right_common']
    },
    '_ndcbjyq_query_circulation_common': {
        widgets: [
            'ndcbjyq-query-nav-circulation=>#nav-three'
        ],
        inherits: ['_ndcbjyq_query_common']
    },
    'ndcbjyq_query_circulation_contract': {
        widgets: [
            'ndcbjyq-query-list-circulation_contract=>#content'
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
            'ndcbjyq-map-view-home=>#content'
        ],
        inherits: ['_ndcbjyq_map_common']
    }
});