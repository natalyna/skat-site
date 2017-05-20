import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	publDate: DS.attr(),
	duty: DS.attr(),
	experience: DS.attr(),
	requirement: DS.attr()
});
