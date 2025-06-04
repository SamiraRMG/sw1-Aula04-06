const express = require('express');
const app = express()
const port = 3000;

app.get('/', (request, response) =>{
    response.send ('Aula Teste');
});

app.listen(port, () => {
    console.log("Aplicação em execução na porta " + port);
});