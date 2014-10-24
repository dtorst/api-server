var express = require('express');
var router = express.Router();

var auth = require('./auth');
var sent = require('./sent');
var received = require('./received');

// AUTH routes
router.post('/api/v1/auth/register', auth.register);
router.post('/api/v1/auth/login', auth.login);
router.get('/api/v1/auth/:userId/account', auth.account);
// router.get('/api/v1/auth/:plate', auth.plate);

// SENT routes
router.get('/api/v1/sent/:userId', sent.getAll); // to find sent messages history + get karma score
router.get('/api/v1/sent/:userId/:reminderId', sent.getOne);
router.post('/api/v1/send/:userId/create', sent.create);
router.delete('/api/v1/sent/:userId/:reminderId', sent.delete); // might deprecate as well


// RECIEVED routes
router.get('/api/v1/received/:plate', received.getAll);
router.get('/api/v1/received/:state/:plate/:reminderId', received.getOne);

module.exports = router;
