import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage';

const Home = ({navigation}) => {
  const handleLogout = async (screen) => {
    try {
      await AsyncStorage.removeItem('isLogin');
      console.log('hapus');
    } catch(e) {
      // read error
    }    
    navigation.navigate(screen);
  }
  
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => handleLogout('Login')}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
