import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { ScreenStack } from 'react-native-screens'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';

type Props = {}

const SignUpScreen = (props: Props) => {
  <>
  <Stack.Screen options={{ headerTitle: 'Sign Up', headerLeft: () => 
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name='close' size={24} color={Colors.black}/>
    </TouchableOpacity>
  }}/> 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
    </View>
  )
  </>
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    
  }
})