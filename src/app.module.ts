import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsController } from './authors/authors.controller';
import { AuthorsModule } from './authors/authors.module';
import { AuthorsService } from './authors/authors.service';

@Module({
  imports: [AuthorsModule],
  controllers: [AppController, AuthorsController],
  providers: [AppService, AuthorsService],
})
export class AppModule {}
