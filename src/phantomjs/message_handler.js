var Logger = require('./logger');
var counter = 0;

module.exports = function messageHandler(page) {

  return function(msg) {

    switch(msg.type) {

      case 'TestComplete':
        Logger.test(msg.data);
        if (msg.data.result === false) {
          page.render('./tmp/screenshot-' + counter + '.png');
          counter += 1;
        }
        break;

      case 'ModuleComplete':
        Logger.module(msg.data);
        break;

      case 'SuiteComplete':
        Logger.suite(msg.data);
        phantom.exit(msg.data.failed);
        break;

      case 'BroswerLog':
        Logger.log(msg.data);
        break;

      default:
        console.log('Unrecognized msg type: ' + msg.type);
    }
  };
};
