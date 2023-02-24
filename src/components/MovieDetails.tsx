import {Text, View, FlatList} from 'react-native';
import {MovieFullRes} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem';

interface Props {
  movieFull: MovieFullRes;
  cast: Cast[];
}

const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Icon name="star-outline" size={16} color="#4D5259" />
          <Text style={{marginLeft: 4, marginTop: 1}}>
            {movieFull.vote_average}
            <Text>- {movieFull.genres.map(g => g.name).join(', ')}</Text>
          </Text>
        </View>

        <Text style={{fontSize: 24, marginTop: 10, fontWeight: 'bold'}}>
          Overview
        </Text>
        <Text style={{fontSize: 16}}>{movieFull.overview}</Text>
        <Text style={{fontSize: 24, marginTop: 10, fontWeight: 'bold'}}>
          Budget
        </Text>
        <Text style={{fontSize: 16}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 24,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Cast
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{marginTop: 10, height: 80}}
        />
      </View>
    </>
  );
};
export default MovieDetails;
