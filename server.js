/////////////////////////////////////
//// Import Dependencies         ////
/////////////////////////////////////
require("dotenv").config() // make env variables available
const express = require("express")
const middleware = require('./utils/middleware')
const MoodRouter = require('./Controllers/Mood')
const User = require('./Models/User')



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

app.use('/auth', UserRouter)
app.use('/Mood', ExampleRouter)

app.get('/', (req, res) => {
    const { username, userId, loggedIn } = req.session
	res.render('index.liquid', { loggedIn, username, userId })
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