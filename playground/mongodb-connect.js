const { MongoClient, ObjectID } = require('mongodb');

// MongoDB module v2.2
// Connrcting to mongodb (needs to run mongod.exe --dbpath= <path to a local data base folder>)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // create Todos collection
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   complete: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Jen',
    age: 25,
    location: 'Moshe Sharet 65, Hod Hasharon Israel',
    _id: new ObjectID('5ac4ce98a6be3e95b4f8e86b')
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});

// MongoDB module v3
// Connrcting to mongodb (needs to run mongod.exe --dbpath= <path to a local data base folder>)
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//   if (err) {
//     return console.log('Unable to connect to MongoDB server');
//   }

//   console.log('Connected to MongoDB server');
//   const db = client.db('TodoApp');

//   // create Todos collection
//   db.collection('Tobos').insertOne({
//     text: 'Something to do',
//     complete: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo', err);
//     }

//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });

//   client.close();
// });