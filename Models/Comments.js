
const mongoose = require('mongoose')

// we'll destructure the Schema function from mongoose
const { Schema, model } = mongoose

// comment schema
const commentSchema = new Schema({
note: {
type: String,
// required: true
},
author: {
type: Schema.Types.ObjectId,
ref: 'User',
// required: true
}
}, {
timestamps: true
})


module.exports = model('Comments', commentSchema)