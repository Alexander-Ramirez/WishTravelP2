const sequelize = require('../project2/config/connection');
const { User, City } = require('../models');

const userData = require('./userData.json');
// const projectData = require('./projectData.json');
const cityData = require('./cityData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // };

  for (const city of cityData) {
    await City.create({
      ...city,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  };

  process.exit(0);
};

seedDatabase();
