import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

function jsonResponse(object, status = 200) {
  return [200, {'Content-Type': 'application/json'}, JSON.stringify(object)];
}

new Pretender(function() {
  this.get('/api/v1/users', function() {
    return jsonResponse([
      {id: 1, name: 'Erik'}
    ]);
  });
});

export default App;
