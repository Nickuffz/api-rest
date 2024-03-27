import app from './app.js';

const PORT = process.env.PORT || 3000;

//escultar a porta 3000
    app.listen(PORT, ()=> {
        console.log('Servidor rodando no endereco http://localhost:3000')
    })
