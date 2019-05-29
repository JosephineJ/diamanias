import Controller from '@ember/controller';
import { later } from '@ember/runloop';

export default Controller.extend({
  isMenuOpen: false,
  actions: {
    toggleMenu(sideNavOpen) {
      this.set('leftSideBarOpen', !sideNavOpen);
      later(() => document.getElementById('initial-focusee').focus());
    }
  }
});
