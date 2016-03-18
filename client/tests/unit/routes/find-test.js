import { moduleFor, test } from 'ember-qunit';

moduleFor('route:find', 'Unit | Route | find', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});

test('visiting /find', function(assert) {
  assert.except(1);

  assert.visit('/find');
  
  assert.andThen(function () {
    let inputs = assert.find("input").length;
    assert.equal(inputs, 2, inputs);
  });
});
