import Ember from 'ember';

export default Ember.Route.extend({
	title: 'Главная',
	model() {
		return Ember.RSVP.hash({
			projects: this.store.findAll('project', { limit: 2 })
				.then(function(result) {
					return result.slice(0, 2);
				}),
			//companies: this.store.findAll('company')
		});
	}
});
