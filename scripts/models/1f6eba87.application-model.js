rayados.ApplicationModel = Backbone.Model.extend({
	defaults: function(){
		return {
			name: 'Tigre Trivia',
			type_id: 2
		}
	}
});

rayados.Banner = Backbone.Model.extend({
	defaults: function(){
		return {
			id    : null,
			url   : null,
			link  : null,
			app   : null,
			status: null
		}
	}
});

rayados.ContentItem = Backbone.Model.extend({
	defaults: function(){
		return {
			id        : null,
			text      : null,
			type      : null,
			app       : null,
			for_day   : null,
			for_month : null,
			fb_post_id: null
		};
	},
	
	initialize: function(){
    	
    },

    getTypeName: function(){
    	var type_name = '';
    	switch( parseInt( this.get('type') ) ){
    		case 1: type_name = 'partido'; break;
    		case 2: type_name = 'dato'; break;
    		case 3: type_name = 'trivia'; break;
    	}
    	return type_name;
    },

    getFormattedDate: function(){
    	var date = new Date;
    	var text_month = '';
    	switch( parseInt( date.getMonth() + 1 ) ){
		case 1: text_month = 'Enero'; break;
		case 2: text_month = 'Febrero'; break;
		case 3: text_month = 'Marzo'; break;
		case 4: text_month = 'Abril'; break;
		case 5: text_month = 'Mayo'; break;
		case 6: text_month = 'Junio'; break;
		case 7: text_month = 'Julio'; break;
		case 8: text_month = 'Agosto'; break;
		case 9: text_month = 'Septiembre'; break;
		case 10: text_month = 'Octubre'; break;
		case 11: text_month = 'Noviembre'; break;
		case 12: text_month = 'Diciembre'; break;
	}
    	return date.getDate() + ' de ' + text_month;
    }

});