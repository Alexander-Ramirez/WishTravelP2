const router = require('express').Router();
const { City } = require('../../models');
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
    const newCity = await City.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCity);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const cityData = await City.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!cityData) {
      res.status(404).json({ message: 'No city found with this id!' });
      return;
    }

    res.status(200).json(cityData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

module.exports = router;
