import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['carousel', 'slide'],
	attributeBindings: ['data-ride']
});
