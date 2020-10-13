import { Controller, Get } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from './interfaces/author.interface';

@Controller('authors')
export class AuthorsController {
    constructor(private readonly authorsService:AuthorsService){}

    @Get()
    getAll(): Author[]{
        return this.authorsService.getAuthors();
    }
}
