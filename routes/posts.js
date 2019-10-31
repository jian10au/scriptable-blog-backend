const express = require('express');
const router = express.Router();

const { index, create } = require('../controllers/posts-controller');

router.get('/', index);
router.post('/', express.json(), create)

module.exports = router;