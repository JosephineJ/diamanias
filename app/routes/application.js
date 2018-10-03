import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  model() {
    return this.get('store').findAll('chapter');
  },
});
