/*
 Quantcast measurement tag
 Copyright (c) 2008-2017, Quantcast Corp.
*/
(function(d,g,f){try{__qc("defaults",d,{labels:"_fp.event.Default"})}catch(m){}var l=function(a,b,c){return a?"nc"===a?!b||!c||0>b.indexOf(c):"eq"===a?b===c:"sw"===a?0===b.indexOf(c):"ew"===a?(a=b.length-c.length,b=b.lastIndexOf(c,a),-1!==b&&b===a):"c"===a?0<=b.indexOf(c):!1:!1},h=function(a,b,c){var e;if(g.top===g.self)e=f.location.pathname;else{e=f.referrer;var d=f.createElement("a");d.href=e;e=d.pathname}l(b,e,c)?a(e):a(!1)},k=function(a){return"array"==={}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()?
{labels:a.join(",")}:{labels:""+a}};__qc("rules",[d,null,[[k,"_fp.event.Homepage"]],[[h,"eq","/"]]],[d,null,[[k,"_fp.event.Homepage"]],[[h,"eq","/home"]]])})("p-cCRJRKkbyAGGB",window,document);