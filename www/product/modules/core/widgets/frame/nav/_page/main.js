define([
], function () {
    return {
        subscribe: function (app, _, $) {
            // 同步活动页面和选中项
            this.sub('pageLoaded', function(currPage) {
                this.$('.active').removeClass('active');
                var $groups = this.$('[data-group]');
                if ($groups.length > 0) {
                    $groups.each(function(idx, el) {
                        if (currPage.indexOf($(el).attr('data-group')) > -1) {
                            $(el).closest('li').addClass('active');
                        }
                    });
                } else {
                    this.$('a[href=#' + currPage + ']').closest('li').addClass('active');
                }
            });
        }
    };
});
