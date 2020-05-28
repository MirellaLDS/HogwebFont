//Imports
const express = require('express')
// const Shell = require('node-powershell');

//Initializer a shell instance
// const ps = new Shell({
//    executionPolicy: 'Bypass',
//    noProfile: true 
// });

//Setup and configure app
const app = express()
const port = 5556

//route request
app.use('/', (req, res) => {
    res.json("Hello from Node")

    // ps.addCommand(`docker ps -a`);
    // ps.invoke()
    // .then(response => {
    //     res.send(response)
    // })
    // .catch(err => {
    //     res.json(err)
    // });
});

//Initialize app
app.listen(process.env.port || port);