import {View, Text, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
}

const MoviePoster = ({movie}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={{width: 300, height: 420}}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </View>
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
