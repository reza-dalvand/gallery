import React, {useState} from 'react';
import {
  Box,
  Button,
  Center,
  Image,
  Text,
  useDisclose,
  useToast,
} from 'native-base';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Actionsheet} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';

const SingleVideo = () => {
  const {params} = useRoute();
  const {isOpen, onOpen, onClose} = useDisclose();
  const toast = useToast();

  const [whichHeart, setWhichHeart] = useState(false);
  return (
    <Box alignItems="center" flex="1">
      <Center>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Box w="100%" h={60} px={4} justifyContent="center">
              <Text
                fontSize="25"
                color="gray.500"
                _dark={{
                  color: 'gray.300',
                }}>
                موارد
              </Text>
            </Box>
            <Actionsheet.Item
              startIcon={<Icon size={27} name="download" />}
              ml={3}>
              <Text mt={1} fontSize={17}>
                دانلود فایل
              </Text>
            </Actionsheet.Item>
            <Actionsheet.Item
              startIcon={<Icon size={25} name="share-social" />}
              ml={3}>
              <Text fontSize={17}>اشتراک گذاری</Text>
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </Center>
      <Video
        poster="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000"
        repeat={true}
        controls={true}
        source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
        style={{
          height: '100%',
          width: '100%',
        }}
        resizeMode="stretch"
        posterResizeMode="stretch"
      />
      <Box w="100%" alignItems="center" position="absolute" bottom={3}>
        <Button
          fontSize="30"
          // fontWeight="bold"
          borderRadius={8}
          w="35%"
          bg="darkBlue.500"
          onPress={onOpen}>
          نمایش منو
        </Button>
      </Box>
      <Box style={{position: 'absolute', left: 13, top: 7}}>
        <Icon
          onPress={() => {
            setWhichHeart(!whichHeart);
            toast.show({
              render: () => {
                return (
                  <Box
                    bg={whichHeart ? 'red.500' : 'green.600'}
                    _text={{color: 'white'}}
                    px="2"
                    py="1"
                    rounded="sm"
                    mb={5}>
                    {whichHeart
                      ? 'از قسمت مورد علاقه ها حذف شد'
                      : 'به قسمت مورد علاقه ها اضافه شد'}
                  </Box>
                );
              },
            });
          }}
          name={whichHeart ? 'heart' : 'md-heart-outline'}
          size={30}
          color="red"
        />
      </Box>
    </Box>
  );
};

export default SingleVideo;
