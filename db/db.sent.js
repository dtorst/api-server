var db = require('diskdb');
db = db.connect('database', ['sent']);

module.exports = {
  getAll: function(usrId) {
    return db.sent.find({
      "userId": usrId,
      "senderDeleted": false
    });
  },
  getOne: function(remId) {
    return db.sent.findOne({
      "_id": remId
    });
  },
  create: function(sentMsg) {
    return db.sent.save(sentMsg);
  },
  updateStatus: function(remid) {
    return db.sent.update({
      "_id": remid
    }, {
      "senderDeleted": true
    });
  },
  delete: function(remId) {
    return db.sent.remove({
      "_id": remId
    });
  }
};
