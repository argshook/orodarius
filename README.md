# Orodarius

<a href="https://travis-ci.org/argshook/orodarius" target="_blank"><img src="https://travis-ci.org/argshook/orodarius.svg?branch=master" alt=""></a>

A youtube video player for reddit

## Setting up

* `npm install` to install node & bower packages
* `npm start` or `npm run dev` to serve
* `npm run prod` to minify javascript and css files for production deployment
* `npm test` to run unit tests with [karma](http://karma-runner.github.io)

You can deploy to `gh-pages` using `npm run deploy`.

Notes:

- Karma will run tests on save. To insure that changes are saved be sure to have `npm start` or `npm run dev` running in the console
- You can set the browsers that you would like to target in the `/test/karma.conf.js` file E.g. `browser = ["ChromeCanary", "Firefox"]`

* `npm run test-e2e` to run e2e tests with [karma](http://karma-runner.github.io) using protractor
