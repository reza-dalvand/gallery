import React from 'react';
import styles from './style';
import {TextInput} from 'react-native';

const CustomInput = ({
  placeHolder,
  secureTextEntry = false,
  styleType,
  inpAdditionStyles = {},
}) => {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeHolder}
      style={[styles[styleType], inpAdditionStyles]}
    />
  );
};

export default CustomInput;
