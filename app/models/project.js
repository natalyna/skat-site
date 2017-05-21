import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	heroImgSrc: DS.attr(),
	type: DS.attr(),
	expiration: DS.attr(),
	buildingCount: DS.attr(),
	flatCount: DS.attr(),
	floorCount: DS.attr(),
	roomCount: DS.attr(),
	apartmentSize: DS.attr(),
	price: DS.attr(),
	address: DS.attr(),
	addressShort: DS.attr(),
	techicalParams: DS.attr(),
	location: DS.attr(),
	yard: DS.attr(),
});
