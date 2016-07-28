define(['pug'], function(pug) { if(pug && pug['runtime'] !== undefined) { pug = pug.runtime; }

return function template(locals) {var pug_html = "", pug_mixins = locals.mixin || {}, pug_interp;var pug_indent = [];
pug_indent.push('');
pug_mixins["modal-heading"]('初始登记222222', '申请');
pug_indent.pop();
pug_indent.push('');
pug_mixins["nav-content"].call({
block: function(){
pug_indent.push('');
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "1 申请书信息";
}
}, null, true);
pug_indent.pop();
pug_indent.push('');
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "2 登记信息";
}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "3 家庭成员";
}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "4 承包地";
}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "5 附加信息";
}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "6 附件";
}
});
pug_indent.pop();
},
attributes: {"data-dynamic": "main"}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["tab-content"].call({
block: function(){
pug_indent.push('');
pug_mixins["tab-pane"].call({
block: function(){
pug_indent.push('');
pug_mixins["form-layout-h"].call({
block: function(){
pug_indent.push('');
pug_mixins["editor-h"]('申请类型：', 'PetitionType', 'dropdownlist');
pug_indent.pop();
pug_indent.push('');
pug_mixins["editor-h"]('申请人：', 'PetitionName', 'textbox');
pug_indent.pop();
pug_indent.push('');
pug_mixins["editor-h"]('申请日期：', 'PetitionDate', 'datepicker');
pug_indent.pop();
pug_indent.push('');
pug_mixins["editor-h"]('申请事由：', 'PetitionOptions', 'textarea');
pug_indent.pop();
}
});
pug_indent.pop();
},
attributes: {"class": "application"}
}, null, true);
pug_indent.pop();
pug_indent.push('');
pug_mixins["tab-pane"].call({
block: function(){
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cform class=\"data-validate-form\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"fieldset\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clegend\u003E基本信息\u003C\u002Flegend\u003E";
pug_indent.push('    ');
pug_mixins["form-layout-t"].call({
block: function(){
pug_indent.push('');
pug_mixins["row-t"].call({
block: function(){
pug_indent.push('');
pug_mixins["editor-t"].call({
attributes: {"required": true}
}, '发包方xxxx：', 'OutsourcerNumber', 'dropdownlist');
pug_indent.pop();
pug_indent.push('');
pug_mixins["editor-t"]('承包期限：', 'ContractBeginDate', 'checkbox', '永久');
pug_indent.pop();
}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["row-t"].call({
block: function(){
pug_indent.push('');
pug_mixins["editor-t"]('起止时间：', 'Outsourcers', 'datepicker');
pug_indent.pop();
pug_indent.push('');
pug_mixins["editor-t"]('承包用途：', 'ContractPurpose', 'dropdownlist');
pug_indent.pop();
}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["row-t"].call({
block: function(){
pug_indent.push('');
pug_mixins["editor-t"]('承包方式：', 'ContractWay', 'dropdownlist');
pug_indent.pop();
pug_indent.push('');
pug_mixins["editor-t"]('登记日期：', 'RegisteDate', 'datepicker');
pug_indent.pop();
}
});
pug_indent.pop();
}
});
pug_indent.pop();
pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"fieldset\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clegend\u003E承包方信息\u003C\u002Flegend\u003E";
pug_indent.push('    ');
pug_mixins["form-layout-t"].call({
block: function(){
pug_indent.push('');
pug_mixins["row-t"].call({
block: function(){
pug_indent.push('');
pug_mixins["editor-t"]('承包方类型：', 'ContractorType', 'dropdownlist');
pug_indent.pop();
pug_indent.push('');
pug_mixins["editor-t"]('承包方姓名：', 'Outsourcers', 'textbox');
pug_indent.pop();
}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["row-t"].call({
block: function(){
pug_indent.push('');
pug_mixins["editor-t"]('承包方编号：', 'FamilyNumber', 'datepicker');
pug_indent.pop();
pug_indent.push('');
pug_mixins["editor-t"]('合同编号：', 'Outsourcers', 'dropdownlist');
pug_indent.pop();
}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["row-t"].call({
block: function(){
pug_indent.push('');
pug_mixins["editor-t"]('证件类型：', 'ContractorCred', 'dropdownlist');
pug_indent.pop();
pug_indent.push('');
pug_mixins["editor-t"]('证件号码：', 'ContractorNumber', 'textbox');
pug_indent.pop();
}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["row-t"].call({
block: function(){
pug_indent.push('');
pug_mixins["editor-t"]('电话号码：', 'ContractorTel', 'textbox');
pug_indent.pop();
pug_indent.push('');
pug_mixins["editor-t"]('邮政编码：', 'ContractorZip', 'textbox');
pug_indent.pop();
}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["row-t"].call({
block: function(){
pug_indent.push('');
pug_mixins["editor-t"]('承包方住址：', 'ContractorAddress', 'textarea', null, 2);
pug_indent.pop();
}
});
pug_indent.pop();
}
});
pug_indent.pop();
pug_html = pug_html + "\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fform\u003E";
},
attributes: {"class": "registration"}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["tab-pane"].call({
block: function(){
pug_indent.push('');
pug_mixins["panel"].call({
block: function(){
pug_indent.push('');
pug_mixins["panel-toolbar"].call({
block: function(){
pug_indent.push('');
pug_mixins["btn-toolbar"].call({
block: function(){
pug_indent.push('');
pug_mixins["btn-icon"]('plus', '添加');
pug_indent.pop();
pug_indent.push('');
pug_mixins["btn-icon"]('plus', '从调查数据添加');
pug_indent.pop();
pug_indent.push('');
pug_mixins["btn-icon"]('edit', '编辑');
pug_indent.pop();
pug_indent.push('');
pug_mixins["btn-icon"]('trash-o', '删除');
pug_indent.pop();
}
}, 'sm');
pug_indent.pop();
}
}, 'sm');
pug_indent.pop();
pug_indent.push('');
pug_mixins["panel-body"].call({
block: function(){
pug_indent.push('');
pug_mixins["kendo-grid"].call({
attributes: {"data-auto-bind": "false","data-selectable": "row","style": "height:300px"}
}, [
              { field: 'WarrantNumber', title: '姓名'},
              { field: 'ContractorNumber', title: '证件号码' },
              { field: 'ContractorName', title: '性别' },
              { field: 'OutsourcerName', title: '出生日期' },
              { field: 'RegisteDate', title: '与户主关系' }
            ], 'source: source');
pug_indent.pop();
},
attributes: {"class": "no-padding"}
});
pug_indent.pop();
}
});
pug_indent.pop();
},
attributes: {"class": "member"}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["tab-pane"].call({
block: function(){
pug_html = pug_html + "hehe4";
},
attributes: {"class": "contracted_land"}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["tab-pane"].call({
block: function(){
pug_html = pug_html + "hehe5";
},
attributes: {"class": "additional"}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["tab-pane"].call({
block: function(){
pug_html = pug_html + "hehe6";
},
attributes: {"class": "attachment"}
});
pug_indent.pop();
},
attributes: {"class": "bind-block","data-dynamic": "main"}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["btn-group"].call({
block: function(){
pug_indent.push('');
pug_mixins["btn-primary"].call({
block: function(){
pug_html = pug_html + "保 存";
}
});
pug_indent.pop();
}
});
pug_indent.pop();;return pug_html;}

});