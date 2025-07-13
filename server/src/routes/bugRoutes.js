const express = require('express');
const router = express.Router();
const bugCtrl = require('../controllers/bugController');

router.get('/', bugCtrl.getAllBugs);
router.post('/', bugCtrl.createBug);
router.put('/:id', bugCtrl.updateBug);
router.delete('/:id', bugCtrl.deleteBug);

module.exports = router;