import  { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

export const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST"],
        credentials: true
    }
});

export function getReceiverSocketId(userId)  {
    return userSocketMap[userId];
}

//used to store online users
const userSocketMap = {}; //{ userId: socketId }

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId) userSocketMap[userId] = socket.id;

    //used to send events to all the connect clients
    io.emit("get-online-users", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("a user disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("get-online-users", Object.keys(userSocketMap));
    });
});

export { app, server };
