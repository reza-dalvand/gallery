import React from 'react';
import MasonryList from '@react-native-seoul/masonry-list';

import {CardItem} from './Components/CardItem';
import {FlatList} from 'react-native';
import {Box} from 'native-base';
import Video from 'react-native-video';
const data = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad',
    url: 'https://www.romaniajournal.ro/wp-content/uploads/2015/04/North-of-Romania.jpg',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 2,
    title: 'accusamus beatae ad',
    url: 'https://www.romaniajournal.ro/wp-content/uploads/2015/04/North-of-Romania.jpg',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 3,
    title: 'accusamus beatae ad',
    url: 'https://www.romaniajournal.ro/wp-content/uploads/2015/04/North-of-Romania.jpg',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 4,
    title: 'accusamus beatae ad',
    url: 'https://www.romaniajournal.ro/wp-content/uploads/2015/04/North-of-Romania.jpg',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 5,
    title: 'accusamus beatae ad',
    url: 'https://www.romaniajournal.ro/wp-content/uploads/2015/04/North-of-Romania.jpg',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 6,
    title: 'accusamus beatae ad',
    url: 'https://www.romaniajournal.ro/wp-content/uploads/2015/04/North-of-Romania.jpg',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 7,
    title: 'accusamus beatae ad',
    url: 'https://www.romaniajournal.ro/wp-content/uploads/2015/04/North-of-Romania.jpg',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 8,
    title: 'accusamus beatae ad',
    url: 'https://www.romaniajournal.ro/wp-content/uploads/2015/04/North-of-Romania.jpg',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
];
const AllVideos = ({navigation}) => {
  return (
    <MasonryList
      data={data}
      keyExtractor={(item): string => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <CardItem item={item} />}
      refreshing={false}
      // onRefresh={() => null}
      onEndReachedThreshold={0.1}
      onEndReached={() => null}
    />
  );
};

export default AllVideos;
