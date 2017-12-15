//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    /*
   db.collection('Todos')
       .findOneAndUpdate({
           _id: new ObjectID("5a3321742a5625cb01f54afa")
       }, {
           $set: {
               completed: true
           }
       }, {
           returnOriginal: false
       }).then((res) => {
           console.log(res);
   }); */

    db.collection('Users')
        .findOneAndUpdate({
            _id: new ObjectID("5a30395eca1cd3b0ac0fb52b")
        }, {
            $set: {
                name: 'Andrew'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((res) => {
        console.log(res);
    });




    //db.close();
});