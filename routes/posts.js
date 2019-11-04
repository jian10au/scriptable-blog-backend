const express = require('express');
const router = express.Router();

const { index, create, update, destroy } = require('../controllers/posts-controller');

router.get('/', index);
router.post('/', express.json(), create)
router.put('/', express.json(), update)
router.delete('/', express.json(), destroy)

module.exports = router;