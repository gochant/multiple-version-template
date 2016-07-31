define(function(require,exports,module){

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (JSON, Object, contextModel, model) {pug_mixins["navbar"] = pug_interp = function(container){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cnav" + (pug.attrs(pug.merge([{"class": "navbar"},attributes]), false)) + "\u003E";
switch (container){
case 'fluid':
pug_html = pug_html + "\u003Cdiv class=\"container-fluid\"\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
  break;
case true:
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
  break;
default:
block && block();
  break;
}
pug_html = pug_html + "\u003C\u002Fnav\u003E";
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
pug_mixins["nav-toggle-item"] = pug_interp = function(href, active){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["nav-item"].call({
block: function(){
block && block();
},
attributes: attributes
}, href, active, true);
};



























pug_mixins["nav-content"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["nav"].call({
block: function(){
block && block();
},
attributes: pug.merge([{"class": "nav-content nav-stacked"},attributes])
});
};

















pug_mixins["tab-content"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": "tab-content"},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["tab-pane"] = pug_interp = function(id, active){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var cls = active === true ? 'in active' : undefined
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": pug.classes(["tab-pane","fade",cls], [false,false,true]),"role": "tabpanel","id": pug.escape(id)},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};



















pug_mixins["panel"] = pug_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
type || (type = 'default')
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": pug.classes(["panel",['panel-' + type]], [false,true])},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["panel-toolbar"] = pug_interp = function(size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": pug.classes(["panel-toolbar","clearfix",[size ? 'panel-toolbar-' + size : undefined]], [false,false,true])},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["btn-toolbar"] = pug_interp = function(size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var cls = size ? 'btn-toolbar-' + size : undefined;
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": pug.classes(["btn-toolbar",[cls]], [false,true])},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};










pug_mixins["panel-body"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": "panel-body"},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
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
pug_mixins["editor-for-t"] = pug_interp = function(name, model, data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["editor-for"].call({
attributes: attributes
}, name, model, data, 't');
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
}
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
pug_html = pug_html + "\u003Cinput" + (pug.attrs(pug.merge([{"class": "form-control","type": "text","data-bind": pug.escape(bind)},attributes]), false)) + "\u002F\u003E";
};
pug_mixins["textarea"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'value: data.' + name
pug_html = pug_html + "\u003Ctextarea" + (pug.attrs(pug.merge([{"class": "form-control","data-bind": pug.escape(bind)},attributes]), false)) + "\u003E\u003C\u002Ftextarea\u003E";
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
pug_mixins["kendo-grid"] = pug_interp = function(columns, bind){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var cstr = JSON.stringify(columns)
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"data-role": "grid","data-columns": columns,"data-bind": pug.escape(bind)},attributes]), false)) + "\u003E\u003C\u002Fdiv\u003E";
};
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
pug_mixins["btn-primary"] = pug_interp = function(size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["btn"].call({
block: function(){
block && block();
},
attributes: attributes
}, 'primary', size);
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




















pug_mixins["container"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": "container"},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};






pug_mixins["col"] = pug_interp = function(num, size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
size || (size = 'sm')
var cls = 'col-' + size + '-' + num
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": pug.classes([[cls]], [true])},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["form-layout-t"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctable" + (pug.attrs(pug.merge([{"class": "table table-form-horizontal"},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Ftable\u003E";
};
pug_mixins["row-t"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctr" + (pug.attrs(attributes, false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Ftr\u003E";
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
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": "form-group form-group-sm"},attributes]), false)) + "\u003E";
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






pug_mixins["box-topbar"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": "box-top navbar navbar-inverse navbar-static-top no-margin"},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["box-bottombar"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug.attrs(pug.merge([{"class": "box-bottom navbar navbar-inverse navbar-static-bottom no-margin"},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["box-body"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"box-body\"\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["box-wrapper"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"box-wrapper container\"\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["box-aside"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"box-aside\"\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["box-content"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"box-content\"\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["modal-close"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cbutton class=\"close\" data-dismiss=\"modal\"\u003E\u003Cspan\u003E×\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E";
};
pug_mixins["modal-heading"] = pug_interp = function(title, subtitle){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["container"].call({
block: function(){
pug_mixins["modal-close"]();
pug_html = pug_html + "\u003Cdiv class=\"navbar-brand\"\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + " &nbsp;\u003Csmall\u003E" + (pug.escape(null == (pug_interp = subtitle) ? "" : pug_interp)) + "\u003C\u002Fsmall\u003E\u003C\u002Fdiv\u003E";
}
});
};
pug_mixins["box-topbar"].call({
block: function(){
pug_mixins["modal-heading"]('初始登记', '申请');
}
});
pug_mixins["box-body"].call({
block: function(){
pug_mixins["box-wrapper"].call({
block: function(){
pug_mixins["box-aside"].call({
block: function(){
pug_mixins["nav-content"].call({
block: function(){
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "1 申请书信息";
}
}, null, true);
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "2 登记信息";
}
});
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "3 家庭成员";
}
});
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "4 承包地";
}
});
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "5 附加信息";
}
});
pug_mixins["nav-toggle-item"].call({
block: function(){
pug_html = pug_html + "6 附件";
}
});
},
attributes: {"data-dynamic": "main"}
});
}
});
pug_mixins["box-content"].call({
block: function(){
pug_mixins["tab-content"].call({
block: function(){
pug_mixins["tab-pane"].call({
block: function(){
pug_mixins["form-layout-h"].call({
block: function(){
pug_mixins["editor-for-model"](contextModel.registrationApplication);
}
});
},
attributes: {"class": "application"}
}, null, true);
pug_mixins["tab-pane"].call({
block: function(){
pug_html = pug_html + "\u003Cform class=\"data-validate-form\"\u003E\u003Cdiv class=\"fieldset\"\u003E\u003Clegend\u003E基本信息22\u003C\u002Flegend\u003E";
pug_mixins["form-layout-t"].call({
block: function(){
pug_mixins["row-t"].call({
block: function(){
pug_mixins["editor-t"].call({
attributes: {"required": true}
}, 'OutsourcerNumber','发包方：', 'dropdownlist');
pug_mixins["editor-t"]('ContractBeginDate', '承包期限：', 'checkbox', { text: '永久' });
}
});
pug_mixins["row-t"].call({
block: function(){
pug_mixins["editor-t"]('Outsourcers', '起止时间：', 'datepicker');
pug_mixins["editor-t"]('ContractPurpose', '承包用途：', 'dropdownlist');
}
});
pug_mixins["row-t"].call({
block: function(){
pug_mixins["editor-for-t"]('ContractWay', model);
pug_mixins["editor-for-t"]('RegisteDate', model);
}
});
}
});
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"fieldset\"\u003E\u003Clegend\u003E承包方信息\u003C\u002Flegend\u003E";
pug_mixins["form-layout-t"].call({
block: function(){
pug_mixins["row-t"].call({
block: function(){
pug_mixins["editor-t"]('ContractorType', '承包方类型：', 'dropdownlist');
pug_mixins["editor-t"]('Outsourcers', '承包方姓名：', 'textbox');
}
});
pug_mixins["row-t"].call({
block: function(){
pug_mixins["editor-t"]('FamilyNumber', '承包方编号：', 'datepicker');
pug_mixins["editor-t"]('Outsourcers', '合同编号：', 'dropdownlist');
}
});
pug_mixins["row-t"].call({
block: function(){
pug_mixins["editor-t"]('ContractorCred', '证件类型：', 'dropdownlist');
pug_mixins["editor-t"]('ContractorNumber', '证件号码：', 'textbox');
}
});
pug_mixins["row-t"].call({
block: function(){
pug_mixins["editor-t"]('ContractorTel', '电话号码：', 'textbox');
pug_mixins["editor-t"]('ContractorZip', '邮政编码：', 'textbox');
}
});
pug_mixins["row-t"].call({
block: function(){
pug_mixins["editor-t"]('ContractorAddress', '承包方住址：', 'textarea', null, 2);
}
});
}
});
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E";
},
attributes: {"class": "registration"}
});
pug_mixins["tab-pane"].call({
block: function(){
pug_mixins["panel"].call({
block: function(){
pug_mixins["panel-toolbar"].call({
block: function(){
pug_mixins["btn-toolbar"].call({
block: function(){
pug_mixins["btn-icon"]('plus', '添加');
pug_mixins["btn-icon"]('plus', '从调查数据添加');
pug_mixins["btn-icon"]('edit', '编辑');
pug_mixins["btn-icon"]('trash-o', '删除');
}
}, 'sm');
}
}, 'sm');
pug_mixins["panel-body"].call({
block: function(){
pug_mixins["kendo-grid"].call({
attributes: {"data-auto-bind": "false","data-selectable": "row","style": "height:300px"}
}, [
              { field: 'WarrantNumber', title: '姓名'},
              { field: 'ContractorNumber', title: '证件号码' },
              { field: 'ContractorName', title: '性别' },
              { field: 'OutsourcerName', title: '出生日期' },
              { field: 'RegisteDate', title: '与户主关系' }
            ], 'source: source');
},
attributes: {"class": "no-padding"}
});
}
});
},
attributes: {"class": "member"}
});
pug_mixins["tab-pane"].call({
block: function(){
pug_html = pug_html + "hehe4";
},
attributes: {"class": "contracted_land"}
});
pug_mixins["tab-pane"].call({
block: function(){
pug_html = pug_html + "hehe5";
},
attributes: {"class": "additional"}
});
pug_mixins["tab-pane"].call({
block: function(){
pug_html = pug_html + "hehe6";
},
attributes: {"class": "attachment"}
});
},
attributes: {"class": "bind-block","data-dynamic": "main"}
});
}
});
}
});
}
});
pug_mixins["box-bottombar"].call({
block: function(){
pug_mixins["container"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv class=\"navbar-form navbar-right\"\u003E\u003Cdiv class=\"btn-toolbar bind-block\"\u003E";
pug_mixins["btn-group"].call({
block: function(){
pug_mixins["btn"].call({
block: function(){
pug_html = pug_html + "上一步";
},
attributes: {"data-action": "prev","data-bind": "css: { disabled : prevStatus }"}
});
}
});
pug_mixins["btn-group"].call({
block: function(){
pug_mixins["btn"].call({
block: function(){
pug_html = pug_html + "下一步";
},
attributes: {"data-action": "next","data-bind": "css: { disabled : nextStatus }"}
});
}
});
pug_mixins["btn-group"].call({
block: function(){
pug_mixins["btn-primary"].call({
block: function(){
pug_html = pug_html + "保 存";
},
attributes: {"data-action": "save"}
});
}
});
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
});
}
});}.call(this,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"Object" in locals_for_with?locals_for_with.Object:typeof Object!=="undefined"?Object:undefined,"contextModel" in locals_for_with?locals_for_with.contextModel:typeof contextModel!=="undefined"?contextModel:undefined,"model" in locals_for_with?locals_for_with.model:typeof model!=="undefined"?model:undefined));;return pug_html;}
return template;

});
