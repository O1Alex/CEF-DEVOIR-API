const reservationService = require('../services/reservationService');


exports.getReservations = async (req, res) => {
  try {
    const reservations = await reservationService.getAllReservations();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des réservations' });
  }
};


exports.getReservationById = async (req, res) => {
  try {
    const reservation = await reservationService.getReservationById(req.params.id);
    if (!reservation) return res.status(404).json({ message: 'Réservation non trouvée' });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la réservation' });
  }
};


exports.createReservation = async (req, res) => {
  try {
    const { catway, date } = req.body;
    const fileUrl = req.file?.path;
    const userId = req.user.id;

    const reservation = await reservationService.createReservation({
      user: userId,
      catway,
      date,
      fileUrl,
    });

    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de la réservation' });
  }
};


exports.updateReservation = async (req, res) => {
  try {
    const updates = req.body;
    if (req.file) {
      updates.fileUrl = req.file.path;
    }

    const updated = await reservationService.updateReservation(req.params.id, updates);
    if (!updated) return res.status(404).json({ message: 'Réservation non trouvée' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de la réservation' });
  }
};


exports.deleteReservation = async (req, res) => {
  try {
    const deleted = await reservationService.deleteReservation(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Réservation non trouvée' });
    res.status(200).json({ message: 'Réservation supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de la réservation' });
  }
};
