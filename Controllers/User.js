////////////////////////////////////////////
// Import Dependencies                   ///
////////////////////////////////////////////
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

////////////////////////////////////////////
// Create router
////////////////////////////////////////////
const router = express.Router()


// Routes

// GET to render the signup form
router.get('/signup', (req, res) => {
res.render('auth/signup')
})

// POST 
router.post('/signup', async (req, res) => {
// set the password to hashed password
const newUser = req.body
console.log(newUser)

newUser.password = await bcrypt.hash(
newUser.body.password,
await bcrypt.genSalt(10)
)
// create a new user
User.create(newUser)
// if created successfully redirect to login
.then((user) => {
console.log('new user created \n', user)
res.redirect('/auth/login')
})
// if an error occurs, send err
.catch((error) => {
console.log(err)
res.redirect(`/error?error=${error}`)
})
})

//  login routes

router.get('/login', (req, res) => {
res.render('auth/login')
})
// post to send the login info(and create a session)
router.post('/login', async (req, res) => {
	
	
const { username, password } = req.body
// then we search for the user
User.findOne({ username })
.then(async (user) => {
// check if the user exists
if (user) {
// compare the password
// bcrypt.compare evaluates to a truthy or a falsy value
const result = await bcrypt.compare(password, user.password)

if (result) {
req.session.username = user.username
req.session.loggedIn = true
req.session.userId = user.id

const { username, loggedIn, userId } = req.session

console.log('session user id', req.session.userId)
					
res.redirect('/mood')
} else {
// send an error if the password doesnt match
res.redirect('/error?error=username%20or%20password%20incorrect')
}
} else {
// send an error if the user doesnt exist
res.redirect('/error?error=That%20user%20does%20not%20exist')
}
})
// catch any other errors that occur
.catch((error) => {
console.log('the error', error);
			
res.redirect(`/error?error=${error}`)
})
})

// logout route -> destroy the session
router.get('/logout', (req, res) => {
req.session.destroy(() => {
res.redirect('/')
})
})

// Export the Router
module.exports = router
