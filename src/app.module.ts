import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";

@Module({
  imports: [
    AuthorsModule, 
    CategoriesModule, 
    AuthModule, 
    UsersModule,
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
