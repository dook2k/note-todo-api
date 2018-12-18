const {MongoClient, ObjectID} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database server.')
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Go to store'}).then((result) => {
  //   console.log(result);
  // })
  // deleteOne
// db.collection('Todos').deleteOne({text: 'Go to church'}).then((result) => {
//   console.log(result);
// })
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //Challenge
  // delete many

  // db.collection('Users').deleteMany({name: 'Walter Ashbrook'}).then((result) => {
  //   console.log(result);
  // });

  // find one and delete
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5c158c2c572dca7819ed0540')}).then((result) => {
    console.log(result);
  });

  
  // db.close();
});