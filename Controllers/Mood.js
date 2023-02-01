// Import Dependencies
const { application } = require('express')
const express = require('express')
const Mood = require('../Models/Mood')

// Create router
const router = express.Router()

//Router Middleware
// Authorization middleware

router.get((req, res, next) => {
// checking the loggedIn boolean of our session
	if (req.session.loggedIn) {
// if they're logged in, go to the next thing(thats the controller)
		next()
	} else {
		// if they're not logged in, send them to the login page
		res.redirect('/auth/login')
	}
})


//Render Mood page

router.get ('/', (req, res) =>{
    res.render ('Mood')
}
)

module.exports = router