// Karma configuration
// Generated on Tue Jul 02 2013 17:07:14 GMT+0200 (Paris, Madrid (heure d’été))

module.exports = function(karma) {
  karma.set({

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // Application Code
      'public/js/vendor.js',
      'public/js/app.js',

      'node_modules/es5-shim/es5-shim.js',
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-local-storage/dist/angular-local-storage.js',
      'test/mocks/**/*.js',
      'test/unit/**/*.spec.js',

      // if you wanna load template files in nested directories, you must use this
      '**/assets/views/**/*.html'
      ],

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9005,

    // cli runner port
    runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
    logLevel: karma.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    preprocessors: {
      '**/public/**/!(vendor).js': 'coverage',
      // '**/public/**/views/**/*.html': ['ng-html2js'],
      '**/*.html': ['ng-html2js'],
    },

    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/'
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'orodarius.templates',
      stripPrefix: 'app/assets/'
    },

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Safari
    // - PhantomJS
    // - IE (only Windows)
    // - iOS (only Mac)
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    reportSlowerThan: 500,

    proxies: {
      '/': 'http://localhost:3333/'
    },

    // urlRoot: '__karma__',
    urlRoot: '',

    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher',
      'karma-phantomjs-launcher',
      'karma-junit-reporter',
      'karma-html2js-preprocessor',
      'karma-ng-html2js-preprocessor'
    ]
  });
};
