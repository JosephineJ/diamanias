import Controller from '@ember/controller';
import { later } from '@ember/runloop';
import { inject as service } from '@ember/service';
import { observer } from '@ember/object';
import $ from 'jquery';

export default Controller.extend({
  settings: service(),
  isMenuOpen: false,

  updateStyles: observer('settings.highContrastEnabled', function() {
    if (this.get('settings.highContrastEnabled')) {
      $('body').addClass('contrast');
    } else {
      $('body').removeClass('contrast');
    }
  }),
  actions: {
    toggleMenu(sideNavOpen) {
      this.set('leftSideBarOpen', !sideNavOpen);
      later(() => document.getElementById('initial-focusee').focus());
    }
  }
});
