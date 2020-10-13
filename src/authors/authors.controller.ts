import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from './interfaces/author.interface';
import { CreateAuthorDto } from './dto/create-author.dto';

@Controller('authors')
export class AuthorsController {
    constructor(private readonly authorsService:AuthorsService){}

    @Post()
    async create(@Body() createAuthorDto: CreateAuthorDto){
        return this.authorsService.create(createAuthorDto);
    }

    @Get()
    getAll(): Author[]{
        return this.authorsService.getAuthors();
    }
}
