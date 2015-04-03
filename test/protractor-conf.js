exports.config = {
	allScriptsTimeout: 11000,

	specs: [
		'e2e/**/*.js'
	],

	// Start these browsers, currently available:
	// - chrome
	// - ChromeCanary
	// - Firefox
	// - Safari
	// - PhantomJS
	// - IE (only Windows)
	// - iOS (only Mac)
	multiCapabilities: [{
		'browserName': 'chrome'
	}],

	baseUrl: 'http://localhost:3333/',

	framework: 'jasmine2',

	jasmineNodeOpts: {
		defaultTimeoutInterval: 60000
	}
};
