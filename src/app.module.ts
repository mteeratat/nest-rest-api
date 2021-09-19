import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemController } from './item/item.controller';
import { ItemsService } from './items/items.service';
import { ItemService } from './item/item.service';

@Module({
  imports: [],
  controllers: [AppController, ItemController],
  providers: [AppService, ItemsService, ItemService],
})
export class AppModule {}
