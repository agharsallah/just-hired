var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProceededSchema = new Schema({
    userId: {type: String, required: true},
    offerID: {type: String, required: true},
    saved: { type: Date, default: Date.now },
});


// Export the model
module.exports = mongoose.model('Activity', ProceededSchema);