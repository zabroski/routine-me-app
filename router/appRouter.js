const express = require  ('express')
const appRouter = express.Router()
const { passport } = require('../auth/auth')

const { Person } = require('../models');

/*appRouter.get('/', passport.authenticate('jwt', { session: false}),
  async(req, res) => {
      res.json({ user: req.user, message: 'authenticated'})
  }
);*/


  
  // GET all routine
  appRouter.get('/persons', async (req, res) => {
    res.send( await Person.findAll())
  
  })
  
  // GET one ice routine
  appRouter.get('/persons/:id', async (req, res) => {
    let person = await Person.findByPk(req.params.id)
    res.send(person)
  
  })
  
  // POST one routine
  appRouter.post('/persons', async (req, res) => {
    try {
      const person = await Person.create(req.body);
      res.send(person)
  
    } catch(e) {
      console.log(e)
    }
  
  })
  
  // PUT(edit) one iroutine
  appRouter.put('/persons/:id/edit', async (req, res) => {
    let person = await Person.update(
      {
        name: req.body.name,
        descriptions: req.body.descriptions,
        date: req.body.date
      },
        {
          where: {id: req.params.id
        }
      });
  
    res.send(person)
  })
  
  // DELETE routine
  appRouter.delete('/persons/:id/delete', async (req, res) => {
    try {
      const iceCream = await IceCream.findByPk(req.params.id)
      if (iceCream) {
          await iceCream.destroy()
          res.send('ok')
      } else{
          let err = new Error('Ice crean Not Found')
          res.status(400).send(err.toString())
      } 
  } catch(error) {
      throw error
  }
  });

module.exports = appRouter