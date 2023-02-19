// This is our server side
const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

// for the server will understand incoming data as hson
app.use(express.json({limit:'1mb'}))

app.post('/api', (request, response) => {
    console.log("I got a request! :D");
    const data = request.body;
    console.log(data);
    response.json({
        status: 'Received!',
        notes: data
    });
})