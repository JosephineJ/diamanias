import DS from 'ember-data';

export default DS.Model.extend({
  bgImg: DS.attr('string'),
  fgImg: DS.attr('string'),
  styleClass: DS.attr('string'),
  panel: DS.belongsTo('panel'),
  layerKind: DS.attr('string'),
  numOfFrames: DS.attr('number'),
});
