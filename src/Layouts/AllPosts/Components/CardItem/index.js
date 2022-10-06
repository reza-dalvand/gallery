import React, {useMemo, useState} from '@types/react';
import {Box, Center, Image, Skeleton, VStack} from 'native-base';

export const CardItem = ({item}) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 3000);
  return (
    <Box w="100%" p="1">
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
    </Box>
  );
};
