import {useContext, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import useFade from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBg = ({children}: Props) => {
  const {colors, prevColors, setPrevColorsFn} = useContext(GradientContext);

  const {opacity, fadeIn, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPrevColorsFn(colors);
      fadeOut(0);
    });
  }, [colors]);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[prevColors.primaryColor, prevColors.secondaryColor, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />

      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colors.primaryColor, colors.secondaryColor, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.7}}
        />
      </Animated.View>

      {children}
    </View>
  );
};
export default GradientBg;
