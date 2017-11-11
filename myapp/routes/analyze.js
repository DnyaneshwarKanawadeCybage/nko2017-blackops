const { Router } = require('express');
const { check, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

const router = Router();

router.post('/', [
  check('username').trim(),
  check('password', 'passwords must be at least 5 chars long and contain one number').isLength({ min: 5 }),
  check('text', 'text must be at least 140 chars long and contain one number').isLength({ min: 140 })
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.mapped() });
  }

  const {
    username,
    password,
    text
  } = matchedData(req);
  
  const nlu = new NaturalLanguageUnderstandingV1({
    "username": username,
    "password": password,
    'version_date': '2017-02-27'
  });
    
  const parameters = {
    'text': text,
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

  nlu.analyze(parameters, function(err, response) {
    if (err) {
      return next({
        status: err.code,
        message: err.error
      });
    }
    
    res.send(JSON.stringify(response, null, 2));
  });

});

module.exports = router;
