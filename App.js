const express = require("express");
const app = express();

 app.get('/', (req, res, next) =>{
     res.send('Puppies and Kittens Site')  
 });

 app.get('/', (req, res, next) =>{
    res.send(' Puppies and Kittens Galore')
 });

 app.get('/', (req, res, next) =>{
    res.send(' Puppies and Kittens Grooming')
 });

//const PORT = 1337;
App.listen(1337, () => {
    //console.log('listening on port ${PORT}');
    console.log('listening on port 1337')
});