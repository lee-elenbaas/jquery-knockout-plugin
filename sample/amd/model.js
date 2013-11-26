define(['knockout'], function(ko) {
	function Model(name) {
		this.name = ko.observable(name);
	}
	
	return Model;
});
