// Import Dependencies
const express = require('express')
const Mood = require('../Models/Mood')

// Create router
const router = express.Router()

// Router Middleware
// Authorization middleware

router.use((req, res, next) => {
// checking the loggedIn boolean of our session
	if (req.session.loggedIn) {
// if they're logged in, go to the next thing(thats the controller)
		next()
	} else {
		// if they're not logged in, send them to the login page
		res.redirect('/auth/login')
	}
})
