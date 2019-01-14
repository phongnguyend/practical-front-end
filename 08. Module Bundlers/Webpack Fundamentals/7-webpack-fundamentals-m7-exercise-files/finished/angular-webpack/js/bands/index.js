module.exports = function(app) {
  require('./band-info')(app);
  require('./bandList')(app);
}