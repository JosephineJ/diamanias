import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  number: DS.attr('string'),
  kind: DS.attr('string'),
  chapter: DS.belongsTo('chapter'),
  layers: DS.hasMany('layer', { async: true }),
});
