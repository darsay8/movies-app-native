import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {MovieFullRes} from '../interfaces/movieInterface';
import {CreditRes, Cast} from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFullRes;
  cast: Cast[];
}

const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDB.get<MovieFullRes>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditRes>(`/${movieId}/credits`);

    const [movieDetailsRes, castRes] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsRes.data,
      cast: castRes.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
export default useMovieDetails;
