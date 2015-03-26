export function initialize(container, application) {
  application.register('adapter:REST', Ember.RESTAdapter);
}

export default {
  name: 'ember-model-adapters',
  initialize: initialize
};
