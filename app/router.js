import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects', function() {
    this.route('show', function() {
      this.route('index', { path: '/:project_id' });
      this.route('tech', { path: '/tech/:project_id' });
      this.route('location', { path: '/location/:project_id' });
      this.route('yard', { path: '/yard/:project_id' });
      this.route('mortgage', { path: '/mortgage/:project_id' });
    });
  });
  this.route('buy', function() {
    this.route('process');
    this.route('mortgage');
    this.route('trade-in');
    this.route('capital');
    this.route('compensation');
  });
  this.route('company', function() {
    this.route('team');
    this.route('history');
    this.route('services');
  });
  this.route('news', function() {
    this.route('show', { path: '/show/:news_id' });
  });
  this.route('contacts');
  this.route('vacancies', function() {
    this.route('show', { path: '/show/:vacancy_id' });
  });
});

export default Router;
