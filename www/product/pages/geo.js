define(function () {
    return {
        'geo': {
            name: '����λ',
            widgets: [
                'framework-geo@.v-render-body@framework',
                'framework-test3@.v-render-body@framework'
            ],
            inherits: ['_common']
        },
        kendo: {
            widgets: [
                'framework-kendo@.v-render-body@framework'
            ],
            inherits: ['_common']
        }
    };
});