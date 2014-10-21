var db = require('diskdb');
db = db.connect('database', ['sent']);

module.exports = {
  getAll: function(plate) {
    return db.sent.find({
      "plate": plate
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
      "isCompleted": true
    });
  },
  delete: function(remId) {
    return db.sent.remove({
      "_id": remId
    });
  }
};
