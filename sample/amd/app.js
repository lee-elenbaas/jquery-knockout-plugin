define(['jquery', 'model', 'jquery-knockout-plugin'], function($, Model) {
	$('.model1').koApplyBindings(new Model('Lee'));
	$('.model2').koApplyBindings(new Model('Elenbaas')).css({ background: 'Green' });
});
