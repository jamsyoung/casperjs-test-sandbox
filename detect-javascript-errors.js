/*globals require */

/* usage: casperjs detect-javascript-errors.js */

var casper = require('casper').create({
        verbose: true,
        logLevel: 'error'
    });

casper.start('www.cnn.com', function () { this.echo('Navigating to: ' + url[0] + '\n'); });


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
