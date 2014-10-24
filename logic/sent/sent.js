var db = require('../../db/db.sent');
var recd = require('../../db/db.received');
var registeredUsers = require('../../db/db.auth');
var tSMS = require('../twilio/triggerSMS');

var sent = {

  getAll: function(sent) {
    return db.getAll(sent.userId);
  },

  getOne: function(sent) {
    return db.getOne(sent.reminderId);
  },
  
  create: function(sent) {

    var sentMessage = db.create(sent);

    var recipient = sentMessage;

    if (sentMessage) {
      if (!registeredUsers.findByPlate(sentMessage.plate)) {

        recipient.foundUser = false;
        return recd.create(sent);
      } else {
        recipient.foundUser = registeredUsers.findByPlate(sentMessage.plate);
        tSMS.triggerSMS(recipient);
        return recd.create(sent);
      }
    }
    return sentMessage;
  },

  delete: function(sent) {
    return db.updateStatus(sent.reminderId);
  }
};

module.exports = sent;
