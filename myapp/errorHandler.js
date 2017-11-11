'use strict';

const { HTTP_STATUS } = require('./constants');

module.exports = {
  ForwardErrorHandler(req, res, next) {
    let err = new Error(HTTP_STATUS.CLIENT.NOT_FOUND.MSG);
    err.status = HTTP_STATUS.CLIENT.NOT_FOUND.CODE;
    next(err);
  },

  ErrorHandler(err, req, res, next) {
    const {
      status,
      message
    } = err;

    res.status(status || HTTP_STATUS.SERVER.INTERNAL_SERVER_ERROR.CODE).send({
      message: message || HTTP_STATUS.SERVER.INTERNAL_SERVER_ERROR.MSG
    });

    next();
  }
}