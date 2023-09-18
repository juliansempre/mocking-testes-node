const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const testeController = require('./src/controller/testeController');
testeController.testeController(app);

app.listen(PORT, ()=>{
	console.log(`Servidor rodando na porta ${PORT}`)
});
module.exports = app;

