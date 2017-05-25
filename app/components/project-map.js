import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ["map__g-map"],

	mouseLeave() {
		var $overlay = this.$(".map__overlay");

		if (!$overlay.is(":visible")) {
			$overlay.show();
		}
	},

	actions: {
		enableMap() {
			var $overlay = this.$(".map__overlay");
			$overlay.hide();
		}
	}
});
