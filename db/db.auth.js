var db = require('diskdb');
db = db.connect('database', ['users']);

module.exports = {
  register: function(user) {
    var hasDuplicate = this.findUser(user.email);
    if (hasDuplicate) {
      return -1; // duplicate
    } else {
      return db.users.save(user);
    }
  },
  findUser: function(email) {
    return db.users.findOne({
      "email": email
    });
  },
  findById: function(id) {
    return db.users.findOne({
      "_id": id
    });
  },
  findByPlate: function(plate) {
    return db.users.findOne({
      "plate": plate
    });
  }
};
