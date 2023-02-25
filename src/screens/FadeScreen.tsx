import {useRef} from 'react';
import {Animated, Button, View} from 'react-native';
import useFade from '../hooks/useFade';
const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = useFade();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#4D5259',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#212427',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity,
        }}></Animated.View>
      <Button title="Fade In" onPress={() => fadeIn()} />
      <Button title="Fade Out" onPress={() => fadeOut()} />
    </View>
  );
};
export default FadeScreen;
