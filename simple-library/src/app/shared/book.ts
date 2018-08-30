export class Book {
  id: number;
  author: string;
  title: string;
}

export class BooksPage {
  content: Book[] = [];
  totalElements: number;
}
