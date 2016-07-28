define(['pug'], function(pug) { if(pug && pug['runtime'] !== undefined) { pug = pug.runtime; }

function template(locals) {var pug_html = "", pug_mixins = locals.mixin || {}, pug_interp;var pug_indent = [];
pug_indent.push('');
pug_mixins["panel"].call({
block: function(){
pug_indent.push('');
pug_mixins["panel-toolbar"].call({
block: function(){
pug_indent.push('');
pug_mixins["btn-toolbar"].call({
block: function(){
},
attributes: {"class": "pull-left"}
}, 'sm');
pug_indent.pop();
pug_indent.push('');
pug_mixins["right"].call({
block: function(){
}
});
pug_indent.pop();
}
}, 'sm');
pug_indent.pop();
pug_indent.push('');
pug_mixins["panel-body"].call({
block: function(){
},
attributes: {"class": "no-padding block-abs-body"}
});
pug_indent.pop();
},
attributes: {"class": "block-abs-3"}
});
pug_indent.pop();;return pug_html;};return template;

});