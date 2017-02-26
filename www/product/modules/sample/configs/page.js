/**
 * 单页面中的逻辑（前端路由）页面配置
 */

define({
    /**
     * 单个页面配置
     */
    '_sample_common': {  // 页面名称（约定以下划线开头的为内部配置，只用于继承，不用在实际的路由配置中）
        /**
         * 页面中的所有 widget
         */
        widgets: [
            'sample-frame-view-header=>#header',
            'sample-frame-nav-side=>#sidebar'
        ],
        /**
         * 该页面所继承的页面，如果不添加该属性，那么默认继承一个叫做 `_common` 的页面，如果要阻止该行为，设置空数组
         * 继承页面主要是继承该页面的 widgets，如果有多个同种继承（通常不这么做），那么前面的覆盖后面的
         */
        inherits: []
    },
    'sample_manage_user': {
        widgets: [
            'sample-manage-list-user=>#content'
        ],
        inherits: ['_sample_common']
    }
});