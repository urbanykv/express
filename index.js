const express = require('express');
const app = express();

const produto = {
    nome: 'Samsung S7',
    preco: 1500,
    marca: 'Samsung'
};

app.get('/', (req, res) => {
    res.json(produto);
})

app.listen(5500, () => {
    console.log('Server iniciado!');
})