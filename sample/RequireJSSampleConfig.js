"use strict";

requirejs.config({
	paths: {
		jquery: "http://code.jquery.com/jquery-2.0.3.min.js",
		"jquery-knockout-plugin": "../src/jquery-knockout-plugin.js", 
		knockout: "http://knockoutjs.com/downloads/knockout-3.0.0.js"
	}
});

requirejs(["RequireJSSampleApp"]);
