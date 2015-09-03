import DS from 'ember-data';

var imagelocsModel = DS.Model.extend({
  imageUrl: DS.attr('string'),
  comicpage: DS.belongsTo('comicpage')
});

export default imagelocsModel;
