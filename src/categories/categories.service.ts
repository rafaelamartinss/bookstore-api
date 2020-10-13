import { Injectable } from '@nestjs/common';
import { Category } from './interfaces/category.interface';

@Injectable()
export class CategoriesService {
    private readonly categories: Category[] = [];

    getCategories(){
        return this.categories;
    }
}
