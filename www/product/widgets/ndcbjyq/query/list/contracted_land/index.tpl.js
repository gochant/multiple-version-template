define(function(require,exports,module){

function pug_attr(t,e,n,r){if(e===!1||null==e||!e&&("class"===t||"style"===t))return"";if(e===!0)return" "+(r?t:t+'="'+t+'"');if("function"==typeof e.toISOString)e=e.toISOString();else if("string"!=typeof e&&(e=JSON.stringify(e),!n&&-1!==e.indexOf('"')))return" "+t+"='"+e.replace(/'/g,"&#39;")+"'";return n&&(e=pug_escape(e))," "+t+'="'+e+'"'}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(r,e){if(1===arguments.length){for(var t=r[0],a=1;a<r.length;a++)t=pug_merge(t,r[a]);return t}for(var g in e)if("class"===g){var l=r[g]||[];r[g]=(Array.isArray(l)?l:[l]).concat(e[g]||[])}else if("style"===g){var l=pug_style(r[g]),n=pug_style(e[g]);r[g]=l+(l&&n&&";")+n}else r[g]=e[g];return r}
function pug_style(r){if(!r)return"";if("object"==typeof r){var e="",t="";for(var n in r)pug_has_own_property.call(r,n)&&(e=e+t+n+":"+r[n],t=";");return e}return r=""+r,";"===r[r.length-1]?r.slice(0,-1):r}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (JSON) {pug_mixins["btn"] = pug_interp = function(style, size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var styleCls = style ? 'btn-' + style : 'btn-default'
var sizeCls = size ? 'btn-' + size : null
pug_html = pug_html + "\u003Ca" + (pug_attrs(pug_merge([{"class": pug_classes(["btn",[styleCls, sizeCls]], [false,true])},attributes]), false)) + "\u003E";
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
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "btn-group"},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};









pug_mixins["caret"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cspan class=\"caret\"\u003E\u003C\u002Fspan\u003E";
};















pug_mixins["btn-refresh"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["btn-icon"].call({
block: function(){
block && block();
},
attributes: pug_merge([{"data-action": "refresh"},attributes])
}, 'refresh', '刷新');
};
pug_mixins["btn-search"] = pug_interp = function(text, action){
var block = (this && this.block), attributes = (this && this.attributes) || {};
text || (text = '查询')
pug_mixins["btn-icon"].call({
block: function(){
block && block();
},
attributes: pug_merge([{"data-action": pug_escape(action ? action : 'search')},attributes])
}, 'search', text);
};
pug_mixins["btn-detail"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["btn-icon"].call({
block: function(){
block && block();
},
attributes: pug_merge([{"data-action": "detail"},attributes])
}, 'file-text-o', '详情');
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
pug_mixins["btn-export-dropdown"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["btn-group"].call({
block: function(){
pug_mixins["btn-export"].call({
block: function(){
pug_html = pug_html + "&nbsp;";
pug_mixins["caret"]();
},
attributes: pug_merge([{"data-toggle": "dropdown"},attributes])
});
block && block();
}
});
};
pug_mixins["btn-more-dropdown"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["btn-group"].call({
block: function(){
pug_mixins["btn-icon"].call({
block: function(){
pug_html = pug_html + "&nbsp;";
pug_mixins["caret"]();
},
attributes: pug_merge([{"data-toggle": "dropdown"},attributes])
}, 'chain', '更多数据');
block && block();
}
});
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






































pug_mixins["nav"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cul" + (pug_attrs(pug_merge([{"class": "nav","role": "tablist"},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Ful\u003E";
};









pug_mixins["nav-item"] = pug_interp = function(href, active, toggle){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if(href == null){ href = 'javascript:;'; }
var cls = active === true ? 'active' : undefined
{
pug_html = pug_html + "\u003Cli" + (pug_attrs(pug_merge([{"class": pug_classes(["nav-item",cls], [false,true]),"role": "presentation"},attributes]), false)) + "\u003E";
if (toggle) {
pug_html = pug_html + "\u003Ca" + (" class=\"nav-link\""+" role=\"tab\" data-toggle=\"tab\""+pug_attr("href", href, true, false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + "\u003Ca" + (" class=\"nav-link\""+pug_attr("href", href, true, false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
}
};











































































pug_mixins["dropdown-menu"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cul" + (pug_attrs(pug_merge([{"class": "dropdown-menu"},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Ful\u003E";
};
pug_mixins["menu-item"] = pug_interp = function(href, active){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["nav-item"].call({
block: function(){
block && block();
},
attributes: attributes
}, href, active);
};
pug_mixins["panel"] = pug_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
type || (type = 'default')
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": pug_classes(["panel",['panel-' + type]], [false,true])},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["panel-toolbar"] = pug_interp = function(size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": pug_classes(["panel-toolbar","clearfix",[size ? 'panel-toolbar-' + size : undefined]], [false,false,true])},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["btn-toolbar"] = pug_interp = function(size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var cls = size ? 'btn-toolbar-' + size : undefined;
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": pug_classes(["btn-toolbar",[cls]], [false,true])},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};










pug_mixins["panel-body"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "panel-body"},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
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
pug_html = pug_html + ("&nbsp;" + (pug_escape(null == (pug_interp = text) ? "" : pug_interp)));
}
block && block();
};








pug_mixins["icon-fa"] = pug_interp = function(name, type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var typeCls = type == null ? null : 'fa-' + type;
pug_html = pug_html + "\u003Ci" + (pug_attrs(pug_merge([{"class": pug_classes([['fa', 'fa-' + name, typeCls]], [true]),"aria-hidden": "true"},attributes]), false)) + "\u003E\u003C\u002Fi\u003E";
};
pug_mixins["input-group-btn"] = pug_interp = function(placeholder){
var block = (this && this.block), attributes = (this && this.attributes) || {};

pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "input-group"},attributes]), false)) + "\u003E";
pug_mixins["textbox"].call({
attributes: {"placeholder": pug_escape(placeholder)}
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
attributes: {"data-action": pug_escape(action)}
});
},
attributes: attributes
}, placeholder);
};









pug_mixins["kendo-grid"] = pug_interp = function(columns, bind){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var cstr = JSON.stringify(columns)
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"data-role": "grid","data-columns": columns,"data-bind": pug_escape(bind)},attributes]), false)) + "\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["label"] = pug_interp = function(text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Clabel" + (pug_attrs(pug_merge([{"class": "control-label"},attributes]), false)) + "\u003E" + (pug_escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
};
pug_mixins["editor"] = pug_interp = function(field, text, type, data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
switch (type){
case 'textblock':
pug_mixins["textblock"].call({
attributes: attributes
}, field);
  break;
case 'combobox':
pug_mixins["combobox"].call({
attributes: attributes
}, field);
  break;
case 'dropdownlist':
pug_mixins["dropdownlist"].call({
attributes: attributes
}, field);
  break;
case 'datepicker':
pug_mixins["datepicker"].call({
attributes: attributes
}, field);
  break;
case 'timepicker':
pug_mixins["timepicker"].call({
attributes: attributes
}, field);
  break;
case 'numeric':
pug_mixins["numeric"].call({
attributes: attributes
}, field);
  break;
case 'multiselect':
pug_mixins["multiselect"].call({
attributes: attributes
}, field);
  break;
case 'autocomplete':
pug_mixins["autocomplete"].call({
attributes: attributes
}, field);
  break;
case 'textarea':
pug_mixins["textarea"].call({
attributes: attributes
}, field);
  break;
case 'checkbox':
pug_mixins["checkbox"].call({
attributes: attributes
}, field, data);
  break;
case 'checkboxlist':
pug_mixins["checkboxlist"].call({
attributes: attributes
}, field, data);
  break;
case 'textbox':
default:
pug_mixins["textbox"].call({
attributes: attributes
}, field);
  break;
}
};



















































pug_mixins["textblock"] = pug_interp = function(field){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = field ? 'text: data.' + field : null;
pug_html = pug_html + "\u003Cspan" + (pug_attrs(pug_merge([{"class": "form-control","data-bind": pug_escape(bind)},attributes]), false)) + "\u003E\u003C\u002Fspan\u003E";
};
pug_mixins["textbox"] = pug_interp = function(field){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = field ? 'value: data.' + field : null;
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"class": "form-control","type": "text","data-bind": pug_escape(bind)},attributes]), false)) + "\u002F\u003E";
};
pug_mixins["textarea"] = pug_interp = function(field){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'value: data.' + field
pug_html = pug_html + "\u003Ctextarea" + (pug_attrs(pug_merge([{"class": "form-control","data-bind": pug_escape(bind)},attributes]), false)) + "\u003E\u003C\u002Ftextarea\u003E";
};
pug_mixins["checkbox"] = pug_interp = function(field, text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'value: data.' + field
pug_html = pug_html + "\u003Cdiv class=\"checkbox\"\u003E\u003Clabel\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("data-bind", bind, true, false)) + "\u002F\u003E" + (pug_escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["checkboxlist"] = pug_interp = function(field, list){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'checked: data.' + field
pug_html = pug_html + "\u003Cdiv class=\"checkbox-group\"\u003E";
// iterate list
var pug_obj0 = list;
if ('number' == typeof pug_obj0.length) {

  for (var index = 0, pug_length0 = pug_obj0.length; index < pug_length0; index++) {
    var item = pug_obj0[index];

pug_html = pug_html + "\u003Clabel class=\"checkbox-inline\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("data-bind", bind, true, false)+pug_attr("value", item.value, true, false)) + "\u002F\u003E" + (pug_escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
  }

} else {
  var pug_length0 = 0;
  for (var index in pug_obj0) {
    pug_length0++;
    var item = pug_obj0[index];

pug_html = pug_html + "\u003Clabel class=\"checkbox-inline\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("data-bind", bind, true, false)+pug_attr("value", item.value, true, false)) + "\u002F\u003E" + (pug_escape(null == (pug_interp = item.name) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["combobox"] = pug_interp = function(field){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'source: '+ field +'List, value: data.' + field
pug_html = pug_html + "\u003Cselect" + (pug_attrs(pug_merge([{"data-role": "combobox","data-text-field": "name","data-value-field": "value","data-bind": pug_escape(bind)},attributes]), false)) + "\u003E\u003C\u002Fselect\u003E";
};
pug_mixins["k-invalid-msg"] = pug_interp = function(field){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cspan" + (" class=\"k-invalid-msg\""+pug_attr("data-for", field, true, false)) + "\u003E\u003C\u002Fspan\u003E";
};
pug_mixins["dropdownlist"] = pug_interp = function(field){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'source: '+ field +'List, value: data.' + field
pug_html = pug_html + "\u003Cselect" + (pug_attrs(pug_merge([{"data-role": "dropdownlist","data-text-field": "name","data-value-field": "value","data-bind": pug_escape(bind),"name": pug_escape(field)},attributes]), false)) + "\u003E\u003C\u002Fselect\u003E";
pug_mixins["k-invalid-msg"](field);
};
pug_mixins["datepicker"] = pug_interp = function(field){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'value: data.' + field
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"data-role": "datepicker","data-bind": pug_escape(bind)},attributes]), false)) + "\u002F\u003E";
};
pug_mixins["timepicker"] = pug_interp = function(field){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'value: data.' + field
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"data-role": "timepicker","data-bind": pug_escape(bind)},attributes]), false)) + "\u002F\u003E";
};
pug_mixins["numeric"] = pug_interp = function(field){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'value: data.' + field
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"data-role": "numerictextbox","data-bind": pug_escape(bind)},attributes]), false)) + "\u002F\u003E";
};
pug_mixins["multiselect"] = pug_interp = function(field){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'value: data.' + field
pug_html = pug_html + "\u003Cselect" + (pug_attrs(pug_merge([{"data-role": "multiselect","data-text-field": "name","multiple": "multiple","data-value-field": "value","data-bind": pug_escape(bind)},attributes]), false)) + "\u003E\u003C\u002Fselect\u003E";
};
pug_mixins["autocomplete"] = pug_interp = function(field){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = 'source: '+ field +'List, value: data.' + field
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"data-role": "autocomplete","data-text-field": "name","data-value-field": "value","data-bind": pug_escape(bind)},attributes]), false)) + "\u002F\u003E";
};












pug_mixins["container"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "container"},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};






pug_mixins["col"] = pug_interp = function(num, size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
size || (size = 'sm')
var cls = 'col-' + size + '-' + num
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": pug_classes([[cls]], [true])},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};












pug_mixins["col-t"] = pug_interp = function(colspan){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (colspan) {
pug_html = pug_html + "\u003Ctd" + (pug_attrs(pug_merge([{"colspan": pug_escape(colspan)},attributes]), false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Ftd\u003E";
}
else {
pug_html = pug_html + "\u003Ctd" + (pug_attrs(attributes, false)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Ftd\u003E";
}
};






pug_mixins["row-h"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "form-group form-group-sm"},attributes]), false)) + "\u003E";
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
pug_mixins["right"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"pull-right\"\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};




































pug_mixins["modal-close"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cbutton class=\"close\" data-dismiss=\"modal\"\u003E\u003Cspan\u003E×\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E";
};









pug_mixins["panel"].call({
block: function(){
pug_mixins["panel-toolbar"].call({
block: function(){
pug_mixins["btn-toolbar"].call({
block: function(){
pug_mixins["btn-refresh"]();
pug_mixins["btn-search"]('高级查询22');
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
}
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
}
});
}
});
},
attributes: {"class": "pull-left"}
}, 'sm');
pug_mixins["right"].call({
block: function(){
pug_mixins["searchbox"].call({
attributes: {"class": "input-group-sm input-md-width"}
});
}
});
}
}, 'sm');
pug_mixins["panel-body"].call({
block: function(){
pug_mixins["kendo-grid"].call({
attributes: {"data-pageable": true,"style": "height:100%"}
}, [
      { field: 'WarrantNumber', title: '权属信息'},
      { field: 'zjhm', title: '证件号码' },
      { field: 'cbf', title: '承包方' },
      { field: 'fbf', title: '发包方' },
      { field: 'djrq', title: '登记日期' },
      { field: 'zt', title: '状态' }
    ], 'source: hehe');
},
attributes: {"class": "no-padding block-abs-body"}
});
},
attributes: {"class": "block-abs-3"}
});}.call(this,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined));;return pug_html;}
return template;

});
