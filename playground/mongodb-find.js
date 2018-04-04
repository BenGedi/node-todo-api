const { MongoClient, ObjectID } = require('mongodb');

// MongoDB module v2.2
// Connrcting to mongodb (needs to run mongod.exe --dbpath= <path to a local data base folder>)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //   _id: new ObjectID('5ac4c948a6be3e95b4f8e623')
    // }).toArray().then((docs)=> {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count)=> {
    //   console.log(`Todos count ${count}`);
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    
    db.collection('Users').find({name: 'Ben Gedi' }).toArray().then((docs)=> {
      console.log(`Users count ${JSON.stringify(docs, undefined, 2)}`);
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });

  // db.close();
});
