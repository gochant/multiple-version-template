define(function(require,exports,module){

function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(r,e){if(1===arguments.length){for(var t=r[0],a=1;a<r.length;a++)t=pug_merge(t,r[a]);return t}for(var g in e)if("class"===g){var l=r[g]||[];r[g]=(Array.isArray(l)?l:[l]).concat(e[g]||[])}else if("style"===g){var l=pug_style(r[g]),n=pug_style(e[g]);r[g]=l+(l&&n&&";")+n}else r[g]=e[g];return r}
function pug_style(r){if(!r)return"";if("object"==typeof r){var e="",t="";for(var n in r)pug_has_own_property.call(r,n)&&(e=e+t+n+":"+r[n],t=";");return e}return r=""+r,";"===r[r.length-1]?r.slice(0,-1):r}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["btn"] = pug_interp = function(style, size){
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
pug_mixins["navbar"] = pug_interp = function(container){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cnav" + (pug_attrs(pug_merge([{"class": "navbar"},attributes]), false)) + "\u003E";
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



























pug_mixins["nav-underline"] = pug_interp = function(size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["nav"].call({
block: function(){
block && block();
},
attributes: pug_merge([{"class": pug_classes([['nav-pills',
   'nav-underline',
    size ? 'nav-' + size : undefined ]], [true])},attributes])
});
};


























































pug_mixins["panel"] = pug_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
type || (type = 'default')
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": pug_classes(["panel",['panel-' + type]], [false,true])},attributes]), false)) + "\u003E";
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














pug_mixins["label"] = pug_interp = function(text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Clabel" + (pug_attrs(pug_merge([{"class": "control-label"},attributes]), false)) + "\u003E" + (pug_escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E";
};













































pug_mixins["textbox"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var bind = name ? 'value: data.' + name : null;
pug_html = pug_html + "\u003Cinput" + (pug_attrs(pug_merge([{"class": "form-control","type": "text","data-bind": pug_escape(bind)},attributes]), false)) + "\u002F\u003E";
};





























pug_mixins["k-invalid-msg"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cspan" + (" class=\"k-invalid-msg\""+pug_attr("data-for", name, true, false)) + "\u003E\u003C\u002Fspan\u003E";
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
























































































pug_mixins["modal-close"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cbutton class=\"close\" data-dismiss=\"modal\"\u003E\u003Cspan\u003E×\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E";
};









pug_mixins["nav-underline"].call({
block: function(){
pug_mixins["nav-item"].call({
block: function(){
pug_html = pug_html + "流转合同";
}
}, '#ndcbjyq_query_circulation_contract', true);
pug_mixins["nav-item"].call({
block: function(){
pug_html = pug_html + "流转地块";
}
}, '#');
pug_mixins["nav-item"].call({
block: function(){
pug_html = pug_html + "合同预警";
}
}, '#');
}
}, 'sm');;return pug_html;}
return template;

});
