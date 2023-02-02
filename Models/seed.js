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
    {sadResource: 'www.sadlink.com'
    },
    {lonelyResource: 'www.lonelylink.com'
    },
    {anxiousResource: 'www.anxiouslink.com'
    }

]

////////// Populate Seed //////////

// db.on('open', () => {
//     Mood.deleteMany()
//         .then(() => {
//             // then we'll seed(create) our starter fruits
//            Mood.create(seed)
//                 // tell our app what to do with success and failures
//                 .then(data => {
//                     console.log('here is the: \n', data)
//                     // once it's done, we close the connection
//                     db.close()
//                 })
//                 .catch(err => {
//                     console.log('The following error occurred: \n', err)
//                     // always close the connection
//                     db.close()
//                 })
//         })
//         .catch(err => {
//             console.log(err)
//             // always make sure to close the connection
//             db.close()
//         })     
// })

db.on('open', () => {
    Resource.deleteMany()
        .then(() => {
            // then we'll seed(create) our starter fruits
           Resource.create(seedR)
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