import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', backgroundColor: 'white'},
  lottie: {
    width: '70%',
    marginTop: '8%',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '5%',
    marginBottom: '3%',
  },
  logo: {width: 90, height: 90, borderRadius: 90 / 2},
  btnLogin: {
    marginTop: '10%',
    width: '90%',
    backgroundColor: '#1E232C',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtLogin: {color: 'white', fontWeight: 'bold', fontSize: 14},
  txtRegister: {fontWeight: 'bold', fontSize: 14},
  btnRegister: {
    marginTop: '3%',
    width: '90%',
    borderWidth: 1,
    borderColor: '#1E232C',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtGuest: {
    color: 'blue',
    marginTop: '8%',
  },
});
export default styles;
