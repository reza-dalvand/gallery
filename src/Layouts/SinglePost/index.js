import React from 'react';
import {Box, Button, Image, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const SinglePost = () => {
  const navigation = useNavigation();
  return (
    <Box flex="1">
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9DX-QguYYnIQsHPLN2rzzgTdY7iNX2r74A&usqp=CAU',
        }}
        w="100%"
        h="100%"
        borderRadius={8}
        resizeMode="cover"
        alt="image"
      />
    </Box>
  );
};

export default SinglePost;
