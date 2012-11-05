rayados.ApplicationController = Backbone.Collection.extend({

});

rayados.ContentList = Backbone.Collection.extend({
	
	model: rayados.ContentItem,

	url: function(){
		var date    = new Date(),
			type_id = 2,//rayados.ApplicationModel.defaults().type_id;
			day     = date.getDate(),
			month   = date.getMonth() + 1;

		return 'http://historias.kiwam.co/?app='+type_id+'&for_day='+day+'&for_month='+month;
	},

});

rayados.BannerList = Backbone.Collection.extend({
	
	model: rayados.Banner,

	url: 'http://historias.kiwam.co/banners.php?app=2&status=1',

});