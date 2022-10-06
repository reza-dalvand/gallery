import React, {useMemo, useState} from 'react';
import {
  Box,
  Center,
  HStack,
  Image,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from 'native-base';
import MasonryList from '@react-native-seoul/masonry-list';
import {Dimensions, View} from 'react-native';

const data = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    albumId: 1,
    id: 3,
    title: 'officia porro iure',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
  {
    albumId: 1,
    id: 4,
    title: 'culpa odio esse,',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    thumbnailUrl: 'https://via.placeholder.com/150/d32776',
  },
  {
    albumId: 1,
    id: 5,
    title: 'natus nisi omnis,',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
  },
  {
    albumId: 1,
    id: 6,
    title: 'accusamus ea ,',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
  },
  {
    albumId: 1,
    id: 6,
    title: 'accusamus ea ,',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
  },
  {
    albumId: 1,
    id: 6,
    title: 'accusamus ea ,',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
  },
];
const CardItem = ({item}) => {
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
              resizeMode="cover"
              alt="image"
            />
          </Skeleton>
          {/*<Skeleton*/}
          {/*  borderWidth={1}*/}
          {/*  borderColor="coolGray.200"*/}
          {/*  endColor="warmGray.50"*/}
          {/*  size="20"*/}
          {/*  rounded="full"*/}
          {/*  mt="-70"*/}
          {/*/>*/}
          {/*<HStack space="2">*/}
          {/*  <Skeleton size="5" rounded="full" />*/}
          {/*  <Skeleton size="5" rounded="full" />*/}
          {/*  <Skeleton size="5" rounded="full" />*/}
          {/*  <Skeleton size="5" rounded="full" />*/}
          {/*  <Skeleton size="5" rounded="full" />*/}
          {/*</HStack>*/}
          {/*<Skeleton.Text lines={3} alignItems="center" px="12" />*/}
          {/*<Skeleton mb="3" w="40" rounded="20" />*/}
        </VStack>
      </Center>
    </Box>
  );
};
const Home = () => {
  return (
    <ScrollView _light={{bg: '#F0F4F4'}} _dark={{bg: '#1B262C'}}>
      <Box shadow="9" flex="1">
        <Box
          _light={{bg: '#CDC9C3'}}
          _dark={{bg: '#1B262C'}}
          p="1"
          h="200"
          w="100%"
          // justifyContent="center"
          flexDir="row">
          <Box w="50%" p="0.5">
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
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
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
              }}
              h="49%"
              borderRadius={8}
              resizeMode="cover"
              alt="image"
            />
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
              }}
              h="49%"
              borderRadius={8}
              resizeMode="cover"
              alt="image"
            />
          </Box>
        </Box>
        <Text>متن تستی برای این آلبوم</Text>
      </Box>

      {/*<MasonryList*/}
      {/*  data={data}*/}
      {/*  keyExtractor={(item): string => item.id}*/}
      {/*  numColumns={2}*/}
      {/*  showsVerticalScrollIndicator={false}*/}
      {/*  renderItem={({item}) => <CardItem item={item} />}*/}
      {/*  refreshing={false}*/}
      {/*  // onRefresh={() => null}*/}
      {/*  onEndReachedThreshold={0.1}*/}
      {/*  onEndReached={() => console.log('onEndReached')}*/}
      {/*/>*/}
    </ScrollView>
  );
};

export default Home;
