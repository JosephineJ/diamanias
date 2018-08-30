import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  model() {
    // return this.get('store').findAll('chapter');
    return fetch('http://localhost:3000/api/').then(function(response) {
      return response.json();
    });
  },
});
