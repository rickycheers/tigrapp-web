rayados.ContentItemView = Backbone.View.extend({
	render: function(){
		var type_name = this.model.getTypeName();
		$('#'+type_name+'Date').html( this.model.getFormattedDate() );
		$('#'+type_name+'Content').html( this.model.get('text') );
		return this;
	}
});

rayados.BannerView = Backbone.View.extend({

	startInterval: function(){
		var self         = this,
			counter      = 1,
			bannerList   = this.options.bannerList.models,
			length       = bannerList.length
		;

		this.render(bannerList[0]);

		interval = setInterval(function(){
			if( counter == length ){
				counter = 0;
			}
			self.render(bannerList[counter]);
			counter++;
		}, 5000);
	},

	render: function(model){
		var self = this;
		['partido', 'dato', 'trivia'].forEach(function(type_name){
			$('#'+type_name+'BannerLink').attr('href', model.get('link') );
			$('#'+type_name+'Banner').attr('src', model.get('url') );
		});
	}

});

rayados.ApplicationView = Backbone.View.extend({

	tagName: 'body',

	$el: $('body'),

	initialize: function() {
		var self = this;

		Banners = new rayados.BannerList();
		Banners.fetch({success: this.renderBanners});

    	this.Contents = new rayados.ContentList();
		this.Contents.fetch({success: this.renderContent});

		//var content_h = $(window).height() - $('#contentWrapper').parent().eq(0).height() - 200;
		//$('#contentWrapper').css({height: content_h+'px'});

		$('img.facebookButton').on('tap', function(){
			self.doFacebookStuff(self);
		});

		$('#publishCommentButton').on('tap', function(){
			self.publishFacebookComment(this);
		});

	},

	renderContent: function(collection, response){
		collection.models.forEach(function(model){
			var view = new rayados.ContentItemView({model:model});
			view.render();
		});
	},

	renderBanners: function(collection, response){
		var banner_views = [];
		['partido', 'dato', 'trivia'].forEach(function(type_name){
			banner_views[type_name] = new rayados.BannerView({bannerList: collection});
			banner_views[type_name].startInterval();
		});
	},

	doFacebookStuff: function(){
		if( fb_status_str != 'connected'){
			this.facebookLogin();
		} else {
			$.mobile.changePage('#facebookComments', {transition:'slide'});
		}
	},

	facebookLogin: function() {
	    FB.login(function(response) {
	        if (response.authResponse) {
	            $.mobile.changePage('#facebookComments', {transition:'slide'});
	        } else {
	            // cancelled
	        }
	    }, {scope:'publish_stream,publish_actions'});
	},

	publishFacebookComment: function(el){
		var comment    = $(el).prev().val(),
			fb_post_id = this.Contents.at(0).get('fb_post_id')
		;
		$.mobile.loading( 'show' );
		$('#popup').popup({transition:'fade'});

		FB.api('/'+fb_post_id+'/comments', 'post', {message: comment}, function(response) {
			$.mobile.loading( 'hide' );
			if( response.error ){
				$('#popup').html('<h2>Lo sentimos.</h2><h3>Tu comentario no pudo ser publicado en este momento.</h3>');
				$.mobile.changePage('#partido', {transition:'slide'});
			}else{
				$('#popup').html('<h3>¡Tu comentario ha sido publicado!</h3>');
				$.mobile.changePage('#partido', {transition:'slide'});
			}
			setTimeout(function(){
				$('#popup').popup('open');
				setTimeout(function(){
					$('#popup').popup('close');
				},3000);
			},300);
		});
		
	}

});
