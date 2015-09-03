import Ember from 'ember';

var ComicPageContent  = Ember.Component.extend({
	//templateName: 'clayoutone'
	/*layout: function(params){
		return this.store.find('comicpage', params.comicpage_id);
	}*/
	/*model: function(params){
		return this.store.find('comicpage', params.comicpage_id);
	},*/
	layoutIsPlain: function() {
		return this.get('playout') === 'plain';
	}.property('playout'),
	layoutIsDynamik: function() {
		return this.get('playout') === 'dynamik';
	}.property('playout'),
	layoutIsFull: function() {
		return this.get('playout') === 'full';
	}.property('playout'),
	imgOne: function(){
		var firstie = this.get('cmodel',1);
		//var firstie = cmodel.imageUrl;
		//return 'http://www.google.com/google.jpg';
		//this.set('imgOne', firstie);
		firstie.then(function(){
			var thirsty = firstie.get('imageUrl');
			thirsty.then(function(){
				console.log(thirsty);
			});
		});
		return firstie;
	}.property('cmodel'),
	didInsertElement: function(){
		var array = [1,2,3,4,5];
		//this.set('imgOne', this.get('imgOne'));
		array.forEach(function(item) {
			if (this.indexOf(item) !== 0 && this.indexOf(item) !== this.length -1){
				console.log(item, this.indexOf(item));
			}
		}, array)
		
	}
});


export default ComicPageContent;
