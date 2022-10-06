import React, {useMemo, useState} from 'react';
import {ScrollView} from 'native-base';
import {Album} from './Components/Album';

const Home = ({navigation}) => {
  return (
    <ScrollView _light={{bg: '#F0F4F4'}} _dark={{bg: '#1B262C'}}>
      {[1, 2, 3, 4, 5, 6].map(item => {
        return <Album navigation={navigation} key={item} />;
      })}
    </ScrollView>
  );
};

export default Home;
