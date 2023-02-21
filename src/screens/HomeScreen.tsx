import {useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Text,
  View,
  FlatList,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

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
      <View style={{height: 440}}>
        <Carousel
          data={nowPlayingMovies}
          renderItem={({item}: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  );
};
export default HomeScreen;
