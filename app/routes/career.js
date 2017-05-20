import Ember from 'ember';

export default Ember.Route.extend({
	title: "Карьера",
	model() {
		return this.store.findAll('vacancy');
	}
});
