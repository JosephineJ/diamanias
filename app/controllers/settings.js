import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  settings: service(),
  autoAnimationsEnabled: alias('settings.autoAnimationsEnabled'),
  currentAnimationSetting: computed('autoAnimationsEnabled', function() {
    return this.get('autoAnimationsEnabled') ? 'enabled' : 'off';
  }),
});
