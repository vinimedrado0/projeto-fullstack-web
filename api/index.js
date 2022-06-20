'use strict'

var mongoose = require('mongoos');

mongoose.Promisse = global.Promisse;
mongoose.connect('mongob://localhost:27017/projeto-web-fullstack', {useMongoClient: true});

.then(()=>{}); {


console.log('conexão realizada com seucesso')

}

.catch(err => console.log (err));


