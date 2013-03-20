casper.log('Starting javascript-errors.js', 'info');

casper.start('http://www.cnn.com/');

casper.on("page.error", function(msg, trace) {
    this.test.fail(msg);
});

casper.run(function() {
    this.log('Starting casper.run()', 'info');
    this.test.renderResults(true, 0, 'casper-results.xml');
    this.test.done();
});
