var express = require('express');
var db = require('../orms/db.js');
var router = express.Router();

router.get('/', function(req, res, next) {
	const {music_id} = req.body;
	db.query('SELECT * FROM comments WHERE music_id=$1',[music_id], (err, ret) => {
		if(err) {
			return next(err);
		}
		res.send(ret.rows); 
	});
});

router.post('/', function(req, res, next) {
	const { user_id, music_id, content } = req.body;
	db.query('INSERT INTO comments (user_id, content, music_id) values($1,$2,$3)', [user_id, content, music_id], (err, ret) => {
		if(err) {
			return next(err);
		}
		res.status(200).json("OK");
	})
});

router.delete('/', function(req, res, next) {
	const {user_id, music_id} = req.body;
	db.query('DELETE FROM comments WHERE user_id=$1 AND music_id=$2', [user_id, music_id], (err, ret) => {
		if(err) {
			return next(err);
		}
		res.status(200).json("OK");
	})
});

module.exports = router;
