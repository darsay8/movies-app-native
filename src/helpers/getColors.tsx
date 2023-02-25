import ImageColors from 'react-native-image-colors';

export const getColors = async (uri: string) => {
  const resColors = await ImageColors.getColors(uri, {});

  let primaryColor;
  let secondaryColor;

  switch (resColors.platform) {
    case 'android':
      primaryColor = resColors.vibrant;
      secondaryColor = resColors.average;
      break;
    case 'ios':
      primaryColor = resColors.primary;
      secondaryColor = resColors.secondary;
      break;
    default:
      throw new Error('Unexpected platform key');
  }

  return [primaryColor, secondaryColor];
};
