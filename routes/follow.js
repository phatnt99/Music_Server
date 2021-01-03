var express = require('express');
var db = require('../orms/db.js');
var router = express.Router();

router.post('/ls', function(req, res, next) {
	const {user_id} = req.body;
	db.query('SELECT * FROM follows WHERE user_id=$1',[user_id], (err, ret) => {
		if(err) {
			return next(err);
		}
		res.send(ret.rows); 
	});
});

router.post('/', function(req, res, next) {
	const { user_id, artist_id } = req.body;
	db.query('INSERT INTO follows (user_id, artist_id) values($1,$2)', [user_id, artist_id], (err, ret) => {
		if(err) {
			return next(err);
		}
		res.status(200).json("OK");
	})
});

router.delete('/', function(req, res, next) {
	const {user_id, artist_id} = req.body;
	db.query('DELETE FROM follows WHERE user_id=$1 AND artist_id=$2', [user_id, artist_id], (err, ret) => {
		if(err) {
			return next(err);
		}
		res.status(200).json("OK");
	})
});

module.exports = router;