import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, FONTS } from '../../Utils';

const Input = ({
  icon,
  placeholder,
  onChangeText,
  value,
  error,
  secureTextEntry,
  screen,
  onPress,
  numeric,
  isPassword,
  Checkout
}) => {
  const [isSecureText, setIsSecureText] = useState(secureTextEntry);
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={[styles.Container]}>
      <View
        style={{
          ...styles.Content,
          borderColor: isActive ? COLORS.black : COLORS.grey,
        }}>
        {numeric ?  
          <TextInput
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          style={[styles.Input]}
          keyboardType='numeric'
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={isSecureText}
          placeholderTextColor={COLORS.grey}
          maxLength={10}
          variant="outlined" label="Label"
        />
        :
          <TextInput
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          style={[styles.Input]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={isSecureText}
          placeholderTextColor={COLORS.grey}
        />
        }
        {
          isPassword  && (
            <TouchableOpacity
              onPress={() => {
                setIsSecureText(val => !val);
              }}>
              <Icon
                name={isSecureText ? 'eye-outline' : 'eye-off-outline'}
                size={ms(20)}
                color={COLORS.black}
              />
            </TouchableOpacity>
          )}
        {placeholder == 'Search' && (
          <TouchableOpacity onPress={onPress}>
            <Icon name={'store-search'} size={ms(30)} color={COLORS.dark} />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.Text}>{error}</Text>
    </View>
  );
};

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    marginTop:ms(6)
  },
  Content: {
    backgroundColor: COLORS.superWhite,
    width: window.width * 0.85,
    height: ms(41),
    flexDirection: 'row',
    borderWidth: ms(1),
    borderRadius: ms(14),
    paddingHorizontal: ms(15),
    borderColor:COLORS.fontGrey,
    borderStyle:'solid'
  },
  Input: {
    fontFamily: FONTS.Regular,
    fontSize: ms(14),
    color: COLORS.placeHolder,
    width: window.width * 0.75,
  },
  Text: {
    fontFamily: FONTS.Regular,
    fontSize: ms(10),
    color: 'red',
    marginVertical: ms(3),
    width: window.width * 0.80,
  },
});

export default Input;
