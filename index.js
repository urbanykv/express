const express = require('express');
const app = express();

const produto = {
    nome: 'Samsung S7',
    preco: 1500,
    marca: 'Samsumg'
};

app.get('/', (req, res) => {
    res.json(produto);
})

app.listen(80, () => {
    console.log('Server iniciado!');
})