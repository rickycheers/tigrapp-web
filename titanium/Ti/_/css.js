define(["Ti/_","Ti/_/string"],function(g,h){function d(b,a,d){for(var e=0,f,c=" "+b.className+" ",a=require.is(a,"Array")?a:a.split(" ");e<a.length;e++)f=c.indexOf(" "+a[e]+" "),d&&-1===f?c+=a[e]+" ":!d&&-1!==f&&(c=c.substring(0,f)+c.substring(f+a[e].length+1));b.className=h.trim(c)}return g.css={add:function(b,a){d(b,a,1)},remove:function(b,a){d(b,a)},clean:function(b){return b.replace(/[^A-Za-z0-9\-]/g,"")}}});