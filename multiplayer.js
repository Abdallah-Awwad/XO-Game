var socket = io();
socket.emit('chat message', 'connected properly');

function sendAction(elmId,player,choice) 
{
    socket.emit('chat message', { 'player' : player   , 'box': box[elmId].id, 'choice': choice }); // This will emit the event to all connected sockets
    gameEnds(elmId, player, choice)
}

function publishWin(elmId,player,choice)
{
    socket.emit('chat message', { 'player' : player   , 'box': box[elmId].id, 'choice': choice, 'result':'win' }); // This will emit the event to all connected sockets
}

function publishInfo(name, choice) 
{
    socket.emit('chat message', { 'player' : name  , 'choice': choice, 'playerinfo': 'sent' });
}

    // socket.emit('chat message', player+':'+ box[elmId].id+';'+ choice);

socket.on('chat message', function(msg) {
    
    if (msg.playerinfo) {
        guestChoice = msg.choice;
    }
    
    if (!isNaN(msg.box)) {
        console.log(msg);
        document.getElementById(msg.box).innerHTML = msg.choice;


        // if(msg.result && msg.result != '') {
        //     console.log(msg.box);
        //     console.log(msg.player+' has'+msg.result)
        // }

        if(msg.result && msg.result != '') {
            console.log(msg.box);
            console.log(msg.player+' has'+msg.result)
        }

        
    }
        
   
  });



        

        