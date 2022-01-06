const router = require('express').Router();
const { City, Trip } = require('../../models');
const withAuth = require('../../utils/auth');

// GET request needed here
router.get('/:name', async (req, res) => {
  try {
    console.log("cities id route")
    const cityData = await City.findByPk(req.params.name);
    console.log(cityData);
    if (!cityData) {
      res.status(404).json({ message: "Oops we haven't checked out this city!" });
      return;
    }
    res.status(200).json(cityData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', withAuth, async (req, res) => {
  try {
    const newTrip = await Trip.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTrip);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const tripData = await Trip.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tripData) {
      res.status(404).json({ message: 'No city found with this id!' });
      return;
    }

    res.status(200).json(tripData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;
