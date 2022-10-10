import React, {useEffect, useState} from 'react';
import {Box, Button, Image, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';
import VisibilitySensor from '@svanboxel/visibility-sensor-react-native';

export const Album = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const handleImageVisibility = visible => {
    visible ? setPlayVideo(true) : setPlayVideo(false);
  };
  useEffect(() => {}, [playVideo]);

  const navigation = useNavigation();
  return (
    <VisibilitySensor onChange={handleImageVisibility}>
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
            <Video
              poster="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"
              muted={true}
              repeat={true}
              paused={!playVideo}
              source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 8,
              }}
              resizeMode="cover"
              posterResizeMode="cover"
            />
          </Box>
          <Box justifyContent="space-between" w="50%" p="0.5">
            <Video
              poster="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"
              muted={true}
              repeat={true}
              paused={!playVideo}
              source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
              style={{
                height: '49%',
                // width: '100%',
                borderRadius: 8,
              }}
              resizeMode="cover"
              posterResizeMode="cover"
            />
            <Video
              poster="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"
              // controls={true}
              paused={!playVideo}
              muted={true}
              repeat={true}
              source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
              style={{
                height: '49%',
                // width: '100%',
                borderRadius: 8,
              }}
              resizeMode="cover"
              posterResizeMode="cover"
            />
          </Box>
        </Box>
        <Box
          mt={1}
          w="100%"
          flexDir="row"
          justifyContent="space-between"
          alignItems="center">
          <Text ml={3} fontSize="18" fontWeight="extrabold">
            ویدو های شاد
          </Text>
          <Button
            onPress={() => navigation.navigate('allVideoInCategory')}
            borderRadius="8"
            mr="2"
            bg="darkBlue.500"
            size="sm">
            نمایش همه
          </Button>
        </Box>
      </Box>
    </VisibilitySensor>
  );
};
