import Ember from 'ember';

export default Ember.Component.extend({
	elementId: 'index-carousel',
	classNames: ['carousel', 'slide'],
	attributeBindings: ['data-ride']
});
