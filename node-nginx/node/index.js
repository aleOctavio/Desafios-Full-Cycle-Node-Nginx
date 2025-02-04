const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const People = require('./model/People');

const port = 3000;

//Configuração
//Template Engine
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'handlebars');

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get('/', (request, response) => {
    People.create({
        name: 'Alessandro'
    }).then(() => {
        response.redirect('/listar');
    }).catch((error) => {
        response.send('Erro: ' + error);
    });
});

app.get('/listar', (request, response) => {
    People.findAll({order: [['id', 'DESC']]}).then((peoples) => {
        response.render('listar', { peoples: peoples });
    });
})

app.listen(port, () => {
    console.log('Rodando na porta', port);
});