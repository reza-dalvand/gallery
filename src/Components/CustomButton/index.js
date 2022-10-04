import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import {Button, useColorModeValue} from 'native-base';

const CustomButton = props => {
  const colorScheme = useColorModeValue('dark', 'blue');
  const variant = useColorModeValue('solid', 'outline');

  return <Button {...props}>ثبت نام</Button>;
};

export default CustomButton;
