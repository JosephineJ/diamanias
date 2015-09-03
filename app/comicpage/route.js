import Ember from 'ember';

var ComicpageRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('comicpage', params.comicpage_id);
	},
	loading: function(){
			comicLoaded: true
	}/*,
	renderTemplate: function(){
		this.render({ outlet: 'comicpage'}); 
	}*/

});

export default ComicpageRoute;
