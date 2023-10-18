const express = require('express');
const app = express();
const cors = require('cors');


const corsOptions = {  
    origin: "*",  
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",  
    credentials: true,   
    optionsSuccessStatus: 204  
};  

app.use(cors(corsOptions))

app.get("/", (req, res) => {
    const peso = req.query.peso;
    const altura = req.query.altura;
    let imc = peso / (altura * altura);
    res.json({imc: imc});
})

app.listen(8080, () => {
    console.log('Server iniciado!');
})

/*  Para liberar o CORS você tem que fazer o seguinte:   
    
  1. Na API, tem que instalar a dependência do CORS com o comando:  
    
  npm install cors  
    
  2. Depois disso, precisa incluir no código a importação:  
    
  const cors = require("cors");  
    
  3. Feito isso, tem que configurar o CORS:  
    
  const corsOptions = {  
      origin: "http://127.0.0.1:5500",  
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",  
      credentials: true,   
      optionsSuccessStatus: 204  
  };  
    
  A url de origin é um exemplo de um servidor rodando na porta 5500. Esse valor vai depender da porta do seu servidor do front-end. Ou vc libera o CORS para qualquer cliente, substituindo a URL por "*".  
    
  4. Agora tem que informar a configuração do CORS na constante app da API:  
    
  app.use(cors(corsOptions));  
    
  Feito, a API está pronta para receber as requisições de um cliente sem a interferência do bloqueio do CORS.   */