/*// Section 1
const express = require('express');
const axios = require('axios');
// const path = require("path");
const cors = require('cors');

// Section 2
const app = express();
app.use(cors());
// app.use(express.static(path.join(__dirname, "..", "public")));

// Section 3
app.get('/', (req, res) => {
  res.send('<h1>Home page</h1>');
});

app.get('/users', (req, res) => {
  axios.get('https://randomuser.me/api/?page=1&results=10').then(response => {
    res.send(response.data);
  });
});

// Section 4
app.listen(8080, () => {
  console.log('server started on port 8080');
});

function Person(username, password) {
  this.usename = username;
  this.password = password;
}

Person.prototype.getName = function () {
  return this.usename;
};

Person.prototype.getLevel = function () {
  return this.level;
};

Person.prototype.level = 'admin';

function User(username) {
  this.username = username;
}

User.prototype = new Person();

let person = new Person('Ti', '123');
let user = new User('Teo');

console.log(person.getLevel());
console.log(person.getName());
console.log(user.getLevel());
