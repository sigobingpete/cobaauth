import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      async function isLogin() {
        try {
          const value = await AsyncStorage.getItem('isLogin')
          if(value){
            navigation.navigate('Home');
          }else{
            navigation.replace('Login')
          }
        } catch(e) {
          console.warn(e)
        }      
      }
      isLogin();
    }, 3200)
  });

  const setas = async () => {
      try {
        await AsyncStorage.setItem('@MyApp_key', 'my secret value')
      } catch(e) {
        // save error
      }
    
      console.log('Done.')
    }

  const getas = async () => {
    try {
      const value = await AsyncStorage.getItem('@MyApp_key')
      console.log(value);
    } catch(e) {
      // read error
    }
  
    console.log('Doness.')
  }

  const clearas = async () => {
    try {
      await AsyncStorage.removeItem('@MyApp_key');
      console.log('hapus');
    } catch(e) {
      // read error
    }
  
    console.log('Doness hapus.')
  }

  return (
    <View>
      <Text>Splash</Text>
      <TouchableOpacity onPress={() => setas()}>
        <Text>set async</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => getas()}>
        <Text>get async</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clearas()}>
        <Text>clear async</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Splash
