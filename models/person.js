var mongoose = require('mongoose' );
mongoose.connect('mongodb://cloris:cloris9885@ds013901.mlab.com:13901/clorishung');
var Schema   = mongoose.Schema;

var Todo = new Schema({
    user_id       : String,
    content       : String,
    post_it_notes : String,
    date1         : String,
    updated_at    : Date
});

module.exports = mongoose.model( 'Todo', Todo );
