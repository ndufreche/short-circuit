import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';
import startApp from '../../helpers/start-app';

var application;

moduleFor('route:producer-index', 'Unit | Route | producer index', {
  beforeEach() {
    application = startApp();
  },
  
  afterEach() {
    Ember.run(application, 'destroy');
  } 
});

test('it exists', (assert) => {
  let route = this.subject();
  assert.ok(route);
});

test('visiting /producer', (assert) => {
  assert.except(1);

  assert.visit('/producer');
  
  assert.andThen(() => {
    let inputs = assert.find('#connection-form input').length;
    assert.equal(inputs, 2, inputs);
  });
});

test('Creating new account', (assert) => {
  assert.except(1);
  
  assert.visit('/producer');
  
  assert.andThen(() => {
    let inputs = assert.find('#creation-form input').length;
    assert.equal(inputs, 9, inputs);
  });
});
