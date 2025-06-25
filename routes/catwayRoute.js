const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const catwayController = require('../controllers/catwayController');

// CRUD
router.post('/', auth, upload.single('image'), catwayController.createCatway);
router.get('/', catwayController.getCatways);
router.get('/:id', catwayController.getCatwayById);
router.put('/:id', auth, upload.single('image'), catwayController.updateCatway);
router.delete('/:id', auth, catwayController.deleteCatway);

module.exports = router;
