import { Module } from '@nestjs/common';
import { WebsocketModule } from './modules/websocket/websocket.module';

@Module({
  imports: [WebsocketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
