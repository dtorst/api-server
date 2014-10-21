var db = require('../../db/db.received');
// var shdlr = require('../scheduler/schedule');

var received = {

  getAll: function(received) {
    return db.getAll(received.plate);
  },

  getOne: function(sent) {
    return db.getOne(sent.reminderId);
  },
  
  create: function(sent) {
// KFN:    reminder.isCompleted = false;
    var sentMessage = db.create(sent);
    // Schedule SMS/Call
    // KILLING FOR NOW
/*    if (savedReminder) {
      if (String(savedReminder.shdlCall).toLowerCase() != 'false') {
        savedReminder.callJob = shdlr.scheduleCall(savedReminder);
      }
      if (String(savedReminder.shdlSMS).toLowerCase() != 'false') {
        savedReminder.smsJob = shdlr.scheduleSMS(savedReminder);
      }
    } */
    return sentMessage;
  },


/*  cancel: function(reminder) {
    return shdlr.cancelJob(reminder.reminderId);
  }, */

  delete: function(sent) {
    // cancel jobs
// KFN:    shdlr.cancelJob(reminder.reminderId);

    // remove the saved schedules
// KFN:    require('../../db/db.schedule').deleteJob(reminder.reminderId);

    // delete the reminder
    return db.delete(sent.reminderId);
  }
};

module.exports = received;
