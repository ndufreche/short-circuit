import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  siret: DS.attr('string'),
  email: DS.attr('string'),
  tel: DS.attr('string'),
  company: DS.attr('string'),
  city: DS.attr('string'),
  zipcode: DS.attr('string'),
  street: DS.attr('string'),
  created: DS.attr('string'),
  updated: DS.attr('string'),
  store: DS.belongsTo('store'),
  subscriptions: DS.belongsTo('subscription')
});
