import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
	name: DS.attr(),
	description: DS.attr(),
	imgAlt: DS.attr(),
	imgSrc: DS.attr(),
	expiration: DS.attr(),
	address: DS.attr()
});
