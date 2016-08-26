define(function(require,exports,module){

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["modal-heading"]('登记簿', '详情');
pug_mixins["nav-content"].call({
block: function(){
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "基础信息";
}
}, '#', true);
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "权证信息";
}
});
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "流转信息";
}
});
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "抵押信息";
}
});
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "变更信息";
}
});
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "附件";
}
});
},
attributes: {"data-dynamic": "main"}
});
pug_mixins["tab-content"].call({
block: function(){
pug_mixins["tab-pane"].call({
block: function(){
pug_html = pug_html + "  ";
pug_mixins["nav-heavy"].call({
block: function(){
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "基本信息";
}
}, '#', true);
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "家庭成员";
}
});
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "地块信息";
}
});
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "地块示意图";
}
});
},
attributes: {"data-dynamic": "t11"}
});
pug_mixins["tab-content"].call({
block: function(){
pug_mixins["tab-pane"].call({
block: function(){
pug_mixins["form-layout-t"].call({
block: function(){
pug_mixins["row-t"].call({
block: function(){
pug_mixins["textblock-t"]('发包方全称：', 'OutsourcerName', 2);
}
});
pug_mixins["row-t"].call({
block: function(){
pug_mixins["textblock-t"]('承包方代表姓名：', 'ContractorName', 2);
}
});
pug_mixins["row-t"].call({
block: function(){
pug_mixins["textblock-t"]('证件号码：', 'OutsourcerNumber', 2);
}
});
pug_mixins["row-t"].call({
block: function(){
pug_mixins["textblock-t"]('承包方式：', 'StrContractWay', 2);
}
});
pug_mixins["row-t"].call({
block: function(){
pug_mixins["textblock-t"]('承包方类型：', 'StrContractorType', 2);
}
});
pug_mixins["row-t"].call({
block: function(){
pug_mixins["textblock-t"]('承包方住址：', 'ContractorAddress', 2);
}
});
pug_mixins["row-t"].call({
block: function(){
pug_mixins["textblock-t"]('邮政编码：', '');
pug_mixins["textblock-t"]('联系电话：', '');
}
});
pug_mixins["row-t"].call({
block: function(){
pug_mixins["textblock-t"]('合同编号：', 'DisplayAgreementNumber', 2);
}
});
pug_mixins["row-t"].call({
block: function(){
pug_mixins["textblock-t"]('权证编号：', 'WarrantNumber', 2);
}
});
pug_mixins["row-t"].call({
block: function(){
pug_mixins["textblock-t"]('承包期限：', 'ContractDeadline', 2);
}
});
},
attributes: {"class": "wider static"}
});
}
}, null, true);
},
attributes: {"data-dynamic": "t11"}
});
}
}, null, true);
},
attributes: {"data-dynamic": "main"}
});
pug_mixins["btn-group"].call({
block: function(){
pug_mixins["btn"].call({
block: function(){
pug_html = pug_html + "关闭";
}
});
}
});;return pug_html;}
return template;

});
