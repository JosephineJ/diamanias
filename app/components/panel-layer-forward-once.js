import FPanelLayerComponent from 'diamanias/components/panel-layer-forward';
import { computed } from '@ember/object';

export default FPanelLayerComponent.extend({
  iterations: 1,
  durationFactor: 400,
  numOfSteps: computed('maxFrames', function() {
    return this.get('maxFrames') - 1;
  }),
  backgroundPercentage: 100,
});
