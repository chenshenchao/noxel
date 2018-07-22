const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'noxel', 'username', 'password', {
        dialect: 'sqlite',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        storage: 'archive.db',
    }
);

module.exports = sequelize;
