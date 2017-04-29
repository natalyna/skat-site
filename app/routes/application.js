import Ember from 'ember';

export default Ember.Route.extend({
	moment: Ember.inject.service(),
	beforeModel() {
		this.get('moment').setLocale('ru');
	}
});
