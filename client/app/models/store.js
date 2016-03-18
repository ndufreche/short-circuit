import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  bio: DS.attr('boolean'),
  tour: DS.attr('boolean'),
  opening: DS.attr('string'),
  closing: DS.attr('string'),
  lat: DS.attr('string'),
  lng: DS.attr('string'),
  presentation: DS.attr('string'),
  website: DS.attr('string'),
  picture: DS.attr('string'),
  avaragevote: DS.attr('number'),
  owner: DS.belongsTo('producer'),
  vote: DS.hasMany('vote')
});
