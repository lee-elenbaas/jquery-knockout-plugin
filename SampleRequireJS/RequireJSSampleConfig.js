"use strict";

requirejs.config({
	paths: {
		jquery: "http://code.jquery.com/jquery-2.0.3.min",
		"jquery-knockout-plugin": "../src/jquery-knockout-plugin", 
		knockout: "http://knockoutjs.com/downloads/knockout-3.0.0"
	}
});

requirejs(["RequireJSSampleApp"]);
