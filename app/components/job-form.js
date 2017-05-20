import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['job-form'],

	actions: {
		inputChanged(inputName) {
			var $input = this.$('[name=' + inputName + ']'),
				val = $input.val();

			if (typeof val !== "undefined" && val !== "") {
				$input.addClass("animated-input__input_not-empty");
			} else {
				$input.removeClass("animated-input__input_not-empty");
			}
		}
	}
});
