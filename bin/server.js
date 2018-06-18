const http  = require('http')
const app = require('../src/app')

//import debug from 'debug'

//const debug = require('debug')('nodestr:server')

const port = normalizePort(process.env.PORT || '3100')

app.set('port', port)

const server = http.createServer(app)


server.listen(port)

//server.on('error', onListening)
server.on('error', onError)

console.log('Api rodando na porta ' + port )


function normalizePort(val) {

    const port = parseInt(val,10)

    if(isNaN(port)) {
        return val
    }

    if(port >=0) {
        return port
    }

    return false
}

function onError(error) {
    
    if(error.syscall !== 'listen') {
        throw error
    }

    const bind = typeof port === 'string' ?
     'Pipe ' + port : 
     'Port ' + port

     switch(error.code) {
         case 'EACCES':
            console.error(bind + ' require elevated privileges')
            process.exit(1)
            break
        
         case 'EADDRINUSE':
            console.error(bind + 'is already in use')
            process.exit(1)
            break

        default:
            throw error
        }

}