module.exports=(app,socket)=>{
    socket.on("join-chat-room",roomId=>{
        console.log("trying to connect");
        socket.join(roomId);
    });
}