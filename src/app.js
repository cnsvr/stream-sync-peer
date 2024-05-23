const { PeerServer } = require("peer");

const port = process.env.PORT || 3000;
 // Peer Server
 const peerServer = PeerServer({ port: port, path: "/myapp" });
 
 peerServer.on("connection", (client) => {
   console.log("Client connected", client.getId());
 });

peerServer.on("disconnect", (client) => {
    console.log("Client disconnected", client.getId());
});

peerServer.on("error", (error) => {
    console.log("Error", error);
});


