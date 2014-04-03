module.exports = function(app, express) {
  var config = this;
  var stylus = require('stylus')
  var nib = require('nib')

  function compile(str, path) {
    return stylus(str)
      .set('filename', path)
      .use(nib());
  }

  app.set('views', __dirname + '/views')
  app.set('view engine', 'jade')

  app.use(express.logger('dev'))
  app.use(stylus.middleware(
    { src: __dirname + '/public',
      compile: compile
    }
  ))

  app.use(express.static(__dirname + '/public'))
}
