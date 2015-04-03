import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('user', {path: '/user'}, function() {
    this.route('new');
    this.route('view');
    this.route('edit');
  });
  this.route('about');
  this.route('home', {path: '/'});
});
