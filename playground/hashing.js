const {SHA256} = require('crypto-js');

 const jwt = require('jsonwebtoken');
 const bcrypt = require('bcryptjs');

 const password = '123abc!';

 /*bcrypt.genSalt(10, (err, salt) => {
     bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
     });
 });*/

 const hashedPassword = '$2a$10$08hmskE3eNzxvcdddSisMOVipdFU2IIENkdHj0PHw0BglQ5.6KABK';
 bcrypt.compare('123!', hashedPassword, (err, res) => {
     console.log(res);
 });

// let data = {
//     id: 10
// };
//
// const token =jwt.sign(data, '123abc');
// console.log(token);
//
// const decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);
// let message = 'I am user number 3';
// let hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// let data = {
//   id: 4
// };
//
// let token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
//
// //token.data.id = 5;
// //token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed, dont trust!');
// }