import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { Colors } from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import Google from '@/assets/images/google-logo.svg';

type Props = {}

const SignInScreen = (props: Props) => {
  return (
    <View style={styles.container} >
      <TextInput
        autoCapitalize="none"
        placeholder="Email or Phone Number"
        placeholderTextColor={Colors.gray}
        keyboardType="email-address"
        style={[defaultStyles.inputField, { marginTop: 30 }]}
      />

      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        style={[defaultStyles.inputField, { marginTop: 30 }]}
      />

      <TouchableOpacity style={[defaultStyles.btn, {marginTop: 30}]} onPress={() =>
        router.push('/(taps)')
      }>
        <Text style={defaultStyles.btnText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.seperatorView}>
        <View
          style={{
            flex: 1,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <Text style={styles.seperator}>or</Text>
        <View
          style={{
            flex: 1,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>

      <View style={{ gap: 20 }}>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name="mail-outline" size={24} style={defaultStyles.btnIcon} />
          <Text style={styles.btnOutlineText}>Continue with Phone</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name="logo-apple" size={24} style={defaultStyles.btnIcon} />
          <Text style={styles.btnOutlineText}>Continue with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline}>
          <Google width={24} height={24}style={defaultStyles.btnIcon} />
          <Text style={styles.btnOutlineText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name="logo-facebook" 
          size={24} 
          color={Colors.blue}
          style={defaultStyles.btnIcon}/>
          <Text style={styles.btnOutlineText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
  seperatorView: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 30,
  },
  seperator: {
    fontFamily: 'mon-sb',
    color: Colors.grey,
    fontSize: 16,
  }
})