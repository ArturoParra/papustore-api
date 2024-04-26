const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al leer el archivo JSON');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Servidor API escuchando en http://localhost:${port}`);
});
