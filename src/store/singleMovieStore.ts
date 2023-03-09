/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable, toJS } from 'mobx';
import { IMovie } from '../interfaces/movie.interface';

class SingleMovieStore {
  movie: any = {};
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchMovie(id: string) {
    this.isLoading = true;
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=5cefe06b`)
      .then((response) => response.json())
      .then((json) => {
        this.isLoading = false;
        this.movie = { ...json };
      })
      .catch((err) => console.log(err));
  }
}

const singleMovieStore = new SingleMovieStore();
export default singleMovieStore;
