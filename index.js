const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors())

const produto = {
    nome: 'Samsung S7',
    preco: 1500,
    marca: 'Samsung'
};

app.get("/", (req, res) => {
    console.log(req.query);
    res.json(produto);
})

app.listen(5050, () => {
    console.log('Server iniciado!');
})