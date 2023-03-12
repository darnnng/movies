import { makeAutoObservable } from 'mobx';
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

  setMovie(item: IMovieBox) {
    this.movie = item;
  }

  setLoading(loading: boolean) {
    this.isLoading = loading;
  }

  fetchMovie(id: string) {
    this.isLoading = true;
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        this.setLoading(false);
        this.setMovie({ ...json });
      })
      .catch((err) => console.log(err));
  }
}

const singleMovieStore = new SingleMovieStore();
export default singleMovieStore;
