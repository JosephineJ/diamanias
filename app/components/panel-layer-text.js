import PanelLayerComponent from 'diamanias/components/panel-layer';
import { conditional, tag } from 'ember-awesome-macros';
import layout from 'diamanias/templates/components/panel-layer-text';

export default PanelLayerComponent.extend({
  layout,
  classNameBindings: ['sizeClass'],
  sizeClass: conditional('layer.size', tag`comic-panel__layer--text-${'layer.size'}`,
    tag`comic-panel__layer--text-medium`),
  didInsertElement() {
  },
});
