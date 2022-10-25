const express = require('express');
const app = express();
const os = require('node:os');

app.get('/', (req, res) => {
    res.send(`
    <h1>hola mundo</h1>
    <h2>lerocondo</h2>
    ${os.version()}`)
})

app.listen(3000, () => {
    console.log("estoy en el puerto 3000");
})