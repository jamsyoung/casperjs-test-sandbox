/*globals require */

/* usage: casperjs test --direct --log-level=info --disk-cache=no detect-javascript-errors.js */

var casper = require('casper').create({
    verbose: true,
    logLevel: 'info'
});

casper.start('http://www.cnn.com/');

casper.on("page.error", function (msg, trace) {
    'use strict';
    this.log('found page.error');
    this.test.fail(msg);
});

casper.run(function () {
    'use strict';
    this.log('Starting casper.run()', 'info');
    this.test.done();
});
