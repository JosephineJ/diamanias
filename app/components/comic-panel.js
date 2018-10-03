import Component from '@ember/component';
import { equal, reads } from '@ember/object/computed';

export default Component.extend({
  classNames: ['comic-panel'],
  classNameBindings: ['isLarge:comic-panel--large', 'isExtraLarge:comic-panel--extra-large'],
  kind: reads('panel.kind'),
  isLarge: equal('kind', 'l'),
  isExtraLarge: equal('kind', 'xl'),
  init() {
    this._super(...arguments);  
  },
});
