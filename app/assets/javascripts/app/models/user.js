App.User  = Ember.Resource.extend({
  resourceUrl: '/users',
  resourceName: 'users',
  resourceProperties: ['name', 'email', 'selected'],
  selected: false,

  fullName: Ember.computed(function() {
    return this.get('name') + ' ' + this.get('email');
  }).property('name', 'email')
});
