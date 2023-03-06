import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
} from '../Screens';
import MainApp from './MainApp';
import { useSelector } from 'react-redux';
import Welcome from '../Screens/MainApp/Other/Welcome';

const Router = () => {
  const Stack = createStackNavigator();
  
  const loginUser = useSelector(state => state.appData.loginUser);

  const handleNotLogin = ({navigation}) => ({
    tabPress: e => {
      if (!loginUser) {
        e.preventDefault();
        navigation.navigate('Auth');
        Toast.show({
            type: 'error',
            text1: 'Please Login Or Register!',
        })
      }
    },
  });

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash}/>
      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen 
        name="MainApp" 
        component={MainApp} 
        listeners={handleNotLogin}
        options={{
          presentation: 'modal',
          animationTypeForReplace: 'push'
        }} />
    </Stack.Navigator>
  );
};

export default Router;
