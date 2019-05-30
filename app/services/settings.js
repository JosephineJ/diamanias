import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';
const { keys } = Object;

export default Service.extend({
  cookies: service(),

  autoAnimationsEnabled: null,

  init() {
    this._super(...arguments);
    let autoplay = this.cookies.exists('autoAnimationsEnabled') ? this.cookies.read('autoAnimationsEnabled') : false;
    console.log({ readValue: this.cookies.read('autoAnimationsEnabled') });
    if (autoplay === 'no') {
      this.set('autoAnimationsEnabled', false);
    } else {
      this.set('autoAnimationsEnabled', true);
    }
  },

  setSettings(setting, value) {
    console.log({ value });
    this.set(setting, value);
    let cookieValue = value ? 'yes' : 'no';
    console.log({ cookieValue });
    this.cookies.write('autoAnimationsEnabled', cookieValue);
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
