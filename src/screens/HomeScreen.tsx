import {useEffect, useContext} from 'react';
import {ActivityIndicator, Dimensions, View, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';
import GradientBg from '../components/GradientBg';
import {getColors} from '../helpers/getColors';
import {GradientContext} from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  const {setColorsFn} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primaryColor = '', secondaryColor = ''] = await getColors(uri);

    setColorsFn({primaryColor, secondaryColor});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="grey" size={100} />
      </View>
    );
  }

  return (
    <GradientBg>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBg>
  );
};
export default HomeScreen;
