// import dependencies
const mongoose = require('../utils/connection')


// const User = require('./User')

const { Schema, model } = mongoose

const resourceSchema = new Schema ({
    
// entry: {
// type: Schema.Types.ObjectId,
// ref: 'User',
// required: true
// },
sadResource: {
type: String,
},
lonelyResource: {
    type: String,
},
anxiousResource: {
    type: String,
}
    
},{
    timestamps: true
}
)
const Resource= model('Resource', resourceSchema)


module.exports = Resource