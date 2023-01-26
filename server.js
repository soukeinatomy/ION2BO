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



