import {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import useMovies from '../hooks/useMovies';

const HomeScreen = () => {
  const {nowPlayingMovies, isLoading} = useMovies();

  console.log(nowPlayingMovies[0]?.title);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="grey" size={100} />
      </View>
    );
  }

  return (
    <View>
      <Text>🍿</Text>
    </View>
  );
};
export default HomeScreen;
