const produto = {
    nome: 'Samsung S8',
    preco: 1.099
}

const jsonProduto = JSON.stringify(produto);

const express = require('express');

const app = express();

app.get('/produto/1', (req, res) => {
    res.send(jsonProduto);
})

app.listen(8080, () => {
    console.log('Server iniciado!');
})