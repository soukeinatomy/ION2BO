// import what I need
const { Schema, model } = require('../utils/connection')
const moodSchema = require ('./Mood')

// create the schema
const UserSchema = new Schema(
{
username: { 
type: String, 
required: true, 
unique: true 
},
password: { 
type: String, 
required: true 
}
},
{ timestamps: true }
)

// create the model
const User = model('User', UserSchema)

// export the model
module.exports = User