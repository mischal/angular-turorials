import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './Book';


@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  books = [
    {
      title: 'Book #1 from Service',
      subtitle: 'Subtitle #1',
      isbn: '1234.-123'
    },
    {
      title: 'Book #2 from Service',
      subtitle: 'Subtitle #2',
      isbn: ''
    },
    {
      title: 'Book #3 from Service',
      subtitle: 'Subtitle #3',
      isbn: ''
    }
  ];


  constructor(private http: HttpClient) {
  }

  getMockBooks(): Book[] {
    return this.books;
  }

  getBooks(): Observable<Book[]> {
    //return this.books;
    console.log("get books");
    return this.http.get<Book[]>('http://localhost:4730/books');
  }
}
