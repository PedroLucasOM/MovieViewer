// tslint:disable: variable-name
export class Movie {
  id: number;
  vote_average: number;
  title: string;
  poster_path: string;
  genre_ids: any[];
  overview: string;
  release_date: any;
  backdrop_path: any;
  popularity: any;
  vote_count: any;
}

export class Genre {
  id: number;
  name: string;
  movies: Movie[];
}
