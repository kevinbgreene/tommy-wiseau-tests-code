module.exports = {

  options : {
    path : '/',
    platform : 'desktop'
  },

  tests : function() {

    QUnit.module('home page');

    QUnit.test('Should have a test div', function(assert) {
      var divs = document.querySelectorAll('#test-div');
      assert.ok(divs.length !== 0);
    });
  }
};
