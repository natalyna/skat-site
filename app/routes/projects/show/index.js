import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			project: this.store.findRecord('project', params.project_id),
			projectSlider: this.store.findAll('projectSlider')
		});
	}
});
