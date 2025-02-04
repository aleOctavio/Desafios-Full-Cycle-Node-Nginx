const db = require('./db');

const People = db.sequelize.define('people', {
    name: {
        type: db.Sequelize.STRING(256),
    }
}, {
    timestamps: false
});

People.sync();

module.exports = People;