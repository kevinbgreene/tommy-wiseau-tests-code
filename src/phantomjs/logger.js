const fs = require('fs');
const nodeModules = fs.workingDirectory + '/node_modules';

module.exports = {

  error : function(msg, trace) {
    var msgStack = ['ERROR: ' + msg];

    if (trace && trace.length) {
      msgStack.push('TRACE:');
      trace.forEach(function(t) {
        msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function +'")' : ''));
      });
    }

    console.error(msgStack.join('\n'));
    phantom.exit(1);
  },

  log : function(msg) {
    console.log(
      'Msg: ' + msg
    );
  },

  test : function(msg) {
    console.log(
      'Assertion: ' + msg
    );
  },

  suite : function(results) {
    console.log(
      'Total: ' + results.total + ', ' +
      'Failed: ' + results.failed + ', ' +
      'Passed: ' + results.passed + ', ' +
      'Runtime: ' + results.runtime + 'ms'
    );
  },

  module : function(results) {
    console.log(
      'Total: ' + results.total + ', ' +
      'Failed: ' + results.failed + ', ' +
      'Passed: ' + results.passed + ', ' +
      'Runtime: ' + results.runtime + 'ms'
    );
  },

  test : function(results) {
    console.log('results: ' + results.result);
    if (results.result) {
      console.log(
        'Success: ' +
        results.module + ' : ' +
        results.name
      );
    } else {
      console.log(
        'Failed: ' +
        results.module + ' : ' +
        results.name + ' : ' +
        results.message
      );
    }
  }
};
