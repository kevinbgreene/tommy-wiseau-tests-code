QUnit.config.timeout = 5000;

if (typeof window.callPhantom === 'function') {
  window.callPhantom({
    type : 'BroswerLog',
    data : '\n\n---------- hi ----------\n\n'
  });
}

QUnit.begin(function(details) {
  if (typeof window.callPhantom === 'function') {
    window.callPhantom({
      type : 'SuiteStart',
      data : details
    });
  }
});

QUnit.log(function(details) {
  if (typeof window.callPhantom === 'function') {
    window.callPhantom({
      type : 'TestComplete',
      data : details
    });
  }
});

QUnit.moduleStart(function(details) {
  if (typeof window.callPhantom === 'function') {
    window.callPhantom({
      type : 'ModuleStart',
      data : details
    });
  }
});

QUnit.moduleDone(function(details) {
  if (typeof window.callPhantom === 'function') {
    window.callPhantom({
      type : 'ModuleComplete',
      data : details
    });
  }
});

QUnit.done(function(details) {
  if (typeof window.callPhantom === 'function') {
    window.callPhantom({
      type : 'SuiteComplete',
      data : details
    });
  }
});
