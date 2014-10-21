var msg = require('../messages/messages.js');

var received = {

  getAll: function(req, res) {
    var received = req.params;

    if (!received.state || !received.plate) {
      // Invalid Data
      res.status(400);
      res.json({
        "status": 400,
        "message": msg.reminder_userIDMissing
      });

    } else {
      try {
        var received = require('../logic/received/received').getAll(received);
        res.status(200);
        res.json({
          "status": 200,
          "message": msg.gbl_success,
          "receivedMessages": received
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
    if (!rem.state || !rem.plate || !rem.reminderId) {
      // Invalid Data
      res.status(400);
      res.json({
        "status": 400,
        "message": msg.reminder_inputError
      });
    } else {
      try {
        var received = require('../logic/received/received').getOne(rem);
        res.status(200);
        res.json({
          "status": 200,
          "message": msg.gbl_success,
          "receivedMessage": received
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

}

module.exports = received;
