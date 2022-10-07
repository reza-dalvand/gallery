import React from 'react';
import {Box, Button, Image, Text} from 'native-base';
import {useNavigation, useRoute} from '@react-navigation/native';

const SinglePost = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  return (
    <Box flex="1">
      <Image
        source={{
          uri: params?.post.url,
        }}
        w="100%"
        h="100%"
        borderRadius={8}
        resizeMode="contain"
        alt="image"
      />
    </Box>
  );
};

export default SinglePost;
