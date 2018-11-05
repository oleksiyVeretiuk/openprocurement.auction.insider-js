// Karma configuration
// Generated on Tue Jun 06 2017 16:26:07 GMT+0300 (EEST)

module.exports = function(config) {
  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      './node_modules/angular/angular.js',
      './node_modules/event-source-polyfill/eventsource.js',
      './node_modules/pouchdb/dist/pouchdb.min.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './node_modules/angular-cookies/angular-cookies.js',
      './node_modules/angular-translate/dist/*.js',
      './node_modules/angular-translate-storage-cookie/*.js',
      './node_modules/angular-translate-storage-local/*.js',
      './node_modules/angular-timer/dist/*.js',
      './node_modules/angular-ui-bootstrap/dist/*.js',
      './node_modules/angular-growl-v2/build/*.js',
      './node_modules/angular-ellipses/src/*.js',
      './node_modules/angular-gtm-logger/*.js',
      './node_modules/mathjs/dist/*.js',
      './src/app/auction.js',
      './src/app/translations.js',
      './src/app/config.js',
      './src/app/factories/*.js',
      './src/app/controllers/*.js',
      './src/app/filters/*.js',
      './src/app/directives/*.js',
      './src/app/tests/auction_data_samples.js',
      './src/app/tests/auction_utils.spec.js',
      './src/app/tests/controllers.spec.js',
      './src/app/tests/filters.spec.js',
      './src/app/tests/utils.spec.js',
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './src/app/auction.js': ['coverage'],
      './src/app/translations.js': ['coverage'],
      './src/app/config.js': ['coverage'],
      './src/app/factories/*.js': ['coverage'],
      './src/app/controllers/*.js': ['coverage'],
      './src/app/filters/*.js': ['coverage'],
      './src/app/directives/*.js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['jsdom'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // optionally, configure the reporter
    coverageReporter: {
      type: 'text'
    }
  };

  // Travis configuration
  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'],
    configuration.singleRun = true,
    configuration.coverageReporter.type = 'lcovonly';
  };

  config.set(configuration);

};