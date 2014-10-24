var db = require('../../db/db.received');

var received = {

  getAll: function(received) {
    return db.getAll(received.plate);
  },

  getOne: function(sent) {
    return db.getOne(sent.reminderId);
  },
  
  create: function(sent) {
    var receivedMessage = db.create(sent);
    return receivedMessage;
  },

  delete: function(sent) {
    return db.delete(sent.reminderId);
  }
};

module.exports = received;
