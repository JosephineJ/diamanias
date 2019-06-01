import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';
const { keys } = Object;

export default Service.extend({
  cookies: service(),

  autoAnimationsEnabled: null,
  highContrastEnabled: null,

  init() {
    this._super(...arguments);
    let autoplay = this.cookies.exists('autoAnimationsEnabled') ? this.cookies.read('autoAnimationsEnabled') : false;
    let highContrast = this.cookies.exists('highContrastEnabled') ? this.cookies.read('highContrastEnabled') : false;

    if (autoplay === 'no') {
      this.set('autoAnimationsEnabled', false);
    } else {
      this.set('autoAnimationsEnabled', true);
    }

    if (highContrast === 'no') {
      this.set('highContrastEnabled', false);
    } else {
      this.set('highContrastEnabled', true);
    }
  },

  setSettings(setting, value) {
    this.set(setting, value);
    let cookieValue = value ? 'yes' : 'no';
    this.cookies.write(setting, cookieValue);
  },

  allCookies: computed(function() {
    let cookieService = this.get('cookies');
    cookieService.write('now', new Date().getTime());

    let cookies = cookieService.read();
    return keys(cookies).reduce((acc, key) => {
      let value = cookies[key];
      acc.push({ name: key, value });

      return acc;
    }, []);
  })
});
