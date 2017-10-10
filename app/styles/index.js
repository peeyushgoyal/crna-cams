import { Platform, StatusBar, StyleSheet } from 'react-native';

const defaultMarginTop =
  Platform.OS === 'android' ? StatusBar.currentHeight : 20;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6'
  },
  settingsContainer: {
    flex: 1,
    backgroundColor: '#efeff4',
    marginTop: defaultMarginTop
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    marginTop: defaultMarginTop
  },
  buttonStyle: {
    backgroundColor: '#00a546',
    marginTop: 100,
    marginBottom: 100
  },
  buttonTextStyle: {
    color: 'white'
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  outerContainer: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    marginTop: defaultMarginTop,
    borderColor: '#f6f6f6', 
    borderWidth: 1
  },
  innerContainer: {
   flex: 1, 
   flexDirection: 'row'
  },
  labelStyle: {
   flex: 1, 
   fontSize: 14,
   fontWeight: 'bold',
   color: '#34495e'
  },
  multilineContainer: {
   flex: 2,
   marginTop:10
  },
  innerMultilineStyle: {
   flex: 1, 
   fontSize: 14,
   fontWeight: 'bold',
   color: '#34495e',
   borderWidth: 1
  },
  modalDropDown: {
    flex: 1
  },
  buttonContainer: {
   flex: 8,
   marginTop:20,
   alignItems:'center'
  },
  textView: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  }
});