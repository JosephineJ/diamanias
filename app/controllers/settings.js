import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { reads } from '@ember/object/computed';

export default Controller.extend({
  settings: service(),
  autoAnimationsEnabled: reads('settings.autoAnimationsEnabled'),
  highContrastEnabled: reads('settings.highContrastEnabled'),
  currentAnimationSetting: computed('autoAnimationsEnabled', function() {
    return this.get('autoAnimationsEnabled') ? 'enabled' : 'off';
  }),
  currentColorSetting: computed('highContrastEnabled', function() {
    return this.get('highContrastEnabled') ? 'enabled' : 'off';
  }),
  actions: {
    toggleSettings(setting) {
      let newValue = !this.get(setting);
      this.settings.setSettings(setting, newValue);
    },
  }
});
