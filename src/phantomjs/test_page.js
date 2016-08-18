var fs = require('fs');
var webpage = require('webpage');
var Logger = require('./logger');
var messageHandler = require('./message_handler');
var setPlatform = require('./set_platform');

var nodeModules = fs.workingDirectory + '/node_modules';
//const QUnit = require(nodeModules + '/qunitjs/qunit/qunit.js');
var qunitPath = nodeModules + '/qunitjs/qunit/qunit.js';

console.log('qunitPath: ' + qunitPath);

function TestPage(basePath) {
  this.basePath = basePath;
  this.page = webpage.create();
  this.page.onError = Logger.error;
  this.page.onCallback = messageHandler(this.page);
}

TestPage.prototype.test = function(config) {

  console.log('config: ',  JSON.stringify(config));

  var page = this.page;
  var options = config.options;
  var tests = config.tests;
  var url = this.basePath + options.path;

  setPlatform(page, options.platform);

  page.onResourceRequested = function(requestData, networkRequest) {
    console.log('\n');
    console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
    console.log('\n');
  };

  page.open(url, function() {

    console.log('\n\n');
    console.log('OPEN: ' + url);
    console.log('\n\n');

    var qStatus = page.injectJs(qunitPath);
    var gStatus = page.injectJs('bind_qunit.js');

    console.log('qStatus: ' + qStatus);
    console.log('gStatus: ' + gStatus);

    if (qStatus && qStatus) {
      page.evaluate(config.tests);
      page.render('./tmp/screenshot-0.png');
    } else {
      throw new Error('Unable to inject test scripts');
    }
  });
};

module.exports = {
  create : function(basePath) {
    console.log('\n\n');
    console.log('CREATE');
    console.log('\n\n');
    return new TestPage(basePath);
  }
};
