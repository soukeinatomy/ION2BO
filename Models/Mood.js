// import dependencies
const mongoose = require('../utils/connection')


// const User = require('./User')

const { Schema, model } = mongoose

const moodSchema = new Schema ({
    

peopleMood: {
type: String,
}
    
},{
    timestamps: true
}
)
const Mood= model('Mood', moodSchema)


module.exports = Mood