import { action, makeAutoObservable } from 'mobx';
import { IMovieBox } from './../interfaces/movie.interface';

class SingleMovieStore {
  movie: IMovieBox = {
    imdbID: '',
    Title: '',
    Poster: '',
  };
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchMovie(id: string) {
    this.isLoading = true;
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=5cefe06b`)
      .then((response) => response.json())
      .then(
        action((json) => {
          this.isLoading = false;
          this.movie = { ...json };
        })
      )
      .catch((err) => console.log(err));
  }
}

const singleMovieStore = new SingleMovieStore();
export default singleMovieStore;
