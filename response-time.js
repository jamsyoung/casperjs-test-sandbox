/* usage: casperjs response-time.js http://www.cnn.com */

var casper = require('casper').create(),
    url = casper.cli.args[0],
    startTime = 0,
    endTime = 0;

console.log('Navigating to: ' + url);
casper.start(url);

casper.on('http.status.301', function () {
    startTime = new Date();
});

casper.on('http.status.302', function () {
    startTime = new Date();
});

casper.on('url.changed', function (url) {
    endTime = new Date();
    console.log('Redirected to: ' + url);
});

casper.run(function () {
    console.log(((endTime - startTime) / 1000) + 'ms');
    this.test.done();
    this.exit();
});
