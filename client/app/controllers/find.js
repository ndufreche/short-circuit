import Ember from 'ember';

export default Ember.Controller.extend({

  isDisabledSearch: Ember.computed.equal('checkAll', true),

  isBio: Ember.computed.equal('checkBio', true),

  isDisabledBox: Ember.computed.notEmpty('filter'),

  filterEmpty: Ember.computed.empty('filter'),

  isFindAll: Ember.computed.or('isDisabledSearch', 'filterEmpty'),


  filter: null,

  actions: {
    search() {
      if (!this.get('isDisabledSearch') && this.get('isDisabledBox')) {

        let key = this.get('filter');
        key = key.toLowerCase();

        //Ne comprend pas pourquoi il envoit sur /keywords
        let keyword = this.store.createRecord('keyword', {value : key});
        keyword.save().then(() => {
          console.log('saving new producer');
        });
      } else {
        this.set('isDisabledSearch', true);
      }

      let request = {
        keyword: this.get('filter'),
        isBio: this.get('isBio'),
        findAll: this.get('isFindAll'),
      };

      //Ne comprend pas pourquoi il ne met pas les parametres en URL
      this.transitionToRoute('result', {queryParams: request});
    },
    keyWord(value) {
      if (!this.get('isDisabledSearch'))
      {
        this.set('filter',value);
      }
    },
  }
});
