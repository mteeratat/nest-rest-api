import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemService } from './item.service';
import { Item } from './interfaces/item.interface';

@Controller('item')
export class ItemController {
    constructor(private readonly itemService: ItemService) {}

    @Get()
    findAll(): Promise<Item[]> {
        return this.itemService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Item> {
        return this.itemService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemService.create(createItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item> {
        return this.itemService.delete(id);
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
        return this.itemService.update(id, updateItemDto);
    }
}

