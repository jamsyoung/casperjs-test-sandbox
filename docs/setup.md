# How to setup your environment

- Clone this repository

        $ cd ~/dev
        $ git clone git://github.com/jamsyoung/casperjs-test-sandbox.git


- Install PhantomJS: Cross refrence this with the most current version of
  PhantomJS from [http://phantomjs.org/download.html][0].  Install PhantomJS by
  doing the following:

        $ cd ~/dev
        $ mkdir phantomjs
        $ cd phantomjs
        $ curl -O http://phantomjs.googlecode.com/files/phantomjs-1.8.2-macosx.zip
        $ unzip phantomjs-1.8.2-macosx.zip
        $ cd phantomjs-1.8.2-macosx
        $ sudo ln -sf `pwd`/bin/phantomjs /usr/local/bin/phantomjs


- Install CasperJS: Cross refrence this with the most current version of
  CasperJS from [http://casperjs.org/install][1].  Install CasperJS by doing
  the following:

        $ cd ~/dev
        $ git clone git://github.com/n1k0/casperjs.git
        $ cd casperjs
        $ git checkout -f tags/1.0.2
        $ sudo ln -sf `pwd`/bin/casperjs /usr/local/bin/casperjs


- Confirm things installed correctly.

        $ phantomjs --version
        1.8.2

        $ casperjs --version
        1.0.2


- Test it out on a script in this package

        $ cd ~/dev/casperjs-test-sandbox
        $ casperjs test --direct --log-level=info --disk-cache=no detect-javascript-errors.js


## Example of test failure
![](http://grab.by/kT16)


## Example of test passing
![](http://grab.by/kT1k)

The WARN is interesting, maybe it thinks no tests ran because there were no
failures?  Unlikely, I probalby have something wrong in my test script.

Note the results are stored in casper-results.xml.




[0]: http://casperjs.org/install
[1]: http://phantomjs.org/download.html
