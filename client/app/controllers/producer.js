import Ember from 'ember';

export default Ember.Controller.extend({

  isAccountAuthentication: false,

  isAccountCreation: false,

  emailValid: Ember.computed.match('newEmail', /^.+@.+\..+$/),

  passwordMatch: Ember.computed('newPassword', 'newPasswordConfirm', function() {
    return this.get('newPassword') === this.get('newPasswordConfirm');
  }),

  passwordNotEmpty: Ember.computed.notEmpty('newPassword'),

  passwordValid: Ember.computed.and('passwordNotEmpty', 'passwordMatch'),

  isValid: Ember.computed.and('emailValid', 'passwordValid'),

  isDisabled: Ember.computed.not('isValid'),

  actions: {
    showAccountAuthentication() {
      this.set('isAccountAuthentication', !this.get('isAccountAuthentication'));
      this.set('isAccountCreation', false);
    },

    showAccountCreation() {
      this.set('isAccountAuthentication', false);
      this.set('isAccountCreation', !this.get('isAccountCreation'));
    },

    createAccount() {
      let account = {
        email: this.get('newEmail'),
        firstname: this.get('newFirstname'),
        lastname: this.get('newLastname'),
        password: this.get('newPassword'),
        company: this.get('newCompany'),
        siret: this.get('newSiret'),
        street: this.get('newStreet'),
        city: this.get('newCity'),
        zipcode: this.get('newZipcode')
      };

      let producer = this.store.createRecord('producer', account);

      producer.save().then(() => {
        console.log('saving new producer');
      });
    },

    authenticate() {
      let account = {
        email: this.get('email'),
        password: this.get('password')
      }

      let producer = this.store.createRecord('producer', account);
    }
  }
});
