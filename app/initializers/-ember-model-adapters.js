export function initialize(application) {
  application.register('adapter:REST', Ember.RESTAdapter);
  application.register('service:store', Ember.Model.Store);
}

export default {
  name: 'ember-model-adapters',
  initialize: initialize
};
