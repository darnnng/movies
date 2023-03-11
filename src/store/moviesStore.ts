import { makeAutoObservable } from 'mobx';
import { IMovie } from '../interfaces/movie.interface';

class MoviesStore {
  movies: IMovie[] = [];
  isLoading = false;
  filter = '';
  sortingIsAsc = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchMovies(currentPage: number) {
    this.isLoading = true;
    fetch(`http://www.omdbapi.com/?s=star&page=${currentPage}&apikey=5cefe06b`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.isLoading = false;
        this.movies = [...this.movies, ...json.Search];
      })
      .catch((err) => console.log(err));
  }
  filterMovies() {
    this.movies = this.movies.filter((movie) => movie.Type === 'movie');
  }
  filterSeries() {
    this.movies = this.movies.filter((movie) => movie.Type === 'series');
  }
  clearList() {
    this.movies = [];
  }
  setSortingDirection() {
    this.sortingIsAsc = !this.sortingIsAsc;
  }
  sortMovies() {
    if (this.sortingIsAsc) {
      this.movies.sort((a, b) => Number(a.Year.slice(0, 4)) - Number(b.Year.slice(0, 4)));
      return;
    }
    this.movies.sort((a, b) => Number(b.Year.slice(0, 4)) - Number(a.Year.slice(0, 4)));
  }
  get moviesList() {
    return this.movies;
  }
  get filteredMovie() {
    const regexp = new RegExp(this.filter, 'i');
    return this.movies.filter((movie) => !this.filter || regexp.test(movie.Title));
  }
}

const moviesStore = new MoviesStore();
export default moviesStore;
