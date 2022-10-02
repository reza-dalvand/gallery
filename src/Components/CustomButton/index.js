import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';
import {color} from 'native-base/lib/typescript/theme/styled-system';

const CustomButton = ({
  onPress = () => {},
  text,
  typeStyle,
  btnTxtStyle = 'txtWhite',
  btnAdditionStyles = {},
  txtAdditionStyles = {},
}) => {
  return (
    <TouchableOpacity
      backgroundColor="red"
      onPress={() => onPress()}
      style={[styles[typeStyle], btnAdditionStyles]}>
      <Text style={[styles[btnTxtStyle], txtAdditionStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
