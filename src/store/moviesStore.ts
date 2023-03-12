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

  setMovies(list: IMovie[]) {
    this.movies = list;
  }

  setLoading(loading: boolean) {
    this.isLoading = loading;
  }

  setFilter(value: string) {
    this.filter = value;
  }

  fetchMovies(currentPage: number) {
    this.isLoading = true;
    fetch(
      `http://www.omdbapi.com/?s=star&page=${currentPage}&apikey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setLoading(false);
        this.setMovies([...this.movies, ...json.Search]);
      })
      .catch((err) => console.log(err));
  }
  filterMovies(currentPage: number) {
    this.clearList();
    this.isLoading = true;
    fetch(
      `http://www.omdbapi.com/?s=star&page=${currentPage}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setLoading(false);
        this.setMovies([...json.Search]);
      })
      .catch((err) => console.log(err));
  }
  filterSeries(currentPage: number) {
    this.clearList();
    this.isLoading = true;
    fetch(
      `http://www.omdbapi.com/?s=star&page=${currentPage}&type=series&apikey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setLoading(false);
        this.setMovies([...json.Search]);
      })
      .catch((err) => console.log(err));
  }
  clearList() {
    this.movies = [];
  }
  setSortingDirection() {
    this.sortingIsAsc = !this.sortingIsAsc;
  }
  sortMovies() {
    if (this.sortingIsAsc) {
      return this.movies.sort((a, b) => Number(a.Year.slice(0, 4)) - Number(b.Year.slice(0, 4)));
    }
    return this.movies.sort((a, b) => Number(b.Year.slice(0, 4)) - Number(a.Year.slice(0, 4)));
  }
  get searchMovies() {
    const regexp = new RegExp(this.filter, 'i');
    return this.movies.filter((movie) => !this.filter || regexp.test(movie.Title));
  }
}

const moviesStore = new MoviesStore();
export default moviesStore;
