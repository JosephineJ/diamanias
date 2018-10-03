import Component from '@ember/component';
import { reads } from '@ember/object/computed';
import { conditional, tag } from 'ember-awesome-macros';
import { htmlSafe } from 'ember-awesome-macros/string';

export default Component.extend({
  // layer: null,
  classNames: ['comic-panel__layer'],
  classNameBindings: ['styleClass'],
  attributeBindings: ['style'],
  bgImg: reads('layer.bgImg'),
  style: conditional('bgImg', htmlSafe(tag`background-image: url(${'bgImg'});`)),
  styleClass: reads('layer.styleClass'),
  kind: reads('layer.layerKind'),
  didInsertElement() {
    this._super(...arguments);
    this.setup();
  },
  didReceiveAttrs() {
    this._super(...arguments);
    this.setup();
  },
  setup() {
    let layer = this.layer;
    let kind = layer.kind;
    console.log({ kind });
  }
});
