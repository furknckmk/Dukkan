/* eslint-disable prettier/prettier */
import {StyleSheet,Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container:{flex:1,backgroundColor:'#00a4ef'},

  logo:{height: deviceSize.height / 3, width: deviceSize.width * 0.9,resizeMode:'contain',alignItems: 'center',tintColor:'white'},
  logo_container:{flex:1,justifyContent: 'center'},
  body_container:{flex:1},
  errors:{
    fontSize:14,
    color: 'red',
    fontWeight: 'bold',
    marginTop:5,
  },
});
