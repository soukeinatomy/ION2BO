/////////////// IMPORT DEPENDENCIES ////////////

const mongoose = require('../utils/connection')
const Mood = require('./Mood')
const Resource = require('./Resource')

// Start db connection
const db = mongoose.connection

//seeding data

const seed = [
{peopleMood: 'I feel sad'
},
{peopleMood: 'I feel anxious'
},
{peopleMood: 'I feel lonely'
}


]
const seedR = [
{resourcelinksad: 'https://www.youtube.com/watch?v=AmtZ_gBMyrc',
resourcelinklonely: 'https://www.youtube.com/watch?v=2QuptORKT8U',
resourcelinkanxious: 'https://www.youtube.com/watch?v=XFTXKqRujxk'
},
{resourcelinksad: 'https://www.youtube.com/watch?v=KZCCWF9idSQ',
resourcelinklonely: 'https://www.youtube.com/watch?v=AtCR6P5rsXU',
resourcelinkanxious: 'https://www.youtube.com/watch?v=D8Gc6_S6i0k'
},
{resourcelinksad: 'https://www.wikihow.com/Stop-Being-Sad',
resourcelinklonely: 'https://www.healthline.com/health/mental-health/how-to-not-feel-lonely',
resourcelinkanxious: 'https://www.calmclinic.com/anxiety/stop-anxiety-quickly'
}
  
]
////////// Populate Seed //////////

// db.on('open', () => {
// Mood.deleteMany()
//.catch(err => {
//console.log(err)
// always make sure to close the connection
//db.close()
//})     
// })



db.on('open', () => {
Resource.deleteMany()
.then(() => {
// then we'll seed(create) our starter fruits
Resource.insertMany(seedR)
// tell our app what to do with success and failures
.then(data => {
console.log('here is the: \n', data)
// once it's done, we close the connection
db.close()
})
.catch(err => {
console.log('The following error occurred: \n', err)
// always close the connection
db.close()
})
})
.catch(err => {
console.log(err)
// always make sure to close the connection
db.close()
})
 })