import DS from 'ember-data';

var ComicPageItem = DS.Model.extend({
  name: DS.attr('string'),
  pageLayout: DS.attr('string'),
  imagelocs: DS.hasMany('imageloc', {async: true})
});


export default ComicPageItem;
