const { MongoClient, ObjectID } = require('mongodb');

// MongoDB module v2.2
// Connrcting to mongodb (needs to run mongod.exe --dbpath= <path to a local data base folder>)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5ac4ded7a6be3e95b4f8f013')
  // }, {
  //   // oparations we want to do on the filtered field
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ac4ce98a6be3e95b4f8e86b')
  }, {
    // oparations we want to do on the filtered field
    $set: {
      name: 'Ben'
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
