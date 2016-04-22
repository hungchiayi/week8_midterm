var Todo = require('../models/person');

module.exports = function ( req, res, next ){
  new Todo({
      user_id    : req.cookies.user_id,
      content    : req.body.content,
      post_it_notes: req.body.post_it_notes,
      date1        : req.body.date1,
      updated_at : Date.now()
  }).save( function ( err, todo, count ){
    if( err ) return next( err );

    res.redirect( '/' );
  });
};
