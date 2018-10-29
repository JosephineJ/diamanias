import Component from '@ember/component';
import { equal, reads } from '@ember/object/computed';
import { conditional, raw, tag } from 'ember-awesome-macros';
import { htmlSafe } from 'ember-awesome-macros/string';
import layout from 'diamanias/templates/components/panel-layer';

import config from 'diamanias/config/environment';

export default Component.extend({
  // layer: null,
  classNames: ['comic-panel__layer'],
  classNameBindings: ['styleClass', 'frameClass'],
  attributeBindings: ['style'],
  layout: layout,
  bgImg: reads('layer.bgImg'),
  style: conditional('bgImg', 'bgImgTag'),
  bgImgTag: htmlSafe(tag`background-image: url(${raw(config.rootURL)}${'bgImg'});`),
  styleClass: reads('layer.styleClass'),
  frameClass: tag`comic-panel__layer--f${'maxFrames'}`,
  maxFrames: reads('layer.numOfFrames'),
  bgImgSize: null,
  isForward: equal('kind', 'forward'),
  kind: reads('layer.layerKind'),
});
