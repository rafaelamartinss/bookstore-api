import { Injectable } from '@nestjs/common';
import { Author } from './interfaces/author.interface';

@Injectable()
export class AuthorsService {
    private readonly authors: Author[] = [];

    getAuthors(): Author[]{
        return this.authors;
    }
}
