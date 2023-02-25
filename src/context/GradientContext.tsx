import {createContext, useState} from 'react';

interface ImageColors {
  primaryColor: string;
  secondaryColor: string;
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setColorsFn: (colors: ImageColors) => void;
  setPrevColorsFn: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<ImageColors>({
    primaryColor: 'transparent',
    secondaryColor: 'transparent',
  });

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primaryColor: 'transparent',
    secondaryColor: 'transparent',
  });

  const setColorsFn = (colors: ImageColors) => {
    setColors(colors);
  };

  const setPrevColorsFn = (colors: ImageColors) => {
    setPrevColors(colors);
  };

  return (
    <GradientContext.Provider
      value={{colors, prevColors, setColorsFn, setPrevColorsFn}}>
      {children}
    </GradientContext.Provider>
  );
};
