import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import { ms } from 'react-native-size-matters';
import { COLORS,FONTS } from '../../Utils';
import { Apple, Google } from '../../Assets/Icons';
const Button = (props) => {
    const {
        caption, 
        onPress,
        disabled,
        fullColor,
        outlined,
        outlinedColor,
        marginTop =0,
        google,
        apple,
        Styles,
        error
    } = props;

  return (
    <TouchableOpacity 
      style={
        [   
            styles.Container,
                disabled||error ? styles.disabled
                    : fullColor ? styles.fullColor
                        : outlined ? styles.outlined
                            : outlinedColor ? styles.outlinedColor
                                    : styles.fullColor
            ,Styles && Styles,
            {
                marginTop:ms(marginTop),
            }
            
        ]} 
          onPress={onPress} 
          disabled={
            disabled?disabled
              :disabled?disabled
                :false
          }>
          {google&&(
            <Google style={styles.icon}/>
          )}
          {apple&&(
            <Apple style={styles.icon}/>
          )}
      <Text 
      style={
        [
            styles.Text,
                disabled||error ? styles.textDisabled
                    : fullColor ? styles.TextFullColor
                        : outlined ? styles.TextOutlined
                            : outlinedColor ? styles.TextOutlinedColor
                                    : styles.TextFullColor
        ]}>
        {caption}
      </Text>
    </TouchableOpacity>
  );
};

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  Container: {
    width: window.width * 0.85,
    height: ms(40),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: ms(14),
    borderWidth:ms(1),
    flexDirection:'row'
  },
  fullColor:{
    backgroundColor: COLORS.orange,
    borderColor:COLORS.orange
  },
  outlined:{
    backgroundColor: COLORS.white,
    borderColor:COLORS.grey
  },
  outlinedColor:{
    backgroundColor: COLORS.white,
    borderColor:COLORS.orange
  },
  disabled:{
    backgroundColor:COLORS.disabled,
    borderWidth :0
  },
  Text: {
    fontFamily: FONTS.Bold,
    fontSize: ms(16),
    color: COLORS.superWhite,
  },
  TextFullColor:{
    color: COLORS.superWhite,
  },
  TextOutlined:{
    color: COLORS.fontGrey
  },
  TextOutlinedColor:{
    color: COLORS.orange
  },
  textDisabled:{
    color: COLORS.fontDisabled
  },
  icon:{
    marginRight:ms(10)
  },
});

export default Button;
