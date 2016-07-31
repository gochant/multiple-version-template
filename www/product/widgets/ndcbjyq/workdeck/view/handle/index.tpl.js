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
function pug_style(r){if(!r)return"";if("object"==typeof r){var e="",t="";for(var n in r)pug_has_own_property.call(r,n)&&(e=e+t+n+":"+r[n],t=";");return e}return r=""+r,";"===r[r.length-1]?r.slice(0,-1):r}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["quick-access"] = pug_interp = function(action, text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "btn btn-default quick-access","data-action": pug_escape(action)},attributes]), false)) + "\u003E\u003Ci class=\"fa fa-4x fa-bar-chart-o\"\u003E\u003C\u002Fi\u003E\u003Ch5\u003E" + (pug_escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fh5\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["panel-t"].call({
block: function(){
pug_mixins["panel-body"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv class=\"section-header\"\u003E登记业务\u003C\u002Fdiv\u003E\u003Cul class=\"list-inline\"\u003E\u003Cli\u003E";
pug_mixins["quick-access"]('initialRegistration', '初始登记');
pug_html = pug_html + "\u003C\u002Fli\u003E\u003Cli\u003E";
pug_mixins["quick-access"]();
pug_mixins["quick-access"]();
pug_mixins["quick-access"]();
pug_mixins["quick-access"]();
pug_mixins["quick-access"]();
pug_html = pug_html + "\u003C\u002Fli\u003E\u003Cli\u003E";
pug_mixins["quick-access"]();
pug_html = pug_html + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
},
attributes: {"class": "block-abs-body"}
});
},
attributes: {"class": "block-abs-2"}
}, '请从下面选择你需要的申请表填写2');
pug_html = pug_html + "\u003Cscript id=\"modal-template\" type=\"text\u002Ftemplate\"\u003E\u003Cdiv class=\"modal modal-classy fullscreen fade\"\u003E\u003Cdiv class=\"modal-dialog\"\u003E\u003Cdiv class=\"modal-content fn-wnd\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fscript\u003E";;return pug_html;}
return template;

});
