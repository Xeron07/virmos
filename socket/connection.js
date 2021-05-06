const chatConfig=require("./chat");


module.exports =(app)=>{
    app.ready(err => {
        if (err) throw err
      
        app.io.on('connect', (socket) => {

            chatConfig(app,socket);


              socket.on('username', function(username) {
              socket.username = username;
              app.io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
          });
      
          socket.on('disconnect', function(username) {
            app.io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
          })
      
          socket.on('chat_message', function(message) {
            app.io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
          });
        });
      });
}



