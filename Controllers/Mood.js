// Import Dependencies
const { application } = require('express')
const express = require('express')
const Mood = require('../Models/Mood')
const User = require('../Models/User')

// Create router
const router = express.Router()

//Router Middleware
// Authorization middleware

router.get('/mood', (req, res) => {
    res.render('views/mood')
})

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

// router.get ('/', (req, res) =>{
// res.render ('Mood')
// }
// )
router.get('/', (req, res)=> {
    Mood.find({})
        .then(mood=> {
            console.log(`THISSS ISSSS MY MOOOODDDDD`, mood)
            res.render('Mood', {mood} )
        })
})


module.exports = router