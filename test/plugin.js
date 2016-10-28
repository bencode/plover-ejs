'use strict';


const pathUtil = require('path');
const mm = require('plover-test-mate');


describe('plugin', function() {
  const app = mm({
    applicationRoot: pathUtil.join(__dirname, 'fixtures/app'),
    expectRoot: pathUtil.join(__dirname, 'fixtures/expect')
  });

  app.use(require('../lib/plugin'));

  app.it('/index', 'index.html');
});
