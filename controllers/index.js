var Todo = require('../models/person');

module.exports = function ( req, res, next ){
  var user_id = req.cookies ?
    req.cookies.user_id : undefined;
      Todo.find({ user_id : user_id }).sort( '-updated_at' ).exec( function ( err, todos ){
      if( err ) return next( err );

      res.render( 'index', {
          title : 'SuperList',
          todos : todos
      });
    });
};
