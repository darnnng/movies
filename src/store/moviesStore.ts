import { makeAutoObservable, toJS } from 'mobx';
import { IMovie } from '../interfaces/movie.interface';

class MoviesStore {
  movies: IMovie[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  fetchMovies() {
    fetch('http://www.omdbapi.com/?s=star&apikey=5cefe06b')
      .then((response) => response.json())
      .then((json) => {
        console.log('picya:', json);
        this.movies = [...this.movies, ...json.Search];
      })
      .catch((err) => console.log(err));
  }
}

const moviesStore = new MoviesStore();
export default moviesStore;
