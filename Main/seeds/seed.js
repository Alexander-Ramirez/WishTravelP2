const sequelize = require('../project2/config/connection');
const { User, City } = require('../models');

const userData = require('./userData.json');
const cityData = require('./cityData.json');

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

  process.exit(0);
};

seedDatabase();
