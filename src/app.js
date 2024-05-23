const { PeerServer } = require("peer");

const port = process.env.PORT || 3000;

const iceServers = [
  { urls: 'stun:freeturn.net:5349' },
  {
    urls: 'turns:freeturn.tel:5349',
    username: 'free',
    credential: 'free'
  }
];


 // Peer Server
 const peerServer = PeerServer({ 
  port: port,
  path: "/myapp",
  config: {
    iceServers: iceServers
  },
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


