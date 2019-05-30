import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { reads } from '@ember/object/computed';

export default Controller.extend({
  settings: service(),
  autoAnimationsEnabled: reads('settings.autoAnimationsEnabled'),
  currentAnimationSetting: computed('autoAnimationsEnabled', function() {
    return this.get('autoAnimationsEnabled') ? 'enabled' : 'off';
  }),
  actions: {
    toggleSettings(setting) {
      let newValue = !this.get(setting);
      this.settings.setSettings(setting, newValue);
    },
  }
});
