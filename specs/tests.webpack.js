// ES5 shims for Function.prototype.bind, Object.prototype.keys, etc.
require('core-js/es5');
// Replace ./src/js with the directory of your application code and
// make sure the file name regexp matches your test files.
var context = require.context('./', true, /\.spec\.js$/);
context.keys().forEach(context);
