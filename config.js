var path = require('path');

exports.config = {
  // See docs at https://github.com/brunch/brunch/blob/master/docs/config.md
  modules: {
    definition: false,
    wrapper: false
  },

  paths: {
    public: 'public',
    watched: ['app', 'vendor', 'mocks']
  },

  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/vendor.js': [
          /^vendor/,

          // external libs
          // TODO: move out from here to load from cdn?
          'bower_components/jquery/dist/jquery.js',
          'bower_components/lodash/dist/lodash.js',

          // angular
          'bower_components/angular/angular.js',
          'bower_components/angular-resource/angular-resource.js',
          'bower_components/angular-sanitize/angular-sanitize.js',
          'bower_components/angular-animate/angular-animate.js',
          'bower_components/angular-local-storage/dist/angular-local-storage.js',
          'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js'
        ],
        // 'test/scenarios.js': /^test(\/|\\)e2e/,
        'js/mocks.js': [
          'bower_components/angular-mocks/angular-mocks.js', // this is not getting compiled and fuck knows why
          'test/mocks/orodarius-mocks.js'
        ]
      },
      order: {
        before: [
          // jquery
          'bower_components/jquery/jquery.js',

          // angular
          'bower_components/angular/angular.js',

          // bootstrap
          'bower_components/bootstrap/dist/js/bootstrap.js'
        ]
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^app/
      }
    }
  },

  plugins: {
    ng_annotate: {
      pattern: /^app/
    },
    ES6to5: {},
    autoprefixer: {
      browsers: [
        'last 2 version',
        '> 1%', // browsers with > 1% usage
        'ie >= 9'
      ],
      cascade: false
    }
  },

  server: {
    port: 3333
  },

  conventions: {
    assets: /app(\\|\/)assets(\\|\/)/
  },

  sourceMaps: true
};
