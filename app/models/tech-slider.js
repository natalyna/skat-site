import DS from 'ember-data';

export default DS.Model.extend({
	imgSrc: DS.attr(),
	imgAlt: DS.attr()
});
