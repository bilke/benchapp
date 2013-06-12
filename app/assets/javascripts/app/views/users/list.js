App.ListUsersView = Ember.View.extend({
  templateName: 'app/users/list',
  usersBinding: 'App.usersController',

  refreshListing: function() {
    App.usersController.findAll();
  }
});
