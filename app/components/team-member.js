import Ember from 'ember';

export default Ember.Component.extend({
	isInfoVisible: false,

	actions: {
		toggleInfo() {
			var isVisible = this.get("isInfoVisible"),
				$info = this.$(".team-member__info"),
				$expand = this.$(".team-member__expand");

			if (isVisible) {
				$info.hide();
				$expand.addClass("team-member__expand_close");
				this.set("isInfoVisible", false)
			} else {
				$info.show();
				$expand.removeClass("team-member__expand_close");
				this.set("isInfoVisible", true)
			}

		}
	}
});
