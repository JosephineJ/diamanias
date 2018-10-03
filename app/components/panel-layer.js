import Component from '@ember/component';
import { computed } from '@ember/object';
import { reads } from '@ember/object/computed';
import { conditional, tag } from 'ember-awesome-macros';
import { htmlSafe } from 'ember-awesome-macros/string';

export default Component.extend({
  // layer: null,
  classNames: ['comic-panel__layer'],
  classNameBindings: ['styleClass', 'frameClass'],
  attributeBindings: ['style'],
  bgImg: reads('layer.bgImg'),
  style: conditional('bgImg', 'bgImgTag'),
  bgImgTag: htmlSafe(tag`background-image: url(${'bgImg'});`),
  styleClass: reads('layer.styleClass'),
  frameClass: tag`comic-panel__layer--f${'maxFrames'}`,
  maxFrames: reads('layer.numOfFrames'),
  bgImgSize: null,
  backgroundImageSize: computed('bgImgSize', function() {
    return
  }),
  kind: reads('layer.layerKind'),
  didInsertElement() {
    this._super(...arguments);
    this.setup();
  },
  setup() {
    let kind = this.get('kind');
    let layer = this.get('element');
    let steps = `steps(${this.get('maxFrames') - 1})`;

    layer.animate([
      { backgroundPosition: 'center 0' },
      { backgroundPosition: 'center 100%' }
    ], {
      duration: (500 * this.get('maxFrames')),
      iterations: Infinity,
      easing: steps,
    });
  }
});
