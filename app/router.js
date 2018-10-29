import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('chapters', function() {
    this.route('chapter', { path: '/:id' });
  });
  this.route('test');
});

export default Router;