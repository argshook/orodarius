# angular-brunch-seed-no-fuss
### A starter project for AngularJS using Brunch.io

[AngularJS](http://angularjs.org) + [Brunch](http://brunch.io)

Features:
* Full JS & HTML (no Coffeescript, no Jade) & SCSS automatically compiled on save (No ruby, we use node-sass & node-bourbon !)
* [BrowserSync](http://www.browsersync.io/): during development it will auto-reload to save you from manually refreshing the page, the css is automatically injected and all your browsers are synchronized
* Javascript / CSS minification for production, and with [ng-annotate](https://github.com/olov/ng-annotate) you don't even have to worry about Angular injections
* ES6 ready with [Traceur compiler](https://github.com/google/traceur-compiler): your ES6 code will be automically compiled to ES5 and will work in all current browsers
* CSS3 ready with [Autoprefixer](https://github.com/postcss/autoprefixer): write CSS3 and vendor prefixes are added when needed
* [karma](http://karma-runner.github.io) integration for unit & e2e tests
* Bootstrap 3
* Compatible with IE9+ (if you need a version compatible with IE8, get the release 0.4.1)
* Be consistent, with the [.editorconfig file](http://editorconfig.org/) your coding style will be the same across IDEs & editors (adapt it to your coding preferences)

## Alternate Versions

- [Original angular-brunch-seed](https://github.com/scotch/angular-brunch-seed)
- [Livescript](https://github.com/clkao/angular-brunch-seed-livescript) by [Chia-liang Kao](https://github.com/clkao)
- [angular-brunch-true-north: CoffeeScript + Jade] (https://github.com/scoarescoare/angular-brunch-true-north) - the base for this project

## How to use angular-brunch-seed-no-fuss

* `git clone https://github.com/ocombe/angular-brunch-seed-no-fuss` to clone the **angular-brunch-seed-no-fuss** repository
* `cd angular-brunch-seed-no-fuss`
* `npm install` to install node & bower packages

or if you have **Brunch** installed, create a directory for your app, `cd` into it and run:

`brunch new gh:ocombe/angular-brunch-seed-no-fuss`

### Running the app during development

* `npm start` to serve using **Brunch**

Then navigate your browser to [http://localhost:3333](http://localhost:3333)
If you use your own server, you can use the development script :

* `npm run dev`

### Running the app in production

* `npm run prod` to minify javascript and css files for production deployment

Please be aware of the caveats regarding Angular JS and minification, take a look at [Dependency Injection](http://docs.angularjs.org/guide/di) for information.

### Running unit tests

* `npm test` to run unit tests with [karma](http://karma-runner.github.io)
* Open the browser you would like to test to [http://localhost:3334](http://localhost:3334)

Notes:

- Karma will run tests on save. To insure that changes are saved be sure to have `npm start` or `npm run dev` running in the console
- You can set the browsers that you would like to target in the `/test/karma.conf.js` file E.g. `browser = ["ChromeCanary", "Firefox"]`

### End to end testing

* Run the app in development mode as described above using a separate terminal
* `npm run test-e2e` to run e2e tests with [karma](http://karma-runner.github.io) using protractor
* Be aware that changing the SCSS files will compile the new CSS while the server is running, but that it won't trigger a e2e test reload, you'll have to manually relaunch the test server fow now

### Common issues

`EMFILE` error
- EMFILE means there are too many open files. Brunch watches all your project files and it's usually a pretty big number. You can fix this error with setting max opened file count to bigger number with command ulimit -n <number> (10000 should be enough).

The complete [Brunch FAQ](https://github.com/brunch/brunch/blob/master/docs/faq.md)

## Contributors

Olivier Combe

For more information on angular please check out <http://angularjs.org>
