import { Injectable } from '@angular/core';
import { fakeMovies } from './fake-movies';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  getMovies(): Observable<Movie[]>{
    this.messagesService.add(`${new Date().toLocaleString()}. Get movie list`);
    return of(fakeMovies);
  }
  constructor(public messagesService: MessagesService) { }
}
