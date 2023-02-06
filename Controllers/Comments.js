/////////////////////////////////////
//// Import Dependencies         ////
/////////////////////////////////////
// const express = require('express')
// const Resource = require('../models/resource')

/////////////////////////////////////
//// Create Router               ////
/////////////////////////////////////


// const { application } = require('express')
const express = require('express')
const Resource = require('../Models/Resource');
const Comment = require('../Models/Comments')
const User = require('../Models/User')
const router = express.Router()
// Create router
// const router = express.Router()

//Router Middleware
// Authorization middleware

// router.get("/comments", (req, res) => {
//     res.render("comments");
//   });
router.get('/resource', (req, res) => {
    res.render('resource')
})
  // redirect to edit page
  router.get("/edit/(:id)", async (req, res) => {
    Comment.findOne({ _id: req.params.id }).exec(function (err, docs) {
      if (!err) {
        res.render("edit", { data: docs });
      } else {
        console.log("Error:", err);
      }
    });
  });
  
  // update post
  router.post("/update/(:id)", function (req, res) {
    Comment.findByIdAndUpdate(
      req.params.id,
      {
        $set: { note: req.body.note,  },
      },
      { new: true },
      function (err, docs) {
        if (err) {
          console.log(err);
          res.render("edit", {comm: req.body });
        }
        res.redirect("/comments");
      }
    );
  });
 
// delete
  router.get("/delete/(:id)", function (req, res, next) {
    Comment.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) {
        res.redirect("/comments");
        console.log("post successfully removed");
      } else {
        console.log("Failed to Delete comments: " + err);
      }
    });
  });
  



// create a new post
router.post("/posts", (req, res) => {
    // model creates a new doc with browser data
    const comment = new Comment({
      note: req.body.note,
      
    });
    console.log(req.body.note)
    comment.save(comment, (err, post) => {
      if (err) {
        // res.status(500).json(err);
        console.log(err);
      } else {
        res.status(200).send(post);
        console.log(post);
      }
    });
    // res.redirect("/allcomments", { Error: "block" });
  });

// get all commentts
router.get("/comments", function (req, res, next) {
    Comment.find((err, docs) => {
      if (!err) {
        res.render("comments", {
        comm: docs,
        });
      } else {
        console.log("Failed to retrieve the comments Lists: " + err);
      }
    });
    // next()
  });

  //////////////////////////////
//// Export Router        ////
//////////////////////////////
module.exports = router


