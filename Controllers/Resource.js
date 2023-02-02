// Import Dependencies
const { application } = require('express')
const express = require('express')
const Resource = require('../Models/resource')

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


router.get('/', (req, res)=> {
    Resource.find({})
        .then(resource=> {
            console.log(`These are our resources`, resource)
            res.render('Resource', {resource} )
        })
})


module.exports = router