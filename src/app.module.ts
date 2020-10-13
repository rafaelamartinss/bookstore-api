import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [AuthorsModule, CategoriesModule]
})
export class AppModule {}
