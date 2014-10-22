var express = require('express');
var router = express.Router();

var auth = require('./auth');
var sent = require('./sent');
var received = require('./received');
//KILLING FOR NOW: var twilio = require('./twilio');

// AUTH routes
router.post('/api/v1/auth/register', auth.register);
router.post('/api/v1/auth/login', auth.login);
// NEW ONE HERE: eventually will want to add an edit section for making changes to accounts

// SENT routes
router.get('/api/v1/sent/:userId', sent.getAll); // to find sent messages history + get karma score
router.get('/api/v1/sent/:userId/:reminderId', sent.getOne);
router.post('/api/v1/send/:userId/create', sent.create);
// router.put('/api/v1/reminder/:userId/:reminderId/cancel', reminder.cancel); // will eventually deprecate
router.delete('/api/v1/sent/:userId/:reminderId', sent.delete); // might deprecate as well


// RECIEVED routes
router.get('/api/v1/received/:plate', received.getAll);
router.get('/api/v1/received/:state/:plate/:reminderId', received.getOne);

// TWILIO Call route - TWIML Response
// KILLING FOR NOW
// router.post('/call/twiml/:userId/:reminderId', twilio.getTwiml); // eventually will need to figure out how to fire this without a scheduled time, i.e. as soon as it's sent

module.exports = router;
