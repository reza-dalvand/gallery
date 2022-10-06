import {useColorMode} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

export const HeaderBarIcon = () => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Icon
      style={{margin: 15}}
      onPress={() => {
        toggleColorMode();
      }}
      name={colorMode === 'light' ? 'sunny' : 'moon'}
      size={25}
      color={colorMode === 'light' ? 'orange' : 'white'}
    />
  );
};
