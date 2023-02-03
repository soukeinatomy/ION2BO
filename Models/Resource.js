// import dependencies
const mongoose = require('../utils/connection')


// const User = require('./User')

const { Schema, model } = mongoose

const resourceSchema = new Schema ({
    
    resourcelinksad: {type: String},
    resourcelinklonely: {type: String},
    resourcetypeanxious: {type: String}
    

},{strict: false})

const Resource= model('Resource', resourceSchema)


module.exports = Resource