var express = require('express');
var router = express.Router();
var path = require('path');
var RealLifeQuestion = require('../models/realLifeQuestionsSchema');

router.post('/post', function(req, res) {
    let question = new RealLifeQuestion(req.body);
    question.save(function(err) {
        if (err) {
            res.sendStatus(500);
            return;
        } else {
            res.sendStatus(200);
        }
    });
});

router.get('/get', function (req, res) {
  RealLifeQuestion.find({"page":"realLifeProblems"}, function (err, questions) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(questions);
  });
});

module.exports = router;
