const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*Todo.remove({}).then((result) => {
    console.log(result);
}); */

//Todo.findOneAndRemove();
//Todo.findByIdAndRemove();

Todo.findOneAndRemove({ _id: '5a37fa7baa8dc0e4599af637'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5a37fa7baa8dc0e4599af637').then((todo) => {
    console.log(todo);
});