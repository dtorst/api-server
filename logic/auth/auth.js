var db = require('../../db/db.auth');
var crypt = require('./crypt');

var auth = {

  register: function(user) {
    // create a password hash
    user.password = crypt.encryptPwd(user.password);
    user.score = '0';
    // save the credentials in the database
    return db.register(user);

  },

  login: function(user) {
    var dbUser = db.findUser(user.email);
    if (dbUser) {
      if (crypt.decryptPwd(user.password, dbUser.password)) {
        delete dbUser.password; // Remove the password from response
        return dbUser;
      } else {
        return -1;
      }
    } else {
      return -2;
    }

  },

  account: function(user) {
    return db.findById(user.userId);
  },

  plate: function(user) {
    return db.findByPlate(user.plate);
  }

};

module.exports = auth;
