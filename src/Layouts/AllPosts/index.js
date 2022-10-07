import React from 'react';
import MasonryList from '@react-native-seoul/masonry-list';

import {CardItem} from './Components/CardItem';
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
    title: 'reprehenderit est',
    url: 'https://mclaren.scene7.com/is/image/mclaren/DSC00052_6:crop-1x1?wid=1200&hei=1200',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    albumId: 1,
    id: 4,
    title: 'officia porro iure',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9DX-QguYYnIQsHPLN2rzzgTdY7iNX2r74A&usqp=CAU',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
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
    title: 'reprehenderit est',
    url: 'https://mclaren.scene7.com/is/image/mclaren/DSC00052_6:crop-1x1?wid=1200&hei=1200',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    albumId: 1,
    id: 7,
    title: 'officia porro iure',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9DX-QguYYnIQsHPLN2rzzgTdY7iNX2r74A&usqp=CAU',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
  {
    albumId: 1,
    id: 8,
    title: 'accusamus beatae ad',
    url: 'https://www.romaniajournal.ro/wp-content/uploads/2015/04/North-of-Romania.jpg',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 9,
    title: 'reprehenderit est',
    url: 'https://mclaren.scene7.com/is/image/mclaren/DSC00052_6:crop-1x1?wid=1200&hei=1200',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    albumId: 1,
    id: 77,
    title: 'officia porro iure',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9DX-QguYYnIQsHPLN2rzzgTdY7iNX2r74A&usqp=CAU',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
  {
    albumId: 1,
    id: 85,
    title: 'accusamus beatae ad',
    url: 'https://www.romaniajournal.ro/wp-content/uploads/2015/04/North-of-Romania.jpg',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 92,
    title: 'reprehenderit est',
    url: 'https://mclaren.scene7.com/is/image/mclaren/DSC00052_6:crop-1x1?wid=1200&hei=1200',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    albumId: 1,
    id: 543,
    title: 'officia porro iure',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9DX-QguYYnIQsHPLN2rzzgTdY7iNX2r74A&usqp=CAU',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
  {
    albumId: 1,
    id: 564,
    title: 'officia porro iure',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9DX-QguYYnIQsHPLN2rzzgTdY7iNX2r74A&usqp=CAU',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
];
const AllPosts = ({navigation}) => {
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

export default AllPosts;
