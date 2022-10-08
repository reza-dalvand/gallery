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

const SingleFavorite = () => {
  const {params} = useRoute();
  const {isOpen, onOpen, onClose} = useDisclose();
  const toast = useToast();

  const [whichHeart, setWhichHeart] = useState(true);
  return (
    <Box flex="1">
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
      <Image
        source={{
          uri: params?.post.url,
        }}
        w="100%"
        h="100%"
        borderRadius={1}
        resizeMode="contain"
        alt="image"
      />
      <Box w="100%" alignItems="center" position="absolute" bottom={3}>
        <Button
          fontSize="30"
          fontWeight="bold"
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

export default SingleFavorite;
