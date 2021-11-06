module.exports = function (app) {
    app.use(function (req, res) {
      res.render('_error/404', {
        layout: false
      })
  
    });
  
    app.use(function (err, req, res, next) {
      console.error(err.stack);
      res.render('_error/500', {
        layout: false
      })
    })
  }