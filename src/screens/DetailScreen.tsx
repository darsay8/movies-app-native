import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet, Image, Dimensions, ScrollView, Text } from 'react-native';
import { RootStackParams } from '../navigator/Navigator';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams,'Detail'>{};

const DetailScreen = ({route}:Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
   <ScrollView>
     <View style={styles.imageContainer}>
       <Image source={{uri}} style={styles.posterImage}/>
    </View>
    <Text style={styles.title}>{movie.title}</Text>
    <Text style={styles.text}>{movie.overview}</Text>
   </ScrollView>
  );
};

export default DetailScreen;


const styles = StyleSheet.create({
  imageContainer:{
    overflow:'hidden',
    width:'100%',
 height:screenHeight * 0.7,
 shadowColor: '#1F1F1F',
 shadowOffset: {
   width: 0,
   height: 3,
 },
 shadowOpacity: 0.4,
 shadowRadius: 4.65,
 elevation: 6,
 borderBottomEndRadius:48,
 borderBottomStartRadius:48
  },
posterImage:{
  flex:1
},
title:{
  fontSize:20,
  fontWeight:'bold'
},
subtitle:{
  fontSize:18,
},
text:{
  fontSize:16,
}

})