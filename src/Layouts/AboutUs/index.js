import React from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  Image,
  Input,
  Text,
  TextArea,
  useColorMode,
  useToast,
} from 'native-base';

import Lottie from 'lottie-react-native';
import {ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const CustomBox = ({iconName, colorIcon, colorBox}) => {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <TouchableOpacity style={{width: '27%'}}>
      <Box
        alignItems="center"
        borderRadius={10}
        justifyContent="center"
        mt={3}
        w="100%"
        height="100"
        bg={colorMode === 'light' ? 'white' : 'gray.300'}>
        <Box
          alignItems="center"
          justifyContent="center"
          bg={colorBox}
          w={50}
          h={50}
          borderRadius={100}>
          <MaterialIcon name={iconName} color={colorIcon} size={27} />
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

const AboutUs = ({navigation}) => {
  const toast = useToast();
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <ScrollView>
      <Box
        flex={1}
        alignItems="center"
        p={2}
        _light={{bg: '#F0F4F4'}}
        _dark={{bg: '#1B262C'}}>
        <Box w="100%">
          <Image
            style={{width: '100%', height: 200}}
            source={require('../../../assets/images/imgAboutUs.jpg')}
            alt="about us image"
          />
        </Box>
        <Box w="100%" mt={4}>
          <Text fontSize={22} fontWeight="bold">
            اطلاعات تماس
          </Text>
          <Box
            p={2}
            flexDir="row"
            justifyContent="space-between"
            alignItems="center">
            <Text fontSize={14}>تلفن تماس</Text>
            <Text fontSize={14}>09909412001</Text>
          </Box>
          <Divider />
          <Box
            p={2}
            flexDir="row"
            justifyContent="space-between"
            alignItems="center">
            <Text fontSize={14}>آدرس ایمیل</Text>
            <Text fontSize={14}>rdalvand@yahoo.com</Text>
          </Box>
          <Divider />
          <Box
            p={2}
            flexDir="row"
            justifyContent="space-between"
            alignItems="center">
            <Text fontSize={14}>استان</Text>
            <Text fontSize={14}>لرستان</Text>
          </Box>
          <Divider />
          <Box
            p={2}
            flexDir="row"
            justifyContent="space-between"
            alignItems="center">
            <Text fontSize={14}>شهرستان</Text>
            <Text fontSize={14}>خرم آباد</Text>
          </Box>
        </Box>

        <Box p={1} mt={2}>
          <Text fontSize={22} fontWeight="bold">
            درباره ما
          </Text>
          <Text>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </Text>
        </Box>
        <Box mt={3}>
          <Text fontSize={22} fontWeight="bold">
            سوابق
          </Text>
          <Text>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
          </Text>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default AboutUs;
