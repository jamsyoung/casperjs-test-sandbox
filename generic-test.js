/*globals require */

/* usage: casperjs generic-test.js */

var casper = require('casper').create({
        verbose: true,
        logLevel: 'error'
    }),
    url = 'http://jamsyoung.com/';


casper.start(url, function () {
    'use strict';
    var description = 'testcase: url: ' + this.getCurrentUrl() + ' - expected: ' + url;
    this.test.assert(this.getCurrentUrl() === url, description);
});


casper.run(function () {
    'use strict';
    this.log('Starting casper.run()', 'info');
    this.test.done();
    this.exit();
});
