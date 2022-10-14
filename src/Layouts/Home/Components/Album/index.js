import React from 'react';
import {Box, Button, Image, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';

export const Album = () => {
  const navigation = useNavigation();
  return (
    <Box
      m={3}
      p={2}
      _light={{bg: 'white'}}
      _dark={{bg: 'gray.500'}}
      shadow="9"
      h="270"
      borderRadius={8}
      flex="1">
      <Box p="1" h="210" w="100%" flexDir="row">
        <Box w="50%" p="0.5">
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
        <Box justifyContent="space-between" w="50%" p="0.5">
          <Image
            source={{
              uri: 'https://mclaren.scene7.com/is/image/mclaren/DSC00052_6:crop-1x1?wid=1200&hei=1200',
            }}
            h="49%"
            borderRadius={8}
            resizeMode="cover"
            alt="image"
          />
          <Image
            source={{
              uri: 'https://www.romaniajournal.ro/wp-content/uploads/2015/04/North-of-Romania.jpg',
            }}
            h="49%"
            borderRadius={8}
            resizeMode="cover"
            alt="image"
          />
        </Box>
      </Box>
      <Box
        mt={1}
        w="100%"
        flexDir="row"
        justifyContent="space-between"
        alignItems="center">
        <Text bold ml={3} fontSize="xl">
          دسته بندی شاد
        </Text>
        <Button
          onPress={() => navigation.navigate('AllPosts')}
          borderRadius="8"
          mr="2"
          bg="darkBlue.500"
          size="sm">
          نمایش همه
        </Button>
      </Box>
    </Box>
  );
};
