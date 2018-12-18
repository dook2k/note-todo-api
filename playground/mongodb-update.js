const {MongoClient, ObjectID} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database server.')
  }
  console.log('Connected to MongoDB server');

// Find one and update
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5c193044da091ca2fa980f18')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result);
// });

// increment age by 1 look at documentation for the operators
// update name to my name.
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5c158afd24e38b781155131c')
}, {
  $set: {
    name: 'Walter Ashbrook'
  },
  $inc: {
    age: 1
  }
}, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })
  
  // db.close();
});