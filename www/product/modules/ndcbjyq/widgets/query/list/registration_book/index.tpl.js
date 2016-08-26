define(function(require,exports,module){

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["btn-refresh"]();
pug_mixins["btn-search"]('高级查询', 'searchAdvanced');
pug_mixins["btn-detail"]();
pug_mixins["btn-icon"]('dashboard', '汇总登记簿');
pug_mixins["btn-export-dropdown"].call({
block: function(){
pug_mixins["dropdown-menu"].call({
block: function(){
pug_mixins["menu-item"].call({
block: function(){
pug_html = pug_html + "登记簿";
}
}, '#');
pug_mixins["menu-item"].call({
block: function(){
pug_html = pug_html + "有效登记簿清册";
}
}, '#');
pug_mixins["menu-item"].call({
block: function(){
pug_html = pug_html + "确权颁证信息表";
}
}, '#');
},
attributes: {"data-action": "export"}
});
}
});
pug_mixins["btn-more-dropdown"].call({
block: function(){
pug_mixins["dropdown-menu"].call({
block: function(){
pug_mixins["menu-item"].call({
block: function(){
pug_html = pug_html + "历史回溯";
}
}, '#');
pug_mixins["menu-item"].call({
block: function(){
pug_html = pug_html + "权证信息";
}
}, '#');
pug_mixins["menu-item"].call({
block: function(){
pug_html = pug_html + "权源流转合同";
}
}, '#');
pug_mixins["menu-item"].call({
block: function(){
pug_html = pug_html + "附加信息";
}
}, '#');
},
attributes: {"data-action": "more"}
});
}
});
pug_mixins["searchbox-sm"]('请输入承包方名称查询', 'search');
pug_mixins["kendo-grid"].call({
attributes: {"data-pageable": "true","data-auto-bind": "false","data-selectable": "row","style": "height:100%"}
}, [
    { field: 'WarrantNumber', title: '权属信息'},
    { field: 'ContractorNumber', title: '证件号码' },
    { field: 'ContractorName', title: '承包方' },
    { field: 'OutsourcerName', title: '发包方' },
    { field: 'RegisteDate', title: '登记日期' },
    { field: 'WorkStatus', title: '状态' }
  ], 'source: source');
pug_html = pug_html + "\u003Cscript id=\"modal-template\" type=\"text\u002Ftemplate\"\u003E\u003Cdiv class=\"modal modal-classy fade biggest\"\u003E\u003Cdiv class=\"modal-dialog\"\u003E\u003Cdiv class=\"modal-content fn-wnd\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fscript\u003E";;return pug_html;}
return template;

});
