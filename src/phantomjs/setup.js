var system = require('system');
var basePath = system.args[1];
var page = require('./test_page').create(basePath);
var file = require('./tests');
var logError = require('./log_error');

phantom.onError = logError;

page.test(file);
