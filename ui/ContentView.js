function ContentView(b,a){require("/lib/underscore");require("/ui/theme");var c=require("/ui/components"),e=new c.View({layout:"vertical"}),g=new c.View({backgroundColor:"#eaeaea",backgroundImage:a?a[0].url:"",width:"300dip",height:"112dip",top:"10dip",borderColor:"#fff",borderWidth:2});e.add(g);if(a){var d=0,i=a.length;setInterval(function(){g.backgroundImage=a[d].url;d=d==i-1?0:d+1},5E3)}var f=new c.ScrollView({showVerticalScrollIndicator:!0,layout:"vertical",backgroundColor:"#000",opacity:0.7,
width:"300dip",height:"150dip",top:"10dip",borderColor:"#fff",borderWidth:2}),j=b.for_day+" de "+readableMonth(b.for_month),h="mobileweb"==Ti.Platform.osname?14:8;f.add(new c.Label(j,{top:10,left:10,color:"#fff",width:"95%",font:{fontSize:h+"pt",fontWeight:"bold"}}));f.add(new c.Label(b.text,{top:10,left:10,color:"#fff",width:"95%",font:{fontSize:h-1+"pt"}}));e.add(f);return e}
function readableMonth(b){var a="";switch(parseInt(b)){case 1:a="Enero";break;case 2:a="Febrero";break;case 3:a="Marzo";break;case 4:a="Abril";break;case 5:a="Mayo";break;case 6:a="Junio";break;case 7:a="Julio";break;case 8:a="Agosto";break;case 9:a="Septiembre";break;case 10:a="Octubre";break;case 11:a="Noviembre";break;case 12:a="Diciembre"}return a}module.exports=ContentView;