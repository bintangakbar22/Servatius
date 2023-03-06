import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Button, Header, Input } from '../../Components'
import { COLORS, FONTS } from '../../Utils'
import { ms } from 'react-native-size-matters'
import {Formik} from 'formik';
import { dataValidation } from '../../Utils'

const Register = () => {
  return (
  <Formik
    initialValues={
      {
        email: '',
      }
    }
    validationSchema={dataValidation}
    onSubmit={values =>  goRegister(values)}>
    {({handleChange, handleBlur, handleSubmit, values, errors}) => (
    <View style={styles.Container}>
      <Header withBack  caption={'Daftar Akun Baru'}/>
      <View style={{marginHorizontal:ms(26),marginTop:ms(16)}}>
        <Text style={styles.Font}>Silahkan daftar untuk melanjutkan</Text>
        <Button google outlined marginTop={ms(16)} caption={'Daftar Lewat Akun Google'}/>
        <Button apple outlined marginTop={ms(16)} caption={'Daftar Lewat Akun Apple'}/>
        <View style={styles.lineContainer}>
          <View style={styles.line}/>
          <Text style={styles.fontLine}>Atau</Text>
          <View style={styles.line}/>
        </View>
        <Text style={styles.fontEmail}>Email / No. Handphone</Text>
      </View>
      <Input
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        placeholder={'Email / No. Handphone'}
        error={errors.email}
      />
      {errors.email||values.email=='' ? 
      <Button caption={'Selanjutnya'} Styles={styles.bottom} disabled />
      :
      <Button caption={'Selanjutnya'} Styles={styles.bottom} onPress={handleSubmit} />
      }
    </View>
    )}
    </Formik>
  )
}

export default Register
const window = Dimensions.get('window');

const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor: COLORS.superWhite
  },
  Font:{
    fontSize:ms(16),
    fontFamily:FONTS.SSPRRegular,
    color:COLORS.black,
    lineHeight:ms(20),
  },
  fontLine:{
    fontSize:ms(17),
    fontFamily:FONTS.Regular,
    color:COLORS.fontGrey,
    alignSelf:'center',
    paddingTop:ms(22),
    marginHorizontal:ms(16)
  },
  fontEmail:{
    fontSize:ms(15),
    fontFamily:FONTS.Bold,
    color:COLORS.fontGrey,
    paddingTop:ms(20),
    fontWeight:600
  },
  line:{
    borderWidth:ms(0.7),
    borderColor:COLORS.fontGrey,
    width:window.width*0.34,
    borderStyle:'solid',
    marginTop:ms(25)
  },
  lineContainer :{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  bottom:{
    position: 'absolute',
    bottom:ms(18)
  }
})