/////////////////////////////////////
//// Import Dependencies         ////
/////////////////////////////////////
const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const path = require('path')
const UserRouter = require('./controllers/userControllers')
const MoodRouter = require('./controllers/moodControllers')

const middleware = require ('./utils/middleware')

/////////////////////////////////////
//// Create our Express App Object //
/////////////////////////////////////

const app = require('liquid-express-views')(express())

/////////////////////////////////////
//// Middleware                  ////
/////////////////////////////////////

middleware(app)

/////////////////////////////////////
//// Routes                      ////
/////////////////////////////////////

//Home page 

app.get('/', (req, res) => {
    const { username, loggedIn, userId } = req.session
    res.render('home.liquid', { username, loggedIn, userId })
})

app.use('/')




/////////////////////////////////////
//// Server Listener             ////
/////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Now listening to the sweet sounds of port: ${PORT}`))