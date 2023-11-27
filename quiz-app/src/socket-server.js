const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const httpServer = http.createServer();

const io = new Server(httpServer, {
    cors: {
        origin: '*', // or "http://localhost:3000"
        methods: ['GET', 'POST'],
        allowedHeaders: ['my-custom-header'],
    },
});

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on('join-room', (roomId) => {
        socket.join(roomId);
        console.log(`User joined room ${roomId}`);
    });

    socket.on("quiz-start", (quizData) => {
        console.log(quizId);
        console.log("Quiz start was triggered");
        socket.to(roomId).emit('quiz-start');
    }

    )

    socket.on('send-message', (roomId, message) => {
        socket.to(roomId).emit('receive-message', message);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const PORT = process.env.PORT || 3002;
httpServer.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});