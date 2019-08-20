const Sequelize = require('sequelize')
const UserModel = require('./user')
const PersonModel = require('./person')
const bcrypt = require('bcrypt')

// connection to the database
const db = new Sequelize({
  database: "express_auth_db",
  dialect: 'postgres'
})

// const db = new Sequelize(process.env.DATABASE_URL,{
//   dialect: 'postgres'
// })


const User = UserModel(db, Sequelize);

User.beforeCreate(async (user, options) => {

    //dodo => %^*JU#*bhjfhUi^&#
    const hashedPassword = await bcrypt.hash(
        user.password,
        Number(process.env.SALT_ROUNDS)
    )
    user.password = hashedPassword
});

const Person = PersonModel(db, Sequelize);

module.exports = {
  db,
  User,
  Person
}

