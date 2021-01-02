import { Component, OnInit } from '@angular/core';
import {BookDataService} from '../book-data.service';
import {Observable} from 'rxjs';
import {Book} from '../Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;
  //books: Book[];

  constructor(private bookData: BookDataService) {
    this.books$ = bookData.getBooks();

    let b = new Book();
  }

  ngOnInit(): void {
  }

}
