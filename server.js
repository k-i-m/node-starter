const http = require('http');

const express = require('express');
const app = express();

const server = http.createServer(app);

// app.get('/', (req, res) => res.send('Hello World!'))
//
// app.listen(3000, () => console.log('Example app listening on port 3000!'))


/*var socketIo = require('socket.io');
var io = socketIo(server);
var WEBSOCKETS_SERVER_PORT = 8881;

io.on('connection', function(socket){
    console.log('Websocket connected:', socket.id);

    //socket.emit('STATE_INIT', initialState);

   socket.on('ACTIVE_SERVICE_UPDATE', (data) => {
        initialState.activeService = data.payload;
        console.log('ACTIVE_SERVICE_UPDATE', data);

        socket.emit('ACTIVE_SERVICE_UPDATE', data.payload);
    });
});

server.listen(WEBSOCKETS_SERVER_PORT, function() {
    console.log('Websockets server is running at port :%s', WEBSOCKETS_SERVER_PORT);
});*/
