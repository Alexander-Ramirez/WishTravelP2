const sequelize = require('../config/connection');
const { User, City, Trip } = require('../models');

const userData = require('./userData.json');
const cityData = require('./cityData.json');
const tripData = require('./myTripData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const city of cityData) {
    await City.create({
      ...city,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  };
  for (const trip of tripData) {
    await Trip.create({
      ...trip,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  };

  process.exit(0);
};

seedDatabase();
