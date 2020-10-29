import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { User } from './users/user.entity';

@Module({
  imports: [
    AuthorsModule, 
    CategoriesModule, 
    AuthModule, 
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'full1705',
      database: 'bookstore',
      entities: [User],
      synchronize: true,
    })
  ],
  controllers: [AppController]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
