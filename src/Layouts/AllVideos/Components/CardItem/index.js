import React, {useMemo, useState, useEffect} from 'react';
import {Box, Button, Center, Image, Skeleton, View, VStack} from 'native-base';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {TouchableHighlight} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Video from 'react-native-video';
import VisibilitySensor from '@svanboxel/visibility-sensor-react-native';

export const CardItem = ({item}) => {
  const [playVideo, setPlayVideo] = useState(false);

  const handleImageVisibility = visible => {
    visible ? setPlayVideo(true) : setPlayVideo(false);
  };

  useEffect(() => {}, [playVideo]);
  const navigation = useNavigation();
  const route = useRoute();
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 3000);
  return (
    <VisibilitySensor onChange={handleImageVisibility}>
      <Box alignItems="center">
        <TouchableHighlight
          onPress={() => navigation.navigate('singleVideo', {post: item})}
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
                <Video
                  poster="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"
                  paused={!playVideo}
                  repeat={true}
                  muted={true}
                  source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
                  style={{
                    height: randomBool ? 150 : 280,
                    width: '99%',
                    borderRadius: 8,
                  }}
                  resizeMode="cover"
                  posterResizeMode="cover"
                />
              </Skeleton>
            </VStack>
          </Center>
        </TouchableHighlight>
      </Box>
    </VisibilitySensor>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
