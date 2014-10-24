var db = require('diskdb');
db = db.connect('database', ['received']);

module.exports = {
  getAll: function(plate) {
    return db.received.find({
      "plate": plate
    });
  },
  getOne: function(remId) {
    return db.received.findOne({
      "_id": remId
    });
  },
  create: function(sentMsg) {
    return db.received.save(sentMsg);
  },
  updateStatus: function(remid) {
    return db.received.update({
      "_id": remid
    }, {
      "isCompleted": true
    });
  },
  delete: function(remId) {
    return db.received.remove({
      "_id": remId
    });
  }
};
