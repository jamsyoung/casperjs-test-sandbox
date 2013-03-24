/*globals require */

/* usage: casperjs --url=http://www.cnn.com/ cli-arguments.js */

var casper = require('casper').create({
        verbose: true,
        logLevel: 'error'
    }),
    url = casper.cli.get('url');


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
