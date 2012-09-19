define(["Ti/_/css","Ti/_/declare","Ti/UI/View","Ti/UI","Ti/_/lang"],function(g,m,n,e,o){var l=o.isDef,f=e.FILL;return m("Ti.UI.MobileWeb.NavigationGroup",n,{constructor:function(a){var a=this.constants.window=a&&a.window,b=this._navBarContainer=e.createView({height:50,width:e.FILL,layout:e._LAYOUT_CONSTRAINING_HORIZONTAL});g.add(b.domNode,"TiUINavigationGroup");this.layout=e._LAYOUT_CONSTRAINING_VERTICAL;b.add(this._leftContainer=Ti.UI.createView({width:e.SIZE,height:"100%",left:5,right:5}));b.add(this._centerContainer=
Ti.UI.createView({width:e.FILL,height:"100%"}));b.add(this._rightContainer=Ti.UI.createView({width:e.SIZE,height:"100%",left:5,right:5}));this._add(b);this._add(this._contentContainer=e.createView({width:f,height:f}));this.navBarAtTop=!0;b._getBorderFromCSS();this._windows=[];a&&this.open(a)},_defaultWidth:f,_defaultHeight:f,_updateNavBar:function(){var a=this,b=a._windows,d=b.length,c=b[d-1],f=this._navBarContainer,g=a._leftContainer,i=a._centerContainer,j=a._rightContainer,h,k=c.rightNavButton;
c.leftNavButton?h=c.leftNavButton:(a._backButton||(a._backButton=Ti.UI.createButton({title:"Back"}),require.on(a._backButton,"singletap",function(){a.close(b[b.length-1])})),1<d&&(h=a._backButton));g._children[0]!==h&&(g._removeAllChildren(),h&&g._add(h));j._children[0]!==k&&(j._removeAllChildren(),k&&j._add(k));f.backgroundColor=c.barColor;f.backgroundImage=c.barImage;f.opacity=c.translucent?0.5:1;f.height=c.navBarHidden&&c.modal?0:50;d=c.titleControl?c.titleControl:c.titleImage?c._titleImageView||
(c._titleImageView=Ti.UI.createImageView({image:c.titleImage})):c._titleControl||(c._titleControl=Ti.UI.createLabel({text:c._getTitle()||this._tab&&this._tab._getTitle()||"",width:"100%",height:"100%",textAlign:e.TEXT_ALIGNMENT_CENTER}));i._children[0]!==d&&(i._removeAllChildren(),d&&i._add(d))},_getTopWindow:function(){var a=this._windows;return a.length?a[a.length-1]:null},open:function(a){if(!a._opened){var b=this._windows,d=this._tab;a._navGroup=this;!l(a.backgroundColor)&&!l(a.backgroundImage)&&
(a.backgroundColor="#fff");~(b.length-1)&&b[b.length-1].fireEvent("blur");d&&(a.tabGroup=(a.tab=d)._tabGroup);b.push(a);this._contentContainer._add(a);this._updateNavBar();a._opened||a.fireEvent("open");a._opened=1;a.fireEvent("focus")}},close:function(a){var b=this._windows,d=b.indexOf(a);a._navGroup=void 0;0<d&&(b.splice(d,1),a.fireEvent("blur"),this._contentContainer.remove(a),a.fireEvent("close"),a._opened=0,this._updateNavBar(),b[b.length-1].fireEvent("focus"))},_reset:function(){var a=this._windows,
b,d=a.length-1,c=d;for(this._backButton.animate({opacity:0,duration:250},function(){this.opacity=0;this.enabled=!1});;){b=a[d];if(!d)break;d--===c&&b.fireEvent("blur");this._contentContainer.remove(b);b.fireEvent("close");b._opened=0}a.splice(1);this._updateNavBar();b.fireEvent("focus")},constants:{window:void 0},properties:{navBarAtTop:{set:function(a,b){if(a!==b){var d=this._navBarContainer,c=d.domNode;this._remove(d);this._insertAt(d,a?0:1);g.remove(c,"TiUINavigationGroup"+(a?"Top":"Bottom"));
g.add(c,"TiUINavigationGroup"+(a?"Bottom":"Top"))}return a}}}})});