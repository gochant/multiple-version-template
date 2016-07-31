define(function(require,exports,module){

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["navbar"] = pug_interp = function(container){
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


















pug_mixins["nav-primary"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_mixins["nav"].call({
block: function(){
block && block();
},
attributes: {"class": "nav-pills nav-primary"}
});
};



































































pug_mixins["nav-primary"].call({
block: function(){
pug_mixins["nav-item"].call({
block: function(){
pug_html = pug_html + "业务办理22";
}
}, '#', true);
pug_mixins["nav-item"].call({
block: function(){
pug_html = pug_html + "我的业务";
}
}, '#');
pug_mixins["nav-item"].call({
block: function(){
pug_html = pug_html + "待办业务";
}
}, '#');
pug_mixins["nav-item"].call({
block: function(){
pug_html = pug_html + "业务跟踪";
}
}, '#');
}
});;return pug_html;}
return template;

});
