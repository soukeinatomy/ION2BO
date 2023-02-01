// import dependencies
const mongoose = require('../utils/connection')

const User = require('./User')

const { Schema, model } = mongoose

const moodSchema = new Schema ({
    
    entry: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    mood: {
        type: String,
    }
    
},{timestamps: true}
)
const Mood= model('Mood', moodSchema)

// const MoodSchema = new Schema(
// 	{
// 	name: {String,
// 	help: String // the link to the help resource
// 		}
// 	},
// 	{ timestamps: true }
// )

// const Mood = model('Mood', MoodSchema)

/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = Mood