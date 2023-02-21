import {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';

const HomeScreen = () => {
  const {nowPlayingMovies, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  console.log(nowPlayingMovies[0]?.title);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="grey" size={100} />
      </View>
    );
  }

  return (
    <View style={{marginTop: top + 20}}>
      <MoviePoster movie={nowPlayingMovies[0]} />
    </View>
  );
};
export default HomeScreen;
