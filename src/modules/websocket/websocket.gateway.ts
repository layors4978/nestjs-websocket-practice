import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';

@WebSocketGateway({ cors: '*' })
export class WebsocketGateway {
  // use SubscribeMessage decorator to listen messages from client
  @SubscribeMessage('echo')
  echoHandler(@MessageBody() message: string): string {
    return message;
  }
}
