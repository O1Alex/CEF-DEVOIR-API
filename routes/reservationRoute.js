const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const reservationController = require('../controllers/reservationController');


router.post('/', auth, upload.single('file'), reservationController.createReservation);
router.get('/', auth, reservationController.getReservations);
router.get('/:id', auth, reservationController.getReservationById);
router.put('/:id', auth, upload.single('file'), reservationController.updateReservation);
router.delete('/:id', auth, reservationController.deleteReservation);

module.exports = router;
