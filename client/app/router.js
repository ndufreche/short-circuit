import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('producer');
  this.route('store');
  this.route('vote');
  this.route('subscription');
  this.route('find');
  this.route('producer-index', { path: '/producer' });
  this.route('result');
  this.route('producer-welcome', { path: '/producer/welcome' });
  this.route('keyword');
});

export default Router;
