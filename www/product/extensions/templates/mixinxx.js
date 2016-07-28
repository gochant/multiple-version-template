function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(r,e){if(1===arguments.length){for(var t=r[0],a=1;a<r.length;a++)t=pug_merge(t,r[a]);return t}for(var g in e)if("class"===g){var l=r[g]||[];r[g]=(Array.isArray(l)?l:[l]).concat(e[g]||[])}else if("style"===g){var l=pug_style(r[g]),n=pug_style(e[g]);r[g]=l+(l&&n&&";")+n}else r[g]=e[g];return r}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var e="",t="";for(var n in r)pug_has_own_property.call(r,n)&&(e=e+t+n+":"+r[n],t=";");return e}return r=""+r,";"===r[r.length-1]?r.slice(0,-1):r}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\mixin.jade";
pug_html = pug_html + "\u003C!--include .\u002Fbootstrap\u002Fbutton.jade--\u003E";
;pug_debug_line = 2;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\mixin.jade";
pug_html = pug_html + "\u003C!--include .\u002Fbootstrap\u002Fnav.jade--\u003E";
;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\mixin.jade";
pug_html = pug_html + "\u003C!--include .\u002Fbootstrap\u002Fpanel.jade--\u003E";
;pug_debug_line = 4;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\mixin.jade";
pug_html = pug_html + "\u003C!--include .\u002Fbootstrap\u002Ficon.jade--\u003E";
;pug_debug_line = 5;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\mixin.jade";
pug_html = pug_html + "\u003C!--include .\u002Fbootstrap\u002Finput.jade--\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\mixin.jade";
pug_html = pug_html + "\u003C!--include .\u002Fkendo\u002Fgrid.jade--\u003E";
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\mixin.jade";
pug_html = pug_html + "\u003C!--include .\u002Fkendo\u002Feditor.jade--\u003E";
;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";








;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";








;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";
pug_mixins["container"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 14;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "container"},attributes]), false)) + "\u003E";
;pug_debug_line = 15;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 19;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";








;pug_debug_line = 23;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";
pug_mixins["col"] = pug_interp = function(num, size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 24;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";
size || (size = 'sm')
;pug_debug_line = 25;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";
var cls = 'col-' + size + '-' + num
;pug_debug_line = 26;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": pug_classes([[cls]], [true])},attributes]), false)) + "\u003E";
;pug_debug_line = 27;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 31;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";








;pug_debug_line = 35;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";








;pug_debug_line = 39;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";


















;pug_debug_line = 47;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";








;pug_debug_line = 51;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";








;pug_debug_line = 55;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";











;pug_debug_line = 61;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";








;pug_debug_line = 67;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";








;pug_debug_line = 71;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";








;pug_debug_line = 75;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";








;pug_debug_line = 79;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";








;pug_debug_line = 83;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";








;pug_debug_line = 87;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";








;pug_debug_line = 91;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";
pug_mixins["modal-close"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 92;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";
pug_html = pug_html + "\u003Cbutton class=\"close\" data-dismiss=\"modal\"\u003E";
;pug_debug_line = 93;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 93;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";
pug_html = pug_html + "×\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E";
};
;pug_debug_line = 95;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\jade-tpl\\src\\tinyui\\layout.jade";




















;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\www\\product\\extensions\\templates\\mixinxx.js";
pug_html = pug_html + "\u003Cdiv class=\"div\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\www\\product\\extensions\\templates\\mixinxx.js";
pug_html = pug_html + "hehe22222222222222222222222222\u003C\u002Fdiv\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}