module.exports = (db, Sequelize) => {
    return db.define('person', {
        name: Sequelize.STRING,
        descriptions: Sequelize.STRING,
        date:  Sequelize.STRING
    })
} 
