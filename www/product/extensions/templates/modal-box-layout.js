define(['pug'], function(pug) { if(pug && pug['runtime'] !== undefined) { pug = pug.runtime; }

return function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_indent.push('');
pug_mixins["box-topbar"].call({
block: function(){
}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["box-body"].call({
block: function(){
pug_indent.push('');
pug_mixins["box-wrapper"].call({
block: function(){
pug_indent.push('');
pug_mixins["box-aside"].call({
block: function(){
}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["box-content"].call({
block: function(){
}
});
pug_indent.pop();
}
});
pug_indent.pop();
}
});
pug_indent.pop();
pug_indent.push('');
pug_mixins["box-bottombar"].call({
block: function(){
pug_indent.push('');
pug_mixins["container"].call({
block: function(){
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"navbar-form navbar-right\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"btn-toolbar\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
});
pug_indent.pop();
}
});
pug_indent.pop();;return pug_html;}

});