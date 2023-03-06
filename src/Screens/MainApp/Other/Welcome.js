import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {ms} from 'react-native-size-matters';
import {COLORS} from '../../../Utils/Colors';
import { FONTS } from '../../../Utils';
import { Book, LogoTransparent, RandomImage8 } from '../../../Assets';
import { Button, TopBar } from '../../../Components';

const Welcome = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      ///navigation.replace('MainApp');
    }, 1500);
  }, []);

  return (
    <View>
      <TopBar/>
      <Image style={styles.Image} source={Book} />
      <View style={styles.Container}>
        <Text style={styles.Font} >Selamat Datang di</Text>
        <Text style={styles.Font} >Aplikasi Santo Servatius</Text>
        <Button fullColor caption={'Daftar Akun Baru'} marginTop={38} />
      </View>
    </View>
  );
};

export default Welcome;
const window = Dimensions.get('window');
const styles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:ms(30),
  },
  Image: {
    width: window.width,
    borderBottomLeftRadius:ms(50),
    borderBottomRightRadius:ms(50)
  
  },
  Font:{
    fontSize:ms(18),
    fontFamily:FONTS.Bold,
    fontWeight:700,
    letterSpacing:ms(0.3),
    color:COLORS.black,
    textAlign:'center',
    paddingHorizontal:ms(10)
  }
});
