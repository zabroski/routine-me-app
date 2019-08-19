const { User }  = require('../models/index')
const bcrypt = require('bcrypt')

const seedDb = async () => {
  try {
    // clear out data in tables specified below
    await User.destroy({
      where: {}
    })

  
    // add records to tables specified below
    await User.create({
      name: "Carol Danvers",
      email: "captainmarvel@fakemail.com",
      password: 'password'
    })

    await User.create({
      name: "Tony Stark",
      email: "ironman@fakemail.com",
      password: 'password'
    })

    

  } catch(e) {
    console.log(e);
  }
}

const run = async () => {
  try {
    await seedDb()
  } catch(e) {
    console.log(e)
  } finally {
    await process.exit()
  }
}

run()
