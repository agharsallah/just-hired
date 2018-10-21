// app.js

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')

var activity = require('./routes/activity'); // Imports routes for the activities
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://hackupc:hackupc18@ds237363.mlab.com:37363/hackupc_job';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', activity);

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
