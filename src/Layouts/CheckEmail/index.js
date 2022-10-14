import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  useColorMode,
  useToast,
} from 'native-base';

import Lottie from 'lottie-react-native';

const CheckEmail = ({navigation}) => {
  const toast = useToast();
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Box
      flex={1}
      alignItems="center"
      p={5}
      _light={{bg: '#F0F4F4'}}
      _dark={{bg: '#1B262C'}}>
      <Box mt={6} bg="white" borderRadius={200}>
        <Lottie
          style={{width: '60%', marginTop: '3%'}}
          source={require('../../../assets/images/mailAnimate.json')}
          autoPlay
          loop
        />
      </Box>
      <Box width="100%" alignItems="center" mt={6}>
        <Text fontSize={25}>ایمیل خود را چک کنید</Text>
        <Text mt={3} fontSize={16}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و
        </Text>

        <Button
          onPress={() => navigation.navigate('changePassword')}
          borderRadius="8"
          w={250}
          mt="10%"
          bg="darkBlue.500"
          size="lg">
          باز کردن صندوق ایمیل
        </Button>
        <Button
          mt={2}
          onPress={() => navigation.navigate('profile')}
          _text={{color: 'darkBlue.500', fontSize: 14}}
          size="md"
          variant="link">
          رد کردن.بعدا انجام میدم؟
        </Button>
      </Box>
    </Box>
  );
};

export default CheckEmail;
