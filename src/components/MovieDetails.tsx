import {Text, View} from 'react-native';
import {MovieFullRes} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  movieFull: MovieFullRes;
  cast: Cast[];
}

const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <View style={{marginHorizontal: 20}}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Icon name="star-outline" size={16} color="#4D5259" />
        <Text style={{marginLeft: 4, marginTop: 1}}>
          {movieFull.vote_average}
          <Text> - {movieFull.genres.map(g => g.name).join(', ')}</Text>
        </Text>
      </View>
    </View>
  );
};
export default MovieDetails;
