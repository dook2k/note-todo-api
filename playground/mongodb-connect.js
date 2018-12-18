const {MongoClient, ObjectID} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database server.')
  }
  console.log('Connected to MongoDB server');
  
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false

  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo.', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })


  // Insert new doc into Users collection (name= my name; age, and location string. Insert this using insert 1.  Pass new collection  name into collection method; add error handling.  review it in robomongo)
  // db.collection('Users').insertOne({
  //   name: 'Walter Ashbrook',
  //   age: 40,
  //   location: 'Phoenix'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user.', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });


  db.close();
  // NOte that version 3 of Mongodb has different code.  See course update.
});