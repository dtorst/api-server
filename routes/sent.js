var msg = require('../messages/messages.js');

var sent = {

  getAll: function(req, res) {
    var sent = req.params;

    if (!sent.userId) {
      // Invalid Data
      res.status(400);
      res.json({
        "status": 400,
        "message": msg.reminder_userIDMissing
      });

    } else {
      try {
        var sentResults = require('../logic/sent/sent').getAll(sent);
        res.status(200);
        res.json({
          "status": 200,
          "message": msg.gbl_success,
          "sentMessages": sentResults
        });
      } catch (e) {
        res.status(500);
        res.json({
          "status": 500,
          "message": msg.gbl_oops
        });
      }
    }
  },


  getOne: function(req, res) {
    var rem = req.params;
    if (!rem.userId || !rem.reminderId) {
      // Invalid Data
      res.status(400);
      res.json({
        "status": 400,
        "message": msg.reminder_inputError
      });
    } else {
      try {
        var sent = require('../logic/sent/sent').getOne(rem);
        res.status(200);
        res.json({
          "status": 200,
          "message": msg.gbl_success,
          "sentMessage": sent
        });
      } catch (e) {
        res.status(500);
        res.json({
          "status": 500,
          "message": msg.gbl_oops
        });
      }

    }
  },


  create: function(req, res) {
    var sent = req.body;
    sent.userId = req.params.userId;

    console.log(sent);

    if (!sent.sentMessage | !sent.plate) {
      // Invalid Data
      res.status(400);
      res.json({
        "status": 400,
        "message": msg.reminder_inputError
      });

    } else {

      // Check user before processing the data
      var user = require('../db/db.auth.js').findById(sent.userId);
      delete user.password;
      if (user) {
        var newScore = user.score++;
        var updateScore = require('../db/db.auth.js').updateScore(sent.userId, newScore);
        var sentMessage = require('../logic/sent/sent').create(sent);
        res.status(200);
        res.json({
          "status": 200,
          "message": msg.remider_newReminderSuccess,
          "sentMessage": sentMessage
        });
      } else {
        res.status(403);
        res.json({
          "status": 403,
          "message": msg.reminder_InvalidUser
        });
      }
    }
  },


  delete: function(req, res) {
    var rem = req.params;
    if (!rem.userId || !rem.reminderId) {
      // Invalid Data
      res.status(400);
      res.json({
        "status": 400,
        "message": msg.reminder_inputError
      });
    } else {
      try {
        var sent = require('../logic/sent/sent').delete(rem);
        res.status(200);
        res.json({
          "status": 200,
          "message": msg.gbl_success,
          "delete": sent
        });
      } catch (e) {
        res.status(500);
        res.json({
          "status": 500,
          "message": msg.gbl_oops
        });
      }

    }
  }
}

module.exports = sent;
