// Karma configuration
// Generated on Tue Jul 02 2013 17:07:14 GMT+0200 (Paris, Madrid (heure d’été))

module.exports = function(karma) {
  karma.set({

    // base path, that will be used to resolve files and exclude
    basePath: 'test',

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      '../node_modules/es5-shim/es5-shim.js',
      '../bower_components/jquery/dist/jquery.js',
      '../bower_components/lodash/dist/lodash.js',
      '../bower_components/angular/angular.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../bower_components/angular-resource/angular-resource.js',
      '../bower_components/angular-sanitize/angular-sanitize.js',
      '../bower_components/angular-local-storage/dist/angular-local-storage.js',

      '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
      '../node_modules/ng-directive-compiler-helper/lib/ng-directive-compiler-helper.js',
      '../app/assets/views/**.html',

      '../app/js/**/*.js',

      'mocks/**.js',
      'unit/**/*.spec.js'
      ],

    // list of files to exclude
    exclude: [''],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['dots', 'coverage'],

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
      '../app/js/**/*.js': ['babel', 'coverage'],
      '../app/assets/**/*.html': ['ng-html2js'],
      'unit/**/*.js': ['babel']
    },

    coverageReporter: {
      type : 'lcov',
      dir : '../coverage/'
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'orodarius.templates',
      cacheIdFromPath: function(filepath) {
        return filepath.match(/(?:\/)(views\/.*\.html?$)/)[1];
      },
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
      'karma-ng-html2js-preprocessor',
      'karma-babel-preprocessor'
    ]
  });
};
