const router = require('express').Router();
const { User, City } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all cities and JOIN with user data
    const cityData = await City.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const cities = cityData.map((city) => city.get({ plain: true }));
    console.log(cities);
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      cities, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/city/:id', async (req, res) => {
//   try {
//     const cityData = await City.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const city = cityData.get({ plain: true });

//     res.render('city', {
//       ...city,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//     console.log(err)
//   }
// });

router.get('/city/:name', async (req, res) => {
  try {
    const cityData = await City.findAll({where: {city: req.params.name}

    });

    console.log(cityData)

    const city =  cityData.map((city) => city.get({ plain: true }));

    console.log(...city)

    res.render('city', {
      ...city[0],
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

// '/city/*'

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: City }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
