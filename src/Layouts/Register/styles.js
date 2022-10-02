import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerWlcTxt: {textAlign: 'left', width: '90%'},
  wlcTxt: {
    fontFamily: 'vazir',
    fontSize: 30,
    fontWeight: 'bold',
  },
  lottie: {
    width: '80%',
    marginTop: '2%',
  },
  containerInputs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
  },
  txtForgetPass: {
    color: 'blue',
    textAlign: 'left',
  },
  txtLogin: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  btnHaventAccount: {
    marginTop: '10%',
  },
  txtHaventAccount: {
    color: 'blue',
    marginBottom: 10,
  },
});

export default styles;
