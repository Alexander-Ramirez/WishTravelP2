const User = require('./User');
// const Project = require('./Project');
const City = require('./City')

User.hasMany(City, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.belongsToMany(City, { through: 'User_searched_city' });
City.belongsToMany(User, { through: 'User_searched_city' });


module.exports = { User, City };
