import {useNavigation} from '@react-navigation/core';
import {CommonActions} from '@react-navigation/native';
import {View, Text, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const navigation = useNavigation()

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  
  return (
    <TouchableOpacity activeOpacity={0.8}  onPress={() =>
      navigation.dispatch(CommonActions.navigate({name: 'Detail', params: movie}), )
    } style={{width, height, marginHorizontal: 2,paddingBottom:20, paddingHorizontal:4}} >
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};
export default MoviePoster;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 16,
  },
  imageContainer: {
    flex: 1,
    shadowColor: '#1F1F1F',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
