var express = require('express');
var router = express.Router();

var auth = require('./auth');
var reminder = require('./reminder');
//KILLING FOR NOW: var twilio = require('./twilio');

// AUTH routes
router.post('/api/v1/auth/register', auth.register);
router.post('/api/v1/auth/login', auth.login);
// NEW ONE HERE: eventually will want to add an edit section for making changes to accounts

// REMINDER routes
router.get('/api/v1/reminders/:userId', reminder.getAll); // eventually this will serve as the history API, to show karma points and how a user got there
router.get('/api/v1/reminder/:userId/:reminderId', reminder.getOne);
router.post('/api/v1/reminder/:userId/create', reminder.create); // this will be the main one to work on at first
router.put('/api/v1/reminder/:userId/:reminderId/cancel', reminder.cancel); // will eventually deprecate
router.delete('/api/v1/reminder/:userId/:reminderId', reminder.delete); // might deprecate as well

// TWILIO Call route - TWIML Response
// KILLING FOR NOW
// router.post('/call/twiml/:userId/:reminderId', twilio.getTwiml); // eventually will need to figure out how to fire this without a scheduled time, i.e. as soon as it's sent

module.exports = router;
