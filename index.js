const http = require('http');
const app = require('./app');

//Definindo o valor da porta de acesso
const porta = process.env.PORT || 4000;

const server = http.createServer(app);

//start do servidor.
server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
    temp();
});

//Animação
const temp = () => {
    var position = ["\\", "|", "/", "-"];
    var x = 0;
    return setInterval(() => {
        process.stdout.write("\r" + position[x++]);
        x &= 3;
    }, 250);
};