import { makeAutoObservable } from 'mobx';
import { IMovie } from '../interfaces/movie.interface';

class MoviesStore {
  movies: IMovie[] = [];
  isLoading = false;
  filter = '';

  constructor() {
    makeAutoObservable(this);
  }

  fetchMovies() {
    this.isLoading = true;
    fetch('http://www.omdbapi.com/?s=star&apikey=5cefe06b')
      .then((response) => response.json())
      .then((json) => {
        this.isLoading = false;
        this.movies = [...this.movies, ...json.Search];
      })
      .catch((err) => console.log(err));
  }
  get filteredMovie() {
    const regexp = new RegExp(this.filter, 'i');
    return this.movies.filter((movie) => !this.filter || regexp.test(movie.Title));
  }
}

const moviesStore = new MoviesStore();
export default moviesStore;
