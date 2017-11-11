'use strict';

module.exports = {
  ForwardErrorHandler(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  },

  ErrorHandler(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === "development" ? err : {};
  
    if (err.status === 401) {
      res.status(err.status).send({
        "message": res.locals.message
      });
    } else {
      res.status(err.status || 500).send({
        "message": "Internal Server Error!"
      });
    }

    next();
  }
}