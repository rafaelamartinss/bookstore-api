import { Injectable } from '@nestjs/common';
import { Category } from './interfaces/category.interface';

@Injectable()
export class CategoriesService {
    private readonly categories: Category[] = [];

    findAll(){
        return this.categories;
    }

    create(category: Category){
        return this.categories.push(category);
    }
}
