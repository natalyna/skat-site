import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects');
  this.route('buy');
  this.route('company');
  this.route('news');
  this.route('contacts');
});

export default Router;
