import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book, BooksPage } from '../book';
import { PaginatorProperties } from '../paginator-properties';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'api/books';

  constructor(private httpClient: HttpClient) {}

  getBooksPage(properties: PaginatorProperties): Observable<BooksPage> {
    return this.httpClient.get<Book[]>(this.apiUrl).pipe(
      map(books => this.filterBooks(books, properties)),
      map(books => this.mapToBooksPage(books, properties))
    );
  }

  private filterBooks(books: Book[], props: PaginatorProperties): Book[] {
    return books.filter(book =>
      book.title.toLowerCase().includes(props.search.toLowerCase())
    );
  }

  private mapToBooksPage(books, props): BooksPage {
    const booksPage = new BooksPage();

    booksPage.content = books.slice(props.first, (props.page + 1) * props.size);
    booksPage.totalElements = books.length;

    return booksPage;
  }
}
