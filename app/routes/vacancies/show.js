import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('vacancy', params.vacancy_id)
			.then(function(model) {
				var dutyArr = model.get("duty").split(";"),
					requirementArr = model.get("requirement").split(";");

				model.set("dutyArr", dutyArr);
				model.set("requirementArr", requirementArr);
				return model;
			});
	}
});
