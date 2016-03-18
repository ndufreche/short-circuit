import Ember from 'ember';
export default Ember.Route.extend({
  model () {
    this.store.createRecord('keyword');
  },
  
  setupController(controller, model) {
    controller.set('model', model);
  }
});
