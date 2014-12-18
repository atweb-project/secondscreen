/**
 * @file
 * Node.JS server script for sockets test.
 *
 */

// http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
"use strict";

// You will see this name in eg. 'ps' or 'top' command
process.title = 'Node Second Screen';

// Create a websocket.
var WebSocketServer = require('websocket').server;
var http = require('http');
var webSocketsServerPort = 1337;

// Clients object stores all connections.
var clients = [];
var clientIndex = -1;


/**
 * Generates a random ID.
 *
 * TODO: check that the random ID is not already in use to make it unique.
 */
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var i;

    for (i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}


// Create the HTTP server.
var server = http.createServer(function (request, response) {
    // Process HTTP request. Since we're writing just WebSockets server
    // we don't have to implement anything.
});

// When the server starts listening.
server.listen(webSocketsServerPort, function () {
    console.log((new Date()) + " Server is listening on port " + webSocketsServerPort);
});

// Create the websockets server.
var wsServer = new WebSocketServer({
    httpServer: server
});

// WebSocket server - a connection is made from desktop or mobile device.
wsServer.on('request', function (request) {

    console.log((new Date()) + ' Connection from origin ' + request.origin + '.');

    // The connection is stored.
    var connection = request.accept(null, request.origin);

    // Create an index for the connection so we can delete it later.
    clientIndex++;
    request.index = clientIndex;

    // Store the connection in the clients object.
    clients[clientIndex] = {'connection': connection};

    // A message is received from the desktop or mobile device.
    connection.on('message', function (message) {
        if (message.type === 'utf8') {

            var i, send;

            try {

                // Turn the message in to a JSON object.
                var received = JSON.parse(message.utf8Data);

                // A desktop is connecting for the first time. Generate a unique
                // ID and send it back to the client.
                if (received.type === 'connect' && received.data === 'desktop') {

                    // Generate the unique ID.
                    var uniqueID = makeid();

                    console.log((new Date()) + ' Desktop connected and assigned ID: ' + uniqueID + ' at index ' + clientIndex);

                    // Store the connection type and unique ID.
                    clients[request.index].type = 'desktop';
                    clients[request.index].uniqueID = uniqueID;

                    // Send the unique ID back to the client.
                    send = JSON.stringify({type: 'uniqueID', data: uniqueID});
                    connection.send(send);

                    return;
                }

                // A mobile devide is connecting for the first time. Tell any
                // desktop clients with a matching ID.
                if (received.type === 'connect' && received.data === 'mobile') {

                    console.log((new Date()) + ' Mobile device connected: ' + received.uniqueID);

                    // Store the connection type and unique ID.
                    clients[request.index].uniqueID = received.uniqueID;
                    clients[request.index].type = 'mobile';

                    // Search for a desktop client and send the message to them.
                    for (i = 0; i < clients.length; i++) {

                        if (clients[i].uniqueID === received.uniqueID && clients[i].type === 'desktop') {

                            console.log((new Date()) + ' Notifying desktop that mobile has connected.');

                            // Send the message to the desktop.
                            send = JSON.stringify({type: 'mobile_device_connected'});
                            clients[i].connection.send(send);
                        }
                    }

                    return;
                }

                // A scroll request has been received.
                if (received.type === 'video_request') {

                    console.log((new Date()) + ' Video request received:' + clients[request.index].uniqueID);

                    // Search for a desktop connection where the unique ID
                    // matches the mobile device's unique ID.
                    for (i = 0; i < clients.length; i++) {

                        if (clients[i].uniqueID === clients[request.index].uniqueID && clients[i].type === 'desktop') {

                            // Send the message to the client.
                            send = JSON.stringify({type: 'video_request', data: received.data});
                            clients[i].connection.send(send);
                        }
                    }
                }
            } catch (e) {
                console.log('This doesn\'t look like a valid JSON: ', message.data);
                return;
            }

            // console.log('Current state of clients.');
            // for (var i in clients) {
            //     console.log(i + ': ' + clients[i].type + ' ' + clients[i].uniqueID);
            // }
        }
    });

    // When a connection is lost, we should delete it from the clients object.
    connection.on('close', function (connection) {
        console.log((new Date()) + ' Removing client index ' + request.index);
        delete (clients[request.index]);
    });
});


