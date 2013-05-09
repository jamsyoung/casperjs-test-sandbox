/*globals require */

/* usage: casperjs detect-javascript-errors.js http://www.cnn.com */

var casper = require('casper').create({
        verbose: true,
        logLevel: 'error'
    }),
    url = casper.cli.args[0];

// console.log(casper.cli.args);

casper.start(url, function () { this.echo('Navigating to: ' + url + '\n'); });


casper.on('page.error', function (msg, trace) {
    var errorMessage = 'Error: ' + msg + '\n',
        indent = '     ';

    errorMessage += indent + 'File: ' + trace[0].file + '\n';
    errorMessage += indent + 'Line: ' + trace[0].line + '\n';
    errorMessage += indent + 'Function: ' + trace[0]['function'];
    this.test.fail(errorMessage);
});


casper.run(function () {
    this.test.done();
    this.exit();
});
