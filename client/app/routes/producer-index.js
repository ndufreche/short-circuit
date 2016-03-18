import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'producer',

  setupController(controller, model) {
    controller.set('model', model);
  }
});
