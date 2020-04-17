import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({navigation}) => {      
  useEffect(() => {
    // async function isLogin() {
    //   console.log('kena useefect');
    //   try {
    //     const value = await AsyncStorage.getItem('isLogin')
    //     if(value){
    //       console.log('kena a');
    //       navigation.navigate('Home');
    //     }
    //   } catch(e) {
    //     console.log('kena b');
    //     console.warn(e)
    //   }      
    // }
    // isLogin();
  });

  const handleHome = async (screen) => {
    try {
      await AsyncStorage.setItem('isLogin', 'Ya')
      navigation.navigate(screen);
    } catch(e) {
      console.warn(e)
    }
  }

  const getas = async () => {
    try {
      const value = await AsyncStorage.getItem('isLogin')
      console.log(value);
    } catch(e) {
      // read error
    }
  
    console.log('getas.')
  }

  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => handleHome('Home')}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => getas()}>
        <Text>get async</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
