var exec = require('cordova/exec');

exports.sayHello = function (arg0, success, error) {
  exec(success, error, 'CordovaPluginJavaConnection', 'sayHello', [arg0]);
};
