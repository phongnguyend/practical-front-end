var stripComments = require('strip-json-comments');

module.exports = function(source) {
  this.cacheable();

  console.log('source', source);
  console.log('strippedSource', stripComments(source));

  return stripComments(source);
}