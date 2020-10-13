import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './interfaces/category.interface';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService:CategoriesService){}

    @Get()
    getAll(): Category[]{
        return this.categoriesService.getCategories();
    }
}
