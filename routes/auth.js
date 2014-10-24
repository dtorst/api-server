var msg = require('../messages/messages.js');

var auth = {
  register: function(req, res) {
    var user = req.body;

    if (!user.email || !user.password || !user.plate || !user.phone) {
      // Invalid Data
      res.status(400);
      res.json({
        "status": 400,
        "message": msg.auth_inputError
      });

    } else {
      var savedUser = require('../logic/auth/auth').register(user);
      delete savedUser.password;
      if (savedUser == -1) {
        res.status(409);
        res.json({
          "status": 409,
          "message": msg.auth_duplicateUser
        });
      } else {
        res.json({
          "status": 200,
          "message": msg.auth_registerSuccess,
          "user": savedUser
        });
      }
    }
  },
  login: function(req, res) {
    var user = req.body;
    if (!user.email || !user.password) {
      // Invalid Data
      res.status(400);
      res.json({
        "status": 400,
        "message": msg.auth_inputError
      });

    } else {
      var dbUser = require('../logic/auth/auth').login(user);
      if (dbUser == -1 || dbUser == -2) {
        res.status(400);
        res.json({
          "status": 400,
          "message": msg.auth_loginFailed
        });
      } else {
        res.json({
          "status": 200,
          "message": msg.auth_loginSuccess,
          "user": dbUser
        });
      }
    }
  },

  account: function(req, res) {
    var user = req.params;

    if (!user.userId) {
      // Invalid Data
      res.status(400);
      res.json({
        "status": 400,
        "message": msg.reminder_userIDMissing
      });

    } else {
      try {
        var accountResults = require('../logic/auth/auth').account(user);
        res.status(200);
        console.log(accountResults);
        res.json({
          "status": 200,
          "message": msg.gbl_success,
          "account": accountResults
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

module.exports = auth;
