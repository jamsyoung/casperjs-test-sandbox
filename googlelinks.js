/*jslint browser: true */
/*globals require */

/* usage: $ casperjs googlelinks.js */

var links = [],
    casper = require('casper').create();

function getLinks() {
    'use strict';
    var links = document.querySelectorAll('h3.r a');
    return Array.prototype.map.call(links, function (e) {
        return e.getAttribute('href');
    });
}

casper.start('http://google.fr/', function () {
    'use strict';
    this.fill('form[action="/search"]', { q: 'casperjs' }, true);
});

casper.then(function () {
    'use strict';
    links = this.evaluate(getLinks);
    this.fill('form[action="/search"]', { q: 'phantomjs' }, true);
});

casper.then(function () {
    'use strict';
    links = links.concat(this.evaluate(getLinks));
});

casper.run(function () {
    'use strict';
    this.echo(links.length + ' links found:');
    this.echo(' - ' + links.join('\n - ')).exit();
});
