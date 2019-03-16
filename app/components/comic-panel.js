/* global GroupEffect */

import Component from '@ember/component';
import { equal, reads } from '@ember/object/computed';
import InViewportMixin from 'ember-in-viewport';
import { inject } from '@ember/service';

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
  animation: inject(),
  init() {
    this._super(...arguments);
    this.set('effects', []);
    this.setProperties({ intersectionThreshold: 0.75 });
  },
  didEnterViewport() {
    console.log("enter view");
    this.playGroupEffect();
    this.set('inView', true);
    console.log({ eenterd: this.get('viewportEntered') });
  },
  didExitViewport() {
    console.log("exit view");
    this.pauseGroupEffect();
    this.set('inView', false);
  },
  didScroll(direction) {
    console.log(direction); // 'up' || 'down' || 'left' || 'right'
  },
  didInsertElement() {
    this._super(...arguments);
    let timeline = this.get('animation.timeline');
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
