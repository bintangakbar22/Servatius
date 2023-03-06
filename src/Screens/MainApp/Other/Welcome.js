import {View, Image, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import {COLORS} from '../../../Utils/Colors';
import { FONTS } from '../../../Utils';
import { Book } from '../../../Assets';
import { Button, Header } from '../../../Components';

const Welcome = ({navigation}) => {

  const goRegister = () => {
    navigation.navigate("Register")
  }

  const goLogin = () => {
    navigation.navigate("Login")
  }

  return (
    <View style={styles.Container}>
      <Header withLogo caption={'Santo Servatius'}/>
      <Image style={styles.Image} source={Book} />
      <View style={styles.WelcomeContainer}>
        <Text style={styles.Font} >Selamat Datang di</Text>
        <Text style={styles.Font} >Aplikasi Santo Servatius</Text>
        <Button fullColor caption={'Daftar Akun Baru'} marginTop={38} onPress={goRegister}/>
        <View style={{flexDirection:'row',paddingTop:ms(18)}}>
          <Text style={styles.Font2}>Sudah ada akun? </Text>
          <TouchableOpacity onPress={goLogin}>
            <Text style={styles.Font3}>Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
const window = Dimensions.get('window');
const styles = StyleSheet.create({
  WelcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:ms(10)
  },
  Container:{
    flex:1,
    backgroundColor: COLORS.superWhite
  },
  Image: {
    width: window.width,
    height:ms(459)
  },
  Font:{
    fontSize:ms(18),
    fontFamily:FONTS.Bold,
    fontWeight:700,
    letterSpacing:ms(0.3),
    color:COLORS.black,
    textAlign:'center',
    paddingHorizontal:ms(10)
  },
  Font3:{
    fontFamily:FONTS.Bold,
    fontWeight:400,
    textAlign:'center',
    color:COLORS.orange,
    fontSize:ms(16)
  },
  Font2:{
    fontFamily:FONTS.Regular,
    fontWeight:400,
    textAlign:'center',
    color:COLORS.grey,
    fontSize:ms(16)
  }
});
