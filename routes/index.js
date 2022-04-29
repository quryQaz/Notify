const path              = require('path');
const fs                = require('fs');
const express           = require('express');
const router            = express.Router();

const response = data => ({ message: data });

router.get('/', (req, res) => {
	return res.sendFile(path.resolve('views/index.html'));
});

router.post('/api/test', (req, res) => {
	return res.send(response('Missing parameters'));
});

module.exports = () => {
	return router;
};
