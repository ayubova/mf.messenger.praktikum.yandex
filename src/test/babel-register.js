const register = require('@babel/register').default;

register({extensions: ['.ts', '.js']});

require('jsdom-global/index')();
