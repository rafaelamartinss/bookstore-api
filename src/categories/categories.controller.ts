import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './interfaces/category.interface';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService:CategoriesService){}

    @Get()
    async findAll(): Promise<Category[]>{
        return this.categoriesService.findAll();
    }

    @Post()
    async create(@Body() createCategoryDto: CreateCategoryDto){
        return this.categoriesService.create(createCategoryDto);
    }
}
