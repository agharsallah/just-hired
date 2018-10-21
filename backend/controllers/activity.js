var Activity = require('../models/activity');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.activity_create = function (req, res) {
    console.log(req.body.userId);

    var activity = new Activity(
        {
            userId: req.body.userId,
            offerID: req.body.offerID,
        }
    );

    activity.save(function (err) {
        if (err) {
            console.log('error on save: ');
        }
        res.send('Activity Created successfully')
    })
};

exports.activity_details = function (req, res) {
    Activity.find({}, function (err, activity) {
        if (err) console.log('error getting data: ');
        res.send(activity);
    })
};

