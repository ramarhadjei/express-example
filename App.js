const express = require("express");
const app = express();

 app.get('/', (req, res) =>{
     res.send(
     <html>
     <head>
         <title>Puppies and Kittens Site</title>
     </head>
     <body>
         <h1>Puppies and Kittens Galoe</h1>
     </body>
     </html>
     )
 });



const PORT = 1337;
App.listen(PORT, () => {
    console.log('listening on port ${PORT}');
});