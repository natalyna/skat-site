import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
	date: DS.attr(),
	title: DS.attr(),
	isProject: DS.attr(),
	isAction: DS.attr(),
	imgSrc: DS.attr()
});
