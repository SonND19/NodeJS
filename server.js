const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('HELLO WORLD');
})

app.get('/about', (req, res) => {
    res.send('HELLO WORLD1');
})
app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})
