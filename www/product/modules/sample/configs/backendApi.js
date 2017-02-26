/**
 * 后端接口配置文件，该文件解决一切后端数据的问题，不在组件里面写复杂的后端数据交互逻辑
 */

define({
    /**
     * 接口类
     */
    'sample.user': {  // 接口命名空间（通常是 模块名.xxx 的形式）

        // domain: '',  // 接口所在域
        // options: 'default',  // 默认选项继承自哪个接口类

        /**
         * 接口列表（标准接口 CRUD：read、create、update、delete，映射到 Store 的标准方法）
         */
        api: {
            'create': 'user/saveUser',
            'read': 'user/pageUser get json',  // 后端接口，接口名： ‘路径 调用方式 返回数据类型’
            'detail': 'user/detail',
            'update': 'user/updateUser',
            'delete': 'user/deleteUser',
            'resetPassword': 'user/resetPassword'
        },
        /**
         * 数据源列表
         */
        groups: {
            /**
             * 数据源
             */
            detail: {  // 数据源名称
                type: 'single',  // 数据源类型，multiple（集合类型数据源）、single（单对象类型数据源）
                api: ['detail=>read'],  // 数据源所用的接口，形如 'x=>y'，表示从上面的接口列表中取 x，但是映射到该数据源中，改名为 y
                /**
                 * kendo ui 中 dataSource 的相关配置，如果有请求响应参数的数据转换的相关配置也写到这里
                 */
                options: {

                },
                // resuable: false,  // 客户端调用是否可重用，启用后不用每次都重建一个数据源，有利于作缓存
            }
        }
    }
})