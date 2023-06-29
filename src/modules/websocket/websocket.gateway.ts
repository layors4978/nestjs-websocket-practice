import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: '*' })
export class WebsocketGateway {
  @WebSocketServer()
  server: Server;

  // use SubscribeMessage decorator to listen messages from client
  @SubscribeMessage('echo')
  echoHandler(@MessageBody() message: string): string {
    return message;
  }

  @SubscribeMessage('broadcast')
  broadcastHandler(@MessageBody() message: string): void {
    this.server.emit('broadcast', message);
  }
}
