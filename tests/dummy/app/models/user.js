import { Model, attr } from 'ember-model';

export default Model.extend({
  id: attr(),
  name: attr()
}).reopenClass({
  url: "/api/v1/users"
});
