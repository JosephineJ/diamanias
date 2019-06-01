import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  subtitle: DS.attr('string'),
  number: DS.attr('string'),
  panels: DS.hasMany('panel', { async: true }),
});
