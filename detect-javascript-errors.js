/*globals require */

/* usage: casperjs detect-javascript-errors.js */

var casper = require('casper').create({
        verbose: true,
        logLevel: 'error'
    }),
    url = [
        'http://www.cnn.com/',
        'http://jamsyoung.com/',
        'http://www.yahoo.com/'
    ];


casper.start(url[0], function () { this.echo('Navigating to: ' + url[0] + '\n'); });
casper.thenOpen(url[1], function () { this.echo('Navigating to: ' + url[1] + '\n'); });
casper.thenOpen(url[2], function () { this.echo('Navigating to: ' + url[2] + '\n'); });


casper.on('page.error', function (msg, trace) {
    'use strict';
    var errorMessage = 'Error: ' + msg + '\n',
        indent = '     ';

    errorMessage += indent + 'File: ' + trace[0].file + '\n';
    errorMessage += indent + 'Line: ' + trace[0].line + '\n';
    errorMessage += indent + 'Function: ' + trace[0]['function'];
    this.test.fail(errorMessage);
});


casper.run(function () {
    'use strict';
    this.test.done();
    this.exit();
});
