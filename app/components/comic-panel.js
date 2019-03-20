/* global GroupEffect */

import Component from '@ember/component';
import { equal, reads } from '@ember/object/computed';
import InViewportMixin from 'ember-in-viewport';
import { inject as service } from '@ember/service';

export default Component.extend(InViewportMixin, {
  classNames: ['comic-panel'],
  classNameBindings: ['isLarge:comic-panel--large', 'isExtraLarge:comic-panel--extra-large', 'inView:comic-panel--active'],
  attributeBindings: ['tabIndex:tabindex'],

  inView: false,
  tabIndex: 0,
  role: 'img',

  kind: reads('panel.kind'),
  isLarge: equal('kind', 'l'),
  isExtraLarge: equal('kind', 'xl'),
  description: reads('panel.description'),
  animation: service(),
  settings: service(),
  init() {
    this._super(...arguments);
    this.set('effects', []);
    this.setProperties({ intersectionThreshold: 0.75 });
  },
  didEnterViewport() {
    if (this.get('settings.autoAnimationsEnabled')) {
      this.playGroupEffect();
    }
    this.set('inView', true);
  },
  didExitViewport() {
    if (this.get('settings.autoAnimationsEnabled')) {
      this.pauseGroupEffect();
    }
    this.set('inView', false);
  },
  didScroll() {
    // param: direction - 'up' || 'down' || 'left' || 'right'
  },
  didInsertElement() {
    this._super(...arguments);
    this.set('groupEffect', new GroupEffect(this.get('effects')));
  },
  playGroupEffect() {
    let groupEffect = this.get('groupEffect');
    if (groupEffect) {
      let currentAnimation = new Animation(groupEffect, this.get('animation.timeline'));
      this.set('currentAnimation', currentAnimation);
      currentAnimation.play();
    }
  },
  pauseGroupEffect() {
    let currentAnimation = this.get('currentAnimation');
    if (currentAnimation) {
      currentAnimation.pause();
    }
  },
  actions: {
    setupEffects(effect) {
      this.get('effects').addObject(effect);
    },
  }
});
