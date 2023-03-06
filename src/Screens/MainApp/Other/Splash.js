import {View, Image, StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';
import {ms} from 'react-native-size-matters';
import {COLORS} from '../../../Utils/Colors';
import { FONTS } from '../../../Utils';
import { LogoTransparent } from '../../../Assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 1500);
  }, []);

  return (
    <View style={styles.Container} >
      <Image style={styles.Image} source={LogoTransparent} />
      <Text style={styles.Font}>Santo Servatius</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: ms(140),
    height: ms(140),
  },
  Font:{
    fontSize:ms(28),
    fontFamily:FONTS.Bold,
    fontWeight:700,
    paddingTop:ms(16),
    letterSpacing:ms(0.3),
    color:COLORS.black
  }
});
