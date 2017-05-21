import DS from 'ember-data';

export default DS.Model.extend({
	label: DS.attr(),
	publDate: DS.attr(),
	expiration: DS.attr(),
	offer: DS.attr(),
	imgSrc: DS.attr(),
	name: DS.attr(),
	description: DS.attr(),
	isProject: DS.attr(),
	isAction: DS.attr()
});
