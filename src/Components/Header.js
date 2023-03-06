import { StyleSheet, Text, View, NativeModules, Image, StatusBar, Dimensions } from 'react-native'
import React from 'react'
import { COLORS,FONTS } from '../Utils'
import { ms } from 'react-native-size-matters'
import { LogoTransparent } from '../Assets'
import ButtonIcon from './Others/ButtonIcon'
import { useNavigation } from '@react-navigation/native'
const Header = ({withLogo,withBack,onPress,caption,isLoggedIn}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container} >
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      {
        withLogo ? (
          <View style={{flexDirection:'row',justifyContent:'space-between',width:window.width}}>
            <View style={{marginLeft:ms(14),flexDirection:'row'}}>
              <Image style={styles.Image} source={LogoTransparent}/>
              <Text style={styles.Font}>{caption}</Text>
            </View>
            {isLoggedIn &&(
              <View style={{flexDirection:'row',marginRight:ms(17),alignSelf:'center'}}>
                <ButtonIcon
                  icon="clipboard-text-clock-outline"
                  onPress={() => navigation.goBack()}
                  color={COLORS.black}
                  size={ms(24)}
                />
                <ButtonIcon
                  icon="account-outline"
                  onPress={() => navigation.goBack()}
                  color={COLORS.black}
                  size={ms(24)} 
                />
              </View>
            )}
          </View>
        
        ) : withBack ? 
            (
            <View style={{marginLeft:ms(14),flexDirection:'row'}}>
              <ButtonIcon
                icon="chevron-left"
                onPress={() => navigation.goBack()}
                color={COLORS.black}
              />
              <Text style={[styles.Font,{paddingLeft:ms(15)}]}>{caption}</Text>
            </View>
            ) : (
                <React.Fragment>
                  <Text style={styles.Font}>{caption}</Text>
                </React.Fragment>
                )
      }
    </View>
  )
}

export default Header;

const window = Dimensions.get('window');
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
    marginRight:ms(12)
  },
  Font:{
    fontSize:ms(18),
    fontFamily:FONTS.Bold,
    fontWeight:700,
    color:COLORS.black,
    lineHeight:ms(20),
    alignSelf:'center'
  }
});