import { Injectable } from '@nestjs/common';
import { Author } from './interfaces/author.interface';

@Injectable()
export class AuthorsService {
    private readonly authors: Author[] = [];

    create(author: Author){
        return this.authors.push(author);
    }

    getAuthors(): Author[]{
        return this.authors;
    }
}
