const { User, Person }  = require('../models/index')
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
    });


    // routine start here


    await Person.create({
      name: "mike",
      descricription: "Mike",
      date: 'password'
    })


    await Person.create({
      name: "mike",
      descricription: "Trevor",
      date: '11'
    })

    await Person.create({
      name: "mike",
      descricription: "Tyler",
      date: 'password'
    })

    await Person.create({
      name: "mike",
      descricription: "Issouf",
      date: 'password'
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
