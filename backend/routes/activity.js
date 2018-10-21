var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var activity_controller = require('../controllers/activity');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', activity_controller.test);


router.post('/proceedCand', activity_controller.activity_create);

router.get('/get_proceeded', activity_controller.activity_details);


module.exports = router;