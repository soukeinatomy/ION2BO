// import dependencies
const mongoose = require('./connection')

const User = require('./User')



const MoodSchema = new Schema(
	{
	name: {String,
	help: String // the link to the help resource
		}
	},
	{ timestamps: true }
)

const Example = model('Example', exampleSchema)

/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = Mood