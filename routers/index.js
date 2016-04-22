var utils   = require( '../utils' );
var express = require('express'),
    index  = require('../controllers/index'),
    current_user  = require('../controllers/current_user'),
    create  = require('../controllers/create'),
    del  = require('../controllers/del'),
    edit  = require('../controllers/edit'),
    update  = require('../controllers/update'),
    router  = express.Router();


    router.route('/').get(current_user);
    router.route('/').get(index);
    router.route('/create').post(create);
    router.route('/del/:id').get(del);
    router.route('/edit/:id').get(edit);
    router.route('/update/:id').post(update);

module.exports = router;
