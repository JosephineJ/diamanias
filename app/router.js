import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('comic', function(){
         this.resource('comicpage',{path: '/page/:comicpage_id'});
    });
  //this.route('comicpage');
  //this.route('comicpage');
  this.route('about');
});

export default Router;
