var client = require('./client');

var call = {
  triggerCall: function(reminder) {
    return client.makeCall({
      to: reminder.user.phone,
      from: '+19494075322',
      url: 'http://642035aa.ngrok.com/call/twiml/' + reminder.user._id + '/' + reminder._id
    }, function(error, response) {
      console.log(error || response);
    });
  }
}

module.exports = call;
