const catwayService = require('../services/catwayService');


exports.getCatways = async (req, res) => {
  try {
    const catways = await catwayService.getAllCatways();
    res.status(200).json(catways);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des catways' });
  }
};


exports.getCatwayById = async (req, res) => {
  try {
    const catway = await catwayService.getCatwayById(req.params.id);
    if (!catway) return res.status(404).json({ message: 'Catway non trouvé' });
    res.status(200).json(catway);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du catway' });
  }
};


exports.createCatway = async (req, res) => {
  try {
    const { name, location } = req.body;
    const image = req.file?.path; // récupère le chemin du fichier uploadé

    const newCatway = await catwayService.createCatway({ name, location, image });
    res.status(201).json(newCatway);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du catway' });
  }
};


exports.updateCatway = async (req, res) => {
  try {
    const updates = req.body;
    if (req.file) {
      updates.image = req.file.path;
    }

    const updatedCatway = await catwayService.updateCatway(req.params.id, updates);
    if (!updatedCatway) return res.status(404).json({ message: 'Catway non trouvé' });
    res.status(200).json(updatedCatway);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour du catway' });
  }
};


exports.deleteCatway = async (req, res) => {
  try {
    const deleted = await catwayService.deleteCatway(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Catway non trouvé' });
    res.status(200).json({ message: 'Catway supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du catway' });
  }
};