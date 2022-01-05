const router = require('express').Router();
const { City } = require('../../models');
const withAuth = require('../../utils/auth');

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
