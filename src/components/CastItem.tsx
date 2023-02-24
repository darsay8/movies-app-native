import {View, Text, Image, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{uri}}
          style={{width: 50, height: 50, borderRadius: 8, marginRight: 8}}
        />
      )}

      <View style={{}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 14}}>{actor.character}</Text>
      </View>
    </View>
  );
};
export default CastItem;

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 6,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    textShadowRadius: 7,
    elevation: 4,
    marginLeft: 20,
  },
});
