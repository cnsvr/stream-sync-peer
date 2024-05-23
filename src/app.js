const { PeerServer } = require("peer");

const port = process.env.PORT || 3000;

const iceServers = [

      {
            "urls": "stun:stun.relay.metered.ca:80"
      },
      {
            "urls": "turn:europe.relay.metered.ca:80",
            "username": "1f56d8c725879fb3809563fa",
            "credential": "7QNpUd1kXOjtpK9/"
      },
      {
            "urls": "turn:europe.relay.metered.ca:80?transport=tcp",
            "username": "1f56d8c725879fb3809563fa",
            "credential": "7QNpUd1kXOjtpK9/"
      },
      {
            "urls": "turn:europe.relay.metered.ca:443",
            "username": "1f56d8c725879fb3809563fa",
            "credential": "7QNpUd1kXOjtpK9/"
      },
      {
            "urls": "turns:europe.relay.metered.ca:443?transport=tcp",
            "username": "1f56d8c725879fb3809563fa",
            "credential": "7QNpUd1kXOjtpK9/"
      }

];


 // Peer Server
 const peerServer = PeerServer({ 
  port: port,
  path: "/myapp",
  config: {
    iceServers: iceServers
  }
});
 
 peerServer.on("connection", (client) => {
   console.log("Client connected", client.getId());
 });

peerServer.on("disconnect", (client) => {
    console.log("Client disconnected", client.getId());
});

peerServer.on("error", (error) => {
    console.log("Error", error);
});


