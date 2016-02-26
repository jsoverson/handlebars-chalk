
var chalk = require('chalk');

module.exports = function(Handlebars) {
  Handlebars.registerHelper('chalk', function(/* args..., options */) {
    var args = Array.prototype.slice.apply(arguments);
    var options = args.pop();
    var chalkFn = args.reduce(function(p,n){return p[n]}, chalk);
    return chalkFn(options.fn(this));
  });
};
