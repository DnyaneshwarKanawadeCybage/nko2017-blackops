const { Router } = require('express');
const { check, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
const { HTTP_STATUS } = require('../constants');

const router = Router();

router.post('/', [
  check('username').trim(),
  check('password', 'passwords must be at least 5 chars long and contain one number').isLength({ min: 5 }),
  check('text').optional(),
  check('url').optional()
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next({
      status: HTTP_STATUS.CLIENT.UNPROCESSABLE_ENTITY.CODE,
      message: errors.mapped()
    });
  }

  const {
    username,
    password,
    text,
    url
  } = matchedData(req);
  
  const nlu = new NaturalLanguageUnderstandingV1({
    "username": username,
    "password": password,
    'version_date': '2017-02-27'
  });
    
  let parameters = {
    'features': {
      'entities': {
        'emotion': true,
        'sentiment': true,
        'limit': 2
      },
      'keywords': {
        'emotion': true,
        'sentiment': true,
        'limit': 2
      }
    }
  }

  if (url) {
    parameters.url = url;
  } else {
    parameters.text = text;
  }
  
  nlu.analyze(parameters, function(err, response) {
    if (err) {
      let errRes = {
        errRes: err.code,
        message: err.error
      }

      if (err.code === HTTP_STATUS.CLIENT.UNAUTHORIZED.CODE) {
        errRes = {
          errRes: HTTP_STATUS.CLIENT.UNAUTHORIZED.CODE,
          message: "Bluemix is not to authenticate your credentials. To get your username and password, you'll need to sign up for IBM Bluemix"
        }
      }
      
      return next(errRes);
    }
    
    res.send(response);
  });

});

module.exports = router;
