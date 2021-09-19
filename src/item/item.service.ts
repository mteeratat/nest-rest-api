import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ItemModule } from './item.module';

@Injectable()
export class ItemService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

    findAll(): Item[] {
        return this.items
    };

    findOne(id: string): Item {
        return this.items.find(item => item.id === id);
    };
}
