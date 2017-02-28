/**
 * 模型文件
 */

define({
    sample: {  // 模型命名空间，与模块名保持一致
        /**
         * 简单模型示例
         */
        appInfo: {  // 模型名称
            title: 'Sample Project'  // 模型字段和值
        },
        /**
         * 标准模型示例
         */
        user: {
            id: 'id',  // 标识符字段名称
            /**
             * 模型字段组
             */
            fields: {
                id: {  // 字段名
                    displayName: '标识',  // 显示名称
                    type: 'string',  // 类型
                    validation: {  // 验证规则（html5）
                        required: true
                    }
                },
                userId: {
                    displayName: '标识',
                    type: 'string',
                    validation: {
                        required: true
                    }
                },
                username: {
                    displayName: '账户名',
                    type: 'string',
                    validation: {
                        required: true
                    }
                },
                password: {
                    displayName: '密码',
                    type: 'string',
                    uihint: 'password',  // ui 界面线索（用于呈现不同的界面控件）
                    validation: {
                        pattern: /.{6,}/
                    }
                },
                confirmPassword: {
                    displayName: '密码确认',
                    type: 'string',
                    uihint: 'password',
                    validation: {
                        pattern: /.{6,}/
                    }
                },
                realName: {
                    displayName: '姓名',
                    type: 'string'
                },
                email: {
                    displayName: '邮箱',
                    type: 'string',
                    uihint: 'email'
                },
                emailConfirmed: {
                    displayName: '确认邮箱',
                    type: 'string',
                    uihint: 'email'
                },
                lockoutEnabled: {
                    displayName: '是否被锁定',
                    type: 'boolean'
                },
                lockoutEndDateUtc: {
                    displayName: '锁定结束时间',
                    type: 'date'
                },
                accessFailedCount: {
                    displayName: '失败次数',
                    type: 'number'
                },
                disabled: {
                    displayName: '是否被禁用',
                    type: 'boolean'
                },
                twoFactorEnabled: {
                    displayName: '启用两步验证',
                    type: 'boolean'
                },
                securityStamp: {
                    displayName: '安全戳',
                    type: 'string'
                },
                building: {
                    displayName: '是否系统內建用户',
                    type: 'boolean'
                }

            },
            /**
             * 模型视图分组（将模型中字段进行命名分组，方便呈现时调用）
             */
            views: {
                list: ['username', 'realName', 'email', 'disabled'],
                resetPassword: ['userId', 'password', 'confirmPassword'],
                add: ['username', 'password', 'realName', 'email'],
                modify: ['id', 'realName', 'email', 'telephone']
            }

        }
    }
});
