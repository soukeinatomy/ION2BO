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

app.get('/error', (req, res) => {
	const error = req.query.error || 'This Page Does Not Exist'
    const { username, loggedIn, userId } = req.session
	res.render('error.liquid', { error, username, loggedIn, userId })
})

//if app not found, send to error page

app.all('*', (req, res) => {
	res.redirect('/error')
})




/////////////////////////////////////
//// Server Listener             ////
/////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Now listening to the sweet sounds of port: ${PORT}`))