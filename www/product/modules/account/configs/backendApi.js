define({
    'account.user': {
        api: {
            'create': 'user/saveUser',
            'read': 'user/pageUser get json',
            'update': 'user/updateUser',
            'delete': 'user/deleteUser',
            'resetPassword': 'user/resetPassword'
        }
    }
})