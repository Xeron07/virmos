// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

const mongoose=require('mongoose');


//CONFIGURATIONS
mongoose.connect(
  "mongodb://localhost:27017/vimos",
  //"mongodb+srv://docchoper:2020docchoper@cluster0.tgu99.mongodb.net/docchoper",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);



fastify.register(require('fastify-socket.io'), {
  // put your options here
})


//routing


fastify.register(require('point-of-view'), {
    engine: {
      ejs: require('ejs')
    }
  });


//   fastify.io.on('connection', function(socket) {
//     socket.on('username', function(username) {
//         socket.username = username;
//         io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
//     });

//     socket.on('disconnect', function(username) {
//         io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
//     })

//     socket.on('chat_message', function(message) {
//         io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
//     });

// });



//socket connection
require("./socket/connection")(fastify);


// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
});

fastify.get('/chat', (req, reply) => {
    reply.view('/views/chat/index.ejs', { text: 'text' })
  })




//socket io








// Run the server!
const server = fastify.listen(7000, function() {
    console.log('listening on *:7000');
});


