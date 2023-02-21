import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying, Movie} from '../interfaces/movieInterface';

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const {data} = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setNowPlayingMovies(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    nowPlayingMovies,
    isLoading,
  };
};
export default useMovies;
