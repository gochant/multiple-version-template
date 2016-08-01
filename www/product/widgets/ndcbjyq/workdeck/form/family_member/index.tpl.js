define(function(require,exports,module){

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (Object, model) {





pug_mixins["btn"] = pug_interp = function(style, size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var styleCls = style ? 'btn-' + style : 'btn-default'
var sizeCls = size ? 'btn-' + size : null
pug_html = pug_html + "\u003Ca" + (pug.attrs(pug.merge([{"class": pug.classes(["btn",[styleCls, sizeCls]], [false,true])},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fa\u003E";
};
pug_mixins["btn-icon"] = pug_interp = function(icon, text, style, size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["btn"].call({
block: function(){
pug_mixins["i-text"](icon, text);
block && block();
},
attributes: attributes
}, style, size);
};
pug_mixins["btn-group"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": "btn-group"},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};









pug_mixins["caret"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cspan class=\"caret\"\u003E\u003C\u002Fspan\u003E";
};











































pug_mixins["btn-export"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["btn-icon"].call({
block: function(){
block && block();
},
attributes: attributes
}, 'download', '导出');
};






























pug_mixins["btn-search-icon"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["btn-icon"].call({
block: function(){
block && block();
},
attributes: attributes
}, 'search');
};
pug_mixins["label"] = pug_interp = function(text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Clabel" + (pug.attrs(pug.merge([{"class": "control-label"},attributes]), false)) + "\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
};







pug_mixins["editor"] = pug_interp = function(name, text, ui, data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
switch (ui){
case 'textblock':
pug_mixins["textblock"].call({
attributes: attributes
}, name, data);
  break;
case 'combobox':
pug_mixins["combobox"].call({
attributes: attributes
}, name, data);
  break;
case 'dropdownlist':
pug_mixins["dropdownlist"].call({
attributes: attributes
}, name, data);
  break;
case 'datepicker':
pug_mixins["datepicker"].call({
attributes: attributes
}, name, data);
  break;
case 'timepicker':
pug_mixins["timepicker"].call({
attributes: attributes
}, name, data);
  break;
case 'numeric':
pug_mixins["numeric"].call({
attributes: attributes
}, name, data);
  break;
case 'multiselect':
pug_mixins["multiselect"].call({
attributes: attributes
}, name, data);
  break;
case 'autocomplete':
pug_mixins["autocomplete"].call({
attributes: attributes
}, name, data);
  break;
case 'textarea':
pug_mixins["textarea"].call({
attributes: attributes
}, name, data);
  break;
case 'checkbox':
pug_mixins["checkbox"].call({
attributes: attributes
}, name, data);
  break;
case 'checkboxlist':
pug_mixins["checkboxlist"].call({
attributes: attributes
}, name, data);
  break;
case 'textbox':
default:
pug_mixins["textbox"].call({
attributes: attributes
}, name, data);
  break;
}
};
pug_mixins["editor-for"] = pug_interp = function(name, model, data, style){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var field = model[name] 
var uiHintMap = { 'string': 'textbox', 'date': 'datepicker', 'number': 'numeric' }
if(field.uiHint == null) { field.uiHint = uiHintMap[field.type] }
var text = field.name
var ui = field.uiHint

//- 将验证参数附加到HTML属性
attributes = Object.assign({}, field.validation, attributes)

switch (style){
case 't':
pug_mixins["editor-t"].call({
attributes: attributes
}, name, text, ui, data);
  break;
case 'h':
pug_mixins["editor-h"].call({
attributes: attributes
}, name, text, ui, data);
  break;
default:
pug_mixins["editor"].call({
attributes: attributes
}, name, text, ui, data);
  break;
}
};






pug_mixins["editor-for-h"] = pug_interp = function(name, model, data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["editor-for"].call({
attributes: attributes
}, name, model, data, 'h');
};
pug_mixins["editor-for-model"] = pug_interp = function(model, fields, data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
fields || (fields = Object.keys(model))
// iterate fields
var pug_obj0 = fields;
if ('number' == typeof pug_obj0.length) {

  for (var pug_index0 = 0, pug_length0 = pug_obj0.length; pug_index0 < pug_length0; pug_index0++) {
    var name = pug_obj0[pug_index0];

pug_mixins["editor-for-h"](name, model, data);
  }

} else {
  var pug_length0 = 0;
  for (var pug_index0 in pug_obj0) {
    pug_length0++;
    var name = pug_obj0[pug_index0];

pug_mixins["editor-for-h"](name, model, data);
  }

}

};
pug_mixins["editor-t"] = pug_interp = function(name, text, ui, data, colspan){
var block = (this && this.block), attributes = (this && this.attributes) || {};
data || (data= { })
var labelCls = attributes.required ? ['required'] : ['']
pug_mixins["col-t"].call({
block: function(){
pug_mixins["label"].call({
attributes: {"class": pug.classes([labelCls], [true])}
}, text);
pug_mixins["editor"].call({
attributes: attributes
}, name, text, ui, data);
}
}, colspan);
};









pug_mixins["editor-h"] = pug_interp = function(name, text, ui, data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
data || (data= {})
var labelCls = attributes.required ? ['col-xs-3 required'] : ['col-xs-3']
pug_mixins["row-h"].call({
block: function(){
pug_mixins["label"].call({
attributes: {"class": pug.classes([labelCls], [true])}
}, text);
pug_mixins["col-h"].call({
block: function(){
pug_mixins["editor"].call({
attributes: attributes
}, name, text, ui, data);
},
attributes: {"class": "form-control-container"}
}, 9);
}
});
};
pug_mixins["textblock"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = name ? 'text: data.' + name : null;
pug_html = pug_html + "\u003Cspan" + (pug.attrs(pug.merge([{"class": "form-control","data-bind": pug.escape(bind)},attributes]), false)) + "\u003E\u003C\u002Fspan\u003E";
};
pug_mixins["textbox"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = name ? 'value: data.' + name : null;
pug_html = pug_html + "\u003Cinput" + (pug.attrs(pug.merge([{"class": "form-control","type": "text","data-bind": pug.escape(bind),"name": pug.escape(name)},attributes]), false)) + "\u002F\u003E";
};
pug_mixins["textarea"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'value: data.' + name
pug_html = pug_html + "\u003Ctextarea" + (pug.attrs(pug.merge([{"class": "form-control","data-bind": pug.escape(bind),"name": pug.escape(name)},attributes]), false)) + "\u003E\u003C\u002Ftextarea\u003E";
};
pug_mixins["checkbox"] = pug_interp = function(name, data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'value: data.' + name
pug_html = pug_html + "\u003Cdiv class=\"checkbox\"\u003E\u003Clabel\u003E\u003Cinput" + (pug.attrs(pug.merge([{"type": "checkbox","data-bind": pug.escape(bind)},attributes]), false)) + "\u002F\u003E" + (pug.escape(null == (pug_interp = data.text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["checkboxlist"] = pug_interp = function(name, data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'checked: data.' + name
pug_html = pug_html + "\u003Cdiv class=\"checkbox-group\"\u003E";
// iterate data.list
var pug_obj1 = data.list;
if ('number' == typeof pug_obj1.length) {

  for (var index = 0, pug_length1 = pug_obj1.length; index < pug_length1; index++) {
    var item = pug_obj1[index];

pug_html = pug_html + "\u003Clabel class=\"checkbox-inline\"\u003E\u003Cinput" + (pug.attrs(pug.merge([{"type": "checkbox","data-bind": pug.escape(bind),"value": pug.escape(item.value)},attributes]), false)) + "\u002F\u003E" + (pug.escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
  }

} else {
  var pug_length1 = 0;
  for (var index in pug_obj1) {
    pug_length1++;
    var item = pug_obj1[index];

pug_html = pug_html + "\u003Clabel class=\"checkbox-inline\"\u003E\u003Cinput" + (pug.attrs(pug.merge([{"type": "checkbox","data-bind": pug.escape(bind),"value": pug.escape(item.value)},attributes]), false)) + "\u002F\u003E" + (pug.escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["combobox"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'source: '+ name +'List, value: data.' + name
pug_html = pug_html + "\u003Cselect" + (pug.attrs(pug.merge([{"data-role": "combobox","data-text-field": "name","data-value-field": "value","data-bind": pug.escape(bind)},attributes]), false)) + "\u003E\u003C\u002Fselect\u003E";
};
pug_mixins["k-invalid-msg"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cspan" + (" class=\"k-invalid-msg\""+pug.attr("data-for", name, true, false)) + "\u003E\u003C\u002Fspan\u003E";
};
pug_mixins["dropdownlist"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'source: '+ name +'List, value: data.' + name
pug_html = pug_html + "\u003Cselect" + (pug.attrs(pug.merge([{"data-role": "dropdownlist","data-text-field": "name","data-value-field": "value","data-bind": pug.escape(bind),"name": pug.escape(name)},attributes]), false)) + "\u003E\u003C\u002Fselect\u003E";
pug_mixins["k-invalid-msg"](name);
};
pug_mixins["datepicker"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'value: data.' + name
pug_html = pug_html + "\u003Cinput" + (pug.attrs(pug.merge([{"data-role": "datepicker","data-bind": pug.escape(bind)},attributes]), false)) + "\u002F\u003E";
};
pug_mixins["timepicker"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'value: data.' + name
pug_html = pug_html + "\u003Cinput" + (pug.attrs(pug.merge([{"data-role": "timepicker","data-bind": pug.escape(bind)},attributes]), false)) + "\u002F\u003E";
};
pug_mixins["numeric"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'value: data.' + name
pug_html = pug_html + "\u003Cinput" + (pug.attrs(pug.merge([{"data-role": "numerictextbox","data-bind": pug.escape(bind)},attributes]), false)) + "\u002F\u003E";
};
pug_mixins["multiselect"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'value: data.' + name
pug_html = pug_html + "\u003Cselect" + (pug.attrs(pug.merge([{"data-role": "multiselect","data-text-field": "name","multiple": "multiple","data-value-field": "value","data-bind": pug.escape(bind)},attributes]), false)) + "\u003E\u003C\u002Fselect\u003E";
};
pug_mixins["autocomplete"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'source: '+ name +'List, value: data.' + name
pug_html = pug_html + "\u003Cinput" + (pug.attrs(pug.merge([{"data-role": "autocomplete","data-text-field": "name","data-value-field": "value","data-bind": pug.escape(bind)},attributes]), false)) + "\u002F\u003E";
};
pug_mixins["icon-fa"] = pug_interp = function(name, type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var typeCls = type == null ? null : 'fa-' + type;
pug_html = pug_html + "\u003Ci" + (pug.attrs(pug.merge([{"class": pug.classes([['fa', 'fa-' + name, typeCls]], [true]),"aria-hidden": "true"},attributes]), false)) + "\u003E\u003C\u002Fi\u003E";
};
pug_mixins["icon"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["icon-fa"].call({
attributes: attributes
}, name);
};
pug_mixins["icon-nav"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["icon-fa"].call({
attributes: attributes
}, name, 'fw');
};
pug_mixins["i-text"] = pug_interp = function(name, text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["icon"].call({
attributes: attributes
}, name);
if (text) {
pug_html = pug_html + ("&nbsp;" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)));
}
block && block();
};








pug_mixins["input-group-btn"] = pug_interp = function(placeholder){
var block = (this && this.block), attributes = (this && this.attributes) || {};

pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": "input-group"},attributes]), false)) + "\u003E";
pug_mixins["textbox"].call({
attributes: {"placeholder": pug.escape(placeholder)}
});
pug_html = pug_html + "\u003Cdiv class=\"input-group-btn\"\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["searchbox"] = pug_interp = function(placeholder, action){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["input-group-btn"].call({
block: function(){
pug_mixins["btn-search-icon"].call({
attributes: {"data-action": pug.escape(action)}
});
},
attributes: attributes
}, placeholder);
};





































































pug_mixins["col-t"] = pug_interp = function(colspan){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (colspan) {
pug_html = pug_html + "\u003Ctd" + (pug.attrs(pug.merge([{"colspan": pug.escape(colspan)},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Ftd\u003E";
}
else {
pug_html = pug_html + "\u003Ctd" + (pug.attrs(attributes, false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Ftd\u003E";
}
};
pug_mixins["form-layout-h"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": "form-horizontal"},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["row-h"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": "form-group"},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["col-h"] = pug_interp = function(num){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["col"].call({
block: function(){
block && block();
},
attributes: attributes
}, num, 'xs');
};






pug_mixins["col"] = pug_interp = function(num, size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
size || (size = 'sm')
var cls = 'col-' + size + '-' + num
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": pug.classes([[cls]], [true])},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["container"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": "container"},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["modal-close"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cbutton class=\"close\" data-dismiss=\"modal\"\u003E\u003Cspan\u003E×\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E";
};









pug_mixins["panel"] = pug_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
type || (type = 'default')
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": pug.classes(["panel",['panel-' + type]], [false,true])},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};





























pug_mixins["nav"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cul" + (pug.attrs(pug.merge([{"class": "nav","role": "tablist"},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Ful\u003E";
};
pug_mixins["nav-item"] = pug_interp = function(href, active, toggle){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if(href == null){ href = 'javascript:;'; }
var cls = active === true ? 'active' : undefined
{
pug_html = pug_html + "\u003Cli" + (pug.attrs(pug.merge([{"class": pug.classes(["nav-item",cls], [false,true]),"role": "presentation"},attributes]), false)) + "\u003E";
if (toggle) {
pug_html = pug_html + "\u003Ca" + (" class=\"nav-link\""+" role=\"tab\" data-toggle=\"tab\""+pug.attr("href", href, true, false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + "\u003Ca" + (" class=\"nav-link\""+pug.attr("href", href, true, false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
}
};














































































































































pug_html = pug_html + "\u003Cdiv class=\"modal-header\"\u003E";
pug_mixins["modal-close"]();
pug_html = pug_html + "\u003Ch4 class=\"modal-title\"\u003E家庭成员\u003C\u002Fh4\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal-body\"\u003E";
pug_mixins["form-layout-h"].call({
block: function(){
pug_mixins["editor-for-model"](model);
},
attributes: {"class": "data-validate-form"}
});
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal-footer\"\u003E";
pug_mixins["btn-icon"].call({
block: function(){
pug_html = pug_html + "保&nbsp;存";
},
attributes: {"class": "btn-primary"}
});
pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"Object" in locals_for_with?locals_for_with.Object:typeof Object!=="undefined"?Object:undefined,"model" in locals_for_with?locals_for_with.model:typeof model!=="undefined"?model:undefined));;return pug_html;}
return template;

});
