import { InMemoryDbService, InMemoryBackendConfig  } from 'angular-in-memory-web-api';

import { Book } from '../book';

import { Books } from '../../mocks/books';

export class BookData implements InMemoryDbService, InMemoryBackendConfig  {
  createDb() {
    const books: Book[] = Books;

    return { books };
  }
}
