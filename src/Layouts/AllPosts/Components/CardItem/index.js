import React, {useMemo, useState} from 'react';
import {Box, Button, Center, Image, Skeleton, VStack} from 'native-base';
import {TouchableHighlight} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

export const CardItem = ({item}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 3000);
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('singlePost', {post: item})}
      style={{width: '100%', padding: '1%'}}>
      <Center w="100%">
        <VStack
          w="100%"
          rounded="md"
          _dark={{
            borderColor: 'coolGray.500',
          }}
          _light={{
            borderColor: 'coolGray.200',
          }}>
          <Skeleton isLoaded={isLoaded} h={randomBool ? 150 : 280}>
            <Image
              source={{uri: item.url}}
              style={{
                height: randomBool ? 150 : 280,
                alignSelf: 'stretch',
                borderRadius: 8,
              }}
              resizeMode="contain"
              alt="image"
            />
          </Skeleton>
        </VStack>
      </Center>
    </TouchableHighlight>
  );
};
