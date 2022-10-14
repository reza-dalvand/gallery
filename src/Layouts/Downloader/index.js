import React, {Fragment, useState} from 'react';
import {View} from 'react-native';
import {Box, ScrollView, Text, useColorMode, Button, Input} from 'native-base';
import Lottie from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Downloader = ({navigation}) => {
  const {colorMode, toggleColorMode} = useColorMode();
  const [completeDownload, setCompleteDownload] = useState(false);

  return (
    <Box
      _light={{bg: 'white'}}
      _dark={{bg: '#1B262C'}}
      flex="1"
      p="1"
      justifyContent="center"
      alignItems="center">
      {completeDownload ? (
        <Fragment>
          {/*<Icon*/}
          {/*  name={'happy-outline'}*/}
          {/*  color={colorMode === 'light' ? 'pink' : 'pink'}*/}
          {/*  size={50}*/}
          {/*/>*/}
          <Lottie
            style={{width: '85%', marginTop: '10%'}}
            source={require('../../../assets/images/animateDownloadCompelet.json')}
            autoPlay
            loop
          />

          <Box mt={10} w="90%" alignItems="center" justifyContent="center">
            <Text mt={10} color="darkBlue.500">
              https://www.w3schools.com/html/mov_bbb.mp4
            </Text>
            <Text mt={3} color="green.600" fontSize="30">
              فایل مورد نظر یافت شد.
            </Text>

            <Button
              onPress={() => setCompleteDownload(false)}
              borderRadius="8"
              width="90%"
              mt={10}
              bg="darkBlue.500"
              size="lg">
              دانلود فایل
            </Button>
          </Box>
        </Fragment>
      ) : (
        <>
          <Text fontSize={30}>اینستا دانلودر</Text>
          <Lottie
            style={{width: '80%', marginTop: '3%'}}
            source={require('../../../assets/images/animateDownloader.json')}
            autoPlay
            loop
          />

          <Box mt={5} w="90%" alignItems="center" justifyContent="center">
            <Input
              selectTextOnFocus={true}
              mt={10}
              bg="gray.100"
              w="90%"
              defaultValue=""
              placeholder="لینک خود را وارد کنید..."
              textAlign="center"
              borderColor="#BBE1FA"
              placeholderTextColor="gray.500"
            />

            <Button
              onPress={() => setCompleteDownload(true)}
              borderRadius="8"
              width="90%"
              mt="4"
              bg="darkBlue.500"
              size="lg">
              ارسال
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Downloader;
