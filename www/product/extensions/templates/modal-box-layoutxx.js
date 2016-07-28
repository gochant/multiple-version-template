function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\www\\product\\extensions\\templates\\modal-box-layoutxx.js";
pug_mixins["box-topbar"].call({
block: function(){
;pug_debug_line = 4;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\www\\product\\extensions\\templates\\modal-box-layoutxx.js";
}
});
;pug_debug_line = 5;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\www\\product\\extensions\\templates\\modal-box-layoutxx.js";
pug_mixins["box-body"].call({
block: function(){
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\www\\product\\extensions\\templates\\modal-box-layoutxx.js";
pug_mixins["box-wrapper"].call({
block: function(){
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\www\\product\\extensions\\templates\\modal-box-layoutxx.js";
pug_mixins["box-aside"].call({
block: function(){
;pug_debug_line = 8;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\www\\product\\extensions\\templates\\modal-box-layoutxx.js";
}
});
;pug_debug_line = 9;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\www\\product\\extensions\\templates\\modal-box-layoutxx.js";
pug_mixins["box-content"].call({
block: function(){
;pug_debug_line = 10;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\www\\product\\extensions\\templates\\modal-box-layoutxx.js";
}
});
}
});
}
});
;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\www\\product\\extensions\\templates\\modal-box-layoutxx.js";
pug_mixins["box-bottombar"].call({
block: function(){
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\www\\product\\extensions\\templates\\modal-box-layoutxx.js";
pug_mixins["container"].call({
block: function(){
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\www\\product\\extensions\\templates\\modal-box-layoutxx.js";
pug_html = pug_html + "\u003Cdiv class=\"navbar-form navbar-right\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\www\\product\\extensions\\templates\\modal-box-layoutxx.js";
pug_html = pug_html + "\u003Cdiv class=\"btn-toolbar\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "C:\\Users\\gocha\\Documents\\Code\\multiple-version\\www\\product\\extensions\\templates\\modal-box-layoutxx.js";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
});
}
});} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}