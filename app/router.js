import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects', function() {
    this.route('show', { path: '/show/:project_id' });
  });
  this.route('buy', function() {
    this.route('process');
    this.route('mortgage');
  });
  this.route('company');
  this.route('news');
  this.route('contacts');
});

export default Router;
