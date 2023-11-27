import { Server as HttpServer } from 'http';
import { Server as SocketServer, Socket } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (!res.socket! || !res.socket!.server) {
    console.log('No server instance on socket');
    return res.status(500).end("Socket server error");
  }
  
  const httpServer: HttpServer = res.socket!.server as HttpServer;
  const io = new SocketServer(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
  });
  io.on('connection', (socket: Socket) => {
    console.log('a user connected');
    // handle events
    
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
  });
  res.status(200).end("Socket server running");
}