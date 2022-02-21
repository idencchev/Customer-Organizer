const router = require('express').Router();
const { addInGarage, getAllCarsFromGarage, deleteCar, editCarDetails, getCarById, moveToArchive, getAllCarsFromArchive } = require('../services/garageService');
const { isAuthenticated, isAdmin } = require('../middlewares/auth');

router.post('/create', isAuthenticated, async (req, res) => {
  try {

    const carData = await addInGarage(req.body);
    res.status(201).json({ message: `${carData.plateNumber} was put in the garage successfully.` });

  } catch (error) {
    return res.status(409).json({ error });
  }
});

router.get('/archive', isAuthenticated, async (req, res) => {
  try {

    const garageData = await getAllCarsFromArchive();
    res.status(200).json(garageData);

  } catch (error) {
    return res.status(409).json({ error });
  }

});

router.get('/', isAuthenticated, async (req, res) => {
  try {

    const garageData = await getAllCarsFromGarage();
    res.status(200).json(garageData);

  } catch (error) {
    return res.status(409).json({ error });
  }

});

router.get('/:id', isAuthenticated, async (req, res) => {
  try {

    const carData = await getCarById(req.params.id);
    res.status(200).json(carData);

  } catch (error) {
    return res.status(409).json({ error });
  }

});

router.put('/:id', isAuthenticated, async (req, res) => {
  try {

    const carData = await editCarDetails(req.params.id, req.body);
    res.status(200).json({ message: `${carData.plateNumber} has been edited!` });

  } catch (error) {
    return res.status(409).json({ error });
  }

});

router.delete('/:id', [isAuthenticated, isAdmin], async (req, res) => {
  try {
    const carData = await deleteCar(req.params.id);
    res.status(200).json({ message: `${carData.plateNumber} has been deleted!` });

  } catch (error) {
    return res.status(204).json({ error });
  }

});

router.put('/move/:id', isAuthenticated, async (req, res) => {
  try {

    const carData = await moveToArchive(req.params.id);
    res.status(200).json({ message: `${carData.plateNumber} has been moved to archive!` });

  } catch (error) {
    return res.status(409).json({ error });
  }
});

module.exports = router;