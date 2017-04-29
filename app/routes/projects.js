import Ember from 'ember';

export default Ember.Route.extend({
	title: 'Проекты',
	model() {
		return this.store.findAll('project');
	}
});
