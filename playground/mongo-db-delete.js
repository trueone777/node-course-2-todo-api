//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    //deleteMany
   /* db.collection('Todos')
        .deleteMany({text: 'Eat lunch'})
        .then((result) => {
            console.log(result);
        }); */

    //deleteOne
    /*db.collection('Todos')
        .deleteOne({text: 'Eat lunch'})
        .then((result => {
            console.log(result);
        })); */

    //findOneAndDelete
    /*db.collection('Todos')
        .findOneAndDelete({completed: false})
        .then((res) => {
            console.log(res);
        }); */

    //delete many Users
    /*
    db.collection('Users')
        .deleteMany({name: 'Andrew'});
        */


    db.collection('Users')
        .findOneAndDelete({
            _id: new ObjectID('5a3056d5995f70d930f61812')
        }).then((res) => {
            console.log(JSON.stringify(res, undefined, 2));
    });



    //db.close();
});