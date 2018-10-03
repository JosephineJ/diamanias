import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  async model(params) {
    let chapter = await this.get('store').find('chapter', params.id);
    return chapter.get('panels').then((panels) => {
      return hash({ chapter, panels });
    });
  },
});
