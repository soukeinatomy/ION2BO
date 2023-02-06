
const mongoose = require('../utils/connection')

// we'll destructure the Schema function from mongoose
const { Schema } = mongoose

// comment schema
const commentSchema = new Schema({
note: {
ype: String,
required: true
},
author: {
type: Schema.Types.ObjectId,
ref: 'User',
required: true
}
}, {
timestamps: true
})


module.exports = commentSchema
