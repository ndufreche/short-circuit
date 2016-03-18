import Ember from 'ember';

export default Ember.Controller.extend({
  bindDistance: 15,
  minDistance: 0,
  maxDistance: 80,
  stepDistance: 5,

  queryParams: ['keyword', 'isBio', 'findAll'],
  keyword: null,
  isBio: null,
  findAll: null,

  request: ['request'],

  isSearchAll: Ember.computed.empty('query'),

  //Si query null, rechercher dans le store tous les producteurs
  //Si query non null, rechercher dans le store tous les producteurs de la valeur de query
});
