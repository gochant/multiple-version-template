define(function(require,exports,module){

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["panel"].call({
block: function(){
pug_mixins["panel-toolbar"].call({
block: function(){
pug_mixins["btn-toolbar"].call({
block: function(){
},
attributes: {"class": "pull-left"}
}, 'sm');
pug_mixins["right"].call({
block: function(){
}
});
}
}, 'sm');
pug_mixins["panel-body"].call({
block: function(){
},
attributes: {"class": "no-padding block-abs-body"}
});
},
attributes: {"class": "block-abs-3"}
});;return pug_html;}
return template;

});
