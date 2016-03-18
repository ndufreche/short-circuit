import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    /*let result = Ember.computed('query', function() {
      if (this.get('query') === null) {
        //rechercher tous les producteurs
        return 'Tous les producteurs';
      } else {
        //rechercher tous les producteurs de query
        return this.get('query')+' - producteur';
      }
    });*/

    //return result;
  }
});
