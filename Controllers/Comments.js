

/////////////////////////////////////
//// Import Dependencies         ////
/////////////////////////////////////
const express = require('express')
const Resource = require('../models/resource')

/////////////////////////////////////
//// Create Router               ////
/////////////////////////////////////
const router = express.Router()


// POST -> `/comments

router.post('/:moodId', (req, res) => {
    //  save to a variable
    const moodId = req.params.moodId
    // then we'll protect this route against non-logged in users
    console.log('this is the session\n', req.session)
    if (req.session.loggedIn) {
       
        req.body.author = req.session.userId
        // saves the req.body to a variable for easy reference later
        const theComment = req.body
        // find a specific fruit
        Resource.findById(moodId)
            .then(mood => {
                // create the comment(with a req.body)
                mood.comments.push(theComment)
                // save 
                return mood.save()
            })
          
            .then(mood => {
               
                res.redirect(`/resource/${mood.id}`)
            })
            // catch and handle any errors
            .catch(err => {
                console.log(err)
                // res.status(400).json(err)
                res.redirect(`/error?error=${err}`)
            })
    } else {
        // res.sendStatus(401) //send a 401-unauthorized
        res.redirect(`/error?error=You%20Are%20not%20allowed%20to%20comment%20on%20this%20fruit`)
    }
})

// DELETE -> 
// make sure only the author of the comment can delete the comment
router.delete('/delete/:moodId/:commId', (req, res) => {
    // isolate the ids and save to variables so we don't have to keep typing req.params
    
    const { moodId, commId } = req.params
    
    Mood.findById(moodId)
        .then(mood => {
            // get the comment, we'll use the built in subdoc method called .id()
            const theComment = mood.comments.id(commId)
            console.log('this is the comment to be deleted: \n', theComment)
            // then we want to make sure the user is loggedIn, and that they are the author of the comment
            if (req.session.loggedIn) {
                // if they are the author, allow them to delete
                if (theComment.author == req.session.userId) {
                    // we can use another built in method - remove()
                    theComment.remove()
                    mood.save()
                    // res.sendStatus(204) //send 204 no content
                    res.redirect(`/resource/${mood.id}`)
                } else {
                    // otherwise send a 401 - unauthorized status
                    // res.sendStatus(401)
                    res.redirect(`/error?error=You%20Are%20not%20allowed%20to%20delete%20this%20comment`)
                }
            } else {
                // otherwise send a 401 - unauthorized status
                // res.sendStatus(401)
                res.redirect(`/error?error=You%20Are%20not%20allowed%20to%20delete%20this%20comment`)
            }
        })
        .catch(err => {
            console.log(err)
            // res.status(400).json(err)
            res.redirect(`/error?error=${err}`)
        })
})


//////////////////////////////
//// Export Router        ////
//////////////////////////////
module.exports = router