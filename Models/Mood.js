// import dependencies
const mongoose = require('../utils/connection')


// const User = require('./User')

const { Schema, model } = mongoose

const moodSchema = new Schema ({
    
// entry: {
// type: Schema.Types.ObjectId,
// ref: 'User',
// required: true
// },
peopleMood: {
type: String,
}
    
},{
    timestamps: true
}
)
const Mood= model('Mood', moodSchema)


module.exports = Mood