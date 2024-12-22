
const express = require('express');
app = express();
 
app.get('/', function (req, res) {
    res.type('text/plain');
    res.status(200);
    res.send('GeeksforGeeks');
});
 
app.listen(4000, function () {
    console.log('Listening.....');
});