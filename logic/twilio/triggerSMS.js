var client = require('./client');

var sms = {
  triggerSMS: function(reminder) {
  	return client.sendMessage({
      to: reminder.user.phone,
      from: '+19494075322',
      body: '[Reminder] : ' + reminder.remindThis
    }, function(error, response) {
      console.log(error || response);
    });
  }
}

module.exports = sms;
