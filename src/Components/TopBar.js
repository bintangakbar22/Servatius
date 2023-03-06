import { StyleSheet, Text, View, NativeModules, Image, StatusBar } from 'react-native'
import React from 'react'
import { COLORS,FONTS } from '../Utils'
import { ms } from 'react-native-size-matters'
import { LogoTransparent } from '../Assets'
const TopBar = () => {
  return (
    <View style={styles.Container} >
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Image style={styles.Image} source={LogoTransparent} />
      <Text style={styles.Font}>Santo Servatius</Text>
    </View>
  )
}

export default TopBar

const {StatusBarManager} = NativeModules;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.superWhite,
    flexDirection:'row',
    paddingTop: StatusBarManager.HEIGHT,
    alignItems:'center',
    paddingBottom:ms(9)
  },
  Image: {
    width: ms(35),
    height: ms(35),
    marginLeft:ms(14),
    marginRight:ms(9)
  },
  Font:{
    fontSize:ms(18),
    fontFamily:FONTS.Bold,
    fontWeight:700,
    color:COLORS.black,
    lineHeight:ms(20)
  }
});