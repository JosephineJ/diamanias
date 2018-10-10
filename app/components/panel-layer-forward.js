import PanelLayerComponent from 'diamanias/components/panel-layer';
import { computed } from '@ember/object';
import { reads } from '@ember/object/computed';

export default PanelLayerComponent.extend({
  durationFactor: 400,
  iterations: 999,
  numOfSteps: reads('maxFrames'),
  backgroundPercentage: computed('maxFrames', function() {
    let num = this.get('maxFrames');
    return 100 + (100 / (num - 1));
  }),
  didInsertElement() {
    this._super(...arguments);
    let effect = this.setup();
    this.get('onSetup')(effect);
  },
  setup() {
    let layer = this.get('element');
    let numOfSteps = this.get('numOfSteps');
    let steps = `steps(${numOfSteps})`;
    let durationFactor = this.get('durationFactor');
    let animationStates = [
      { backgroundPosition: 'center 0' },
      { backgroundPosition: `center ${this.get('backgroundPercentage')}%` }
    ];
    let animationOptions = {
      duration: (durationFactor * numOfSteps),
      iterations: this.get('iterations'),
      fill: 'forwards',
      easing: steps,
    };

    return new KeyframeEffect(
      layer, // element to animate
      animationStates,
      animationOptions,
    );
  },
});
