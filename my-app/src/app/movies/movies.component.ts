import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
// import { fakeMovies } from '../fake-movies';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  // movie: Movie = {
  //   id: 1,
  //   name: "star war",
  //   releaseYear: 2019
  // }

  // movies = fakeMovies;
  movies: Movie[];

  constructor(private movieService: MovieService) { }

  getMoviesFromService(): void{
    // this.movies = this.movieService.getMovies();
    this.movieService.getMovies().subscribe(
        (updatedMovies) => {
          this.movies = updatedMovies;
          console.log(`this.movies = ${JSON.stringify(this.movies)}`);       
        }
    );
  }

  ngOnInit() {
    this.getMoviesFromService();
  }

  selectdMovie: Movie;
  onSelect(movie: Movie): void{
    this.selectdMovie = movie;
  }  

}
