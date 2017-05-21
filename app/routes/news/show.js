import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.RSVP.hash({
			newsItem: this.store.findRecord('news', params.news_id),
			news: this.store.findAll('news', { limit: 3 })
				.then(function(result) {
					return result.slice(0, 3);
				})
		});
	}
});
