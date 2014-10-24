var client = require('./client');

var sms = {
  triggerSMS: function(reminder) {
  	return client.sendMessage({
      to: reminder.foundUser.phone,
      from: '+19494075322',
      body: 'Someone sent you a Good Carma reminder: ' + reminder.sentMessage
    }, function(error, response) {
      console.log(error || response);
    });
  }
}

module.exports = sms;
