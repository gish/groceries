/* global mocha */

require.config({});

require([
    'spec/app'
], function(app) {
    'use strict';
    console.log('hit');
    mocha.run();
});
