!function($){
	"use strict";

	$.fn.koApplyBindings = function(viewModel) {
		return this.each(function() {
			ko.applyBindings(viewModel, this);
		});
	};
}(jQuery);
